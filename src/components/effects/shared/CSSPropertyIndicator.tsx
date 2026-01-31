import { motion } from "framer-motion";
import { useMemo } from "react";

interface CSSProperty {
  name: string;
  value: string;
  isAnimation: boolean;
  isActive: boolean;
}

interface CSSPropertyIndicatorProps {
  cssCode: string;
  color?: string;
  maxProperties?: number;
}

const IMPORTANT_PROPERTIES = [
  'backdrop-filter',
  'filter',
  'box-shadow',
  'animation',
  'transform',
  'transition',
  'background',
  'border-radius',
  'opacity',
  'scale',
  'rotate',
  'translate',
  'perspective',
  'mix-blend-mode',
  'clip-path',
  'mask',
];

export function CSSPropertyIndicator({ 
  cssCode, 
  color = "#00FFFF",
  maxProperties = 4 
}: CSSPropertyIndicatorProps) {
  const properties = useMemo(() => {
    const result: CSSProperty[] = [];
    
    // Match property: value pairs (ignoring @keyframes content)
    const mainBlockMatch = cssCode.match(/\.[^{]+\{([^}]+)\}/);
    if (mainBlockMatch) {
      const blockContent = mainBlockMatch[1];
      const regex = /([\w-]+)\s*:\s*([^;]+)/g;
      let match;
      
      while ((match = regex.exec(blockContent))) {
        const name = match[1].trim();
        const value = match[2].trim();
        
        // Skip vendor prefixes and internal properties
        if (name.startsWith('-webkit-') || name.startsWith('-moz-')) continue;
        
        const isAnimation = name.includes('animation') || name.includes('transition');
        const isImportant = IMPORTANT_PROPERTIES.some(p => name.includes(p));
        
        if (isImportant || isAnimation) {
          result.push({
            name,
            value: value.length > 25 ? value.slice(0, 22) + '...' : value,
            isAnimation,
            isActive: true,
          });
        }
      }
    }
    
    // Check for @keyframes
    const keyframesMatch = cssCode.match(/@keyframes\s+(\w+)/);
    if (keyframesMatch) {
      result.push({
        name: '@keyframes',
        value: keyframesMatch[1],
        isAnimation: true,
        isActive: true,
      });
    }
    
    return result.slice(0, maxProperties);
  }, [cssCode, maxProperties]);

  if (properties.length === 0) return null;

  return (
    <motion.div
      className="flex flex-wrap gap-1"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {properties.map((prop, index) => (
        <motion.div
          key={`${prop.name}-${index}`}
          className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[7px] font-mono"
          style={{
            background: prop.isAnimation ? `${color}20` : 'rgba(255,255,255,0.05)',
            border: `1px solid ${prop.isAnimation ? color : 'rgba(255,255,255,0.1)'}`,
            color: prop.isAnimation ? color : 'rgba(255,255,255,0.7)',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {prop.isAnimation && (
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              ⚡
            </motion.span>
          )}
          <span className="opacity-60">{prop.name}:</span>
          <span className="font-semibold truncate max-w-[60px]">{prop.value}</span>
          {prop.isActive && !prop.isAnimation && (
            <span className="text-green-400">✓</span>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
