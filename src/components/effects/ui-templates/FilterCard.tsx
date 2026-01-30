import { useEffect, useId } from "react";
import { Effect } from "@/data/effects";

interface FilterCardProps {
  effect: Effect;
  size: "sm" | "md" | "lg";
}

// High quality nature/landscape images for filters
const filterImages = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop", // Mountains
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop", // Forest
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop", // Beach
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop", // Ocean
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop", // Nature
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop", // Waterfall
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop", // Lake
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300&fit=crop", // Valley
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=300&fit=crop", // Woods
  "https://images.unsplash.com/photo-1504567961542-e24d9439a724?w=400&h=300&fit=crop", // Sunset
];

export function FilterCard({ effect, size }: FilterCardProps) {
  const styleId = useId();
  const uniqueStyleId = `filter-${effect.id}-${styleId.replace(/:/g, '')}`;
  
  // Extract class name from CSS code
  const classMatch = effect.cssCode.match(/\.([a-zA-Z0-9_-]+)\s*\{/);
  const effectClassName = classMatch ? classMatch[1] : '';

  // Get consistent image based on effect ID
  const imageIndex = parseInt(effect.id.replace(/\D/g, '')) % filterImages.length;
  const imageUrl = filterImages[imageIndex];

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.id = uniqueStyleId;
    styleElement.textContent = effect.cssCode;
    document.head.appendChild(styleElement);
    return () => {
      const el = document.getElementById(uniqueStyleId);
      if (el) el.remove();
    };
  }, [effect.cssCode, uniqueStyleId]);

  const sizeStyles = {
    sm: { width: 120, height: 80 },
    md: { width: 160, height: 100 },
    lg: { width: 200, height: 130 },
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Image with filter applied */}
      <div 
        className="rounded-lg overflow-hidden shadow-lg"
        style={sizeStyles[size]}
      >
        <img 
          src={imageUrl}
          alt={effect.name}
          className={`w-full h-full object-cover ${effectClassName}`}
        />
      </div>
      
      {/* Filter name label */}
      <span className="text-[10px] font-medium text-muted-foreground px-2 py-0.5 rounded bg-muted/50">
        {effect.name}
      </span>
    </div>
  );
}
