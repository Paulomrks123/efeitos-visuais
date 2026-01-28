import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="py-16 px-4 text-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Sparkles className="w-4 h-4 text-primary animate-neon-pulse" />
          <span className="text-sm text-primary font-medium">80 Animações Profissionais</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
          Biblioteca de Animações
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Coleção completa de animações CSS modernas e profissionais. 
          Copie o código e use diretamente em seus projetos.
        </p>

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
      </div>
    </header>
  );
}
