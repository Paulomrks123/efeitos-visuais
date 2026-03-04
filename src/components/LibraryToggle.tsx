import { Sparkles, Layers, MousePointerClick } from "lucide-react";

interface LibraryToggleProps {
  activeLibrary: "animations" | "effects" | "buttons";
  onToggle: (library: "animations" | "effects" | "buttons") => void;
}

export function LibraryToggle({ activeLibrary, onToggle }: LibraryToggleProps) {
  return (
    <div className="flex justify-center mb-8 px-2">
      <div className="inline-flex flex-wrap justify-center bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-1 sm:p-1.5 gap-1 w-full max-w-lg sm:max-w-none sm:w-auto">
        <button
          onClick={() => onToggle("animations")}
          className={`
            flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm flex-1 sm:flex-initial min-w-0
            transition-all duration-300
            ${activeLibrary === "animations" 
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
              : "text-muted-foreground hover:text-foreground"
            }
          `}
        >
          <Sparkles size={16} />
          <span className="truncate">Animações</span>
          <span className={`px-2 py-0.5 rounded-full text-xs ${
            activeLibrary === "animations" 
              ? "bg-primary-foreground/20" 
              : "bg-muted"
          }`}>
            80
          </span>
        </button>
        
        <button
          onClick={() => onToggle("effects")}
          className={`
            flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm flex-1 sm:flex-initial min-w-0
            transition-all duration-300
            ${activeLibrary === "effects" 
              ? "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/25" 
              : "text-muted-foreground hover:text-foreground"
            }
          `}
        >
          <Layers size={16} />
          <span className="truncate">Efeitos</span>
          <span className={`px-2 py-0.5 rounded-full text-xs ${
            activeLibrary === "effects" 
              ? "bg-secondary-foreground/20" 
              : "bg-muted"
          }`}>
            80
          </span>
        </button>

        <button
          onClick={() => onToggle("buttons")}
          className={`
            flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm flex-1 sm:flex-initial min-w-0
            transition-all duration-300
            ${activeLibrary === "buttons" 
              ? "bg-gradient-to-r from-neon-cyan to-neon-green text-background shadow-lg shadow-neon-cyan/25" 
              : "text-muted-foreground hover:text-foreground"
            }
          `}
        >
          <MousePointerClick size={16} />
          <span className="truncate">Botões</span>
          <span className={`px-2 py-0.5 rounded-full text-xs ${
            activeLibrary === "buttons" 
              ? "bg-background/20" 
              : "bg-muted"
          }`}>
            60
          </span>
        </button>
      </div>
    </div>
  );
}
