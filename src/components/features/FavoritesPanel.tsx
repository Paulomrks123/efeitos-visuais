import { useState } from "react";
import { X, Star, Sparkles, Layers, MousePointerClick, Trash2, Download, Type } from "lucide-react";
import { useFavorites } from "@/providers/FavoritesProvider";
import { animations } from "@/data/animations";
import { effects } from "@/data/effects";
import { buttonAnimations } from "@/data/buttons";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

interface FavoritesPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = "all" | "animation" | "effect" | "texteffect" | "button";

interface FavoritesPanelPropsInternal {
  onClose: () => void;
}

export function FavoritesPanel({ isOpen, onClose }: FavoritesPanelProps) {
  const { favorites, getFavoritesByType, removeFavorite, clearAllFavorites } = useFavorites();
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const favoriteAnimations = getFavoritesByType("animation");
  const favoriteEffects = getFavoritesByType("effect");
  const favoriteButtons = getFavoritesByType("button");

  // Separate text effects from other effects
  const favoriteTextEffects = favoriteEffects.filter(id => id.startsWith("T-"));
  const favoriteVisualEffects = favoriteEffects.filter(id => !id.startsWith("T-"));

  const getAnimationById = (id: string) => animations.find(a => a.id === id);
  const getEffectById = (id: string) => effects.find(e => e.id === id);
  const getButtonById = (id: string) => buttonAnimations.find(b => b.id === id);

  const exportFavorites = () => {
    const exportData = {
      animations: favoriteAnimations.map(id => getAnimationById(id)).filter(Boolean),
      effects: favoriteEffects.map(id => getEffectById(id)).filter(Boolean),
      buttons: favoriteButtons.map(id => getButtonById(id)).filter(Boolean),
    };

    const cssCode = [
      "/* === FAVORITOS EXPORTADOS ===*/",
      "",
      "/* ANIMAÇÕES */",
      ...exportData.animations.map(a => a?.cssCode || ""),
      "",
      "/* EFEITOS */",
      ...exportData.effects.map(e => e?.cssCode || ""),
      "",
      "/* BOTÕES */",
      ...exportData.buttons.map(b => b?.cssCode || ""),
    ].join("\n\n");

    navigator.clipboard.writeText(cssCode);
    toast.success("Todos os favoritos copiados para a área de transferência!");
  };

  const renderFavoriteItem = (
    id: string,
    name: string,
    type: "animation" | "effect" | "button",
    color: string,
    category?: string
  ) => (
    <div
      key={id}
      className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
    >
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${color}33`, border: `1px solid ${color}66` }}
        >
          <span className="text-xs font-bold" style={{ color }}>{id.split("-")[0]}</span>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">
            {type === "animation" ? "Animação" : type === "effect" ? "Efeito" : "Botão"}
            {category && ` • ${category}`}
          </p>
        </div>
      </div>
      <button
        onClick={() => removeFavorite(id)}
        className="p-1.5 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-destructive/20 text-destructive transition-all"
        title="Remover dos favoritos"
      >
        <X size={14} />
      </button>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            Meus Favoritos
            <span className="text-sm font-normal text-muted-foreground ml-2">
              ({favorites.length} itens)
            </span>
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as typeof activeTab)} className="mt-2">
          <TabsList className="grid w-full grid-cols-5 bg-muted/50">
            <TabsTrigger value="all" className="text-xs">
              Todos ({favorites.length})
            </TabsTrigger>
            <TabsTrigger value="animation" className="text-xs">
              <Sparkles className="w-3 h-3 mr-1" />
              ({favoriteAnimations.length})
            </TabsTrigger>
            <TabsTrigger value="effect" className="text-xs">
              <Layers className="w-3 h-3 mr-1" />
              ({favoriteVisualEffects.length})
            </TabsTrigger>
            <TabsTrigger value="texteffect" className="text-xs">
              <Type className="w-3 h-3 mr-1" />
              ({favoriteTextEffects.length})
            </TabsTrigger>
            <TabsTrigger value="button" className="text-xs">
              <MousePointerClick className="w-3 h-3 mr-1" />
              ({favoriteButtons.length})
            </TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[400px] mt-4 pr-4">
            {/* All Favorites */}
            <TabsContent value="all" className="space-y-4 m-0">
              {favorites.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Star className="w-12 h-12 mx-auto mb-4 opacity-30" />
                  <p>Nenhum favorito ainda</p>
                  <p className="text-sm">Clique no ⭐ para adicionar itens aos favoritos</p>
                </div>
              ) : (
                <>
                  {favoriteAnimations.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-neon-cyan mb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Animações ({favoriteAnimations.length})
                      </h3>
                      <div className="space-y-2">
                        {favoriteAnimations.map(id => {
                          const anim = getAnimationById(id);
                          if (!anim) return null;
                          return renderFavoriteItem(id, anim.name, "animation", anim.previewColor || "#00FFFF", anim.category);
                        })}
                      </div>
                    </div>
                  )}

                  {favoriteVisualEffects.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-neon-purple mb-2 flex items-center gap-2">
                        <Layers className="w-4 h-4" />
                        Efeitos Visuais ({favoriteVisualEffects.length})
                      </h3>
                      <div className="space-y-2">
                        {favoriteVisualEffects.map(id => {
                          const effect = getEffectById(id);
                          if (!effect) return null;
                          return renderFavoriteItem(id, effect.name, "effect", effect.previewColor || "#FF00FF", effect.category);
                        })}
                      </div>
                    </div>
                  )}

                  {favoriteTextEffects.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-neon-magenta mb-2 flex items-center gap-2">
                        <Type className="w-4 h-4" />
                        Efeitos de Texto ({favoriteTextEffects.length})
                      </h3>
                      <div className="space-y-2">
                        {favoriteTextEffects.map(id => {
                          const effect = getEffectById(id);
                          if (!effect) return null;
                          return renderFavoriteItem(id, effect.name, "effect", effect.previewColor || "#FF1493", "text");
                        })}
                      </div>
                    </div>
                  )}

                  {favoriteButtons.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-neon-green mb-2 flex items-center gap-2">
                        <MousePointerClick className="w-4 h-4" />
                        Botões ({favoriteButtons.length})
                      </h3>
                      <div className="space-y-2">
                        {favoriteButtons.map(id => {
                          const btn = getButtonById(id);
                          if (!btn) return null;
                          return renderFavoriteItem(id, btn.name, "button", btn.previewColor || "#00FF00", btn.category);
                        })}
                      </div>
                    </div>
                  )}
                </>
              )}
            </TabsContent>

            {/* Animations */}
            <TabsContent value="animation" className="space-y-2 m-0">
              {favoriteAnimations.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Sparkles className="w-8 h-8 mx-auto mb-2 opacity-30" />
                  <p className="text-sm">Nenhuma animação favorita</p>
                </div>
              ) : (
                favoriteAnimations.map(id => {
                  const anim = getAnimationById(id);
                  if (!anim) return null;
                  return renderFavoriteItem(id, anim.name, "animation", anim.previewColor || "#00FFFF", anim.category);
                })
              )}
            </TabsContent>

            {/* Visual Effects */}
            <TabsContent value="effect" className="space-y-2 m-0">
              {favoriteVisualEffects.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Layers className="w-8 h-8 mx-auto mb-2 opacity-30" />
                  <p className="text-sm">Nenhum efeito visual favorito</p>
                </div>
              ) : (
                favoriteVisualEffects.map(id => {
                  const effect = getEffectById(id);
                  if (!effect) return null;
                  return renderFavoriteItem(id, effect.name, "effect", effect.previewColor || "#FF00FF", effect.category);
                })
              )}
            </TabsContent>

            {/* Text Effects */}
            <TabsContent value="texteffect" className="space-y-2 m-0">
              {favoriteTextEffects.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Type className="w-8 h-8 mx-auto mb-2 opacity-30" />
                  <p className="text-sm">Nenhum efeito de texto favorito</p>
                </div>
              ) : (
                favoriteTextEffects.map(id => {
                  const effect = getEffectById(id);
                  if (!effect) return null;
                  return renderFavoriteItem(id, effect.name, "effect", effect.previewColor || "#FF1493", "text");
                })
              )}
            </TabsContent>

            {/* Buttons */}
            <TabsContent value="button" className="space-y-2 m-0">
              {favoriteButtons.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <MousePointerClick className="w-8 h-8 mx-auto mb-2 opacity-30" />
                  <p className="text-sm">Nenhum botão favorito</p>
                </div>
              ) : (
                favoriteButtons.map(id => {
                  const btn = getButtonById(id);
                  if (!btn) return null;
                  return renderFavoriteItem(id, btn.name, "button", btn.previewColor || "#00FF00", btn.category);
                })
              )}
            </TabsContent>
          </ScrollArea>
        </Tabs>

        {/* Actions */}
        {favorites.length > 0 && (
          <div className="flex justify-between mt-4 pt-4 border-t border-border">
            <Button
              variant="outline"
              size="sm"
              onClick={clearAllFavorites}
              className="text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Limpar Todos
            </Button>
            <Button
              size="sm"
              onClick={exportFavorites}
              className="bg-primary hover:bg-primary/90"
            >
              <Download className="w-4 h-4 mr-2" />
              Exportar CSS
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}