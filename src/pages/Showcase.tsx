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
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/" 
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <ArrowLeft size={20} />
              </Link>
              <div>
                <h1 className="text-xl font-bold flex items-center gap-2">
                  <Palette className="text-primary" size={24} />
                  Showcase de Estilos
                </h1>
                <p className="text-sm text-muted-foreground">
                  19 estilos de design para diferentes contextos
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles size={16} />
            Guia de Design Visual
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escolha o Estilo Ideal para seu Projeto
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada estilo foi cuidadosamente desenhado para transmitir uma mensagem específica. 
            Clique em qualquer card para ver detalhes completos, paleta de cores e CSS de exemplo.
          </p>
        </div>

        {/* Quick Info */}
        <div className="grid md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Palette size={16} className="text-primary" />
              </div>
              <span className="font-medium">19 Estilos</span>
            </div>
            <p className="text-sm text-muted-foreground">
              De Premium Minimalista a Cyberpunk Neon
            </p>
          </div>
          <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Download size={16} className="text-secondary" />
              </div>
              <span className="font-medium">CSS Pronto</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Copie as variáveis e estilos para seu projeto
            </p>
          </div>
          <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-neon-cyan/20 flex items-center justify-center">
                <Info size={16} className="text-neon-cyan" />
              </div>
              <span className="font-medium">Guia Completo</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Tipografia, ícones, layout e objetivo de cada estilo
            </p>
          </div>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
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
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStyles.map((style, index) => (
            <StyleCard key={style.id} style={style} index={index} />
          ))}
        </div>

        {/* Golden Rule */}
        <div className="mt-16 max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
          <div className="text-4xl mb-4">💎</div>
          <h3 className="text-xl font-bold mb-2 text-amber-400">Regra de Ouro</h3>
          <p className="text-muted-foreground italic text-lg">
            "Layout muda com frequência. Ícone bom dura anos."
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Se o icon set estiver sólido, você pode trocar cores, tipografia e layout sem perder identidade.
          </p>
        </div>
      </main>
    </div>
  );
}
