import { useEffect, useId, useState } from "react";
import { Effect } from "@/data/effects";
import { motion } from "framer-motion";
import { LiveBadge, CSSPropertyIndicator } from "../shared";

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
  const [showOriginal, setShowOriginal] = useState(false);
  const previewColor = effect.previewColor || "#00FFFF";
  
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
    sm: { width: 140, height: 100, frameWidth: 4 },
    md: { width: 180, height: 130, frameWidth: 5 },
    lg: { width: 220, height: 160, frameWidth: 6 },
  };

  return (
    <motion.div 
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Top bar with Live badge and CSS properties */}
      <div className="flex items-center justify-between w-full px-1">
        <LiveBadge color={previewColor} size="sm" />
        <CSSPropertyIndicator cssCode={effect.cssCode} color={previewColor} maxProperties={2} />
      </div>
      
      {/* Image frame with effects */}
      <motion.div 
        className="relative group cursor-pointer"
        whileHover={{ scale: 1.02 }}
        onMouseEnter={() => setShowOriginal(true)}
        onMouseLeave={() => setShowOriginal(false)}
      >
        {/* Decorative frame */}
        <div
          className="absolute -inset-1 rounded-xl bg-gradient-to-br from-white/20 via-white/5 to-white/20"
          style={{ padding: sizeStyles[size].frameWidth }}
        />
        
        {/* Scanlines overlay */}
        <div 
          className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none z-10 opacity-30"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
          }}
        />

        {/* Corner decorations */}
        {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute ${pos} w-3 h-3 border-primary/50 z-20`}
            style={{
              borderTopWidth: pos.includes('top') ? 2 : 0,
              borderBottomWidth: pos.includes('bottom') ? 2 : 0,
              borderLeftWidth: pos.includes('left') ? 2 : 0,
              borderRightWidth: pos.includes('right') ? 2 : 0,
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}

        {/* Main image container */}
        <div 
          className="relative rounded-lg overflow-hidden shadow-2xl"
          style={{ 
            width: sizeStyles[size].width, 
            height: sizeStyles[size].height,
          }}
        >
          {/* Original image (shown on hover) */}
          <motion.img 
            src={imageUrl}
            alt="Original"
            className="w-full h-full object-cover absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: showOriginal ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Filtered image */}
          <img 
            src={imageUrl}
            alt={effect.name}
            className={`w-full h-full object-cover ${effectClassName}`}
            style={{ opacity: showOriginal ? 0 : 1, transition: 'opacity 0.3s' }}
          />
          
          {/* Comparison indicator */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: showOriginal ? 1 : 0 }}
          >
            <span className="text-white text-xs font-bold bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
              ORIGINAL
            </span>
          </motion.div>
          
          {/* Hover hint */}
          <motion.div 
            className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: showOriginal ? 0 : 1 }}
          >
            <span className="text-white/70 text-[9px] bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm">
              Hover para ver original
            </span>
          </motion.div>
        </div>

        {/* Reflection effect */}
        <div 
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-lg overflow-hidden opacity-20"
          style={{ 
            width: sizeStyles[size].width * 0.9, 
            height: sizeStyles[size].height * 0.3,
            transform: 'scaleY(-1) translateX(-50%)',
            filter: 'blur(2px)',
            maskImage: 'linear-gradient(to bottom, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
        >
          <img 
            src={imageUrl}
            alt=""
            className={`w-full h-full object-cover object-bottom ${effectClassName}`}
          />
        </div>
      </motion.div>
      
      {/* Filter info */}
      <motion.div 
        className="text-center space-y-1"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="text-xs font-semibold text-foreground block">
          {effect.name}
        </span>
        <span className="text-[9px] text-muted-foreground px-2 py-0.5 rounded bg-muted/50 inline-block">
          Filtro CSS
        </span>
      </motion.div>
    </motion.div>
  );
}
