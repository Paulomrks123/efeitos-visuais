import { useEffect, useId } from "react";
import { Effect } from "@/data/effects";
import { motion } from "framer-motion";
import { LiveBadge, CSSPropertyIndicator } from "../shared";

interface GlassmorphismCardProps {
  effect: Effect;
  size: "sm" | "md" | "lg";
}

export function GlassmorphismCard({ effect, size }: GlassmorphismCardProps) {
  const styleId = useId();
  const uniqueStyleId = `glassmorphism-${effect.id}-${styleId.replace(/:/g, '')}`;
  const previewColor = effect.previewColor || "#00FFFF";
  
  // Extract class name from CSS code
  const classMatch = effect.cssCode.match(/\.([a-zA-Z0-9_-]+)\s*\{/);
  const effectClassName = classMatch ? classMatch[1] : '';

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
    sm: { containerHeight: 140, cardPadding: '10px', cardWidth: '120px' },
    md: { containerHeight: 180, cardPadding: '14px', cardWidth: '150px' },
    lg: { containerHeight: 220, cardPadding: '18px', cardWidth: '190px' },
  };

  const textSizes = {
    sm: { title: 'text-[10px]', price: 'text-xs', desc: 'text-[8px]', btn: 'text-[8px] px-2 py-0.5' },
    md: { title: 'text-xs', price: 'text-sm', desc: 'text-[10px]', btn: 'text-[9px] px-2.5 py-1' },
    lg: { title: 'text-sm', price: 'text-base', desc: 'text-xs', btn: 'text-[10px] px-3 py-1.5' },
  };

  // Generate floating bubbles
  const bubbles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: 10 + (i % 4) * 8,
    x: 10 + (i * 12) % 80,
    delay: i * 0.4,
    duration: 3 + (i % 3),
  }));

  return (
    <div 
      className="relative overflow-hidden rounded-2xl"
      style={{ 
        minHeight: sizeStyles[size].containerHeight + 40,
        minWidth: parseInt(sizeStyles[size].cardWidth) + 40,
      }}
    >
      {/* Live Badge */}
      <div className="absolute top-2 left-2 z-20">
        <LiveBadge color={previewColor} size="sm" />
      </div>
      
      {/* CSS Properties Indicator */}
      <div className="absolute top-2 right-2 z-20 max-w-[120px]">
        <CSSPropertyIndicator cssCode={effect.cssCode} color={previewColor} maxProperties={2} />
      </div>
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            `linear-gradient(45deg, ${previewColor}40, #FF00FF30, #00FFFF30, ${previewColor}40)`,
            `linear-gradient(135deg, #FF00FF30, ${previewColor}40, #FF00FF30, #00FFFF30)`,
            `linear-gradient(225deg, #00FFFF30, #FF00FF30, ${previewColor}40, #FF00FF30)`,
            `linear-gradient(45deg, ${previewColor}40, #FF00FF30, #00FFFF30, ${previewColor}40)`,
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${previewColor}20 1px, transparent 1px),
            linear-gradient(to bottom, ${previewColor}20 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Floating bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
            background: `radial-gradient(circle at 30% 30%, ${previewColor}80, ${previewColor}20)`,
            boxShadow: `0 0 ${bubble.size / 2}px ${previewColor}40`,
          }}
          initial={{ y: sizeStyles[size].containerHeight + 20, opacity: 0 }}
          animate={{ 
            y: -bubble.size - 20, 
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.8, 1.1, 1, 0.9],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating light orbs */}
      <motion.div
        className="absolute w-24 h-24 rounded-full"
        style={{
          background: `radial-gradient(circle, ${previewColor}30, transparent 70%)`,
          filter: 'blur(20px)',
        }}
        animate={{
          x: ['-20%', '80%', '-20%'],
          y: ['20%', '60%', '20%'],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glassmorphism card with real CSS applied */}
      <div 
        className={`relative ${effectClassName} mx-auto mt-4`}
        style={{ 
          padding: sizeStyles[size].cardPadding,
          width: sizeStyles[size].cardWidth,
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
        }}
      >
        {/* Light reflection on glass */}
        <div 
          className="absolute top-0 left-0 right-0 h-1/3 rounded-t-2xl pointer-events-none"
          style={{
            background: `linear-gradient(180deg, ${previewColor}15, transparent)`,
          }}
        />

        {/* Product image placeholder */}
        <div 
          className="w-full aspect-square rounded-lg overflow-hidden mb-1"
          style={{
            background: `linear-gradient(135deg, ${previewColor}20, ${previewColor}05)`,
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop"
            alt="Product"
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        <h3 className={`${textSizes[size].title} font-semibold text-foreground`}>
          Produto Premium
        </h3>
        <p className={`${textSizes[size].desc} text-muted-foreground line-clamp-1`}>
          Design elegante
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className={`${textSizes[size].price} font-bold`} style={{ color: previewColor }}>
            R$ 299
          </span>
          <button 
            className={`${textSizes[size].btn} font-medium rounded-full transition-all hover:scale-105`}
            style={{
              background: `${previewColor}30`,
              color: previewColor,
              border: `1px solid ${previewColor}50`,
            }}
          >
            Comprar
          </button>
        </div>
      </div>

      {/* Bottom glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8"
        style={{
          background: `radial-gradient(ellipse, ${previewColor}40, transparent)`,
          filter: 'blur(10px)',
        }}
      />
    </div>
  );
}
