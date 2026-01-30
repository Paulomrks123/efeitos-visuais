import { useEffect, useId, useState } from "react";
import { Effect } from "@/data/effects";
import { motion } from "framer-motion";

interface NeumorphismCardProps {
  effect: Effect;
  size: "sm" | "md" | "lg";
}

export function NeumorphismCard({ effect, size }: NeumorphismCardProps) {
  const styleId = useId();
  const uniqueStyleId = `neumorphism-${effect.id}-${styleId.replace(/:/g, '')}`;
  const [sliderValue, setSliderValue] = useState(65);
  const [isPressed, setIsPressed] = useState(false);
  const previewColor = effect.previewColor || "#E0E5EC";
  
  // Extract class name from CSS code
  const classMatch = effect.cssCode.match(/\.([a-zA-Z0-9_-]+)\s*\{/);
  const effectClassName = classMatch ? classMatch[1] : '';

  // Detect if it's a dark theme based on the color
  const isDark = previewColor.startsWith('#') && 
    parseInt(previewColor.slice(1, 3), 16) < 100;

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
    sm: { padding: '14px', width: '140px' },
    md: { padding: '18px', width: '170px' },
    lg: { padding: '24px', width: '210px' },
  };

  const avatarSizes = {
    sm: { size: 'w-10 h-10', ring: 2 },
    md: { size: 'w-12 h-12', ring: 3 },
    lg: { size: 'w-14 h-14', ring: 4 },
  };

  const textSizes = {
    sm: { name: 'text-xs', handle: 'text-[10px]' },
    md: { name: 'text-sm', handle: 'text-xs' },
    lg: { name: 'text-base', handle: 'text-sm' },
  };

  const accentColor = isDark ? '#00D4FF' : '#6366F1';

  return (
    <motion.div 
      className={effectClassName}
      style={{ 
        ...sizeStyles[size],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
      }}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Avatar with animated ring */}
      <div className="relative">
        <motion.div 
          className={`${avatarSizes[size].size} rounded-full overflow-hidden`}
          style={{
            boxShadow: `inset 3px 3px 6px rgba(0,0,0,0.15), inset -3px -3px 6px rgba(255,255,255,0.1)`,
          }}
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            alt="User"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Animated status ring */}
        <motion.div 
          className="absolute -inset-1 rounded-full"
          style={{
            border: `${avatarSizes[size].ring}px solid transparent`,
            background: `linear-gradient(135deg, ${accentColor}, ${accentColor}40) border-box`,
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        {/* Online indicator */}
        <motion.div 
          className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2"
          style={{ 
            background: '#22C55E',
            borderColor: previewColor,
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* User Info */}
      <div className="text-center">
        <p className={`${textSizes[size].name} font-semibold`}>João Silva</p>
        <p className={`${textSizes[size].handle} opacity-60`}>@joaosilva</p>
      </div>

      {/* Interactive buttons row */}
      <div className="flex gap-2">
        {['❤️', '💬', '🔔'].map((emoji, i) => (
          <motion.button
            key={i}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
            style={{
              boxShadow: isPressed && i === 0 
                ? `inset 2px 2px 4px rgba(0,0,0,0.2), inset -2px -2px 4px rgba(255,255,255,0.05)`
                : `3px 3px 6px rgba(0,0,0,0.15), -3px -3px 6px rgba(255,255,255,0.05)`,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onMouseDown={() => i === 0 && setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
          >
            {emoji}
          </motion.button>
        ))}
      </div>

      {/* Volume Slider */}
      <div className="w-full space-y-1.5">
        <div className="flex justify-between text-[10px] opacity-60">
          <span>🔊 Volume</span>
          <span className="font-mono">{sliderValue}%</span>
        </div>
        <div 
          className="relative h-3 rounded-full overflow-hidden cursor-pointer"
          style={{
            boxShadow: 'inset 3px 3px 5px rgba(0,0,0,0.2), inset -3px -3px 5px rgba(255,255,255,0.08)',
          }}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const percent = Math.round(((e.clientX - rect.left) / rect.width) * 100);
            setSliderValue(Math.max(0, Math.min(100, percent)));
          }}
        >
          <motion.div 
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, ${accentColor}80, ${accentColor})`,
              boxShadow: `0 0 10px ${accentColor}50`,
            }}
            initial={false}
            animate={{ width: `${sliderValue}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
            style={{
              background: previewColor,
              boxShadow: `2px 2px 4px rgba(0,0,0,0.2), -2px -2px 4px rgba(255,255,255,0.1), 0 0 8px ${accentColor}`,
              left: `calc(${sliderValue}% - 8px)`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
