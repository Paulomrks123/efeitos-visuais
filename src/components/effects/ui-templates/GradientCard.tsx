import { useEffect, useId } from "react";
import { Effect } from "@/data/effects";

interface GradientCardProps {
  effect: Effect;
  size: "sm" | "md" | "lg";
}

export function GradientCard({ effect, size }: GradientCardProps) {
  const styleId = useId();
  const uniqueStyleId = `gradient-${effect.id}-${styleId.replace(/:/g, '')}`;
  
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
    sm: { padding: '14px', width: '150px' },
    md: { padding: '18px', width: '190px' },
    lg: { padding: '24px', width: '240px' },
  };

  const textSizes = {
    sm: { headline: 'text-sm', sub: 'text-[10px]', btn: 'text-[10px] px-3 py-1.5' },
    md: { headline: 'text-base', sub: 'text-xs', btn: 'text-xs px-4 py-2' },
    lg: { headline: 'text-lg', sub: 'text-sm', btn: 'text-sm px-5 py-2.5' },
  };

  return (
    <div 
      className={`${effectClassName} flex flex-col items-center justify-center text-center`}
      style={{ 
        ...sizeStyles[size],
        minHeight: size === 'sm' ? 100 : size === 'md' ? 120 : 150,
      }}
    >
      {/* Headline */}
      <h2 className={`${textSizes[size].headline} font-bold mb-1`}>
        Oferta Especial
      </h2>
      
      {/* Subtitle */}
      <p className={`${textSizes[size].sub} opacity-80 mb-3`}>
        Aproveite 50% de desconto hoje!
      </p>
      
      {/* CTA Button with gradient effect inherited */}
      <button 
        className={`${textSizes[size].btn} font-semibold rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all hover:scale-105`}
      >
        Começar Agora
      </button>
    </div>
  );
}
