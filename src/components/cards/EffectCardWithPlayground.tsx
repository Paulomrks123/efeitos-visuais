import { useState } from "react";
import { Copy, Check, Sliders, Lightbulb } from "lucide-react";
import { Effect, getEffectUseCase } from "@/data/effects";
import { FavoriteButton } from "@/components/features/FavoriteButton";
import { AnimationPlayground } from "@/components/playground/AnimationPlayground";
import { EffectLivePreview } from "@/components/LivePreview";

interface EffectCardProps {
  effect: Effect;
  isCompact?: boolean;
  index?: number;
}

const categoryColors = {
  glassmorphism: "border-neon-cyan/30 hover:border-neon-cyan/60",
  neumorphism: "border-neon-green/30 hover:border-neon-green/60",
  filters: "border-neon-purple/30 hover:border-neon-purple/60",
  gradients: "border-neon-magenta/30 hover:border-neon-magenta/60",
  text: "border-neon-orange/30 hover:border-neon-orange/60",
};

const categoryBadgeColors = {
  glassmorphism: "bg-neon-cyan/20 text-neon-cyan",
  neumorphism: "bg-neon-green/20 text-neon-green",
  filters: "bg-neon-purple/20 text-neon-purple",
  gradients: "bg-neon-magenta/20 text-neon-magenta",
  text: "bg-neon-orange/20 text-neon-orange",
};

export function EffectCardWithPlayground({ effect, isCompact = false, index }: EffectCardProps) {
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

  if (isCompact) {
    return (
      <>
        <div 
          className={`glass-card p-4 border-2 transition-all duration-300 group cursor-pointer ${categoryColors[effect.category]}`}
          onClick={() => setShowPlayground(true)}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              {index && (
                <span className="text-xs font-bold text-secondary bg-secondary/20 px-2 py-0.5 rounded">
                  #{index}
                </span>
              )}
              <span className="text-xs font-mono text-muted-foreground">{effect.id}</span>
            </div>
            <div className="flex gap-1">
              <FavoriteButton id={effect.id} type="effect" size="sm" />
              <button
                onClick={(e) => { e.stopPropagation(); setShowPlayground(true); }}
                className="p-1.5 rounded-lg bg-secondary/20 hover:bg-secondary/40 text-secondary transition-colors opacity-0 group-hover:opacity-100"
              >
                <Sliders size={12} />
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 mb-2 flex items-center justify-center min-h-[80px] border border-border/50 overflow-hidden">
            <EffectLivePreview effect={effect} size="sm" />
          </div>
          <h3 className="text-sm font-medium text-foreground truncate">{effect.name}</h3>
          <button
            onClick={(e) => { e.stopPropagation(); copyToClipboard(effect.cssCode, "css"); }}
            className="mt-2 w-full flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors py-1.5 rounded-lg bg-muted/50"
          >
            {copiedCSS ? <Check size={12} className="text-neon-green" /> : <Copy size={12} />}
            {copiedCSS ? "Copiado!" : "Copiar CSS"}
          </button>
        </div>

        <AnimationPlayground
          isOpen={showPlayground}
          onClose={() => setShowPlayground(false)}
          item={effect}
          type="effect"
        />
      </>
    );
  }

  return (
    <>
      <div className={`glass-card p-6 border-2 transition-all duration-300 ${categoryColors[effect.category]}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {index && (
                <span className="text-sm font-bold text-secondary bg-secondary/20 px-2.5 py-0.5 rounded">
                  #{index}
                </span>
              )}
              <span className="text-xs font-mono text-muted-foreground">{effect.id}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${categoryBadgeColors[effect.category]}`}>
                {effect.category}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-foreground">{effect.name}</h3>
          </div>
          <div className="flex items-center gap-2">
            <FavoriteButton id={effect.id} type="effect" />
            <button
              onClick={() => setShowPlayground(true)}
              className="p-2 rounded-lg bg-secondary/20 hover:bg-secondary/40 text-secondary transition-colors"
              title="Abrir Playground"
            >
              <Sliders size={16} />
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-2">{effect.description}</p>
        
        {/* Use Case Example */}
        <div className="flex items-start gap-2 p-2.5 mb-4 rounded-lg bg-secondary/5 border border-secondary/20">
          <Lightbulb size={14} className="text-secondary shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-medium text-secondary">Uso: </span>
            {getEffectUseCase(effect)}
          </p>
        </div>

        {/* Preview */}
        <div 
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 mb-4 flex items-center justify-center min-h-[120px] border border-border/50 overflow-hidden cursor-pointer hover:border-secondary/50 transition-colors"
          onClick={() => setShowPlayground(true)}
        >
          <EffectLivePreview effect={effect} size="md" />
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
                {activeTab === "css" ? effect.cssCode : effect.htmlExample}
              </code>
            </pre>
            <button
              onClick={() => copyToClipboard(
                activeTab === "css" ? effect.cssCode : effect.htmlExample,
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
        item={effect}
        type="effect"
      />
    </>
  );
}
