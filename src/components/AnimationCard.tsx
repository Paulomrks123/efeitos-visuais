import { useState } from "react";
import { Copy, Check, Play, Pause } from "lucide-react";
import { Animation } from "@/data/animations";
import { FavoriteButton } from "@/components/features/FavoriteButton";

interface AnimationCardProps {
  animation: Animation;
  isCompact?: boolean;
}

const categoryColors = {
  futuristic: "border-neon-cyan/30 hover:border-neon-cyan/60",
  modern: "border-neon-green/30 hover:border-neon-green/60",
  stylish: "border-neon-purple/30 hover:border-neon-purple/60",
  vibrant: "border-neon-magenta/30 hover:border-neon-magenta/60",
};

const categoryBadgeColors = {
  futuristic: "bg-neon-cyan/20 text-neon-cyan",
  modern: "bg-neon-green/20 text-neon-green",
  stylish: "bg-neon-purple/20 text-neon-purple",
  vibrant: "bg-neon-magenta/20 text-neon-magenta",
};

export function AnimationCard({ animation, isCompact = false }: AnimationCardProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [copiedHTML, setCopiedHTML] = useState(false);
  const [activeTab, setActiveTab] = useState<"css" | "html">("css");

  const copyToClipboard = async (text: string, type: "css" | "html") => {
    await navigator.clipboard.writeText(text);
    if (type === "css") {
      setCopiedCSS(true);
      setTimeout(() => setCopiedCSS(false), 2000);
    } else {
      setCopiedHTML(true);
      setTimeout(() => setCopiedHTML(false), 2000);
    }
  };

  const renderPreview = () => {
    const baseClasses = isPlaying ? animation.animationClass : "";
    return (
      <div className={`${baseClasses} w-16 h-16 bg-primary rounded-lg`} />
    );
  };

  // Compact view for grid compact mode
  if (isCompact) {
    return (
      <div className={`glass-card p-4 border-2 transition-all duration-300 group ${categoryColors[animation.category]}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-muted-foreground">{animation.id}</span>
          <div className="flex gap-1">
            <FavoriteButton id={animation.id} type="animation" size="sm" />
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-lg bg-muted/50 hover:bg-muted transition-colors opacity-0 group-hover:opacity-100"
            >
              {isPlaying ? <Pause size={12} /> : <Play size={12} />}
            </button>
          </div>
        </div>
        <div className="bg-background/50 rounded-lg p-4 mb-2 flex items-center justify-center min-h-[80px] border border-border/50">
          {renderPreview()}
        </div>
        <h3 className="text-sm font-medium text-foreground truncate">{animation.name}</h3>
        <button
          onClick={() => copyToClipboard(animation.cssCode, "css")}
          className="mt-2 w-full flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors py-1.5 rounded-lg bg-muted/50"
        >
          {copiedCSS ? <Check size={12} className="text-neon-green" /> : <Copy size={12} />}
          {copiedCSS ? "Copiado!" : "Copiar CSS"}
        </button>
      </div>
    );
  }

  return (
    <div 
      className={`glass-card p-6 border-2 transition-all duration-300 ${categoryColors[animation.category]}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-muted-foreground">{animation.id}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${categoryBadgeColors[animation.category]}`}>
              {animation.category}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-foreground">{animation.name}</h3>
        </div>
        <div className="flex items-center gap-2">
          <FavoriteButton id={animation.id} type="animation" />
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            title={isPlaying ? "Pausar" : "Reproduzir"}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4">{animation.description}</p>

      {/* Preview */}
      <div className="bg-background/50 rounded-lg p-6 mb-4 flex items-center justify-center min-h-[120px] border border-border/50">
        {renderPreview()}
      </div>

      {/* Code Tabs */}
      <div className="space-y-3">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("css")}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === "css" 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            CSS
          </button>
          <button
            onClick={() => setActiveTab("html")}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === "html" 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            React/HTML
          </button>
        </div>

        <div className="relative">
          <pre className="bg-background/80 rounded-lg p-4 text-xs overflow-x-auto border border-border/50 max-h-48 font-mono">
            <code className="text-muted-foreground">
              {activeTab === "css" ? animation.cssCode : animation.htmlExample}
            </code>
          </pre>
          <button
            onClick={() => copyToClipboard(
              activeTab === "css" ? animation.cssCode : animation.htmlExample,
              activeTab
            )}
            className="absolute top-2 right-2 p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
            title="Copiar código"
          >
            {(activeTab === "css" ? copiedCSS : copiedHTML) ? (
              <Check size={14} className="text-neon-green" />
            ) : (
              <Copy size={14} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
