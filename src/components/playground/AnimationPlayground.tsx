import { useState, useMemo, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Copy, Check, Play, Pause, RotateCcw, Palette, Clock, Waves, Repeat } from "lucide-react";
import { FavoriteButton } from "@/components/features/FavoriteButton";

interface PlaygroundProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id: string;
    name: string;
    cssCode: string;
    htmlExample: string;
    previewColor?: string;
    category: string;
  };
  type: "animation" | "effect" | "button";
}

const easingOptions = [
  { value: "linear", label: "Linear" },
  { value: "ease", label: "Ease" },
  { value: "ease-in", label: "Ease In" },
  { value: "ease-out", label: "Ease Out" },
  { value: "ease-in-out", label: "Ease In Out" },
  { value: "cubic-bezier(0.68, -0.55, 0.265, 1.55)", label: "Bounce" },
  { value: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", label: "Elastic" },
  { value: "cubic-bezier(0.6, 0.04, 0.98, 0.335)", label: "Power" },
  { value: "steps(5, end)", label: "Steps (5)" },
  { value: "steps(10, end)", label: "Steps (10)" },
];

const presetColors = [
  "#00FFFF", "#FF00FF", "#00FF00", "#FF6600", "#6600FF",
  "#FF0066", "#00FF88", "#FFFF00", "#FF3366", "#33CCFF",
  "#FFD700", "#FF4444", "#44FF44", "#4444FF", "#FF44FF",
  "#00CED1", "#FF7F50", "#9370DB", "#3CB371", "#FF69B4",
];

export function AnimationPlayground({ isOpen, onClose, item, type }: PlaygroundProps) {
  const [duration, setDuration] = useState(1);
  const [delay, setDelay] = useState(0);
  const [easing, setEasing] = useState("ease-in-out");
  const [isInfinite, setIsInfinite] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [color, setColor] = useState(item.previewColor || "#00FFFF");
  const [copied, setCopied] = useState(false);
  const [copiedHTML, setCopiedHTML] = useState(false);

  // Reset quando o item mudar
  useEffect(() => {
    setColor(item.previewColor || "#00FFFF");
    setDuration(1);
    setDelay(0);
    setEasing("ease-in-out");
    setIsInfinite(true);
    setIsPlaying(true);
  }, [item.id, item.previewColor]);

  // Gera CSS customizado
  const customizedCSS = useMemo(() => {
    let css = item.cssCode;
    
    // Substitui cores
    css = css.replace(/#[0-9A-Fa-f]{6}/g, color);
    css = css.replace(/#[0-9A-Fa-f]{3}(?![0-9A-Fa-f])/g, color);
    
    // Substitui duração
    css = css.replace(/(\d+\.?\d*)(s|ms)\s*(ease|linear|ease-in|ease-out|ease-in-out|cubic-bezier\([^)]+\)|steps\([^)]+\))?(\s*infinite)?/g, 
      (match, dur, unit, oldEasing, infinite) => {
        const newDuration = `${duration}s`;
        const newEasing = easing;
        const newInfinite = isInfinite ? " infinite" : "";
        return `${newDuration} ${newEasing}${newInfinite}`;
      }
    );

    // Adiciona delay se existir
    if (delay > 0) {
      css = css.replace(/animation:\s*([^;]+);/g, `animation: $1;\n  animation-delay: ${delay}s;`);
    }
    
    return css;
  }, [item.cssCode, color, duration, easing, isInfinite, delay]);

  // Estilo de preview dinâmico
  const previewStyle = useMemo(() => {
    return {
      animationDuration: `${duration}s`,
      animationTimingFunction: easing,
      animationIterationCount: isInfinite ? "infinite" : "1",
      animationDelay: `${delay}s`,
      animationPlayState: isPlaying ? "running" : "paused",
      "--preview-color": color,
      "--glow-color": color,
      color: color,
      background: type === "effect" ? undefined : color,
      filter: `drop-shadow(0 0 10px ${color})`,
    } as React.CSSProperties;
  }, [duration, easing, isInfinite, delay, isPlaying, color, type]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(customizedCSS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyHTML = async () => {
    await navigator.clipboard.writeText(item.htmlExample);
    setCopiedHTML(true);
    setTimeout(() => setCopiedHTML(false), 2000);
  };

  const handleReset = () => {
    setDuration(1);
    setDelay(0);
    setEasing("ease-in-out");
    setIsInfinite(true);
    setColor(item.previewColor || "#00FFFF");
    setIsPlaying(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-xl">
            <span 
              className="text-xs font-mono px-3 py-1 rounded-full border"
              style={{ borderColor: color, color: color }}
            >
              {item.id}
            </span>
            <span className="text-foreground">{item.name}</span>
            <FavoriteButton id={item.id} type={type} />
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Preview Area */}
          <div className="space-y-4">
            <div className="relative bg-gradient-to-br from-background to-muted/30 rounded-2xl p-8 flex items-center justify-center min-h-[250px] border border-border overflow-hidden">
              {/* Background Grid */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(${color}22 1px, transparent 1px), linear-gradient(90deg, ${color}22 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />
              
              {/* Preview Element */}
              <div
                className={`relative z-10 w-24 h-24 rounded-xl transition-all ${isPlaying ? "animate-pulse" : ""}`}
                style={{
                  ...previewStyle,
                  background: `linear-gradient(135deg, ${color}, ${color}88)`,
                  boxShadow: `0 0 30px ${color}66, 0 0 60px ${color}33`,
                }}
              />
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-muted hover:bg-muted/80 transition-all text-sm font-medium"
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                {isPlaying ? "Pausar" : "Reproduzir"}
              </button>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-muted hover:bg-muted/80 transition-all text-sm font-medium"
              >
                <RotateCcw size={18} />
                Reset
              </button>
            </div>
          </div>

          {/* Controls Area */}
          <div className="space-y-5">
            {/* Duration */}
            <div className="space-y-3 p-4 rounded-xl bg-muted/30 border border-border/50">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Clock size={16} className="text-primary" />
                <Label>Duração: {duration.toFixed(1)}s</Label>
              </div>
              <Slider
                value={[duration]}
                onValueChange={([v]) => setDuration(v)}
                min={0.1}
                max={5}
                step={0.1}
                className="w-full"
              />
            </div>

            {/* Delay */}
            <div className="space-y-3 p-4 rounded-xl bg-muted/30 border border-border/50">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Clock size={16} className="text-secondary" />
                <Label>Delay: {delay.toFixed(1)}s</Label>
              </div>
              <Slider
                value={[delay]}
                onValueChange={([v]) => setDelay(v)}
                min={0}
                max={3}
                step={0.1}
                className="w-full"
              />
            </div>

            {/* Easing */}
            <div className="space-y-3 p-4 rounded-xl bg-muted/30 border border-border/50">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Waves size={16} className="text-accent" />
                <Label>Easing</Label>
              </div>
              <Select value={easing} onValueChange={setEasing}>
                <SelectTrigger className="w-full bg-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border z-50">
                  {easingOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Loop */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border/50">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Repeat size={16} className="text-neon-cyan" />
                <Label>Loop Infinito</Label>
              </div>
              <Switch
                checked={isInfinite}
                onCheckedChange={setIsInfinite}
              />
            </div>

            {/* Color Picker */}
            <div className="space-y-3 p-4 rounded-xl bg-muted/30 border border-border/50">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Palette size={16} style={{ color }} />
                <Label>Cor Principal</Label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-12 h-10 rounded-lg cursor-pointer border-2 border-border"
                />
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg bg-background border border-border text-sm font-mono"
                />
              </div>
              {/* Preset Colors */}
              <div className="flex flex-wrap gap-2 mt-3">
                {presetColors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`w-7 h-7 rounded-lg border-2 transition-transform hover:scale-110 ${
                      color === c ? "border-foreground scale-110" : "border-transparent"
                    }`}
                    style={{ background: c }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Code Output */}
        <div className="space-y-4 mt-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground">CSS Customizado</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Copiado!" : "Copiar CSS"}
              </button>
            </div>
            <pre className="text-xs bg-background/80 p-4 rounded-xl overflow-x-auto border border-border max-h-48 font-mono">
              <code className="text-muted-foreground">{customizedCSS}</code>
            </pre>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground">HTML/JSX</span>
              <button
                onClick={handleCopyHTML}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-secondary/20 text-secondary hover:bg-secondary/30 transition-colors"
              >
                {copiedHTML ? <Check size={14} /> : <Copy size={14} />}
                {copiedHTML ? "Copiado!" : "Copiar HTML"}
              </button>
            </div>
            <pre className="text-xs bg-background/80 p-4 rounded-xl overflow-x-auto border border-border max-h-32 font-mono">
              <code className="text-muted-foreground">{item.htmlExample}</code>
            </pre>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
