import { useEffect, useId } from "react";
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

  const sizeStyles = {
    sm: { size: 100, frame: 3, innerRadius: 12 },
    md: { size: 130, frame: 4, innerRadius: 16 },
    lg: { size: 160, frame: 5, innerRadius: 20 },
  };

  const previewColor = effect.previewColor || '#00FFFF';

  return (
    <motion.div 
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Image container with effects */}
      <motion.div 
        className="relative group cursor-pointer"
        whileHover={{ scale: 1.03 }}
      >
        {/* Animated glow ring */}
        <motion.div 
          className="absolute -inset-2 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${previewColor}40, transparent, ${previewColor}40)`,
            filter: 'blur(8px)',
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* Frame */}
        <div 
          className="relative rounded-2xl p-1"
          style={{
            background: `linear-gradient(135deg, ${previewColor}60, ${previewColor}20, ${previewColor}60)`,
          }}
        >
          {/* Inner shadow */}
          <div 
            className="absolute inset-1 rounded-xl"
            style={{
              boxShadow: `inset 0 0 20px rgba(0,0,0,0.3)`,
            }}
          />

          {/* Main image */}
          <div 
            className="relative overflow-hidden"
            style={{ 
              width: sizeStyles[size].size, 
              height: sizeStyles[size].size,
              borderRadius: sizeStyles[size].innerRadius,
            }}
          >
            <img 
              src={imageUrl}
              alt={effect.name}
              className={`w-full h-full object-cover ${effectClassName}`}
            />

            {/* Overlay gradient */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: `linear-gradient(to top, ${previewColor}40, transparent)`,
              }}
            />

            {/* Play icon overlay */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1 }}
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
                style={{
                  background: `${previewColor}30`,
                  border: `2px solid ${previewColor}`,
                }}
              >
                <svg className="w-4 h-4 ml-0.5" fill="white" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Corner accents */}
        {['-top-1 -left-1', '-top-1 -right-1', '-bottom-1 -left-1', '-bottom-1 -right-1'].map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute ${pos} w-2 h-2`}
            style={{ background: previewColor }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </motion.div>
      
      {/* Effect info */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span 
          className="text-xs font-semibold block"
          style={{ color: previewColor }}
        >
          {effect.name}
        </span>
        <span className="text-[9px] text-muted-foreground">
          Animação de Imagem
        </span>
      </motion.div>
    </motion.div>
  );
}
