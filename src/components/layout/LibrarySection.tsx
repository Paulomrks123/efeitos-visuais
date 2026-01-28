import { motion } from "framer-motion";
import { CategoryFilter } from "@/components/CategoryFilter";
import { EffectCategoryFilter } from "@/components/EffectCategoryFilter";
import ButtonCategoryFilter from "@/components/ButtonCategoryFilter";
import { AnimationCardWithPlayground } from "@/components/cards/AnimationCardWithPlayground";
import { EffectCardWithPlayground } from "@/components/cards/EffectCardWithPlayground";
import { ButtonCardWithPlayground } from "@/components/cards/ButtonCardWithPlayground";
import { Toolbar } from "@/components/layout/Toolbar";
import { ButtonCategory } from "@/data/buttons";
import { ViewMode } from "@/hooks/useViewMode";

interface LibrarySectionProps {
  activeLibrary: "animations" | "effects" | "buttons";
  animationCategory: string;
  effectCategory: string;
  buttonCategory: ButtonCategory | "all";
  onAnimationCategoryChange: (category: string) => void;
  onEffectCategoryChange: (category: string) => void;
  onButtonCategoryChange: (category: ButtonCategory | "all") => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  showFavoritesOnly: boolean;
  onToggleFavoritesOnly: () => void;
  filteredAnimations: any[];
  filteredEffects: any[];
  filteredButtons: any[];
  totalAnimations: number;
  totalEffects: number;
  totalButtons: number;
  gridCols: string;
  isCompact: boolean;
}

export function LibrarySection({
  activeLibrary,
  animationCategory,
  effectCategory,
  buttonCategory,
  onAnimationCategoryChange,
  onEffectCategoryChange,
  onButtonCategoryChange,
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  showFavoritesOnly,
  onToggleFavoritesOnly,
  filteredAnimations,
  filteredEffects,
  filteredButtons,
  totalAnimations,
  totalEffects,
  totalButtons,
  gridCols,
  isCompact,
}: LibrarySectionProps) {
  const getCurrentResults = () => {
    if (activeLibrary === "animations") return filteredAnimations;
    if (activeLibrary === "effects") return filteredEffects;
    return filteredButtons;
  };

  const getTotalItems = () => {
    if (activeLibrary === "animations") return totalAnimations;
    if (activeLibrary === "effects") return totalEffects;
    return totalButtons;
  };

  const getLibraryTitle = () => {
    if (activeLibrary === "animations") return "Animações CSS";
    if (activeLibrary === "effects") return "Efeitos Visuais";
    return "Botões Animados";
  };

  const getLibraryColor = () => {
    if (activeLibrary === "animations") return "text-primary";
    if (activeLibrary === "effects") return "text-secondary";
    return "text-neon-green";
  };

  return (
    <section id="library-section" className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${getLibraryColor()} mb-4`}>
            {getLibraryTitle()}
          </h2>
        </motion.div>

        {/* Toolbar */}
        <Toolbar
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          viewMode={viewMode}
          onViewModeChange={onViewModeChange}
          resultCount={getCurrentResults().length}
          totalCount={getTotalItems()}
          animations={filteredAnimations}
          effects={filteredEffects}
          buttons={filteredButtons}
          showFavoritesOnly={showFavoritesOnly}
          onToggleFavoritesOnly={onToggleFavoritesOnly}
        />

        {/* Category Filters */}
        {activeLibrary === "animations" && (
          <CategoryFilter
            activeCategory={animationCategory}
            onCategoryChange={onAnimationCategoryChange}
          />
        )}
        {activeLibrary === "effects" && (
          <EffectCategoryFilter
            activeCategory={effectCategory}
            onCategoryChange={onEffectCategoryChange}
          />
        )}
        {activeLibrary === "buttons" && (
          <ButtonCategoryFilter
            activeCategory={buttonCategory}
            onCategoryChange={onButtonCategoryChange}
          />
        )}

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-muted-foreground">
            Mostrando{" "}
            <span className={`${getLibraryColor()} font-semibold`}>
              {getCurrentResults().length}
            </span>{" "}
            {activeLibrary === "animations" && "animações"}
            {activeLibrary === "effects" && "efeitos visuais"}
            {activeLibrary === "buttons" && "botões"}
            {showFavoritesOnly && " (favoritos)"}
          </p>
        </div>

        {/* Grid */}
        <div className={`grid ${gridCols} gap-6`}>
          {activeLibrary === "animations" &&
            filteredAnimations.map((animation, index) => (
              <AnimationCardWithPlayground
                key={animation.id}
                animation={animation}
                isCompact={isCompact}
                index={index + 1}
              />
            ))}
          {activeLibrary === "effects" &&
            filteredEffects.map((effect, index) => (
              <EffectCardWithPlayground
                key={effect.id}
                effect={effect}
                isCompact={isCompact}
                index={index + 1}
              />
            ))}
          {activeLibrary === "buttons" &&
            filteredButtons.map((button, index) => (
              <ButtonCardWithPlayground
                key={button.id}
                button={button}
                isCompact={isCompact}
                index={index + 1}
              />
            ))}
        </div>

        {/* Empty State */}
        {getCurrentResults().length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Nenhum item encontrado
            </p>
            <p className="text-muted-foreground/60 text-sm mt-2">
              Tente ajustar os filtros ou termos de busca
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
