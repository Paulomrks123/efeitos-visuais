import { useEffect, useId, useState } from "react";
import { Effect } from "@/data/effects";

interface NeumorphismCardProps {
  effect: Effect;
  size: "sm" | "md" | "lg";
}

export function NeumorphismCard({ effect, size }: NeumorphismCardProps) {
  const styleId = useId();
  const uniqueStyleId = `neumorphism-${effect.id}-${styleId.replace(/:/g, '')}`;
  const [sliderValue, setSliderValue] = useState(65);
  
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
    sm: { padding: '12px', width: '130px' },
    md: { padding: '16px', width: '160px' },
    lg: { padding: '20px', width: '200px' },
  };

  const avatarSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: { name: 'text-xs', handle: 'text-[10px]' },
    md: { name: 'text-sm', handle: 'text-xs' },
    lg: { name: 'text-base', handle: 'text-sm' },
  };

  return (
    <div 
      className={effectClassName}
      style={{ 
        ...sizeStyles[size],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: size === 'sm' ? '8px' : '12px',
      }}
    >
      {/* Avatar */}
      <div 
        className={`${avatarSizes[size]} rounded-full overflow-hidden`}
        style={{
          boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.1), inset -2px -2px 4px rgba(255,255,255,0.1)',
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>

      {/* User Info */}
      <div className="text-center">
        <p className={`${textSizes[size].name} font-semibold`}>João Silva</p>
        <p className={`${textSizes[size].handle} opacity-60`}>@joaosilva</p>
      </div>

      {/* Volume Slider */}
      <div className="w-full space-y-1">
        <div className="flex justify-between text-[10px] opacity-50">
          <span>Volume</span>
          <span>{sliderValue}%</span>
        </div>
        <div 
          className="relative h-2 rounded-full overflow-hidden cursor-pointer"
          style={{
            boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.15), inset -2px -2px 4px rgba(255,255,255,0.08)',
          }}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const percent = Math.round(((e.clientX - rect.left) / rect.width) * 100);
            setSliderValue(Math.max(0, Math.min(100, percent)));
          }}
        >
          <div 
            className="absolute inset-y-0 left-0 bg-primary/60 rounded-full transition-all"
            style={{ width: `${sliderValue}%` }}
          />
        </div>
      </div>
    </div>
  );
}
