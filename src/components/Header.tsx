import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Palette } from "lucide-react";
interface HeaderProps {
  activeLibrary: "animations" | "effects" | "buttons";
}

export function Header({ activeLibrary }: HeaderProps) {
  const isAnimations = activeLibrary === "animations";
  const isEffects = activeLibrary === "effects";
  const isButtons = activeLibrary === "buttons";

  const getTitle = () => {
    if (isAnimations) return ["Biblioteca", "Virtual"];
    if (isEffects) return "Biblioteca de Efeitos";
    return "Biblioteca de Botões";
  };

  const title = getTitle();
  const animationLines = isAnimations ? (title as string[]) : null;
  
  return (
    <header className="py-12 px-4 text-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {isAnimations && animationLines ? (
          <div className="mb-4">
            {animationLines.map((line, lineIndex) => (
              <h1 key={lineIndex} className="liquid-rainbow justify-center">
                {line.split('').map((letter, index) => (
                  <span key={index} style={{ '--i': index + 1 } as React.CSSProperties}>
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </h1>
            ))}
          </div>
        ) : (
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title as string}
          </h1>
        )}
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          {isAnimations 
            ? "Coleção completa de animações CSS modernas e profissionais. Copie o código e use diretamente em seus projetos."
            : isEffects
            ? "Coleção de efeitos visuais modernos incluindo Glassmorphism, Neumorphism, Filtros e Gradientes dinâmicos."
            : "Coleção de 60 animações Scale e Pulse para botões promocionais. Perfeito para CTAs e botões de WhatsApp."
          }
        </p>

        {isAnimations && (
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30">
              <div className="w-2 h-2 rounded-full bg-neon-cyan animate-neon-pulse" />
              <span className="text-sm text-neon-cyan">Futurista</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-green/10 border border-neon-green/30">
              <div className="w-2 h-2 rounded-full bg-neon-green" />
              <span className="text-sm text-neon-green">Moderno</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-purple/10 border border-neon-purple/30">
              <div className="w-2 h-2 rounded-full bg-neon-purple" />
              <span className="text-sm text-neon-purple">Estiloso</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-magenta/10 border border-neon-magenta/30">
              <div className="w-2 h-2 rounded-full bg-neon-magenta" />
              <span className="text-sm text-neon-magenta">Colorido</span>
            </div>
          </div>
        )}

        {isEffects && (
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30">
              <div className="w-2 h-2 rounded-full bg-neon-cyan animate-neon-pulse" />
              <span className="text-sm text-neon-cyan">Glassmorphism</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-green/10 border border-neon-green/30">
              <div className="w-2 h-2 rounded-full bg-neon-green" />
              <span className="text-sm text-neon-green">Neumorphism</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-purple/10 border border-neon-purple/30">
              <div className="w-2 h-2 rounded-full bg-neon-purple" />
              <span className="text-sm text-neon-purple">Filtros</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-magenta/10 border border-neon-magenta/30">
              <div className="w-2 h-2 rounded-full bg-neon-magenta" />
              <span className="text-sm text-neon-magenta">Gradientes</span>
            </div>
          </div>
        )}

        {isButtons && (
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30">
              <div className="w-2 h-2 rounded-full bg-neon-cyan animate-neon-pulse" />
              <span className="text-sm text-neon-cyan">Scale (30)</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-magenta/10 border border-neon-magenta/30">
              <div className="w-2 h-2 rounded-full bg-neon-magenta animate-neon-pulse" />
              <span className="text-sm text-neon-magenta">Pulse (30)</span>
            </div>
          </div>
        )}

        {/* Link to Showcase */}
        <Link 
          to="/showcase" 
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 hover:border-primary/60 text-foreground transition-all hover:scale-105"
        >
          <Palette size={18} className="text-primary" />
          <span className="font-medium">Ver Showcase de Estilos de Design</span>
        </Link>
      </div>
    </header>
  );
}
