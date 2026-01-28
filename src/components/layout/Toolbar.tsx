import { Download, Heart } from "lucide-react";
import { SearchBar } from "@/components/filters/SearchBar";
import { ViewModeToggle } from "@/components/layout/ViewModeToggle";
import { ExportModal } from "@/components/features/ExportModal";
import { Button } from "@/components/ui/button";
import { ViewMode } from "@/hooks/useViewMode";
import { useFavorites } from "@/providers/FavoritesProvider";
import { Animation } from "@/data/animations";
import { Effect } from "@/data/effects";
import { ButtonAnimation } from "@/data/buttons";

interface ToolbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  resultCount: number;
  totalCount: number;
  animations: Animation[];
  effects: Effect[];
  buttons: ButtonAnimation[];
  showFavoritesOnly: boolean;
  onToggleFavoritesOnly: () => void;
}

export function Toolbar({
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  resultCount,
  totalCount,
  animations,
  effects,
  buttons,
  showFavoritesOnly,
  onToggleFavoritesOnly,
}: ToolbarProps) {
  const { favoritesCount } = useFavorites();

  return (
    <div className="space-y-4 mb-8">
      {/* Search Bar */}
      <SearchBar
        value={searchQuery}
        onChange={onSearchChange}
        resultCount={searchQuery ? resultCount : undefined}
        totalCount={searchQuery ? totalCount : undefined}
      />

      {/* Controls Row */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {/* Favorites Toggle */}
        <Button
          variant={showFavoritesOnly ? "default" : "outline"}
          size="sm"
          onClick={onToggleFavoritesOnly}
          className="gap-2"
        >
          <Heart size={16} className={showFavoritesOnly ? "fill-current" : ""} />
          Favoritos
          {favoritesCount > 0 && (
            <span className="ml-1 px-1.5 py-0.5 text-xs bg-primary-foreground/20 rounded-full">
              {favoritesCount}
            </span>
          )}
        </Button>

        {/* View Mode Toggle */}
        <ViewModeToggle viewMode={viewMode} onViewModeChange={onViewModeChange} />

        {/* Export Modal */}
        <ExportModal
          animations={animations}
          effects={effects}
          buttons={buttons}
          trigger={
            <Button variant="outline" size="sm" className="gap-2">
              <Download size={16} />
              Exportar
            </Button>
          }
        />
      </div>
    </div>
  );
}
