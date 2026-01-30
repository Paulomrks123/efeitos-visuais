import { useEffect, useId, useState } from "react";
import { Effect } from "@/data/effects";
import { motion } from "framer-motion";

interface ImageEffectCardProps {
  effect: Effect;
  size: "sm" | "md" | "lg";
}

// Beautiful portfolio-worthy images
const portfolioImages = [
  "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=300&h=300&fit=crop", // Lion
  "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=300&h=300&fit=crop", // Tiger
  "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=300&h=300&fit=crop", // Bear
  "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=300&h=300&fit=crop", // Fox
  "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=300&h=300&fit=crop", // Wolf
  "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=300&h=300&fit=crop", // Horse
  "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=300&h=300&fit=crop", // Eagle
  "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=300&h=300&fit=crop", // Dolphin
  "https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=300&h=300&fit=crop", // Shark
  "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?w=300&h=300&fit=crop", // Octopus
  "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=300&h=300&fit=crop", // Parrot
  "https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=300&h=300&fit=crop", // Flamingo
  "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=300&h=300&fit=crop", // Penguin
  "https://images.unsplash.com/photo-1577936003568-4d2ad79eb789?w=300&h=300&fit=crop", // Sloth
  "https://images.unsplash.com/photo-1555169062-013468b47731?w=300&h=300&fit=crop", // Kangaroo
  "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=300&h=300&fit=crop", // Koala
  "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=300&h=300&fit=crop", // Giraffe
  "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=300&h=300&fit=crop", // Leopard
  "https://images.unsplash.com/photo-1519069060891-f8c50519bf22?w=300&h=300&fit=crop", // Elephant
  "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=300&h=300&fit=crop", // Hedgehog
];

export function ImageEffectCard({ effect, size }: ImageEffectCardProps) {
  const styleId = useId();
  const uniqueStyleId = `image-effect-${effect.id}-${styleId.replace(/:/g, '')}`;
  const [isHovered, setIsHovered] = useState(false);
  const [replayKey, setReplayKey] = useState(0);
  
  // Extract class name from CSS code
  const classMatch = effect.cssCode.match(/\.([a-zA-Z0-9_-]+)\s*\{/);
  const effectClassName = classMatch ? classMatch[1] : '';

  // Get consistent image based on effect ID
  const imageIndex = parseInt(effect.id.replace(/\D/g, '')) % portfolioImages.length;
  const imageUrl = portfolioImages[imageIndex];

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

  // Auto-replay animation
  useEffect(() => {
    const interval = setInterval(() => {
      setReplayKey(prev => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const sizeStyles = {
    sm: { size: 110, containerSize: 150 },
    md: { size: 140, containerSize: 190 },
    lg: { size: 170, containerSize: 230 },
  };

  const previewColor = effect.previewColor || '#00FFFF';

  // Generate orbital particles
  const orbitals = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    angle: (i * 360) / 8,
    size: 4 + (i % 3) * 2,
    orbitRadius: sizeStyles[size].size / 2 + 15,
    duration: 6 + i * 0.5,
  }));

  // Generate background particles
  const bgParticles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 3,
    duration: 2 + Math.random() * 3,
  }));

  return (
    <motion.div 
      className="relative flex flex-col items-center gap-4"
      style={{ 
        width: sizeStyles[size].containerSize,
        minHeight: sizeStyles[size].containerSize + 40,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: sizeStyles[size].size * 1.5,
          height: sizeStyles[size].size * 1.5,
          background: `radial-gradient(circle, ${previewColor}20, transparent 70%)`,
          filter: 'blur(20px)',
          top: '10%',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Background particles */}
      {bgParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: previewColor,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.5, 0.5],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.id * 0.2,
          }}
        />
      ))}

      {/* Main image container */}
      <div className="relative">
        {/* Animated orbital ring */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: sizeStyles[size].size + 30,
            height: sizeStyles[size].size + 30,
            left: -15,
            top: -15,
            border: `1px dashed ${previewColor}40`,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Second orbital ring */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: sizeStyles[size].size + 50,
            height: sizeStyles[size].size + 50,
            left: -25,
            top: -25,
            border: `1px solid ${previewColor}20`,
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Orbital particles */}
        {orbitals.map((orbital) => (
          <motion.div
            key={orbital.id}
            className="absolute rounded-full"
            style={{
              width: orbital.size,
              height: orbital.size,
              background: `radial-gradient(circle, ${previewColor}, ${previewColor}50)`,
              boxShadow: `0 0 ${orbital.size * 2}px ${previewColor}60`,
              left: sizeStyles[size].size / 2 - orbital.size / 2,
              top: sizeStyles[size].size / 2 - orbital.size / 2,
            }}
            animate={{
              x: [
                Math.cos((orbital.angle * Math.PI) / 180) * orbital.orbitRadius,
                Math.cos(((orbital.angle + 360) * Math.PI) / 180) * orbital.orbitRadius,
              ],
              y: [
                Math.sin((orbital.angle * Math.PI) / 180) * orbital.orbitRadius,
                Math.sin(((orbital.angle + 360) * Math.PI) / 180) * orbital.orbitRadius,
              ],
            }}
            transition={{
              duration: orbital.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Glowing frame */}
        <motion.div 
          className="absolute -inset-2 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${previewColor}60, transparent, ${previewColor}60)`,
            filter: 'blur(4px)',
          }}
          animate={{
            opacity: isHovered ? [0.5, 0.8, 0.5] : [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Main image frame */}
        <motion.div 
          className="relative rounded-xl overflow-hidden"
          style={{
            width: sizeStyles[size].size,
            height: sizeStyles[size].size,
            boxShadow: `0 0 40px ${previewColor}30, inset 0 0 30px rgba(0,0,0,0.3)`,
          }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Image with effect class - using key to trigger re-animation */}
          <motion.img 
            key={replayKey}
            src={imageUrl}
            alt={effect.name}
            className={`w-full h-full object-cover ${effectClassName}`}
          />

          {/* Scanlines overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
            }}
          />

          {/* Hover overlay with replay button */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            style={{
              background: `linear-gradient(to top, ${previewColor}40, transparent)`,
            }}
          >
            <motion.button
              className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md"
              style={{
                background: `${previewColor}30`,
                border: `2px solid ${previewColor}`,
                boxShadow: `0 0 20px ${previewColor}50`,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setReplayKey(prev => prev + 1)}
            >
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                <path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
              </svg>
            </motion.button>
          </motion.div>

          {/* Corner accents */}
          {['top-1 left-1', 'top-1 right-1', 'bottom-1 left-1', 'bottom-1 right-1'].map((pos, i) => (
            <motion.div
              key={i}
              className={`absolute ${pos} w-3 h-3`}
              style={{
                borderTop: pos.includes('top') ? `2px solid ${previewColor}` : 'none',
                borderBottom: pos.includes('bottom') ? `2px solid ${previewColor}` : 'none',
                borderLeft: pos.includes('left') ? `2px solid ${previewColor}` : 'none',
                borderRight: pos.includes('right') ? `2px solid ${previewColor}` : 'none',
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.div>

        {/* Light reflection */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1/3 rounded-t-xl pointer-events-none"
          style={{
            background: `linear-gradient(180deg, ${previewColor}15, transparent)`,
          }}
        />
      </div>
      
      {/* Effect info card */}
      <motion.div 
        className="relative text-center px-4 py-2 rounded-xl backdrop-blur-sm"
        style={{
          background: `linear-gradient(135deg, ${previewColor}10, transparent)`,
          border: `1px solid ${previewColor}30`,
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.span 
          className="text-xs font-bold block"
          style={{ color: previewColor }}
        >
          {effect.name}
        </motion.span>
        <span className="text-[9px] text-muted-foreground flex items-center justify-center gap-1">
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            🎬
          </motion.span>
          Clique para replay
        </span>
      </motion.div>
    </motion.div>
  );
}
