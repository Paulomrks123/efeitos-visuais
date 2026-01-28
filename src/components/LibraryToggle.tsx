import { Sparkles, Layers, MousePointerClick } from "lucide-react";

interface LibraryToggleProps {
  activeLibrary: "animations" | "effects" | "buttons";
  onToggle: (library: "animations" | "effects" | "buttons") => void;
}

export function LibraryToggle({ activeLibrary, onToggle }: LibraryToggleProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex flex-wrap justify-center bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-1.5 gap-1">
        <button
          onClick={() => onToggle("animations")}
          className={`
            flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm
            transition-all duration-300
            ${activeLibrary === "animations" 
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
              : "text-muted-foreground hover:text-foreground"
            }
          `}
        >
          <Sparkles size={18} />
          <span>Animações</span>
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
            flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm
            transition-all duration-300
            ${activeLibrary === "effects" 
              ? "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/25" 
              : "text-muted-foreground hover:text-foreground"
            }
          `}
        >
          <Layers size={18} />
          <span>Efeitos Visuais</span>
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
            flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm
            transition-all duration-300
            ${activeLibrary === "buttons" 
              ? "bg-gradient-to-r from-neon-cyan to-neon-green text-background shadow-lg shadow-neon-cyan/25" 
              : "text-muted-foreground hover:text-foreground"
            }
          `}
        >
          <MousePointerClick size={18} />
          <span>Botões</span>
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
