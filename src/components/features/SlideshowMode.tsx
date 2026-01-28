import { useState, useEffect, useCallback } from "react";
import { X, Play, Pause, SkipForward, SkipBack, Maximize2, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { animations, Animation } from "@/data/animations";
import { effects, Effect } from "@/data/effects";
import { buttonAnimations, ButtonAnimation } from "@/data/buttons";
import { AnimationLivePreview, EffectLivePreview, ButtonLivePreview } from "@/components/LivePreview";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface SlideshowModeProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: "animations" | "effects" | "buttons" | "all";
}

type SlideItem = {
  type: "animation" | "effect" | "button";
  item: Animation | Effect | ButtonAnimation;
};

export function SlideshowMode({ isOpen, onClose, initialCategory = "all" }: SlideshowModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(3000); // 3 seconds default
  const [category, setCategory] = useState(initialCategory);
  const [showControls, setShowControls] = useState(true);

  // Build slide items based on category
  const getSlideItems = useCallback((): SlideItem[] => {
    const items: SlideItem[] = [];
    
    if (category === "all" || category === "animations") {
      animations.forEach(a => items.push({ type: "animation", item: a }));
    }
    if (category === "all" || category === "effects") {
      effects.forEach(e => items.push({ type: "effect", item: e }));
    }
    if (category === "all" || category === "buttons") {
      buttonAnimations.forEach(b => items.push({ type: "button", item: b }));
    }
    
    return items;
  }, [category]);

  const slideItems = getSlideItems();
  const currentSlide = slideItems[currentIndex];

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying || !isOpen) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slideItems.length);
    }, speed);

    return () => clearInterval(timer);
  }, [isPlaying, speed, slideItems.length, isOpen]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [category]);

  const goNext = () => setCurrentIndex(prev => (prev + 1) % slideItems.length);
  const goPrev = () => setCurrentIndex(prev => (prev - 1 + slideItems.length) % slideItems.length);

  const getCategoryColor = (type: string) => {
    switch (type) {
      case "animation": return "#00FFFF";
      case "effect": return "#FF00FF";
      case "button": return "#00FF00";
      default: return "#FFFFFF";
    }
  };

  const getCategoryLabel = (type: string) => {
    switch (type) {
      case "animation": return "Animação";
      case "effect": return "Efeito";
      case "button": return "Botão";
      default: return "";
    }
  };

  if (!currentSlide) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-[100vw] max-h-[100vh] w-screen h-screen p-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border-none"
        onMouseMove={() => setShowControls(true)}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Main content */}
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800">
            <div 
              className="h-full transition-all duration-300"
              style={{ 
                width: `${((currentIndex + 1) / slideItems.length) * 100}%`,
                background: `linear-gradient(90deg, ${getCategoryColor(currentSlide.type)}, ${getCategoryColor(currentSlide.type)}88)`
              }}
            />
          </div>

          {/* Counter */}
          <div className="absolute top-6 left-6 text-white/60 text-sm font-mono">
            {currentIndex + 1} / {slideItems.length}
          </div>

          {/* Category badge */}
          <div 
            className="absolute top-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{ 
              background: `${getCategoryColor(currentSlide.type)}22`,
              color: getCategoryColor(currentSlide.type),
              border: `1px solid ${getCategoryColor(currentSlide.type)}44`
            }}
          >
            {getCategoryLabel(currentSlide.type)}
          </div>

          {/* Preview area */}
          <div className="flex flex-col items-center justify-center flex-1 px-8">
            {/* Title */}
            <h2 
              className="text-4xl md:text-6xl font-bold mb-4 text-center"
              style={{ 
                color: getCategoryColor(currentSlide.type),
                textShadow: `0 0 30px ${getCategoryColor(currentSlide.type)}66`
              }}
            >
              {currentSlide.item.name}
            </h2>
            
            {/* ID */}
            <p className="text-xl text-white/50 mb-2 font-mono">
              #{currentSlide.item.id}
            </p>

            {/* Description */}
            <p className="text-lg text-white/70 mb-8 text-center max-w-2xl">
              {currentSlide.item.description}
            </p>

            {/* Live preview */}
            <div 
              className="relative p-8 rounded-3xl"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${getCategoryColor(currentSlide.type)}11 0%, transparent 70%)`,
                boxShadow: `0 0 100px ${getCategoryColor(currentSlide.type)}22`
              }}
            >
              <div className="transform scale-150 md:scale-[2]">
                {currentSlide.type === "animation" && (
                  <AnimationLivePreview 
                    animation={currentSlide.item as Animation} 
                    size="lg" 
                    isPlaying={true}
                  />
                )}
                {currentSlide.type === "effect" && (
                  <EffectLivePreview 
                    effect={currentSlide.item as Effect} 
                    size="lg" 
                  />
                )}
                {currentSlide.type === "button" && (
                  <ButtonLivePreview 
                    button={currentSlide.item as ButtonAnimation} 
                    size="lg" 
                    isPlaying={true}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white transition-all hover:scale-110"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white transition-all hover:scale-110"
          >
            <ChevronRight size={32} />
          </button>

          {/* Controls */}
          <div 
            className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {/* Category filters */}
              <div className="flex gap-2">
                {[
                  { id: "all", label: "Todos", color: "#FFFFFF" },
                  { id: "animations", label: "Animações", color: "#00FFFF" },
                  { id: "effects", label: "Efeitos", color: "#FF00FF" },
                  { id: "buttons", label: "Botões", color: "#00FF00" },
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id as typeof category)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      category === cat.id 
                        ? 'text-black' 
                        : 'text-white/70 hover:text-white'
                    }`}
                    style={{
                      background: category === cat.id ? cat.color : 'rgba(255,255,255,0.1)',
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Playback controls */}
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={goPrev}
                  className="text-white hover:bg-white/20"
                >
                  <SkipBack size={20} />
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-white hover:bg-white/20"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={goNext}
                  className="text-white hover:bg-white/20"
                >
                  <SkipForward size={20} />
                </Button>
              </div>

              {/* Speed control */}
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <span>Velocidade:</span>
                <Slider
                  value={[speed]}
                  onValueChange={([v]) => setSpeed(v)}
                  min={1000}
                  max={8000}
                  step={500}
                  className="w-32"
                />
                <span className="w-12">{(speed / 1000).toFixed(1)}s</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
