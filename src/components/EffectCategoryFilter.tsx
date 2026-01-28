import { effectCategories } from "@/data/effects";

interface EffectCategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categoryStyles = {
  all: "data-[active=true]:bg-foreground/10 data-[active=true]:border-foreground/50 data-[active=true]:text-foreground",
  glassmorphism: "data-[active=true]:bg-neon-cyan/10 data-[active=true]:border-neon-cyan data-[active=true]:text-neon-cyan",
  neumorphism: "data-[active=true]:bg-neon-green/10 data-[active=true]:border-neon-green data-[active=true]:text-neon-green",
  filters: "data-[active=true]:bg-neon-purple/10 data-[active=true]:border-neon-purple data-[active=true]:text-neon-purple",
  gradients: "data-[active=true]:bg-neon-magenta/10 data-[active=true]:border-neon-magenta data-[active=true]:text-neon-magenta",
  text: "data-[active=true]:bg-neon-orange/10 data-[active=true]:border-neon-orange data-[active=true]:text-neon-orange",
  images: "data-[active=true]:bg-pink-500/10 data-[active=true]:border-pink-500 data-[active=true]:text-pink-500",
};

export function EffectCategoryFilter({ activeCategory, onCategoryChange }: EffectCategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {effectCategories.map((category) => (
        <button
          key={category.id}
          data-active={activeCategory === category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            px-5 py-2.5 rounded-xl font-medium text-sm
            border border-border bg-card/50
            transition-all duration-300
            hover:bg-muted/50
            data-[active=false]:text-muted-foreground
            ${categoryStyles[category.id as keyof typeof categoryStyles]}
          `}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
