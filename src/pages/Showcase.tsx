import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Palette, Info, Download, Sparkles } from "lucide-react";
import { StyleCard } from "@/components/showcase/StyleCard";
import { designStyles } from "@/data/designStyles";

export default function Showcase() {
  const [filter, setFilter] = useState<string>("all");

  const filteredStyles = filter === "all" 
    ? designStyles 
    : designStyles.filter(s => 
        s.id.includes(filter) || 
        s.features.some(f => f.toLowerCase().includes(filter.toLowerCase()))
      );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <Link 
                to="/" 
                className="p-1.5 sm:p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
              </Link>
              <div>
                <h1 className="text-base sm:text-xl font-bold flex items-center gap-1.5 sm:gap-2">
                  <Palette className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="hidden xs:inline">Showcase de Estilos</span>
                  <span className="xs:hidden">Estilos</span>
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  23 estilos de design
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <Sparkles size={14} className="sm:w-4 sm:h-4" />
            Guia de Design Visual
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
            Escolha o Estilo Ideal para seu Projeto
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg px-2">
            Cada estilo foi cuidadosamente desenhado para transmitir uma mensagem específica. 
            Clique em qualquer card para ver detalhes completos.
          </p>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-10 max-w-4xl mx-auto">
          <div className="p-2 sm:p-4 rounded-lg sm:rounded-xl bg-muted/30 border border-border/50">
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Palette size={12} className="sm:w-4 sm:h-4 text-primary" />
              </div>
              <span className="font-medium text-xs sm:text-base">33 Estilos</span>
            </div>
            <p className="text-[10px] sm:text-sm text-muted-foreground text-center sm:text-left hidden sm:block">
              De Premium Minimalista a Tech Focus Flow
            </p>
          </div>
          <div className="p-2 sm:p-4 rounded-lg sm:rounded-xl bg-muted/30 border border-border/50">
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Download size={12} className="sm:w-4 sm:h-4 text-secondary" />
              </div>
              <span className="font-medium text-xs sm:text-base">CSS Pronto</span>
            </div>
            <p className="text-[10px] sm:text-sm text-muted-foreground text-center sm:text-left hidden sm:block">
              Copie as variáveis e estilos para seu projeto
            </p>
          </div>
          <div className="p-2 sm:p-4 rounded-lg sm:rounded-xl bg-muted/30 border border-border/50">
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-neon-cyan/20 flex items-center justify-center">
                <Info size={12} className="sm:w-4 sm:h-4 text-neon-cyan" />
              </div>
              <span className="font-medium text-xs sm:text-base">Guia</span>
            </div>
            <p className="text-[10px] sm:text-sm text-muted-foreground text-center sm:text-left hidden sm:block">
              Tipografia, ícones, layout e objetivo
            </p>
          </div>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 px-2">
          {[
            { id: "all", label: "Todos" },
            { id: "premium", label: "Premium" },
            { id: "cartoon", label: "Ilustrado" },
            { id: "dark", label: "Dark/Tech" },
            { id: "retro", label: "Retrô" },
            { id: "industrial", label: "Industrial" },
            { id: "hybrid", label: "Híbrido" },
            { id: "cyberpunk", label: "Cyberpunk" },
            { id: "aurora", label: "Aurora" },
            { id: "brutalist", label: "Brutalist" },
            { id: "vaporwave", label: "Vaporwave" },
            { id: "luxury", label: "Luxury" },
            { id: "candy", label: "Candy" },
            { id: "matrix", label: "Matrix" },
            { id: "watercolor", label: "Watercolor" },
            { id: "glass", label: "Glass 3D" },
            { id: "nature", label: "Nature" },
            { id: "vizion", label: "Vizion" },
            { id: "futuristic", label: "Futuristic" },
            { id: "silent", label: "Silent" },
            { id: "focus", label: "Focus" },
            { id: "intelligence", label: "Minimal" },
            { id: "saas", label: "SaaS" },
            { id: "editorial", label: "Editorial" },
            { id: "dashboard", label: "Dashboard" },
            { id: "classic", label: "Clássico" },
            { id: "organic", label: "Orgânico" },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-medium transition-colors ${
                filter === f.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredStyles.map((style, index) => (
            <StyleCard key={style.id} style={style} index={index} />
          ))}
        </div>

        {/* Golden Rule */}
        <div className="mt-10 sm:mt-16 max-w-2xl mx-auto text-center p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
          <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">💎</div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-amber-400">Regra de Ouro</h3>
          <p className="text-muted-foreground italic text-sm sm:text-lg">
            "Layout muda com frequência. Ícone bom dura anos."
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-4">
            Se o icon set estiver sólido, você pode trocar cores, tipografia e layout sem perder identidade.
          </p>
        </div>
      </main>
    </div>
  );
}
