import { useEffect, useMemo, useId } from "react";
import { Effect } from "@/data/effects";

interface TextEffectPreviewProps {
  effect: Effect;
  size?: "sm" | "md" | "lg";
  text?: string;
}

export function TextEffectPreview({ effect, size = "md", text = "EFEITO" }: TextEffectPreviewProps) {
  const reactId = useId();
  const styleId = useMemo(() => `text-effect-${reactId.replace(/:/g, '')}`, [reactId]);
  
  const fontSize = size === "sm" ? "1rem" : size === "md" ? "1.5rem" : "2rem";
  const letters = text.split('');
  
  // Extract the original class name from CSS
  const classMatch = effect.cssCode.match(/\.([a-zA-Z0-9_-]+)\s*\{/);
  const originalClass = classMatch?.[1] || 'text-effect';
  const uniqueClass = `${originalClass}-${styleId}`;
  
  // Inject the effect's CSS into the page
  useEffect(() => {
    // Remove existing style if any
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }
    
    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    
    // Replace all occurrences of the original class with unique class
    // Handle both .class { and .class span { patterns
    let modifiedCSS = effect.cssCode;
    
    // Escape special regex characters in class name
    const escapedClass = originalClass.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    
    // Replace .className with .uniqueClassName
    modifiedCSS = modifiedCSS.replace(
      new RegExp(`\\.${escapedClass}\\b`, 'g'), 
      `.${uniqueClass}`
    );
    
    // Adjust font-size based on our size prop
    modifiedCSS = modifiedCSS.replace(
      /font-size:\s*3rem/g, 
      `font-size: ${fontSize}`
    );
    
    styleElement.textContent = modifiedCSS;
    document.head.appendChild(styleElement);
    
    return () => {
      const style = document.getElementById(styleId);
      if (style) {
        style.remove();
      }
    };
  }, [effect.cssCode, styleId, uniqueClass, originalClass, fontSize]);
  
  // Render letters with CSS variables
  const renderLetters = () => {
    const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#00BFFF', '#8B00FF', '#FF1493'];
    
    return letters.map((letter, index) => {
      // Handle space
      if (letter === ' ') {
        return (
          <span 
            key={index} 
            style={{ 
              width: '0.25em', 
              display: 'inline-block' 
            }}
          >
            &nbsp;
          </span>
        );
      }
      
      const i = index + 1;
      const rainbowColor = rainbowColors[index % rainbowColors.length];
      
      // Random values for chaotic effects (pre-calculated)
      const randomX = ((index * 37) % 200) - 100;
      const randomY = ((index * 53) % 200) - 100;
      const randomRotate = ((index * 73) % 720) - 360;
      
      return (
        <span
          key={index}
          style={{
            '--i': i,
            '--c': rainbowColor,
            '--x': randomX,
            '--y': randomY,
            '--r': randomRotate,
          } as React.CSSProperties}
        >
          {letter}
        </span>
      );
    });
  };
  
  return (
    <div className={uniqueClass}>
      {renderLetters()}
    </div>
  );
}
