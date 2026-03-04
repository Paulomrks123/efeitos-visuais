import { useState, useMemo, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { LibraryToggle } from "@/components/LibraryToggle";
import { HeroSection } from "@/components/layout/HeroSection";
import { LibrarySection } from "@/components/layout/LibrarySection";
import { animations } from "@/data/animations";
import { effects } from "@/data/effects";
import { buttonAnimations, ButtonCategory } from "@/data/buttons";
import { useFavorites } from "@/providers/FavoritesProvider";
import { useViewMode } from "@/hooks/useViewMode";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const librarySectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToLibrary = () => {
    librarySectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [activeLibrary, setActiveLibrary] = useState<"animations" | "effects" | "buttons">("animations");
  const [animationCategory, setAnimationCategory] = useState("all");
  const [effectCategory, setEffectCategory] = useState("all");
  const [buttonCategory, setButtonCategory] = useState<ButtonCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const { isFavorite } = useFavorites();
  const { viewMode, setViewMode, config } = useViewMode();

  const handleLibraryChange = (library: "animations" | "effects" | "buttons") => {
    setActiveLibrary(library);
    setTimeout(() => scrollToLibrary(), 100);
  };

  // Filter animations
  const filteredAnimations = useMemo(() => {
    let result = animations;

    if (animationCategory !== "all") {
      result = result.filter((anim) => anim.category === animationCategory);
    }

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

  const isCompact = viewMode === "compact";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection
        onLibraryChange={handleLibraryChange}
        animationsCount={animations.length}
        effectsCount={effects.length}
        buttonsCount={buttonAnimations.length}
      />

      {/* Library Content */}
      <div ref={librarySectionRef}>
        <div className="container mx-auto px-2 sm:px-4 pb-8">
          <LibraryToggle
            activeLibrary={activeLibrary}
            onToggle={setActiveLibrary}
          />
        </div>

        <LibrarySection
          activeLibrary={activeLibrary}
          animationCategory={animationCategory}
          effectCategory={effectCategory}
          buttonCategory={buttonCategory}
          onAnimationCategoryChange={setAnimationCategory}
          onEffectCategoryChange={setEffectCategory}
          onButtonCategoryChange={setButtonCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          showFavoritesOnly={showFavoritesOnly}
          onToggleFavoritesOnly={() => setShowFavoritesOnly(!showFavoritesOnly)}
          filteredAnimations={filteredAnimations}
          filteredEffects={filteredEffects}
          filteredButtons={filteredButtons}
          totalAnimations={animations.length}
          totalEffects={effects.length}
          totalButtons={buttonAnimations.length}
          gridCols={config.gridCols}
          isCompact={isCompact}
        />
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-12 text-center bg-card/30">
        <div className="container mx-auto px-4">
          <p className="text-lg font-medium text-foreground mb-2">
            Biblioteca Virtual
          </p>
          <p className="text-sm text-muted-foreground">
            {animations.length + effects.length + buttonAnimations.length} Animações, Efeitos Visuais e Botões Profissionais
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            CSS puro & Tailwind CSS • Copie e use em seus projetos
          </p>
        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-4 sm:bottom-8 sm:right-8 p-3 sm:p-4 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 z-50 hover:scale-110 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        style={{
          boxShadow: "0 0 20px hsl(var(--primary) / 0.5), 0 4px 20px rgba(0,0,0,0.3)",
        }}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default Index;
