import { useState } from "react";
import { Copy, Check, Play, Pause } from "lucide-react";
import { ButtonAnimation } from "@/data/buttons";

interface ButtonCardProps {
  button: ButtonAnimation;
}

const ButtonCard = ({ button }: ButtonCardProps) => {
  const [copied, setCopied] = useState<"css" | "html" | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const copyToClipboard = async (text: string, type: "css" | "html") => {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "scale":
        return "from-neon-cyan to-neon-green";
      case "pulse":
        return "from-neon-magenta to-neon-orange";
      default:
        return "from-primary to-secondary";
    }
  };

  // Extract keyframes from CSS code and create inline style
  const getInlineKeyframes = () => {
    const keyframesMatch = button.cssCode.match(/@keyframes\s+(\w+)\s*\{([^}]+\{[^}]+\})+\s*\}/);
    if (keyframesMatch) {
      return keyframesMatch[0];
    }
    return "";
  };

  const getAnimationName = () => {
    const match = button.cssCode.match(/@keyframes\s+(\w+)/);
    return match ? match[1] : "";
  };

  const getPreviewStyle = (): React.CSSProperties => {
    const animName = getAnimationName();
    if (!animName) return {};
    
    return {
      animation: `${animName} ${button.duration} ${button.category === "pulse" ? "infinite" : "infinite"} ease-in-out`
    };
  };

  return (
    <div className="glass-card p-5 group hover:border-primary/30 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-mono px-2 py-0.5 rounded-full bg-gradient-to-r ${getCategoryColor(button.category)} text-background`}>
              {button.id}
            </span>
            <span className="text-xs text-muted-foreground font-mono">
              {button.duration}
            </span>
          </div>
          <h3 className="font-semibold text-foreground">{button.name}</h3>
          <p className="text-sm text-muted-foreground">{button.description}</p>
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
          title={isPlaying ? "Pausar" : "Reproduzir"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-muted-foreground" />
          ) : (
            <Play className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      </div>

      {/* Preview */}
      <div className="relative h-28 rounded-lg bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center mb-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.03),transparent_70%)]" />
        
        <style>{getInlineKeyframes()}</style>
        
        <button
          className={`px-6 py-3 rounded-lg font-semibold text-sm bg-gradient-to-r ${getCategoryColor(button.category)} text-background border-2 border-white/20`}
          style={isPlaying ? getPreviewStyle() : {}}
        >
          {button.category === "scale" ? "Hover Me" : "Clique"}
        </button>
        
        {/* Intensity badge */}
        <span className="absolute top-2 right-2 text-xs font-mono text-muted-foreground bg-background/50 px-2 py-0.5 rounded">
          {button.intensity}
        </span>
      </div>

      {/* Code Sections */}
      <div className="space-y-3">
        {/* CSS Code */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-mono text-muted-foreground">CSS</span>
            <button
              onClick={() => copyToClipboard(button.cssCode, "css")}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {copied === "css" ? (
                <>
                  <Check className="w-3 h-3" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>
          <pre className="text-xs bg-muted/30 p-3 rounded-lg overflow-x-auto font-mono text-muted-foreground max-h-32 overflow-y-auto">
            {button.cssCode}
          </pre>
        </div>

        {/* HTML Code */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-mono text-muted-foreground">HTML/JSX</span>
            <button
              onClick={() => copyToClipboard(button.htmlCode, "html")}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {copied === "html" ? (
                <>
                  <Check className="w-3 h-3" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>
          <pre className="text-xs bg-muted/30 p-3 rounded-lg overflow-x-auto font-mono text-muted-foreground">
            {button.htmlCode}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ButtonCard;
