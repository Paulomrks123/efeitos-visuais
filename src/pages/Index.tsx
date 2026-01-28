import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { CategoryFilter } from "@/components/CategoryFilter";
import { AnimationCard } from "@/components/AnimationCard";
import { animations } from "@/data/animations";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredAnimations = useMemo(() => {
    if (activeCategory === "all") return animations;
    return animations.filter((anim) => anim.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Decorative grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 pb-20">
          <CategoryFilter 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
          
          <div className="mb-8 text-center">
            <p className="text-muted-foreground">
              Mostrando <span className="text-primary font-semibold">{filteredAnimations.length}</span> animações
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredAnimations.map((animation) => (
              <AnimationCard key={animation.id} animation={animation} />
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border py-8 text-center">
          <p className="text-sm text-muted-foreground">
            Biblioteca de 80 Animações Modernas e Profissionais
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            CSS puro & Tailwind CSS • Copie e use em seus projetos
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
