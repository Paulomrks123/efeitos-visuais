import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { LibraryToggle } from "@/components/LibraryToggle";
import { CategoryFilter } from "@/components/CategoryFilter";
import { EffectCategoryFilter } from "@/components/EffectCategoryFilter";
import { AnimationCard } from "@/components/AnimationCard";
import { EffectCard } from "@/components/EffectCard";
import { animations } from "@/data/animations";
import { effects } from "@/data/effects";

const Index = () => {
  const [activeLibrary, setActiveLibrary] = useState<"animations" | "effects">("animations");
  const [animationCategory, setAnimationCategory] = useState("all");
  const [effectCategory, setEffectCategory] = useState("all");

  const filteredAnimations = useMemo(() => {
    if (animationCategory === "all") return animations;
    return animations.filter((anim) => anim.category === animationCategory);
  }, [animationCategory]);

  const filteredEffects = useMemo(() => {
    if (effectCategory === "all") return effects;
    return effects.filter((effect) => effect.category === effectCategory);
  }, [effectCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Decorative grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      <div className="relative z-10">
        <Header activeLibrary={activeLibrary} />
        
        <main className="container mx-auto px-4 pb-20">
          <LibraryToggle 
            activeLibrary={activeLibrary} 
            onToggle={setActiveLibrary} 
          />

          {activeLibrary === "animations" ? (
            <>
              <CategoryFilter 
                activeCategory={animationCategory} 
                onCategoryChange={setAnimationCategory} 
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
            </>
          ) : (
            <>
              <EffectCategoryFilter 
                activeCategory={effectCategory} 
                onCategoryChange={setEffectCategory} 
              />
              
              <div className="mb-8 text-center">
                <p className="text-muted-foreground">
                  Mostrando <span className="text-secondary font-semibold">{filteredEffects.length}</span> efeitos visuais
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredEffects.map((effect) => (
                  <EffectCard key={effect.id} effect={effect} />
                ))}
              </div>
            </>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-border py-8 text-center">
          <p className="text-sm text-muted-foreground">
            Biblioteca de 160 Animações e Efeitos Visuais Profissionais
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
