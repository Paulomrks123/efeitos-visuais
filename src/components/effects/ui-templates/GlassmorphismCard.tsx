import { useEffect, useId } from "react";
import { Effect } from "@/data/effects";

interface GlassmorphismCardProps {
  effect: Effect;
  size: "sm" | "md" | "lg";
}

export function GlassmorphismCard({ effect, size }: GlassmorphismCardProps) {
  const styleId = useId();
  const uniqueStyleId = `glassmorphism-${effect.id}-${styleId.replace(/:/g, '')}`;
  
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
    sm: { padding: '12px', width: '140px' },
    md: { padding: '16px', width: '180px' },
    lg: { padding: '20px', width: '220px' },
  };

  const textSizes = {
    sm: { title: 'text-xs', price: 'text-sm', desc: 'text-[10px]' },
    md: { title: 'text-sm', price: 'text-base', desc: 'text-xs' },
    lg: { title: 'text-base', price: 'text-lg', desc: 'text-sm' },
  };

  return (
    <div className="relative" style={{ minHeight: size === 'sm' ? 100 : size === 'md' ? 120 : 140 }}>
      {/* Background image blur */}
      <div 
        className="absolute inset-0 rounded-xl overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=300&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)',
        }}
      />
      
      {/* Glassmorphism card with real CSS applied */}
      <div 
        className={`relative ${effectClassName}`}
        style={{ 
          ...sizeStyles[size],
          display: 'flex',
          flexDirection: 'column',
          gap: size === 'sm' ? '6px' : '8px',
        }}
      >
        <h3 className={`${textSizes[size].title} font-semibold text-foreground`}>
          Produto Premium
        </h3>
        <p className={`${textSizes[size].desc} text-muted-foreground line-clamp-2`}>
          Design elegante com acabamento de alta qualidade
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className={`${textSizes[size].price} font-bold text-primary`}>
            R$ 299
          </span>
          <button 
            className="px-2 py-1 text-[10px] font-medium rounded bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
