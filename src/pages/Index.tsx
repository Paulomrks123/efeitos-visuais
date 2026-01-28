import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { LibraryToggle } from "@/components/LibraryToggle";
import { CategoryFilter } from "@/components/CategoryFilter";
import { EffectCategoryFilter } from "@/components/EffectCategoryFilter";
import ButtonCategoryFilter from "@/components/ButtonCategoryFilter";
import { AnimationCardWithPlayground } from "@/components/cards/AnimationCardWithPlayground";
import { EffectCardWithPlayground } from "@/components/cards/EffectCardWithPlayground";
import { ButtonCardWithPlayground } from "@/components/cards/ButtonCardWithPlayground";
import { Toolbar } from "@/components/layout/Toolbar";
import { animations } from "@/data/animations";
import { effects } from "@/data/effects";
import { buttonAnimations, ButtonCategory } from "@/data/buttons";
import { useFavorites } from "@/providers/FavoritesProvider";
import { useViewMode } from "@/hooks/useViewMode";

const Index = () => {
  const [activeLibrary, setActiveLibrary] = useState<"animations" | "effects" | "buttons">("animations");
  const [animationCategory, setAnimationCategory] = useState("all");
  const [effectCategory, setEffectCategory] = useState("all");
  const [buttonCategory, setButtonCategory] = useState<ButtonCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const { isFavorite } = useFavorites();
  const { viewMode, setViewMode, config } = useViewMode();

  // Filter animations
  const filteredAnimations = useMemo(() => {
    let result = animations;

    // Category filter
    if (animationCategory !== "all") {
      result = result.filter((anim) => anim.category === animationCategory);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (anim) =>
          anim.name.toLowerCase().includes(query) ||
          anim.description.toLowerCase().includes(query) ||
          anim.category.toLowerCase().includes(query) ||
          anim.id.toLowerCase().includes(query)
      );
    }

    // Favorites filter
    if (showFavoritesOnly) {
      result = result.filter((anim) => isFavorite(anim.id));
    }

    return result;
  }, [animationCategory, searchQuery, showFavoritesOnly, isFavorite]);

  // Filter effects
  const filteredEffects = useMemo(() => {
    let result = effects;

    if (effectCategory !== "all") {
      result = result.filter((effect) => effect.category === effectCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (effect) =>
          effect.name.toLowerCase().includes(query) ||
          effect.description.toLowerCase().includes(query) ||
          effect.category.toLowerCase().includes(query) ||
          effect.id.toLowerCase().includes(query)
      );
    }

    if (showFavoritesOnly) {
      result = result.filter((effect) => isFavorite(effect.id));
    }

    return result;
  }, [effectCategory, searchQuery, showFavoritesOnly, isFavorite]);

  // Filter buttons
  const filteredButtons = useMemo(() => {
    let result = buttonAnimations;

    if (buttonCategory !== "all") {
      result = result.filter((btn) => btn.category === buttonCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (btn) =>
          btn.name.toLowerCase().includes(query) ||
          btn.description.toLowerCase().includes(query) ||
          btn.category.toLowerCase().includes(query) ||
          btn.id.toLowerCase().includes(query)
      );
    }

    if (showFavoritesOnly) {
      result = result.filter((btn) => isFavorite(btn.id));
    }

    return result;
  }, [buttonCategory, searchQuery, showFavoritesOnly, isFavorite]);

  // Get current counts
  const getCurrentResults = () => {
    if (activeLibrary === "animations") return filteredAnimations;
    if (activeLibrary === "effects") return filteredEffects;
    return filteredButtons;
  };

  const getTotalItems = () => {
    if (activeLibrary === "animations") return animations.length;
    if (activeLibrary === "effects") return effects.length;
    return buttonAnimations.length;
  };

  const isCompact = viewMode === "compact";

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

          {/* Toolbar with Search, View Mode, Export */}
          <Toolbar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            resultCount={getCurrentResults().length}
            totalCount={getTotalItems()}
            animations={filteredAnimations}
            effects={filteredEffects}
            buttons={filteredButtons}
            showFavoritesOnly={showFavoritesOnly}
            onToggleFavoritesOnly={() => setShowFavoritesOnly(!showFavoritesOnly)}
          />

          {activeLibrary === "animations" && (
            <>
              <CategoryFilter 
                activeCategory={animationCategory} 
                onCategoryChange={setAnimationCategory} 
              />
              
              <div className="mb-8 text-center">
                <p className="text-muted-foreground">
                  Mostrando <span className="text-primary font-semibold">{filteredAnimations.length}</span> animações
                  {showFavoritesOnly && " (favoritos)"}
                </p>
              </div>

              <div className={`grid ${config.gridCols} gap-6`}>
                {filteredAnimations.map((animation) => (
                  <AnimationCardWithPlayground key={animation.id} animation={animation} isCompact={isCompact} />
                ))}
              </div>

              {filteredAnimations.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">Nenhuma animação encontrada</p>
                  <p className="text-muted-foreground/60 text-sm mt-2">
                    Tente ajustar os filtros ou termos de busca
                  </p>
                </div>
              )}
            </>
          )}

          {activeLibrary === "effects" && (
            <>
              <EffectCategoryFilter 
                activeCategory={effectCategory} 
                onCategoryChange={setEffectCategory} 
              />
              
              <div className="mb-8 text-center">
                <p className="text-muted-foreground">
                  Mostrando <span className="text-secondary font-semibold">{filteredEffects.length}</span> efeitos visuais
                  {showFavoritesOnly && " (favoritos)"}
                </p>
              </div>

              <div className={`grid ${config.gridCols} gap-6`}>
                {filteredEffects.map((effect) => (
                  <EffectCardWithPlayground key={effect.id} effect={effect} isCompact={isCompact} />
                ))}
              </div>

              {filteredEffects.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">Nenhum efeito encontrado</p>
                  <p className="text-muted-foreground/60 text-sm mt-2">
                    Tente ajustar os filtros ou termos de busca
                  </p>
                </div>
              )}
            </>
          )}

          {activeLibrary === "buttons" && (
            <>
              <ButtonCategoryFilter 
                activeCategory={buttonCategory} 
                onCategoryChange={setButtonCategory} 
              />
              
              <div className="mb-8 text-center">
                <p className="text-muted-foreground">
                  Mostrando <span className="text-neon-cyan font-semibold">{filteredButtons.length}</span> animações de botões
                  {showFavoritesOnly && " (favoritos)"}
                </p>
              </div>

              <div className={`grid ${config.gridCols} gap-6`}>
                {filteredButtons.map((button) => (
                  <ButtonCardWithPlayground key={button.id} button={button} isCompact={isCompact} />
                ))}
              </div>

              {filteredButtons.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">Nenhum botão encontrado</p>
                  <p className="text-muted-foreground/60 text-sm mt-2">
                    Tente ajustar os filtros ou termos de busca
                  </p>
                </div>
              )}
            </>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-border py-8 text-center">
          <p className="text-sm text-muted-foreground">
            Biblioteca de {animations.length + effects.length + buttonAnimations.length} Animações, Efeitos Visuais e Botões Profissionais
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
