import { useEffect, useId, useMemo } from "react";
import { Effect } from "@/data/effects";
import { motion } from "framer-motion";

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
    "Transforme",
    "Inove",
    "Crie",
    "Descubra",
    "Explore",
    "Imagine",
    "Conecte",
    "Evolua",
  ];

  const subheadlines = [
    "suas ideias",
    "o futuro",
    "experiências",
    "possibilidades",
    "novos mundos",
    "sem limites",
    "com estilo",
    "agora",
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
    sm: { main: 'text-xl', sub: 'text-sm', label: 'text-[8px]' },
    md: { main: 'text-2xl', sub: 'text-base', label: 'text-[9px]' },
    lg: { main: 'text-3xl', sub: 'text-lg', label: 'text-[10px]' },
  };

  const containerSizes = {
    sm: { minHeight: 100, padding: '16px', width: 160 },
    md: { minHeight: 130, padding: '20px', width: 200 },
    lg: { minHeight: 160, padding: '28px', width: 260 },
  };

  return (
    <motion.div 
      className="relative flex flex-col items-center justify-center text-center overflow-hidden rounded-xl"
      style={{
        ...containerSizes[size],
        background: 'linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2))',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Animated spotlight */}
      <motion.div
        className="absolute w-32 h-32 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          x: [-50, 50, -50],
          y: [-30, 30, -30],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main headline with effect */}
      <motion.h1 
        className={`${textSizes[size].main} font-black ${effectClassName} relative z-10`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {headlines[headlineIndex]}
      </motion.h1>

      {/* Subheadline */}
      <motion.p 
        className={`${textSizes[size].sub} text-muted-foreground mt-1 relative z-10`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {subheadlines[headlineIndex]}
      </motion.p>
      
      {/* Effect label */}
      <motion.div 
        className={`${textSizes[size].label} absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-muted-foreground font-medium`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        ✨ {effect.name}
      </motion.div>

      {/* Decorative lines */}
      <motion.div 
        className="absolute top-3 left-3 w-8 h-px bg-gradient-to-r from-primary/50 to-transparent"
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-3 right-3 w-8 h-px bg-gradient-to-l from-primary/50 to-transparent"
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      />
    </motion.div>
  );
}
