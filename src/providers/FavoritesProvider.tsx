import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

type FavoriteType = "animation" | "effect" | "button";

interface FavoriteItem {
  id: string;
  type: FavoriteType;
  addedAt: number;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  addFavorite: (id: string, type: FavoriteType) => void;
  removeFavorite: (id: string) => void;
  toggleFavorite: (id: string, type: FavoriteType) => void;
  isFavorite: (id: string) => boolean;
  getFavoritesByType: (type: FavoriteType) => string[];
  clearAllFavorites: () => void;
  favoritesCount: number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

const STORAGE_KEY = "animation-library-favorites";

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Error loading favorites:", error);
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error("Error saving favorites:", error);
    }
  }, [favorites]);

  const addFavorite = useCallback((id: string, type: FavoriteType) => {
    setFavorites((prev) => {
      if (prev.some((f) => f.id === id)) return prev;
      return [...prev, { id, type, addedAt: Date.now() }];
    });
  }, []);

  const removeFavorite = useCallback((id: string) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  }, []);

  const toggleFavorite = useCallback((id: string, type: FavoriteType) => {
    setFavorites((prev) => {
      const exists = prev.some((f) => f.id === id);
      if (exists) {
        return prev.filter((f) => f.id !== id);
      }
      return [...prev, { id, type, addedAt: Date.now() }];
    });
  }, []);

  const isFavorite = useCallback(
    (id: string) => favorites.some((f) => f.id === id),
    [favorites]
  );

  const getFavoritesByType = useCallback(
    (type: FavoriteType) => favorites.filter((f) => f.type === type).map((f) => f.id),
    [favorites]
  );

  const clearAllFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
        getFavoritesByType,
        clearAllFavorites,
        favoritesCount: favorites.length,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
