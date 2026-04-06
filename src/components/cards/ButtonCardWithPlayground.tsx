import { useState } from "react";
import { Copy, Check, Sliders, Play, Pause, Lightbulb, ChevronDown } from "lucide-react";
import { ButtonAnimation, getButtonUseCase } from "@/data/buttons";
import { FavoriteButton } from "@/components/features/FavoriteButton";
import { AnimationPlayground } from "@/components/playground/AnimationPlayground";
import { RealisticButtonCard } from "@/components/effects/ui-templates/RealisticButtonCard";
import { motion, AnimatePresence } from "framer-motion";

interface ButtonCardProps {
  button: ButtonAnimation;
  isCompact?: boolean;
  index?: number;
}

const categoryBadgeColors: Record<string, string> = {
  scale: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
  pulse: "text-rose-300 bg-rose-500/10 border-rose-500/20",
  glow: "text-amber-300 bg-amber-500/10 border-amber-500/20",
  fill: "text-sky-300 bg-sky-500/10 border-sky-500/20",
  "3d": "text-violet-300 bg-violet-500/10 border-violet-500/20",
  icon: "text-teal-300 bg-teal-500/10 border-teal-500/20",
};

export function ButtonCardWithPlayground({ button, isCompact = false, index }: ButtonCardProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [copiedHTML, setCopiedHTML] = useState(false);
  const [activeTab, setActiveTab] = useState<"css" | "html">("css");
  const [showPlayground, setShowPlayground] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

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

  const playgroundItem = {
    ...button,
    htmlExample: button.htmlCode,
  };

  // ─── COMPACT VIEW ───
  if (isCompact) {
    return (
      <>
        <motion.div
          className="group relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
          }}
          whileHover={{
            boxShadow: `0 8px 40px ${button.previewColor || '#00FFFF'}15`,
            borderColor: `${button.previewColor || '#00FFFF'}30`,
          }}
          onClick={() => setShowPlayground(true)}
        >
          {/* Glass highlight top edge */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                {index && (
                  <span className="text-[10px] font-mono text-muted-foreground/60">
                    #{index}
                  </span>
                )}
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full border ${categoryBadgeColors[button.category]}`}>
                  {button.category}
                </span>
              </div>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <FavoriteButton id={button.id} type="button" size="sm" />
                <button
                  onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}
                  className="p-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {isPlaying ? <Pause size={10} /> : <Play size={10} />}
                </button>
              </div>
            </div>

            <div key={replayKey} className="rounded-xl overflow-hidden mb-2 min-h-[90px]"
              style={{ background: 'rgba(0,0,0,0.2)' }}
            >
              <RealisticButtonCard button={button} isPlaying={isPlaying} />
            </div>

            <h3 className="text-xs font-medium text-foreground/80 truncate mb-2">{button.name}</h3>

            <button
              onClick={(e) => { e.stopPropagation(); copyToClipboard(button.cssCode, "css"); }}
              className="w-full flex items-center justify-center gap-1 text-[10px] py-1.5 rounded-lg transition-all"
              style={{
                background: copiedCSS ? 'rgba(52,211,153,0.15)' : 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
                color: copiedCSS ? '#34d399' : 'rgba(255,255,255,0.5)',
              }}
            >
              {copiedCSS ? <Check size={10} /> : <Copy size={10} />}
              {copiedCSS ? "Copiado!" : "Copiar CSS"}
            </button>
          </div>
        </motion.div>

        <AnimationPlayground
          isOpen={showPlayground}
          onClose={() => setShowPlayground(false)}
          item={playgroundItem}
          type="button"
        />
      </>
    );
  }

  // ─── FULL VIEW ───
  return (
    <>
      <motion.div
        className="relative rounded-2xl overflow-hidden transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        }}
        whileHover={{
          boxShadow: `0 12px 48px ${button.previewColor || '#00FFFF'}12`,
        }}
      >
        {/* Glass edge highlight */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="p-5">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                {index && (
                  <span className="text-xs font-mono text-muted-foreground/50">#{index}</span>
                )}
                <span className={`text-[10px] px-2 py-0.5 rounded-full border ${categoryBadgeColors[button.category]}`}>
                  {button.category}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground/90">{button.name}</h3>
            </div>
            <div className="flex items-center gap-1.5">
              <FavoriteButton id={button.id} type="button" />
              <button
                onClick={() => setShowPlayground(true)}
                className="p-2 rounded-xl transition-all"
                style={{
                  background: `${button.previewColor || '#00FFFF'}12`,
                  border: `1px solid ${button.previewColor || '#00FFFF'}25`,
                  color: button.previewColor || '#00FFFF',
                }}
                title="Abrir Playground"
              >
                <Sliders size={14} />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all"
                title={isPlaying ? "Pausar" : "Reproduzir"}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-muted-foreground/70 mb-3">{button.description}</p>

          {/* Use case */}
          <div className="flex items-start gap-2 p-2.5 mb-4 rounded-xl"
            style={{
              background: `${button.previewColor || '#00FFFF'}06`,
              border: `1px solid ${button.previewColor || '#00FFFF'}12`,
            }}
          >
            <Lightbulb size={12} style={{ color: button.previewColor || '#00FFFF' }} className="shrink-0 mt-0.5" />
            <p className="text-[11px] text-muted-foreground/60 leading-relaxed">
              <span className="font-medium" style={{ color: button.previewColor || '#00FFFF' }}>Uso: </span>
              {getButtonUseCase(button)}
            </p>
          </div>

          {/* Preview area - Glass container */}
          <div
            key={replayKey}
            className="rounded-2xl mb-4 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
            style={{
              background: 'rgba(0,0,0,0.25)',
              border: '1px solid rgba(255,255,255,0.04)',
              minHeight: '140px',
            }}
            onClick={() => setShowPlayground(true)}
          >
            <RealisticButtonCard button={button} isPlaying={isPlaying} />
          </div>

          {/* Action bar */}
          <div className="space-y-3">
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(button.cssCode, "css")}
                className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium rounded-xl transition-all"
                style={{
                  background: copiedCSS ? 'rgba(52,211,153,0.12)' : `${button.previewColor || '#00FFFF'}10`,
                  border: `1px solid ${copiedCSS ? 'rgba(52,211,153,0.3)' : `${button.previewColor || '#00FFFF'}20`}`,
                  color: copiedCSS ? '#34d399' : button.previewColor || '#00FFFF',
                }}
              >
                {copiedCSS ? <Check size={12} /> : <Copy size={12} />}
                {copiedCSS ? "Copiado!" : "Copiar CSS"}
              </button>
              <button
                onClick={() => setShowCode(!showCode)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium rounded-xl bg-white/4 hover:bg-white/8 border border-white/6 text-muted-foreground/70 hover:text-foreground/80 transition-all"
              >
                {showCode ? "Ocultar" : "Ver Código"}
                <ChevronDown size={10} className={`transition-transform duration-200 ${showCode ? "rotate-180" : ""}`} />
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
                  <div className="flex gap-1.5 mb-2">
                    {(["css", "html"] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className="px-3 py-1 text-[11px] font-mono rounded-lg transition-all"
                        style={{
                          background: activeTab === tab ? `${button.previewColor || '#00FFFF'}15` : 'rgba(255,255,255,0.03)',
                          border: `1px solid ${activeTab === tab ? `${button.previewColor || '#00FFFF'}30` : 'rgba(255,255,255,0.05)'}`,
                          color: activeTab === tab ? button.previewColor || '#00FFFF' : 'rgba(255,255,255,0.4)',
                        }}
                      >
                        {tab.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  <div className="relative">
                    <pre className="rounded-xl p-3 text-[11px] overflow-x-auto max-h-48 font-mono"
                      style={{
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid rgba(255,255,255,0.04)',
                        color: 'rgba(255,255,255,0.5)',
                      }}
                    >
                      <code>{activeTab === "css" ? button.cssCode : button.htmlCode}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(
                        activeTab === "css" ? button.cssCode : button.htmlCode,
                        activeTab
                      )}
                      className="absolute top-2 right-2 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      {(activeTab === "css" ? copiedCSS : copiedHTML) ? (
                        <Check size={12} className="text-emerald-400" />
                      ) : (
                        <Copy size={12} className="text-muted-foreground/50" />
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      <AnimationPlayground
        isOpen={showPlayground}
        onClose={() => setShowPlayground(false)}
        item={playgroundItem}
        type="button"
      />
    </>
  );
}
