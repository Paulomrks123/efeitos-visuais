import { useEffect, useRef, useMemo } from "react";
import { Effect } from "@/data/effects";

interface TextEffectPreviewProps {
  effect: Effect;
  size?: "sm" | "md" | "lg";
  text?: string;
}

// Extract animation name from CSS code
function extractAnimationInfo(cssCode: string) {
  const keyframeMatch = cssCode.match(/@keyframes\s+(\w+)/g);
  const animations = keyframeMatch?.map(k => k.replace('@keyframes ', '')) || [];
  return animations;
}

// Generate unique ID for each effect instance
let instanceCounter = 0;
function getUniqueId() {
  return `text-effect-${++instanceCounter}`;
}

export function TextEffectPreview({ effect, size = "md", text = "UNIQUE" }: TextEffectPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const styleId = useMemo(() => getUniqueId(), []);
  
  const fontSize = size === "sm" ? "1.2rem" : size === "md" ? "1.8rem" : "2.5rem";
  const letters = text.split('');
  
  // Inject the effect's CSS into the page
  useEffect(() => {
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }
    
    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    
    // Modify CSS to use our unique container ID
    let modifiedCSS = effect.cssCode;
    
    // Extract the class name from CSS and make it unique
    const classMatch = effect.cssCode.match(/\.([a-zA-Z0-9_-]+)\s*\{/);
    const originalClass = classMatch?.[1] || 'text-effect';
    const uniqueClass = `${originalClass}-${styleId}`;
    
    // Replace all occurrences of the class
    modifiedCSS = modifiedCSS.replace(new RegExp(`\\.${originalClass}`, 'g'), `.${uniqueClass}`);
    
    styleElement.textContent = modifiedCSS;
    document.head.appendChild(styleElement);
    
    return () => {
      const style = document.getElementById(styleId);
      if (style) {
        style.remove();
      }
    };
  }, [effect.cssCode, styleId]);
  
  // Get the unique class name
  const classMatch = effect.cssCode.match(/\.([a-zA-Z0-9_-]+)\s*\{/);
  const originalClass = classMatch?.[1] || 'text-effect';
  const uniqueClass = `${originalClass}-${styleId}`;
  
  // Determine special rendering based on effect ID
  const renderLetters = () => {
    const effectId = effect.id;
    
    // Render with individual letter spans
    return letters.map((letter, index) => {
      // Handle space
      if (letter === ' ') {
        return <span key={index} style={{ width: '0.3em', display: 'inline-block' }}>&nbsp;</span>;
      }
      
      // Calculate unique properties for each letter based on effect type
      const i = index + 1;
      const hue = (index * 30) % 360;
      const delay = index * 0.1;
      
      // Special colors for rainbow effects
      const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#8B00FF', '#FF1493'];
      const rainbowColor = rainbowColors[index % rainbowColors.length];
      
      // Random values for chaotic effects
      const randomX = Math.random() * 200 - 100;
      const randomY = Math.random() * 200 - 100;
      const randomRotate = Math.random() * 720 - 360;
      
      return (
        <span
          key={index}
          style={{
            '--i': i,
            '--c': rainbowColor,
            '--hue': hue,
            '--x': randomX,
            '--y': randomY,
            '--r': randomRotate,
            animationDelay: `calc(var(--i, ${i}) * 0.1s)`,
            display: 'inline-block',
          } as React.CSSProperties}
        >
          {letter}
        </span>
      );
    });
  };
  
  return (
    <div 
      ref={containerRef}
      className={uniqueClass}
      style={{ 
        fontSize,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2px',
        minHeight: size === "sm" ? 40 : size === "md" ? 60 : 80,
      }}
    >
      {renderLetters()}
    </div>
  );
}
