import { useState } from "react";
import { Copy, Check, Play, Pause, ChevronDown } from "lucide-react";
import { ButtonAnimation } from "@/data/buttons";
import { FavoriteButton } from "@/components/features/FavoriteButton";
import { motion, AnimatePresence } from "framer-motion";

interface ButtonCardProps {
  button: ButtonAnimation;
  isCompact?: boolean;
}

const ButtonCard = ({ button, isCompact = false }: ButtonCardProps) => {
  const [copied, setCopied] = useState<"css" | "html" | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showCode, setShowCode] = useState(false);

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
      case "glow":
        return "from-yellow-400 to-orange-500";
      case "fill":
        return "from-blue-500 to-indigo-600";
      case "3d":
        return "from-purple-500 to-pink-500";
      case "icon":
        return "from-emerald-500 to-teal-500";
      default:
        return "from-primary to-secondary";
    }
  };

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
      animation: `${animName} ${button.duration} infinite ease-in-out`
    };
  };

  // Compact view for grid compact mode
  if (isCompact) {
    return (
      <div className="glass-card p-4 border-2 border-border/50 hover:border-primary/30 transition-all duration-300 group">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs font-mono px-2 py-0.5 rounded-full bg-gradient-to-r ${getCategoryColor(button.category)} text-background`}>
            {button.id}
          </span>
          <FavoriteButton id={button.id} type="button" size="sm" />
        </div>
        
        <div className="relative h-16 rounded-lg bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center mb-2 overflow-hidden">
          <style>{getInlineKeyframes()}</style>
          <button
            className={`px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r ${getCategoryColor(button.category)} text-background`}
            style={isPlaying ? getPreviewStyle() : {}}
          >
            Demo
          </button>
        </div>
        
        <h3 className="text-sm font-medium text-foreground truncate">{button.name}</h3>
        <button
          onClick={() => copyToClipboard(button.cssCode, "css")}
          className="mt-2 w-full flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors py-1.5 rounded-lg bg-muted/50"
        >
          {copied === "css" ? <Check size={12} className="text-neon-green" /> : <Copy size={12} />}
          {copied === "css" ? "Copiado!" : "Copiar CSS"}
        </button>
      </div>
    );
  }

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
        <div className="flex items-center gap-2">
          <FavoriteButton id={button.id} type="button" />
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

      {/* Code Toggle Section */}
      <div className="space-y-3">
        <div className="flex gap-2">
          <button
            onClick={() => copyToClipboard(button.cssCode, "css")}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          >
            {copied === "css" ? <Check size={12} className="text-neon-green" /> : <Copy size={12} />}
            {copied === "css" ? "Copiado!" : "Copiar CSS"}
          </button>
          <button
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showCode ? "Ocultar Código" : "Ver Código"}
            <ChevronDown size={12} className={`transition-transform duration-200 ${showCode ? "rotate-180" : ""}`} />
          </button>
        </div>

        <AnimatePresence>
          {showCode && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden space-y-3"
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ButtonCard;
