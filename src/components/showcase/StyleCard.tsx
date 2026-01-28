import { useState } from "react";
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

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
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

// Full preview for modal
function StylePreviewFull({ style }: { style: StyleDefinition }) {
  const baseStyle = {
    fontFamily: style.typography.includes("serif") ? "Georgia, serif" : "Inter, sans-serif",
  };

  if (style.id === "premium-minimal") {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 text-gray-800" style={baseStyle}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Dashboard</h3>
              <p className="text-xs text-gray-500">Visão geral do sistema</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium">
            Novo Projeto
          </button>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          {["Receita", "Usuários", "Taxa"].map((label, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <p className="text-xs text-gray-500 mb-1">{label}</p>
              <p className="text-xl font-semibold text-gray-900">
                {i === 0 ? "R$ 45.2K" : i === 1 ? "1,234" : "98.5%"}
              </p>
            </div>
          ))}
        </div>

        <div className="h-20 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl flex items-end px-4 pb-2 gap-1">
          {[40, 65, 45, 80, 55, 70, 90, 60].map((h, i) => (
            <div key={i} className="flex-1 bg-gray-300 rounded-t" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    );
  }

  if (style.id === "illustrated-cartoon") {
    return (
      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-6 border-2 border-orange-200" style={baseStyle}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-2xl shadow-lg">
              🍕
            </div>
            <div>
              <h3 className="font-bold text-orange-800 text-lg">Cardápio</h3>
              <p className="text-sm text-orange-600">Escolha seu favorito!</p>
            </div>
          </div>
          <button className="px-5 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl font-bold shadow-lg">
            🛒 Carrinho
          </button>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          {[
            { emoji: "🍔", name: "Burger", price: "R$ 25" },
            { emoji: "🍟", name: "Batatas", price: "R$ 12" },
            { emoji: "🥤", name: "Bebida", price: "R$ 8" },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-white rounded-2xl border-2 border-orange-100 text-center shadow-sm">
              <div className="text-4xl mb-2">{item.emoji}</div>
              <p className="font-bold text-gray-800">{item.name}</p>
              <p className="text-orange-600 font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (style.id === "dark-tech") {
    return (
      <div className="bg-gray-900 rounded-xl p-6 border border-cyan-500/30" style={baseStyle}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center">
              <div className="w-4 h-4 bg-cyan-400 rounded animate-pulse" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Control Panel</h3>
              <p className="text-xs text-cyan-400">System Online</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <div className="w-3 h-3 rounded-full bg-cyan-500" />
            <div className="w-3 h-3 rounded-full bg-purple-500" />
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-3 mb-4">
          {["CPU", "RAM", "DISK", "NET"].map((label, i) => (
            <div key={i} className="p-3 bg-gray-800 rounded-lg border border-gray-700">
              <p className="text-[10px] text-gray-500 mb-1">{label}</p>
              <p className="text-lg font-mono text-cyan-400">{[78, 64, 45, 92][i]}%</p>
              <div className="h-1 bg-gray-700 rounded-full mt-2">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" 
                  style={{ width: `${[78, 64, 45, 92][i]}%` }} 
                />
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-gray-800/50 rounded-lg border border-purple-500/30">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span className="text-xs text-purple-400 font-mono">LIVE DATA STREAM</span>
          </div>
          <div className="font-mono text-xs text-gray-400">
            &gt; Processing 1,247 requests/sec...
          </div>
        </div>
      </div>
    );
  }

  if (style.id === "retro-modern") {
    return (
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200" style={baseStyle}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-amber-50 font-bold text-xl shadow-md">
              R
            </div>
            <div>
              <h3 className="font-bold text-amber-900 text-lg">Vintage Café</h3>
              <p className="text-sm text-amber-700">Desde 1985</p>
            </div>
          </div>
          <button className="px-5 py-2 bg-amber-700 text-amber-50 rounded-xl font-medium shadow-md">
            Reservar
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-white/70 rounded-xl border border-amber-200 shadow-sm">
            <p className="text-xs text-amber-600 mb-1">☕ Especialidade</p>
            <p className="font-semibold text-amber-900">Café Bourbon</p>
            <p className="text-amber-700 font-bold mt-1">R$ 12,00</p>
          </div>
          <div className="p-4 bg-white/70 rounded-xl border border-amber-200 shadow-sm">
            <p className="text-xs text-amber-600 mb-1">🥐 Destaque</p>
            <p className="font-semibold text-amber-900">Croissant Artesanal</p>
            <p className="text-amber-700 font-bold mt-1">R$ 8,00</p>
          </div>
        </div>

        <div className="p-4 bg-amber-100/50 rounded-xl text-center">
          <p className="text-amber-800 italic">"Tradição com sabor contemporâneo"</p>
        </div>
      </div>
    );
  }

  if (style.id === "industrial") {
    return (
      <div className="bg-gray-100 rounded-lg p-5 border-2 border-gray-400" style={baseStyle}>
        <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-gray-300">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-700 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
              </svg>
            </div>
            <span className="font-bold text-gray-800 uppercase tracking-wide">Sistema de Controle</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600">STATUS:</span>
            <span className="px-2 py-0.5 bg-green-600 text-white text-xs font-bold">ATIVO</span>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { label: "PEDIDOS", value: "247", status: "ok" },
            { label: "PENDENTES", value: "12", status: "warn" },
            { label: "ENTREGUES", value: "235", status: "ok" },
            { label: "TEMPO MED", value: "8min", status: "ok" },
          ].map((item, i) => (
            <div key={i} className="p-3 bg-white border border-gray-300">
              <p className="text-[10px] text-gray-500 font-bold">{item.label}</p>
              <p className={`text-xl font-bold ${item.status === "warn" ? "text-yellow-600" : "text-gray-800"}`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <button className="flex-1 py-2 bg-blue-600 text-white font-bold text-sm">NOVO PEDIDO</button>
          <button className="flex-1 py-2 bg-gray-600 text-white font-bold text-sm">RELATÓRIO</button>
          <button className="px-4 py-2 bg-red-600 text-white font-bold text-sm">⚠</button>
        </div>
      </div>
    );
  }

  // Hybrid styles
  return (
    <div className={`bg-white rounded-xl p-6 border ${
      style.id === "hybrid-friendly" ? "border-blue-200" : "border-gray-200"
    }`} style={baseStyle}>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
            style.id === "hybrid-friendly" ? "bg-blue-100" : "bg-gray-100"
          }`}>
            <span className="text-2xl">{style.id === "hybrid-friendly" ? "🍽️" : "📋"}</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Gestão de Pedidos</h3>
            <p className={`text-sm ${style.id === "hybrid-friendly" ? "text-blue-600" : "text-gray-500"}`}>
              {style.id === "hybrid-friendly" ? "Sistema amigável" : "Sistema operacional"}
            </p>
          </div>
        </div>
        <button className={`px-4 py-2 rounded-xl font-medium text-sm ${
          style.id === "hybrid-friendly" 
            ? "bg-blue-500 text-white" 
            : "bg-gray-800 text-white"
        }`}>
          + Novo Pedido
        </button>
      </div>
      
      <div className={`grid grid-cols-3 gap-3 ${style.id === "hybrid-friendly" ? "gap-4" : ""}`}>
        {[
          { icon: "🥩", label: "Carnes", count: 12 },
          { icon: "🐟", label: "Peixes", count: 8 },
          { icon: "🦐", label: "Frutos do Mar", count: 5 },
        ].map((cat, i) => (
          <div key={i} className={`p-4 rounded-xl border ${
            style.id === "hybrid-friendly"
              ? "bg-gradient-to-br from-blue-50 to-white border-blue-100"
              : "bg-gray-50 border-gray-200"
          }`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{cat.icon}</span>
              <span className="font-medium text-gray-800">{cat.label}</span>
            </div>
            <p className={`text-2xl font-bold ${
              style.id === "hybrid-friendly" ? "text-blue-600" : "text-gray-700"
            }`}>
              {cat.count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
