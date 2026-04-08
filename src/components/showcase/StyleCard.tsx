import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ExternalLink, Palette, Layout, Type, Sparkles, Image } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "@/hooks/use-toast";

export interface StyleDefinition {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  objective: string;
  colors: string[];
  features: string[];
  iconStyle: string;
  layoutStyle: string;
  typography: string;
  previewImage?: string;
  cssVariables: Record<string, string>;
  sampleCSS: string;
  exampleUrl?: string;
}

interface StyleCardProps {
  style: StyleDefinition;
  index: number;
}

export function StyleCard({ style, index }: StyleCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCSS = async () => {
    await navigator.clipboard.writeText(style.sampleCSS);
    setCopied(true);
    toast({
      title: "✅ Código copiado!",
      description: `CSS do estilo "${style.name}" copiado para a área de transferência.`,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div
        className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 cursor-pointer"
        onClick={() => setShowDetails(true)}
      >
        {/* Preview Area */}
        <div 
          className="h-48 relative overflow-hidden"
          style={{ 
            background: style.previewImage ? 'transparent' : `linear-gradient(135deg, ${style.colors[0]}22, ${style.colors[1]}22)` 
          }}
        >
          {/* AI Generated Preview Image */}
          {style.previewImage ? (
            <img 
              src={style.previewImage} 
              alt={`Preview ${style.name}`}
              className="w-full h-full object-cover"
            />
          ) : (
            /* Sample UI Preview Fallback */
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <StylePreviewMini style={style} />
            </div>
          )}

          {/* Style Number Badge */}
          <div 
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow-lg"
            style={{ 
              background: style.colors[0],
              color: style.colors[0] === '#FFFFFF' || style.colors[0] === '#F5F5F5' ? '#000' : '#FFF'
            }}
          >
            #{index + 1}
          </div>

          {/* Color Palette Preview */}
          <div className="absolute bottom-3 left-3 flex gap-1">
            {style.colors.slice(0, 5).map((color, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border-2 border-white/40 shadow-lg"
                style={{ background: color }}
                title={color}
              />
            ))}
          </div>

          {/* Example Button */}
          {style.exampleUrl ? (
            <a
              href={style.exampleUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-3 right-3 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg flex items-center gap-1.5 hover:scale-105"
            >
              <ExternalLink size={12} />
              Ver Exemplo
            </a>
          ) : (
            <div
              className="absolute bottom-3 right-3 px-3 py-1.5 text-xs font-medium rounded-lg bg-muted/80 text-muted-foreground border border-border/50 flex items-center gap-1.5 cursor-default"
              title="Exemplo em breve"
            >
              <ExternalLink size={12} />
              Em breve
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="text-white font-medium flex items-center gap-2">
              <ExternalLink size={16} />
              Ver Detalhes
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">{style.name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{style.subtitle}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {style.features.slice(0, 2).map((feature, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground"
                >
                  {feature}
                </span>
              ))}
            </div>
            
            {/* Quick Copy Button */}
            <button
              onClick={(e) => { e.stopPropagation(); copyCSS(); }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copiado!" : "Copiar CSS"}
            </button>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <span 
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{ 
                  background: style.colors[0],
                  color: style.colors[0] === '#FFFFFF' || style.colors[0] === '#F5F5F5' ? '#000' : '#FFF'
                }}
              >
                {index + 1}
              </span>
              {style.name}
            </DialogTitle>
          </DialogHeader>
          
          <ScrollArea className="max-h-[70vh] pr-4">
            <div className="space-y-6">
              {/* AI Generated Image Preview */}
              {style.previewImage && (
                <div className="rounded-xl overflow-hidden border border-border/50">
                  <img 
                    src={style.previewImage} 
                    alt={`Exemplo visual ${style.name}`}
                    className="w-full h-auto"
                  />
                  <div className="p-3 bg-muted/30 flex items-center gap-2 text-sm text-muted-foreground">
                    <Image size={14} />
                    Exemplo visual gerado por IA
                  </div>
                </div>
              )}

              {/* Interactive Preview */}
              <div 
                className="rounded-xl overflow-hidden p-6"
                style={{ 
                  background: `linear-gradient(135deg, ${style.colors[0]}15, ${style.colors[1]}15)`,
                  border: `1px solid ${style.colors[0]}33`
                }}
              >
                <StylePreviewFull style={style} />
              </div>

              {/* Description */}
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Sparkles size={16} className="text-primary" />
                  Conceito
                </h4>
                <p className="text-muted-foreground">{style.description}</p>
              </div>

              {/* Grid Info */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-muted/50">
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <Palette size={14} />
                    Paleta
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {style.colors.map((color, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <div 
                          className="w-5 h-5 rounded border border-border"
                          style={{ background: color }}
                        />
                        <span className="text-xs font-mono">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-muted/50">
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <Layout size={14} />
                    Layout
                  </h5>
                  <p className="text-sm text-muted-foreground">{style.layoutStyle}</p>
                </div>

                <div className="p-4 rounded-lg bg-muted/50">
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <Type size={14} />
                    Tipografia
                  </h5>
                  <p className="text-sm text-muted-foreground">{style.typography}</p>
                </div>
              </div>

              {/* Icon Style */}
              <div>
                <h4 className="font-semibold mb-2">Estilo de Ícones</h4>
                <p className="text-sm text-muted-foreground">{style.iconStyle}</p>
              </div>

              {/* Objective */}
              <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                <h4 className="font-semibold mb-2 text-primary">🎯 Objetivo</h4>
                <p className="text-muted-foreground">{style.objective}</p>
              </div>

              {/* Sample CSS */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">CSS de Exemplo</h4>
                  <button
                    onClick={copyCSS}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? "Código Copiado!" : "Copiar Código CSS"}
                  </button>
                </div>
                <pre className="p-4 rounded-lg bg-gray-900 border border-border/50 text-xs overflow-x-auto font-mono">
                  <code className="text-green-400">{style.sampleCSS}</code>
                </pre>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}

// Mini preview for cards
function StylePreviewMini({ style }: { style: StyleDefinition }) {
  const baseStyle = {
    fontFamily: style.typography.includes("serif") ? "Georgia, serif" : "Inter, sans-serif",
  };

  if (style.id === "premium-minimal") {
    return (
      <div className="w-full max-w-[200px] bg-white rounded-lg shadow-sm p-3" style={baseStyle}>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-gray-400 rounded" />
          </div>
          <div>
            <div className="h-2 w-16 bg-gray-800 rounded" />
            <div className="h-1.5 w-10 bg-gray-300 rounded mt-1" />
          </div>
        </div>
        <div className="h-1.5 w-full bg-gray-100 rounded mb-1" />
        <div className="h-1.5 w-3/4 bg-gray-100 rounded" />
      </div>
    );
  }

  if (style.id === "illustrated-cartoon") {
    return (
      <div className="w-full max-w-[200px] bg-orange-50 rounded-2xl p-3 border-2 border-orange-200" style={baseStyle}>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-white text-lg">
            🍔
          </div>
          <div>
            <div className="h-2.5 w-14 bg-orange-600 rounded-full" />
            <div className="h-2 w-10 bg-orange-300 rounded-full mt-1" />
          </div>
        </div>
        <div className="flex gap-1">
          <div className="flex-1 h-6 bg-yellow-400 rounded-xl" />
          <div className="flex-1 h-6 bg-red-400 rounded-xl" />
        </div>
      </div>
    );
  }

  if (style.id === "dark-tech") {
    return (
      <div className="w-full max-w-[200px] bg-gray-900 rounded-lg p-3 border border-cyan-500/30" style={baseStyle}>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center">
            <div className="w-3 h-3 bg-cyan-400 rounded-sm animate-pulse" />
          </div>
          <div>
            <div className="h-2 w-16 bg-white rounded" />
            <div className="h-1.5 w-10 bg-cyan-500 rounded mt-1" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          <div className="h-4 bg-purple-500/30 rounded border border-purple-500/30" />
          <div className="h-4 bg-cyan-500/30 rounded border border-cyan-500/30" />
          <div className="h-4 bg-blue-500/30 rounded border border-blue-500/30" />
        </div>
      </div>
    );
  }

  if (style.id === "retro-modern") {
    return (
      <div className="w-full max-w-[200px] bg-amber-50 rounded-xl p-3 border border-amber-200" style={baseStyle}>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-amber-50 text-xs font-bold">
            R
          </div>
          <div>
            <div className="h-2 w-16 bg-amber-800 rounded" />
            <div className="h-1.5 w-10 bg-amber-400 rounded mt-1" />
          </div>
        </div>
        <div className="h-8 bg-gradient-to-r from-amber-200 to-orange-200 rounded-lg border border-amber-300" />
      </div>
    );
  }

  if (style.id === "industrial") {
    return (
      <div className="w-full max-w-[200px] bg-gray-100 rounded p-3 border-2 border-gray-400" style={baseStyle}>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-gray-700 flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-white" />
          </div>
          <div className="flex-1">
            <div className="h-2 w-full bg-gray-700 rounded-sm" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className="h-5 bg-gray-300 rounded-sm flex items-center justify-center">
            <span className="text-[8px] font-bold text-gray-700">DATA</span>
          </div>
          <div className="h-5 bg-green-600 rounded-sm flex items-center justify-center">
            <span className="text-[8px] font-bold text-white">OK</span>
          </div>
        </div>
      </div>
    );
  }

  if (style.id === "hybrid" || style.id === "hybrid-serious" || style.id === "hybrid-friendly") {
    const isSerious = style.id === "hybrid-serious";
    const isFriendly = style.id === "hybrid-friendly";
    
    return (
      <div 
        className={`w-full max-w-[200px] bg-white p-3 border ${
          isFriendly ? "rounded-2xl border-blue-200" : isSerious ? "rounded-lg border-gray-300" : "rounded-xl border-gray-200"
        }`} 
        style={baseStyle}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-8 h-8 flex items-center justify-center ${
            isFriendly ? "rounded-xl bg-blue-100" : isSerious ? "rounded-lg bg-gray-100" : "rounded-lg bg-gray-50"
          }`}>
            <span className="text-lg">{isFriendly ? "🍽️" : "📋"}</span>
          </div>
          <div>
            <div className={`h-2 w-14 rounded ${isFriendly ? "bg-blue-600" : "bg-gray-700"}`} />
            <div className={`h-1.5 w-10 rounded mt-1 ${isFriendly ? "bg-blue-300" : "bg-gray-300"}`} />
          </div>
        </div>
        <div className={`flex gap-1 ${isFriendly ? "gap-2" : ""}`}>
          <div className={`flex-1 h-5 rounded ${isFriendly ? "bg-green-100 rounded-xl" : "bg-gray-100"}`} />
          <div className={`flex-1 h-5 rounded ${isFriendly ? "bg-orange-100 rounded-xl" : "bg-gray-100"}`} />
        </div>
      </div>
    );
  }

  return null;
}

// Animated wrapper for staggered children
const fadeSlideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1, scale: 1,
    transition: { delay: i * 0.07, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

// Determine layout template based on style id
function getLayoutTemplate(id: string): string {
  const map: Record<string, string> = {
    "premium-minimal": "saas-dashboard",
    "saas-anthropic": "saas-dashboard",
    "dashboard-analytics": "saas-dashboard",
    "minimalist-premium": "saas-dashboard",

    "illustrated-cartoon": "food-app",
    "candy-pop": "food-app",
    "hybrid-friendly": "food-app",

    "dark-tech": "control-panel",
    "cyberpunk-neon": "control-panel",
    "matrix-hacker": "control-panel",
    "futuristic": "control-panel",
    "futuristic-premium": "control-panel",

    "retro-modern": "magazine",
    "vaporwave": "magazine",
    "classic-premium": "magazine",
    "blog-editorial": "magazine",

    "industrial": "order-system",
    "brutalist": "order-system",
    "hybrid-serious": "order-system",
    "hybrid": "order-system",

    "aurora-borealis": "portfolio",
    "watercolor-art": "portfolio",
    "glass-3d": "portfolio",
    "loris-portfolio": "portfolio",
    "vizion-layout": "portfolio",

    "luxury-gold": "luxury-product",
    "nature-organic": "luxury-product",
    "organic-premium": "luxury-product",

    "silent-tech": "dev-tool",
    "tech-focus-flow": "dev-tool",
    "minimal-tech-intelligence": "dev-tool",
    "slush-fintech": "dev-tool",
    "vibrant-premium": "dev-tool",
  };
  return map[id] || "saas-dashboard";
}

function StylePreviewFull({ style }: { style: StyleDefinition }) {
  const c = style.colors;
  const bg = c[0] || "#0a0a0a";
  const surface = c[1] || "#1a1a1a";
  const text = c[2] || "#ffffff";
  const muted = c[3] || "#888888";
  const accent = c[4] || "#3b82f6";
  const isLight = bg === "#FFFFFF" || bg === "#F5F5F5" || bg === "#FFF8F0" || bg === "#FFFFF0" || bg.toLowerCase().includes("fff") || surface.toLowerCase().includes("fff");

  const font = style.typography.includes("serif")
    ? "Georgia, 'Times New Roman', serif"
    : style.typography.includes("mono") || style.typography.includes("Mono")
    ? "'JetBrains Mono', 'Courier New', monospace"
    : "'Inter', 'Segoe UI', sans-serif";

  const borderColor = isLight ? `${muted}33` : `${accent}33`;
  const cardBg = isLight ? surface : `${surface}cc`;
  const template = getLayoutTemplate(style.id);

  const containerStyle = { background: bg, fontFamily: font, color: text, border: `1px solid ${borderColor}` };

  // ========= TEMPLATE: SaaS Dashboard =========
  if (template === "saas-dashboard") {
    return (
      <motion.div className="rounded-xl overflow-hidden" style={containerStyle} initial="hidden" animate="visible">
        <motion.div variants={fadeSlideUp} custom={0} style={{ borderBottom: `1px solid ${borderColor}`, padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: accent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 700 }}>S</div>
            <span style={{ fontWeight: 700, fontSize: 14 }}>SaaSBoard</span>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} style={{ padding: "5px 14px", borderRadius: 8, background: accent, color: "#fff", fontSize: 11, fontWeight: 600 }}>Dashboard</motion.div>
        </motion.div>
        <motion.div variants={fadeSlideUp} custom={1} style={{ padding: "20px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10 }}>
          {[{ l: "Receita", v: "R$ 124K", d: "+12.5%" }, { l: "Usuários", v: "8,432", d: "+5.2%" }, { l: "Conversão", v: "3.8%", d: "+0.4%" }, { l: "MRR", v: "R$ 45K", d: "+8.1%" }].map((s, i) => (
            <motion.div key={i} variants={scaleIn} custom={2 + i} whileHover={{ y: -3 }} style={{ padding: 14, borderRadius: 10, background: cardBg, border: `1px solid ${borderColor}` }}>
              <div style={{ fontSize: 9, color: muted, marginBottom: 4 }}>{s.l}</div>
              <div style={{ fontSize: 18, fontWeight: 700 }}>{s.v}</div>
              <div style={{ fontSize: 10, color: accent, marginTop: 2 }}>{s.d}</div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={fadeSlideUp} custom={6} style={{ padding: "0 20px 20px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: 10 }}>
          <div style={{ padding: 16, borderRadius: 10, background: cardBg, border: `1px solid ${borderColor}` }}>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 10 }}>Receita Mensal</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 60 }}>
              {[35, 50, 40, 70, 55, 80, 65, 90, 75, 95, 85, 100].map((h, i) => (
                <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 0.8 + i * 0.05, duration: 0.4 }} style={{ flex: 1, background: i >= 10 ? accent : `${accent}55`, borderRadius: 3 }} />
              ))}
            </div>
          </div>
          <div style={{ padding: 16, borderRadius: 10, background: cardBg, border: `1px solid ${borderColor}` }}>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>Top Planos</div>
            {[{ n: "Pro", p: 58 }, { n: "Business", p: 32 }, { n: "Free", p: 10 }].map((p, i) => (
              <div key={i} style={{ marginBottom: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, marginBottom: 3 }}><span>{p.n}</span><span style={{ color: muted }}>{p.p}%</span></div>
                <div style={{ height: 4, borderRadius: 4, background: `${accent}22` }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: `${p.p}%` }} transition={{ delay: 1 + i * 0.15, duration: 0.5 }} style={{ height: "100%", borderRadius: 4, background: accent }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // ========= TEMPLATE: Food App =========
  if (template === "food-app") {
    return (
      <motion.div className="rounded-2xl overflow-hidden" style={{ ...containerStyle, borderRadius: 16 }} initial="hidden" animate="visible">
        <motion.div variants={fadeSlideUp} custom={0} style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ fontSize: 24 }}>🍔</div>
            <span style={{ fontWeight: 800, fontSize: 16 }}>FoodieApp</span>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} style={{ padding: "6px 16px", borderRadius: 20, background: accent, color: "#fff", fontSize: 12, fontWeight: 700 }}>🛒 3 itens</motion.div>
        </motion.div>
        <motion.div variants={fadeSlideUp} custom={1} style={{ padding: "0 20px" }}>
          <div style={{ padding: "20px", borderRadius: 16, background: `${accent}15`, textAlign: "center" as const, marginBottom: 16 }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>🎉</div>
            <div style={{ fontSize: 16, fontWeight: 800 }}>Frete Grátis Hoje!</div>
            <div style={{ fontSize: 11, color: muted }}>Pedidos acima de R$ 50</div>
          </div>
        </motion.div>
        <motion.div variants={fadeSlideUp} custom={2} style={{ padding: "0 20px 16px" }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10 }}>🔥 Mais Pedidos</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            {[{ e: "🍕", n: "Pizza", p: "R$ 32" }, { e: "🍟", n: "Batatas", p: "R$ 15" }, { e: "🥤", n: "Milkshake", p: "R$ 18" }].map((item, i) => (
              <motion.div key={i} variants={scaleIn} custom={3 + i} whileHover={{ y: -4, scale: 1.03 }} style={{ padding: 14, borderRadius: 14, background: cardBg, border: `1px solid ${borderColor}`, textAlign: "center" as const }}>
                <motion.div style={{ fontSize: 30, marginBottom: 6 }} whileHover={{ scale: 1.3, rotate: 10 }} transition={{ type: "spring", stiffness: 400 }}>{item.e}</motion.div>
                <div style={{ fontSize: 12, fontWeight: 700 }}>{item.n}</div>
                <div style={{ fontSize: 11, color: accent, fontWeight: 700, marginTop: 4 }}>{item.p}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeSlideUp} custom={6} style={{ padding: "0 20px 16px" }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10 }}>📋 Categorias</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
            {["Lanches", "Bebidas", "Sobremesas", "Combos", "Vegano"].map((cat, i) => (
              <motion.div key={i} whileHover={{ scale: 1.08 }} style={{ padding: "6px 14px", borderRadius: 20, background: i === 0 ? accent : `${accent}15`, color: i === 0 ? "#fff" : accent, fontSize: 11, fontWeight: 600 }}>{cat}</motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeSlideUp} custom={7} style={{ padding: "12px 20px", borderTop: `1px solid ${borderColor}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div><div style={{ fontSize: 10, color: muted }}>Total</div><div style={{ fontSize: 16, fontWeight: 800 }}>R$ 65,00</div></div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: "10px 24px", borderRadius: 14, background: accent, color: "#fff", fontSize: 13, fontWeight: 700 }}>Finalizar Pedido →</motion.div>
        </motion.div>
      </motion.div>
    );
  }

  // ========= TEMPLATE: Control Panel / Tech =========
  if (template === "control-panel") {
    return (
      <motion.div className="rounded-xl overflow-hidden" style={containerStyle} initial="hidden" animate="visible">
        <motion.div variants={fadeSlideUp} custom={0} style={{ borderBottom: `1px solid ${borderColor}`, padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
            <span style={{ fontWeight: 700, fontSize: 13, fontFamily: "monospace", letterSpacing: 1 }}>SYSTEM::ONLINE</span>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {["#22c55e", accent, "#a855f7"].map((c, i) => (<motion.div key={i} animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }} style={{ width: 6, height: 6, borderRadius: "50%", background: c }} />))}
          </div>
        </motion.div>
        <motion.div variants={fadeSlideUp} custom={1} style={{ padding: 20, display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8 }}>
          {[{ l: "CPU", v: 78, u: "%" }, { l: "RAM", v: 64, u: "%" }, { l: "DISK", v: 45, u: "%" }, { l: "NET", v: 92, u: "Mb/s" }].map((m, i) => (
            <motion.div key={i} variants={scaleIn} custom={2 + i} style={{ padding: 12, borderRadius: 8, background: cardBg, border: `1px solid ${borderColor}` }}>
              <div style={{ fontSize: 9, color: muted, fontFamily: "monospace", marginBottom: 4 }}>{m.l}</div>
              <div style={{ fontSize: 20, fontWeight: 700, fontFamily: "monospace", color: m.v > 80 ? "#ef4444" : accent }}>{m.v}{m.u}</div>
              <div style={{ height: 3, borderRadius: 3, background: `${accent}22`, marginTop: 6 }}>
                <motion.div initial={{ width: 0 }} animate={{ width: `${m.v}%` }} transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }} style={{ height: "100%", borderRadius: 3, background: m.v > 80 ? "#ef4444" : accent }} />
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={fadeSlideUp} custom={6} style={{ padding: "0 20px 16px" }}>
          <div style={{ padding: 14, borderRadius: 8, background: cardBg, border: `1px solid ${accent}33`, fontFamily: "monospace", fontSize: 10, color: muted }}>
            <div style={{ color: accent, marginBottom: 4 }}>$ tail -f /var/log/system.log</div>
            {["[OK] Auth service running on :8080", "[OK] Database connected (12ms)", "[WARN] Cache miss rate: 2.3%", "[OK] 1,247 req/s — avg 23ms"].map((line, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + i * 0.2 }} style={{ marginBottom: 2, color: line.includes("WARN") ? "#eab308" : muted }}>&gt; {line}</motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeSlideUp} custom={8} style={{ padding: "0 20px 16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          <motion.div whileHover={{ scale: 1.02 }} style={{ padding: "8px 16px", borderRadius: 6, background: accent, color: "#fff", fontSize: 11, fontWeight: 600, textAlign: "center" as const, fontFamily: "monospace" }}>DEPLOY →</motion.div>
          <motion.div whileHover={{ scale: 1.02 }} style={{ padding: "8px 16px", borderRadius: 6, border: `1px solid ${accent}`, color: accent, fontSize: 11, fontWeight: 600, textAlign: "center" as const, fontFamily: "monospace" }}>LOGS ↗</motion.div>
        </motion.div>
      </motion.div>
    );
  }

  // ========= TEMPLATE: Magazine / Editorial =========
  if (template === "magazine") {
    return (
      <motion.div className="rounded-xl overflow-hidden" style={containerStyle} initial="hidden" animate="visible">
        <motion.div variants={fadeSlideUp} custom={0} style={{ padding: "16px 24px", borderBottom: `1px solid ${borderColor}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.03em", fontStyle: "italic" }}>Revista</span>
          <div style={{ display: "flex", gap: 16, fontSize: 11, color: muted }}>
            <span>Cultura</span><span>Estilo</span><span>Opinião</span><span>Tech</span>
          </div>
        </motion.div>
        <motion.div variants={fadeSlideUp} custom={1} style={{ padding: "28px 24px" }}>
          <div style={{ fontSize: 9, textTransform: "uppercase" as const, letterSpacing: 3, color: accent, fontWeight: 700, marginBottom: 10 }}>Artigo em Destaque</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, lineHeight: 1.15, marginBottom: 10, letterSpacing: "-0.02em" }}>
            A Nova Era do Design<br />Digital Chega Agora
          </h2>
          <p style={{ fontSize: 12, color: muted, lineHeight: 1.6, marginBottom: 14 }}>
            Uma análise profunda sobre como as tendências visuais estão moldando o futuro da experiência digital em 2026.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: accent }} />
            <div>
              <div style={{ fontSize: 11, fontWeight: 600 }}>Maria Santos</div>
              <div style={{ fontSize: 9, color: muted }}>5 min de leitura • 14 Mar</div>
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeSlideUp} custom={3} style={{ padding: "0 24px 20px" }}>
          <div style={{ borderTop: `1px solid ${borderColor}`, paddingTop: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 12 }}>Mais Lidos</div>
            {[{ t: "O Futuro das Interfaces", c: "Tecnologia", m: "8 min" }, { t: "Cores que Vendem", c: "Marketing", m: "5 min" }, { t: "Tipografia Expressiva", c: "Design", m: "6 min" }].map((a, i) => (
              <motion.div key={i} variants={fadeSlideUp} custom={4 + i} whileHover={{ x: 4 }} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < 2 ? `1px solid ${borderColor}` : "none" }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: `${accent}55`, fontFamily: "Georgia, serif" }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>{a.t}</div>
                  <div style={{ fontSize: 9, color: muted }}>{a.c} • {a.m}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // ========= TEMPLATE: Order System / Industrial =========
  if (template === "order-system") {
    return (
      <motion.div className="rounded-lg overflow-hidden" style={containerStyle} initial="hidden" animate="visible">
        <motion.div variants={fadeSlideUp} custom={0} style={{ padding: "10px 16px", borderBottom: `2px solid ${borderColor}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontWeight: 800, fontSize: 13, textTransform: "uppercase" as const, letterSpacing: 2 }}>CONTROLE</span>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ fontSize: 9, color: muted }}>STATUS:</span><span style={{ padding: "2px 8px", background: "#22c55e", color: "#fff", fontSize: 9, fontWeight: 800 }}>ATIVO</span></div>
        </motion.div>
        <motion.div variants={fadeSlideUp} custom={1} style={{ padding: 16, display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 6 }}>
          {[{ l: "PEDIDOS", v: "247" }, { l: "PENDENTES", v: "12" }, { l: "ENTREGUES", v: "235" }, { l: "TEMPO", v: "8min" }].map((s, i) => (
            <motion.div key={i} variants={scaleIn} custom={2 + i} style={{ padding: 10, background: cardBg, border: `1px solid ${borderColor}` }}>
              <div style={{ fontSize: 8, fontWeight: 800, color: muted, letterSpacing: 1 }}>{s.l}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: s.l === "PENDENTES" ? "#eab308" : text }}>{s.v}</div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={fadeSlideUp} custom={6} style={{ padding: "0 16px 12px" }}>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 1, marginBottom: 8, color: muted }}>FILA ATUAL</div>
          {[{ id: "#1247", s: "Preparando", c: "#eab308" }, { id: "#1246", s: "Saiu p/ Entrega", c: accent }, { id: "#1245", s: "Entregue", c: "#22c55e" }].map((o, i) => (
            <motion.div key={i} variants={fadeSlideUp} custom={7 + i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: `1px solid ${borderColor}` }}>
              <span style={{ fontSize: 12, fontWeight: 700, fontFamily: "monospace" }}>{o.id}</span>
              <span style={{ padding: "2px 10px", fontSize: 9, fontWeight: 700, background: `${o.c}22`, color: o.c, borderRadius: 4 }}>{o.s}</span>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={fadeSlideUp} custom={10} style={{ padding: "8px 16px 16px", display: "flex", gap: 6 }}>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ flex: 1, padding: "8px", background: accent, color: "#fff", fontWeight: 800, fontSize: 11, textAlign: "center" as const }}>+ NOVO PEDIDO</motion.div>
          <motion.div whileHover={{ scale: 1.03 }} style={{ flex: 1, padding: "8px", background: `${muted}33`, color: text, fontWeight: 800, fontSize: 11, textAlign: "center" as const }}>RELATÓRIO</motion.div>
          <motion.div whileHover={{ scale: 1.05 }} style={{ padding: "8px 12px", background: "#ef4444", color: "#fff", fontWeight: 800, fontSize: 11 }}>⚠</motion.div>
        </motion.div>
      </motion.div>
    );
  }

  // ========= TEMPLATE: Portfolio / Creative =========
  if (template === "portfolio") {
    return (
      <motion.div className="rounded-xl overflow-hidden" style={containerStyle} initial="hidden" animate="visible">
        <motion.div variants={fadeSlideUp} custom={0} style={{ padding: "20px 24px", textAlign: "center" as const }}>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300, delay: 0.2 }} style={{ width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg, ${accent}, ${c[3] || accent})`, margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 20, fontWeight: 700 }}>A</motion.div>
          <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.02em" }}>Ana Oliveira</div>
          <div style={{ fontSize: 11, color: muted, marginTop: 2 }}>Designer & Creative Director</div>
        </motion.div>
        <motion.div variants={fadeSlideUp} custom={2} style={{ padding: "0 24px 16px", display: "flex", justifyContent: "center", gap: 16, fontSize: 10, color: muted }}>
          {["Projetos", "Sobre", "Blog", "Contato"].map((l) => (<span key={l}>{l}</span>))}
        </motion.div>
        <motion.div variants={fadeSlideUp} custom={3} style={{ padding: "0 20px 16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {[{ t: "Branding", sub: "TechCo Rebrand", h: 90 }, { t: "UI/UX", sub: "App Fintech", h: 110 }, { t: "Motion", sub: "Campanha Vídeo", h: 110 }, { t: "Web", sub: "Landing Page", h: 90 }].map((p, i) => (
              <motion.div key={i} variants={scaleIn} custom={4 + i} whileHover={{ y: -4 }} style={{ borderRadius: 12, overflow: "hidden", border: `1px solid ${borderColor}`, background: cardBg }}>
                <div style={{ height: p.h, background: `linear-gradient(${135 + i * 30}deg, ${accent}33, ${c[3] || accent}22)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <motion.span style={{ fontSize: 28 }} whileHover={{ scale: 1.2, rotate: 5 }}>{["🎨", "📱", "🎬", "🌐"][i]}</motion.span>
                </div>
                <div style={{ padding: "10px 12px" }}>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>{p.t}</div>
                  <div style={{ fontSize: 9, color: muted }}>{p.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeSlideUp} custom={8} style={{ padding: "12px 20px", borderTop: `1px solid ${borderColor}`, display: "flex", justifyContent: "center", gap: 12 }}>
          {["🐦", "💼", "📸", "✉️"].map((s, i) => (
            <motion.div key={i} whileHover={{ scale: 1.2, y: -2 }} style={{ width: 32, height: 32, borderRadius: "50%", background: `${accent}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>{s}</motion.div>
          ))}
        </motion.div>
      </motion.div>
    );
  }

  // ========= TEMPLATE: Luxury Product =========
  if (template === "luxury-product") {
    return (
      <motion.div className="rounded-xl overflow-hidden" style={containerStyle} initial="hidden" animate="visible">
        <motion.div variants={fadeSlideUp} custom={0} style={{ padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${borderColor}` }}>
          <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: 4, textTransform: "uppercase" as const }}>Maison</span>
          <div style={{ display: "flex", gap: 14, fontSize: 10, color: muted }}>
            <span>Coleção</span><span>Loja</span><span>♡</span>
          </div>
        </motion.div>
        <motion.div variants={fadeSlideUp} custom={1} style={{ padding: "28px 24px", textAlign: "center" as const }}>
          <div style={{ fontSize: 9, letterSpacing: 4, textTransform: "uppercase" as const, color: accent, marginBottom: 8 }}>Nova Coleção 2026</div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }} style={{ fontSize: 48, marginBottom: 12 }}>💎</motion.div>
          <h2 style={{ fontSize: 22, fontWeight: 300, letterSpacing: 2, marginBottom: 6, textTransform: "uppercase" as const }}>Elegância Atemporal</h2>
          <p style={{ fontSize: 11, color: muted, lineHeight: 1.7, maxWidth: 260, margin: "0 auto" }}>Peças artesanais feitas com materiais nobres selecionados à mão.</p>
        </motion.div>
        <motion.div variants={fadeSlideUp} custom={3} style={{ padding: "0 20px 20px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          {[{ n: "Essência", p: "R$ 890", e: "🌸" }, { n: "Velvet", p: "R$ 1.240", e: "🖤" }, { n: "Ouro", p: "R$ 2.100", e: "✨" }].map((p, i) => (
            <motion.div key={i} variants={scaleIn} custom={4 + i} whileHover={{ y: -4 }} style={{ padding: 16, borderRadius: 12, background: cardBg, border: `1px solid ${borderColor}`, textAlign: "center" as const }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{p.e}</div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1 }}>{p.n}</div>
              <div style={{ fontSize: 13, fontWeight: 300, color: accent, marginTop: 4 }}>{p.p}</div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={fadeSlideUp} custom={7} style={{ padding: "14px 24px", borderTop: `1px solid ${borderColor}`, textAlign: "center" as const }}>
          <motion.div whileHover={{ letterSpacing: "6px" }} transition={{ duration: 0.3 }} style={{ display: "inline-block", padding: "10px 28px", border: `1px solid ${accent}`, color: accent, fontSize: 10, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase" as const }}>Explorar Coleção</motion.div>
        </motion.div>
      </motion.div>
    );
  }

  // ========= TEMPLATE: Dev Tool (default fallback) =========
  return (
    <motion.div className="rounded-xl overflow-hidden" style={containerStyle} initial="hidden" animate="visible">
      <motion.div variants={fadeSlideUp} custom={0} style={{ borderBottom: `1px solid ${borderColor}`, padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 24, height: 24, borderRadius: 6, background: accent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, fontWeight: 700 }}>⚡</div>
          <span style={{ fontWeight: 700, fontSize: 13 }}>DevKit</span>
          <span style={{ padding: "2px 8px", borderRadius: 6, background: `${accent}22`, color: accent, fontSize: 9, fontWeight: 600 }}>v3.2</span>
        </div>
        <div style={{ display: "flex", gap: 10, fontSize: 10, color: muted }}>
          <span>Docs</span><span>API</span><span>Pricing</span>
        </div>
      </motion.div>
      <motion.div variants={fadeSlideUp} custom={1} style={{ padding: "24px 20px", textAlign: "center" as const }}>
        <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 6 }}>Build faster, ship smarter</div>
        <div style={{ fontSize: 11, color: muted, marginBottom: 16 }}>API-first platform for modern developers</div>
        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          <motion.div whileHover={{ scale: 1.05 }} style={{ padding: "7px 18px", borderRadius: 8, background: accent, color: "#fff", fontSize: 11, fontWeight: 600 }}>Get Started</motion.div>
          <motion.div whileHover={{ scale: 1.05 }} style={{ padding: "7px 18px", borderRadius: 8, border: `1px solid ${borderColor}`, fontSize: 11, color: muted }}>View Docs</motion.div>
        </div>
      </motion.div>
      <motion.div variants={fadeSlideUp} custom={3} style={{ padding: "0 20px 16px" }}>
        <div style={{ padding: 14, borderRadius: 8, background: cardBg, border: `1px solid ${borderColor}`, fontFamily: "monospace", fontSize: 10, color: muted }}>
          <div style={{ color: accent }}>$ npm install devkit</div>
          <div style={{ marginTop: 4 }}>
            <span style={{ color: "#22c55e" }}>✓</span> Installed in 1.2s
          </div>
          <div style={{ marginTop: 2 }}>
            <span style={{ color: "#22c55e" }}>✓</span> 0 vulnerabilities
          </div>
        </div>
      </motion.div>
      <motion.div variants={fadeSlideUp} custom={5} style={{ padding: "0 20px 16px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        {[{ t: "Auth", d: "OAuth 2.0 pronto", e: "🔐" }, { t: "Database", d: "PostgreSQL nativo", e: "🗄️" }, { t: "Realtime", d: "WebSocket built-in", e: "⚡" }].map((f, i) => (
          <motion.div key={i} variants={scaleIn} custom={6 + i} whileHover={{ y: -3 }} style={{ padding: 12, borderRadius: 8, background: cardBg, border: `1px solid ${borderColor}` }}>
            <div style={{ fontSize: 18, marginBottom: 6 }}>{f.e}</div>
            <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 2 }}>{f.t}</div>
            <div style={{ fontSize: 9, color: muted }}>{f.d}</div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fadeSlideUp} custom={9} style={{ padding: "12px 20px", borderTop: `1px solid ${borderColor}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 10, color: muted }}>Trusted by 5K+ developers</div>
        <div style={{ display: "flex", gap: 4 }}>
          {[1, 2, 3, 4, 5].map((i) => (<div key={i} style={{ width: 20, height: 20, borderRadius: "50%", background: `${accent}${20 + i * 15}`, marginLeft: i > 1 ? -6 : 0, border: `2px solid ${bg}` }} />))}
        </div>
      </motion.div>
    </motion.div>
  );
}
