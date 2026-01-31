import { useState } from "react";
import { Copy, Check, Sliders, Lightbulb, Sparkles, ChevronDown } from "lucide-react";
import { Effect, getEffectUseCase } from "@/data/effects";
import { FavoriteButton } from "@/components/features/FavoriteButton";
import { AnimationPlayground } from "@/components/playground/AnimationPlayground";
import { RealisticEffectPreview } from "@/components/effects/RealisticEffectPreview";
import { motion, AnimatePresence } from "framer-motion";

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
  images: "border-neon-yellow/30 hover:border-neon-yellow/60",
};

const categoryBadgeColors = {
  glassmorphism: "bg-neon-cyan/20 text-neon-cyan",
  neumorphism: "bg-neon-green/20 text-neon-green",
  filters: "bg-neon-purple/20 text-neon-purple",
  gradients: "bg-neon-magenta/20 text-neon-magenta",
  text: "bg-neon-orange/20 text-neon-orange",
  images: "bg-neon-yellow/20 text-neon-yellow",
};

const categoryIcons = {
  glassmorphism: "💎",
  neumorphism: "🔘",
  filters: "🎨",
  gradients: "🌈",
  text: "✨",
  images: "🖼️",
};

export function EffectCardWithPlayground({ effect, isCompact = false, index }: EffectCardProps) {
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [copiedHTML, setCopiedHTML] = useState(false);
  const [activeTab, setActiveTab] = useState<"css" | "html">("css");
  const [showPlayground, setShowPlayground] = useState(false);
  const [showCode, setShowCode] = useState(false);

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
        <motion.div 
          className={`glass-card p-4 border-2 transition-all duration-300 group cursor-pointer ${categoryColors[effect.category]}`}
          onClick={() => setShowPlayground(true)}
          whileHover={{ scale: 1.02, y: -4 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">{categoryIcons[effect.category]}</span>
              {index && (
                <span className="text-xs font-bold text-secondary bg-secondary/20 px-2 py-0.5 rounded">
                  #{index}
                </span>
              )}
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
          
          {/* Realistic Preview */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl mb-3 flex items-center justify-center min-h-[120px] border border-white/5 overflow-hidden p-3">
            <RealisticEffectPreview effect={effect} size="sm" />
          </div>
          
          {/* Info */}
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-muted-foreground block">{effect.id}</span>
            <h3 className="text-sm font-semibold text-foreground truncate">{effect.name}</h3>
            <span className={`text-[10px] px-2 py-0.5 rounded-full inline-block ${categoryBadgeColors[effect.category]}`}>
              {effect.category}
            </span>
          </div>
          
          {/* Copy Button */}
          <button
            onClick={(e) => { e.stopPropagation(); copyToClipboard(effect.cssCode, "css"); }}
            className="mt-3 w-full flex items-center justify-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors py-2 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/10"
          >
            {copiedCSS ? <Check size={12} className="text-neon-green" /> : <Copy size={12} />}
            {copiedCSS ? "Copiado!" : "Copiar CSS"}
          </button>
        </motion.div>

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
      <motion.div 
        className={`glass-card p-6 border-2 transition-all duration-300 ${categoryColors[effect.category]}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{categoryIcons[effect.category]}</span>
              {index && (
                <span className="text-sm font-bold text-secondary bg-secondary/20 px-2.5 py-0.5 rounded">
                  #{index}
                </span>
              )}
              <span className="text-xs font-mono text-muted-foreground">{effect.id}</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground">{effect.name}</h3>
            <span className={`text-xs px-2 py-0.5 rounded-full inline-block mt-1 ${categoryBadgeColors[effect.category]}`}>
              {effect.category}
            </span>
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

        {/* Realistic Preview */}
        <div 
          className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl p-6 mb-4 flex items-center justify-center min-h-[180px] border border-white/5 overflow-hidden cursor-pointer hover:border-secondary/30 transition-all group"
          onClick={() => setShowPlayground(true)}
        >
          <div className="transform group-hover:scale-[1.02] transition-transform duration-300">
            <RealisticEffectPreview effect={effect} size="lg" />
          </div>
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Sparkles size={16} className="text-secondary" />
          </div>
        </div>

        {/* Code Toggle Section */}
        <div className="space-y-3">
          <div className="flex gap-2">
            <button
              onClick={() => copyToClipboard(effect.cssCode, "css")}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
              {copiedCSS ? <Check size={12} className="text-neon-green" /> : <Copy size={12} />}
              {copiedCSS ? "Copiado!" : "Copiar CSS"}
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
                className="overflow-hidden"
              >
                <div className="flex gap-2 mb-2">
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <AnimationPlayground
        isOpen={showPlayground}
        onClose={() => setShowPlayground(false)}
        item={effect}
        type="effect"
      />
    </>
  );
}
