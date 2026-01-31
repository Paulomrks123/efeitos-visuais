import { useEffect, useId } from "react";
import { Effect } from "@/data/effects";
import { motion } from "framer-motion";
import { LiveBadge, CSSPropertyIndicator, AnimationTimeline } from "../shared";

interface GradientCardProps {
  effect: Effect;
  size: "sm" | "md" | "lg";
}

export function GradientCard({ effect, size }: GradientCardProps) {
  const styleId = useId();
  const uniqueStyleId = `gradient-${effect.id}-${styleId.replace(/:/g, '')}`;
  const previewColor = effect.previewColor || "#FF6B6B";
  
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
    sm: { padding: '16px', width: '160px', minHeight: 130 },
    md: { padding: '20px', width: '200px', minHeight: 160 },
    lg: { padding: '28px', width: '260px', minHeight: 200 },
  };

  const textSizes = {
    sm: { headline: 'text-base', sub: 'text-[10px]', btn: 'text-[10px] px-4 py-2' },
    md: { headline: 'text-lg', sub: 'text-xs', btn: 'text-xs px-5 py-2.5' },
    lg: { headline: 'text-xl', sub: 'text-sm', btn: 'text-sm px-6 py-3' },
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Top bar with Live badge and CSS properties */}
      <div className="flex items-center justify-between px-1">
        <LiveBadge color={previewColor} size="sm" />
        <CSSPropertyIndicator cssCode={effect.cssCode} color={previewColor} maxProperties={2} />
      </div>
      
      <motion.div 
        className={`${effectClassName} relative overflow-hidden flex flex-col items-center justify-center text-center`}
        style={{ 
          padding: sizeStyles[size].padding,
          width: sizeStyles[size].width,
          minHeight: sizeStyles[size].minHeight,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
      {/* Animated shine effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 45%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.3) 55%, transparent 60%)',
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['200% 0', '-200% 0'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/40"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Badge */}
      <motion.div 
        className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[8px] font-bold bg-white/20 backdrop-blur-sm border border-white/30"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        🔥 HOT
      </motion.div>

      {/* Headline */}
      <motion.h2 
        className={`${textSizes[size].headline} font-bold mb-1 relative`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="relative">
          Oferta Especial
          {/* Underline effect */}
          <motion.span 
            className="absolute -bottom-1 left-0 h-0.5 bg-white/50 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
        </span>
      </motion.h2>
      
      {/* Subtitle with counter */}
      <motion.div 
        className={`${textSizes[size].sub} opacity-90 mb-4 flex items-center gap-2`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span>Aproveite</span>
        <span className="font-bold text-lg">50%</span>
        <span>OFF</span>
      </motion.div>
      
      {/* CTA Button */}
      <motion.button 
        className={`${textSizes[size].btn} font-semibold rounded-full bg-white/20 backdrop-blur-sm border border-white/40 relative overflow-hidden group`}
        whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">Começar Agora →</span>
        {/* Hover fill effect */}
        <motion.span 
          className="absolute inset-0 bg-white/30"
          initial={{ x: '-100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </motion.div>
      
      {/* Animation Timeline */}
      <div className="px-1">
        <AnimationTimeline duration={3} color={previewColor} showLabel={false} />
      </div>
    </div>
  );
}
