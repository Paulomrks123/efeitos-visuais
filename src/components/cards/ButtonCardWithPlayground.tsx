import { useState } from "react";
import { Copy, Check, Sliders, Play, Pause, Lightbulb, RefreshCw } from "lucide-react";
import { ButtonAnimation, getButtonUseCase } from "@/data/buttons";
import { FavoriteButton } from "@/components/features/FavoriteButton";
import { AnimationPlayground } from "@/components/playground/AnimationPlayground";
import { RealisticButtonCard } from "@/components/effects/ui-templates/RealisticButtonCard";

interface ButtonCardProps {
  button: ButtonAnimation;
  isCompact?: boolean;
  index?: number;
}

const categoryColors = {
  scale: "border-neon-cyan/30 hover:border-neon-cyan/60",
  pulse: "border-neon-magenta/30 hover:border-neon-magenta/60",
  glow: "border-yellow-500/30 hover:border-yellow-500/60",
  fill: "border-blue-500/30 hover:border-blue-500/60",
  "3d": "border-purple-500/30 hover:border-purple-500/60",
  icon: "border-emerald-500/30 hover:border-emerald-500/60",
};

const categoryBadgeColors = {
  scale: "bg-neon-cyan/20 text-neon-cyan",
  pulse: "bg-neon-magenta/20 text-neon-magenta",
  glow: "bg-yellow-500/20 text-yellow-400",
  fill: "bg-blue-500/20 text-blue-400",
  "3d": "bg-purple-500/20 text-purple-400",
  icon: "bg-emerald-500/20 text-emerald-400",
};

export function ButtonCardWithPlayground({ button, isCompact = false, index }: ButtonCardProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [copiedHTML, setCopiedHTML] = useState(false);
  const [activeTab, setActiveTab] = useState<"css" | "html">("css");
  const [showPlayground, setShowPlayground] = useState(false);

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

  const previewColor = button.previewColor || "#00FFFF";
  const [replayKey, setReplayKey] = useState(0);

  const handleReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setReplayKey(prev => prev + 1);
  };

  // Adapter for playground
  const playgroundItem = {
    ...button,
    htmlExample: button.htmlCode,
  };

  if (isCompact) {
    return (
      <>
        <div 
          className={`glass-card p-4 border-2 transition-all duration-300 group cursor-pointer ${categoryColors[button.category]}`}
          onClick={() => setShowPlayground(true)}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              {index && (
                <span className="text-xs font-bold text-neon-cyan bg-neon-cyan/20 px-2 py-0.5 rounded">
                  #{index}
                </span>
              )}
              <span className="text-xs font-mono text-muted-foreground">{button.id}</span>
            </div>
            <div className="flex gap-1">
              <FavoriteButton id={button.id} type="button" size="sm" />
              <button
                onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}
                className="p-1.5 rounded-lg bg-muted/50 hover:bg-muted transition-colors opacity-0 group-hover:opacity-100"
              >
                {isPlaying ? <Pause size={12} /> : <Play size={12} />}
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setShowPlayground(true); }}
                className="p-1.5 rounded-lg bg-neon-cyan/20 hover:bg-neon-cyan/40 text-neon-cyan transition-colors opacity-0 group-hover:opacity-100"
              >
                <Sliders size={12} />
              </button>
            </div>
          </div>
          <div key={replayKey} className="bg-gradient-to-br from-background/80 to-muted/30 rounded-lg mb-2 flex items-center justify-center min-h-[100px] border border-border/50 overflow-hidden">
            <RealisticButtonCard button={button} isPlaying={isPlaying} />
          </div>
          <h3 className="text-sm font-medium text-foreground truncate">{button.name}</h3>
          <button
            onClick={(e) => { e.stopPropagation(); copyToClipboard(button.cssCode, "css"); }}
            className="mt-2 w-full flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors py-1.5 rounded-lg bg-muted/50"
          >
            {copiedCSS ? <Check size={12} className="text-neon-green" /> : <Copy size={12} />}
            {copiedCSS ? "Copiado!" : "Copiar CSS"}
          </button>
        </div>

        <AnimationPlayground
          isOpen={showPlayground}
          onClose={() => setShowPlayground(false)}
          item={playgroundItem}
          type="button"
        />
      </>
    );
  }

  return (
    <>
      <div className={`glass-card p-6 border-2 transition-all duration-300 ${categoryColors[button.category]}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {index && (
                <span className="text-sm font-bold text-neon-cyan bg-neon-cyan/20 px-2.5 py-0.5 rounded">
                  #{index}
                </span>
              )}
              <span className="text-xs font-mono text-muted-foreground">{button.id}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${categoryBadgeColors[button.category]}`}>
                {button.category}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-foreground">{button.name}</h3>
          </div>
          <div className="flex items-center gap-2">
            <FavoriteButton id={button.id} type="button" />
            <button
              onClick={() => setShowPlayground(true)}
              className="p-2 rounded-lg bg-neon-cyan/20 hover:bg-neon-cyan/40 text-neon-cyan transition-colors"
              title="Abrir Playground"
            >
              <Sliders size={16} />
            </button>
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
        <p className="text-sm text-muted-foreground mb-2">{button.description}</p>
        
        {/* Use Case Example */}
        <div className="flex items-start gap-2 p-2.5 mb-4 rounded-lg bg-neon-cyan/5 border border-neon-cyan/20">
          <Lightbulb size={14} className="text-neon-cyan shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-medium text-neon-cyan">Uso: </span>
            {getButtonUseCase(button)}
          </p>
        </div>

        {/* Preview */}
        <div 
          key={replayKey}
          className="bg-gradient-to-br from-background/80 to-muted/30 rounded-lg mb-4 flex items-center justify-center min-h-[140px] border border-border/50 cursor-pointer hover:border-neon-cyan/50 transition-colors overflow-hidden"
          onClick={() => setShowPlayground(true)}
        >
          <RealisticButtonCard button={button} isPlaying={isPlaying} />
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
                {activeTab === "css" ? button.cssCode : button.htmlCode}
              </code>
            </pre>
            <button
              onClick={() => copyToClipboard(
                activeTab === "css" ? button.cssCode : button.htmlCode,
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

      <AnimationPlayground
        isOpen={showPlayground}
        onClose={() => setShowPlayground(false)}
        item={playgroundItem}
        type="button"
      />
    </>
  );
}
