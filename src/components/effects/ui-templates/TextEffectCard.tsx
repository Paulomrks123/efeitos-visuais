import { useEffect, useId, useMemo } from "react";
import { Effect } from "@/data/effects";

interface TextEffectCardProps {
  effect: Effect;
  size: "sm" | "md" | "lg";
}

export function TextEffectCard({ effect, size }: TextEffectCardProps) {
  const styleId = useId();
  const uniqueStyleId = `text-effect-${effect.id}-${styleId.replace(/:/g, '')}`;
  
  // Extract class name from CSS code
  const classMatch = effect.cssCode.match(/\.([a-zA-Z0-9_-]+)\s*\{/);
  const effectClassName = classMatch ? classMatch[1] : '';

  // Sample headlines for variety
  const headlines = [
    "Transforme Ideias",
    "Design Incrível",
    "Crie Magia",
    "Inovação Digital",
    "Arte Visual",
    "Impacto Total",
    "Estilo Único",
    "Visão Futura",
  ];

  const headlineIndex = useMemo(() => {
    return parseInt(effect.id.replace(/\D/g, '')) % headlines.length;
  }, [effect.id]);

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

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const containerSizes = {
    sm: { minHeight: 60, padding: '12px' },
    md: { minHeight: 80, padding: '16px' },
    lg: { minHeight: 100, padding: '20px' },
  };

  return (
    <div 
      className="flex flex-col items-center justify-center text-center"
      style={containerSizes[size]}
    >
      {/* Headline with text effect applied */}
      <h1 className={`${textSizes[size]} font-bold ${effectClassName}`}>
        {headlines[headlineIndex]}
      </h1>
      
      {/* Subtitle */}
      <p className="text-[10px] text-muted-foreground mt-2 opacity-70">
        Efeito: {effect.name}
      </p>
    </div>
  );
}
