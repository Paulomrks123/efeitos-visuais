import { ButtonCategory, buttonAnimations } from "@/data/buttons";

interface ButtonCategoryFilterProps {
  activeCategory: ButtonCategory | "all";
  onCategoryChange: (category: ButtonCategory | "all") => void;
}

const categories = [
  { id: "all", name: "Todos", count: buttonAnimations.length },
  { id: "scale", name: "Scale", count: buttonAnimations.filter(b => b.category === "scale").length },
  { id: "pulse", name: "Pulse", count: buttonAnimations.filter(b => b.category === "pulse").length },
];

const ButtonCategoryFilter = ({ activeCategory, onCategoryChange }: ButtonCategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id as ButtonCategory | "all")}
          className={`
            px-4 py-2 rounded-full font-medium text-sm transition-all duration-300
            ${activeCategory === category.id
              ? "bg-gradient-to-r from-neon-cyan to-neon-green text-background shadow-lg shadow-primary/25"
              : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/30"
            }
          `}
        >
          {category.name}
          <span className={`ml-2 text-xs ${activeCategory === category.id ? "text-background/70" : "text-muted-foreground"}`}>
            ({category.count})
          </span>
        </button>
      ))}
    </div>
  );
};

export default ButtonCategoryFilter;
