import { useState, useRef, useEffect } from "react";
import { Search, X, Command } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  resultCount?: number;
  totalCount?: number;
  showShortcut?: boolean;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Buscar animações, efeitos, botões...",
  resultCount,
  totalCount,
  showShortcut = true,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  // Keyboard shortcut: "/" to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !isFocused) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape" && isFocused) {
        inputRef.current?.blur();
        if (value) onChange("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isFocused, value, onChange]);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div
        className={`
          relative flex items-center gap-2 
          bg-card/80 backdrop-blur-xl border-2 rounded-2xl
          transition-all duration-300
          ${isFocused 
            ? "border-primary shadow-lg shadow-primary/10" 
            : "border-border hover:border-primary/30"
          }
        `}
      >
        <Search 
          className={`absolute left-4 w-5 h-5 transition-colors ${
            isFocused ? "text-primary" : "text-muted-foreground"
          }`} 
        />
        
        <Input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full pl-12 pr-24 py-6 bg-transparent border-0 focus-visible:ring-0 text-base"
        />

        {/* Clear button */}
        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-14 p-1.5 rounded-lg hover:bg-muted transition-colors"
            title="Limpar busca"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        )}

        {/* Keyboard shortcut hint */}
        {showShortcut && !value && (
          <div className="absolute right-4 flex items-center gap-1 text-muted-foreground">
            <kbd className="px-2 py-1 text-xs bg-muted rounded-md border border-border font-mono">
              /
            </kbd>
          </div>
        )}
      </div>

      {/* Results count */}
      {value && resultCount !== undefined && totalCount !== undefined && (
        <div className="mt-2 text-center text-sm text-muted-foreground">
          <span className="text-primary font-semibold">{resultCount}</span>
          {" de "}
          <span>{totalCount}</span>
          {" resultados"}
        </div>
      )}
    </div>
  );
}
