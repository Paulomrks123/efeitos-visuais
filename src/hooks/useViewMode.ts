import { useState, useEffect } from "react";

export type ViewMode = "grid" | "compact" | "list";

interface ViewModeConfig {
  gridCols: string;
  cardSize: "normal" | "compact" | "expanded";
  showCode: boolean;
  showDescription: boolean;
}

const viewModeConfigs: Record<ViewMode, ViewModeConfig> = {
  grid: {
    gridCols: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
    cardSize: "normal",
    showCode: true,
    showDescription: true,
  },
  compact: {
    gridCols: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
    cardSize: "compact",
    showCode: false,
    showDescription: false,
  },
  list: {
    gridCols: "grid-cols-1 max-w-4xl mx-auto",
    cardSize: "expanded",
    showCode: true,
    showDescription: true,
  },
};

const STORAGE_KEY = "animation-library-view-mode";

export function useViewMode() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ViewMode | null;
      if (stored && ["grid", "compact", "list"].includes(stored)) {
        setViewMode(stored);
      }
    } catch (error) {
      console.error("Error loading view mode:", error);
    }
  }, []);

  // Save to localStorage whenever it changes
  const changeViewMode = (mode: ViewMode) => {
    setViewMode(mode);
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch (error) {
      console.error("Error saving view mode:", error);
    }
  };

  const config = viewModeConfigs[viewMode];

  return {
    viewMode,
    setViewMode: changeViewMode,
    config,
    isCompact: viewMode === "compact",
    isList: viewMode === "list",
    isGrid: viewMode === "grid",
  };
}
