import { useState, useMemo, useCallback } from "react";
import { Animation } from "@/data/animations";
import { Effect } from "@/data/effects";
import { ButtonAnimation } from "@/data/buttons";

type SearchableItem = Animation | Effect | ButtonAnimation;

interface UseSearchOptions<T> {
  items: T[];
  searchFields: (keyof T)[];
  initialQuery?: string;
}

interface UseSearchReturn<T> {
  query: string;
  setQuery: (query: string) => void;
  results: T[];
  isSearching: boolean;
  resultCount: number;
  clearSearch: () => void;
}

export function useSearch<T extends SearchableItem>({
  items,
  searchFields,
  initialQuery = "",
}: UseSearchOptions<T>): UseSearchReturn<T> {
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    if (!query.trim()) return items;

    const normalizedQuery = query.toLowerCase().trim();
    const queryWords = normalizedQuery.split(/\s+/);

    return items.filter((item) => {
      const searchText = searchFields
        .map((field) => {
          const value = item[field];
          if (typeof value === "string") return value.toLowerCase();
          if (Array.isArray(value)) return value.join(" ").toLowerCase();
          return "";
        })
        .join(" ");

      // All query words must match somewhere in the search text
      return queryWords.every((word) => searchText.includes(word));
    });
  }, [items, query, searchFields]);

  const clearSearch = useCallback(() => {
    setQuery("");
  }, []);

  return {
    query,
    setQuery,
    results,
    isSearching: query.length > 0,
    resultCount: results.length,
    clearSearch,
  };
}

// Global search across all libraries
export function useGlobalSearch(
  animations: Animation[],
  effects: Effect[],
  buttons: ButtonAnimation[]
) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) {
      return {
        animations: [],
        effects: [],
        buttons: [],
        total: 0,
      };
    }

    const normalizedQuery = query.toLowerCase().trim();

    const matchedAnimations = animations.filter(
      (a) =>
        a.name.toLowerCase().includes(normalizedQuery) ||
        a.description.toLowerCase().includes(normalizedQuery) ||
        a.category.toLowerCase().includes(normalizedQuery)
    );

    const matchedEffects = effects.filter(
      (e) =>
        e.name.toLowerCase().includes(normalizedQuery) ||
        e.description.toLowerCase().includes(normalizedQuery) ||
        e.category.toLowerCase().includes(normalizedQuery)
    );

    const matchedButtons = buttons.filter(
      (b) =>
        b.name.toLowerCase().includes(normalizedQuery) ||
        b.description.toLowerCase().includes(normalizedQuery) ||
        b.category.toLowerCase().includes(normalizedQuery)
    );

    return {
      animations: matchedAnimations,
      effects: matchedEffects,
      buttons: matchedButtons,
      total: matchedAnimations.length + matchedEffects.length + matchedButtons.length,
    };
  }, [animations, effects, buttons, query]);

  const clearSearch = useCallback(() => {
    setQuery("");
  }, []);

  return {
    query,
    setQuery,
    results,
    isSearching: query.length > 0,
    clearSearch,
  };
}
