import { useEffect, useId, useMemo, useState } from "react";
import { Effect } from "@/data/effects";
import { motion, AnimatePresence } from "framer-motion";

interface TextEffectCardProps {
  effect: Effect;
  size: "sm" | "md" | "lg";
}

export function TextEffectCard({ effect, size }: TextEffectCardProps) {
  const styleId = useId();
  const uniqueStyleId = `text-effect-${effect.id}-${styleId.replace(/:/g, '')}`;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  // Extract class name from CSS code
  const classMatch = effect.cssCode.match(/\.([a-zA-Z0-9_-]+)\s*\{/);
  const effectClassName = classMatch ? classMatch[1] : '';

  // Rotating words for dynamic effect
  const words = ["Transforme", "Inove", "Crie", "Descubra", "Explore", "Imagine"];
  
  const subwords = useMemo(() => ({
    "Transforme": "suas ideias",
    "Inove": "o futuro",
    "Crie": "experiências",
    "Descubra": "possibilidades",
    "Explore": "novos mundos",
    "Imagine": "sem limites",
  }), []);

  // Rotate words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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

  const previewColor = effect.previewColor || '#00FFFF';
  const currentWord = words[currentWordIndex];

  const textSizes = {
    sm: { main: 'text-xl', sub: 'text-xs', label: 'text-[8px]' },
    md: { main: 'text-2xl', sub: 'text-sm', label: 'text-[9px]' },
    lg: { main: 'text-3xl', sub: 'text-base', label: 'text-[10px]' },
  };

  const containerSizes = {
    sm: { minHeight: 120, padding: '16px', width: 170 },
    md: { minHeight: 150, padding: '20px', width: 210 },
    lg: { minHeight: 180, padding: '28px', width: 270 },
  };

  // Generate floating particles
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 2,
  }));

  return (
    <motion.div 
      className="relative flex flex-col items-center justify-center text-center overflow-hidden rounded-2xl"
      style={{
        ...containerSizes[size],
        background: `linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.3))`,
        border: `1px solid ${previewColor}20`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Animated background grid */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${previewColor}30 1px, transparent 1px),
            linear-gradient(to bottom, ${previewColor}30 1px, transparent 1px)
          `,
          backgroundSize: '25px 25px',
        }}
        animate={{ 
          backgroundPosition: ['0px 0px', '25px 25px'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: `radial-gradient(circle, ${previewColor}, transparent)`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated spotlight */}
      <motion.div
        className="absolute w-40 h-40 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${previewColor}15, transparent 60%)`,
          filter: 'blur(30px)',
        }}
        animate={{
          x: [-60, 60, -60],
          y: [-40, 40, -40],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glowing lines */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${previewColor}, transparent)` }}
        animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${previewColor}, transparent)` }}
        animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      />

      {/* Main content */}
      <div className="relative z-10">
        {/* Animated word with effect */}
        <AnimatePresence mode="wait">
          <motion.h1 
            key={currentWord}
            className={`${textSizes[size].main} font-black ${effectClassName}`}
            initial={{ y: 30, opacity: 0, rotateX: -90 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            exit={{ y: -30, opacity: 0, rotateX: 90 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ textShadow: `0 0 30px ${previewColor}50` }}
          >
            {currentWord.split('').map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </AnimatePresence>

        {/* Subheadline */}
        <AnimatePresence mode="wait">
          <motion.p 
            key={currentWord}
            className={`${textSizes[size].sub} mt-1`}
            style={{ color: `${previewColor}90` }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {subwords[currentWord as keyof typeof subwords]}
          </motion.p>
        </AnimatePresence>

        {/* Typing cursor */}
        <motion.span
          className="inline-block w-0.5 h-5 ml-1 align-middle"
          style={{ background: previewColor }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
      
      {/* Effect label badge */}
      <motion.div 
        className={`${textSizes[size].label} absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full backdrop-blur-md font-medium flex items-center gap-1.5`}
        style={{
          background: `${previewColor}15`,
          border: `1px solid ${previewColor}30`,
          color: previewColor,
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          ✨
        </motion.span>
        {effect.name}
      </motion.div>

      {/* Corner decorations */}
      {[
        { pos: 'top-2 left-2', rotate: 0 },
        { pos: 'top-2 right-2', rotate: 90 },
        { pos: 'bottom-2 right-2', rotate: 180 },
        { pos: 'bottom-2 left-2', rotate: 270 },
      ].map((corner, i) => (
        <motion.div
          key={i}
          className={`absolute ${corner.pos} w-4 h-4`}
          style={{
            borderTop: `2px solid ${previewColor}40`,
            borderLeft: `2px solid ${previewColor}40`,
            transform: `rotate(${corner.rotate}deg)`,
          }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </motion.div>
  );
}
