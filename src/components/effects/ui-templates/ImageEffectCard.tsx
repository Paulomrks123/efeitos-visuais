import { useEffect, useId } from "react";
import { Effect } from "@/data/effects";

interface ImageEffectCardProps {
  effect: Effect;
  size: "sm" | "md" | "lg";
}

// Beautiful portfolio-worthy images for image effects
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
  "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=300&h=300&fit=crop", // Turtle
  "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=300&h=300&fit=crop", // Whale
  "https://images.unsplash.com/photo-1598894000329-23c07728de99?w=300&h=300&fit=crop", // Rhino
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=300&h=300&fit=crop", // Dog
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
    sm: { width: 100, height: 100 },
    md: { width: 130, height: 130 },
    lg: { width: 160, height: 160 },
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Image with animation effect applied */}
      <div 
        className="rounded-xl overflow-hidden shadow-xl border border-white/10"
        style={sizeStyles[size]}
      >
        <img 
          src={imageUrl}
          alt={effect.name}
          className={`w-full h-full object-cover ${effectClassName}`}
        />
      </div>
      
      {/* Effect name */}
      <span className="text-[10px] font-medium text-muted-foreground">
        {effect.name}
      </span>
    </div>
  );
}
