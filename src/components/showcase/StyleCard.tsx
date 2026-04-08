import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ExternalLink, Palette, Layout, Type, Sparkles, Image, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "@/hooks/use-toast";
import { StyleExampleFrame } from "@/components/showcase/StyleExampleFrame";

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

// Universal preview based on pv-turn.lovable.app structure
// Same content, completely styled by each card's colors/typography
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
  const btnStyle = { padding: "8px 22px", borderRadius: 10, background: accent, color: "#fff", fontSize: 11, fontWeight: 700 as const, cursor: "pointer", border: "none", display: "inline-block" };
  const btnOutline = { ...btnStyle, background: "transparent", border: `1px solid ${accent}`, color: accent };
  const sectionTitle = { fontSize: 16, fontWeight: 800 as const, textAlign: "center" as const, marginBottom: 4, letterSpacing: "-0.02em" };
  const sectionSub = { fontSize: 10, color: muted, textAlign: "center" as const, marginBottom: 14 };

  return (
    <motion.div
      className="rounded-xl overflow-hidden"
      style={{ background: bg, fontFamily: font, color: text, border: `1px solid ${borderColor}` }}
      initial="hidden"
      animate="visible"
    >
      {/* ===== NAV ===== */}
      <motion.div variants={fadeSlideUp} custom={0} style={{ padding: "10px 18px", borderBottom: `1px solid ${borderColor}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: 8, background: `linear-gradient(135deg, ${accent}, ${accent}bb)`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 800 }}>T</div>
          <span style={{ fontWeight: 700, fontSize: 13 }}>TurnX</span>
        </div>
        <div style={{ display: "flex", gap: 14, fontSize: 10, color: muted }}>
          <span>Sobre</span><span>Planos</span><span>Contato</span>
        </div>
      </motion.div>

      {/* ===== HERO ===== */}
      <motion.div variants={fadeSlideUp} custom={1} style={{ padding: "30px 20px 24px", textAlign: "center" as const }}>
        <motion.div variants={scaleIn} custom={2} style={{ display: "inline-block", padding: "4px 14px", borderRadius: 20, border: `1px solid ${accent}44`, color: accent, fontSize: 9, fontWeight: 600, marginBottom: 12, letterSpacing: 1, textTransform: "uppercase" as const }}>
          ✦ Somente Convidados
        </motion.div>
        <motion.h2 variants={fadeSlideUp} custom={3} style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.15, marginBottom: 10, letterSpacing: "-0.03em" }}>
          Sua rede define<br /><span style={{ color: accent }}>seu futuro</span>
        </motion.h2>
        <motion.p variants={fadeSlideUp} custom={4} style={{ fontSize: 11, color: muted, maxWidth: 300, margin: "0 auto 16px", lineHeight: 1.6 }}>
          O clube exclusivo que conecta empresários de alta performance através de experiências únicas e networking estratégico.
        </motion.p>
        <motion.div variants={fadeSlideUp} custom={5}>
          <motion.div whileHover={{ scale: 1.05, boxShadow: `0 6px 24px ${accent}44` }} whileTap={{ scale: 0.96 }} style={{ ...btnStyle, padding: "10px 28px", borderRadius: 12, fontSize: 12, background: `linear-gradient(135deg, ${accent}, ${accent}cc)` }}>
            Quero meu convite →
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ===== O QUE É - 4 Features ===== */}
      <motion.div variants={fadeSlideUp} custom={6} style={{ padding: "16px 18px 18px" }}>
        <div style={sectionTitle}>O que é o Clube?</div>
        <div style={sectionSub}>Conexões genuínas e experiências transformadoras</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[
            { icon: "🤝", title: "Networking", desc: "Conexões com empresários de alto nível" },
            { icon: "🎪", title: "Eventos", desc: "Jantares, expedições e encontros" },
            { icon: "💼", title: "Marketplace", desc: "Oportunidades entre membros" },
            { icon: "📱", title: "Conteúdo", desc: "Feed exclusivo e podcast" },
          ].map((f, i) => (
            <motion.div key={i} variants={scaleIn} custom={7 + i} whileHover={{ y: -3, boxShadow: `0 6px 20px ${accent}18` }} style={{ padding: 12, borderRadius: 10, background: cardBg, border: `1px solid ${borderColor}`, cursor: "default" }}>
              <motion.div style={{ fontSize: 18, marginBottom: 6 }} whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: "spring", stiffness: 400 }}>{f.icon}</motion.div>
              <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 2 }}>{f.title}</div>
              <div style={{ fontSize: 9, color: muted, lineHeight: 1.4 }}>{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ===== EXPERIÊNCIAS - Gallery ===== */}
      <motion.div variants={fadeSlideUp} custom={11} style={{ padding: "12px 18px 18px" }}>
        <div style={sectionTitle}>Experiências que transformam</div>
        <div style={sectionSub}>Vivências que criam vínculos reais</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
          {[
            { icon: "🍷", title: "Jantares" },
            { icon: "🏔️", title: "Expedições" },
            { icon: "🎙️", title: "Podcast" },
          ].map((exp, i) => (
            <motion.div key={i} variants={scaleIn} custom={12 + i} whileHover={{ y: -3 }} style={{ borderRadius: 10, overflow: "hidden", border: `1px solid ${borderColor}`, background: cardBg }}>
              <div style={{ height: 48, background: `linear-gradient(${120 + i * 40}deg, ${accent}22, ${accent}08)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <motion.span style={{ fontSize: 22 }} whileHover={{ scale: 1.3 }}>{exp.icon}</motion.span>
              </div>
              <div style={{ padding: "6px 8px" }}>
                <div style={{ fontSize: 10, fontWeight: 700 }}>{exp.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ===== PRICING - 2 Plans ===== */}
      <motion.div variants={fadeSlideUp} custom={15} style={{ padding: "12px 18px 18px" }}>
        <div style={sectionTitle}>Escolha seu plano</div>
        <div style={sectionSub}>Comece grátis ou desbloqueie tudo</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {/* Free Plan */}
          <motion.div variants={scaleIn} custom={16} style={{ padding: 14, borderRadius: 10, background: cardBg, border: `1px solid ${borderColor}` }}>
            <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 4 }}>Gratuito</div>
            <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 6 }}>R$ 0<span style={{ fontSize: 9, fontWeight: 400, color: muted }}>/mês</span></div>
            <div style={{ fontSize: 9, color: muted, lineHeight: 1.6, marginBottom: 10 }}>
              • Feed de conteúdo<br />• 2 eventos online/mês<br />• Visualizar marketplace
            </div>
            <motion.div whileHover={{ scale: 1.05 }} style={btnOutline}>Solicitar</motion.div>
          </motion.div>
          {/* Premium Plan */}
          <motion.div variants={scaleIn} custom={17} style={{ padding: 14, borderRadius: 10, background: `linear-gradient(135deg, ${accent}15, ${accent}08)`, border: `1px solid ${accent}44`, position: "relative" as const }}>
            <div style={{ position: "absolute" as const, top: -6, right: 10, padding: "2px 8px", borderRadius: 8, background: accent, color: "#fff", fontSize: 8, fontWeight: 700 }}>Recomendado</div>
            <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 4, color: accent }}>TurnX-Around</div>
            <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 6 }}>R$ 229<span style={{ fontSize: 9, fontWeight: 400, color: muted }}>/mês</span></div>
            <div style={{ fontSize: 9, color: muted, lineHeight: 1.6, marginBottom: 10 }}>
              • Eventos ilimitados<br />• Marketplace completo<br />• Jantares e expedições
            </div>
            <motion.div whileHover={{ scale: 1.05, boxShadow: `0 4px 16px ${accent}44` }} style={btnStyle}>Quero ser membro</motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ===== COMO FUNCIONA - 3 Steps ===== */}
      <motion.div variants={fadeSlideUp} custom={18} style={{ padding: "12px 18px 18px" }}>
        <div style={sectionTitle}>Como funciona</div>
        <div style={sectionSub}>3 passos simples</div>
        <div style={{ display: "flex", gap: 8 }}>
          {[
            { step: "01", title: "Receba o convite", desc: "Acesso por indicação" },
            { step: "02", title: "Escolha seu plano", desc: "Grátis ou completo" },
            { step: "03", title: "Conecte-se", desc: "Networking e negócios" },
          ].map((s, i) => (
            <motion.div key={i} variants={scaleIn} custom={19 + i} whileHover={{ y: -3 }} style={{ flex: 1, padding: 12, borderRadius: 10, background: cardBg, border: `1px solid ${borderColor}`, textAlign: "center" as const }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: accent, marginBottom: 4 }}>{s.step}</div>
              <div style={{ fontSize: 10, fontWeight: 700, marginBottom: 2 }}>{s.title}</div>
              <div style={{ fontSize: 8, color: muted }}>{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ===== CTA FINAL ===== */}
      <motion.div variants={fadeSlideUp} custom={22} style={{ padding: "16px 20px", borderTop: `1px solid ${borderColor}`, textAlign: "center" as const, background: `linear-gradient(180deg, transparent, ${accent}08)` }}>
        <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>Vagas limitadas</div>
        <div style={{ fontSize: 10, color: muted, marginBottom: 10 }}>Cada novo membro é selecionado para garantir excelência</div>
        <motion.div whileHover={{ scale: 1.06, boxShadow: `0 8px 30px ${accent}55` }} whileTap={{ scale: 0.95 }} style={{ ...btnStyle, padding: "10px 28px", borderRadius: 12, fontSize: 12, background: `linear-gradient(135deg, ${accent}, ${accent}bb)` }}>
          Solicitar Convite →
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
