import { categories } from "@/data/animations";

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categoryStyles = {
  all: "data-[active=true]:bg-foreground/10 data-[active=true]:border-foreground/50 data-[active=true]:text-foreground",
  futuristic: "data-[active=true]:bg-neon-cyan/10 data-[active=true]:border-neon-cyan data-[active=true]:text-neon-cyan",
  modern: "data-[active=true]:bg-neon-green/10 data-[active=true]:border-neon-green data-[active=true]:text-neon-green",
  stylish: "data-[active=true]:bg-neon-purple/10 data-[active=true]:border-neon-purple data-[active=true]:text-neon-purple",
  vibrant: "data-[active=true]:bg-neon-magenta/10 data-[active=true]:border-neon-magenta data-[active=true]:text-neon-magenta",
};

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
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
