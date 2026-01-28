import { Heart } from "lucide-react";
import { useFavorites } from "@/providers/FavoritesProvider";

interface FavoriteButtonProps {
  id: string;
  type: "animation" | "effect" | "button";
  size?: "sm" | "md";
  className?: string;
}

export function FavoriteButton({ id, type, size = "md", className = "" }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = isFavorite(id);

  const sizeClasses = {
    sm: "p-1.5",
    md: "p-2",
  };

  const iconSizes = {
    sm: 14,
    md: 16,
  };

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite(id, type);
      }}
      className={`
        ${sizeClasses[size]}
        rounded-lg transition-all duration-200
        ${isFav
          ? "bg-red-500/20 text-red-500 hover:bg-red-500/30"
          : "bg-muted/50 text-muted-foreground hover:text-red-400 hover:bg-muted"
        }
        ${className}
      `}
      title={isFav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      <Heart
        size={iconSizes[size]}
        className={isFav ? "fill-current" : ""}
      />
    </button>
  );
}
