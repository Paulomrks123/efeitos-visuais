import { useState } from "react";
import { Download, X, Check, Copy, FileCode, FileJson } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Animation } from "@/data/animations";
import { Effect } from "@/data/effects";
import { ButtonAnimation } from "@/data/buttons";

type ExportFormat = "css" | "tailwind" | "json";

interface ExportModalProps {
  animations: Animation[];
  effects: Effect[];
  buttons: ButtonAnimation[];
  trigger?: React.ReactNode;
}

export function ExportModal({ animations, effects, buttons, trigger }: ExportModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [format, setFormat] = useState<ExportFormat>("css");
  const [includeAnimations, setIncludeAnimations] = useState(true);
  const [includeEffects, setIncludeEffects] = useState(true);
  const [includeButtons, setIncludeButtons] = useState(true);
  const [copied, setCopied] = useState(false);

  const generateCSS = () => {
    let css = "/* ========================================\n";
    css += "   Animation Library - Exported CSS\n";
    css += "   Generated: " + new Date().toISOString() + "\n";
    css += "   ======================================== */\n\n";

    if (includeAnimations && animations.length > 0) {
      css += "/* ===== ANIMATIONS ===== */\n\n";
      animations.forEach((anim) => {
        css += `/* ${anim.name} - ${anim.description} */\n`;
        css += anim.cssCode + "\n\n";
      });
    }

    if (includeEffects && effects.length > 0) {
      css += "/* ===== VISUAL EFFECTS ===== */\n\n";
      effects.forEach((effect) => {
        css += `/* ${effect.name} - ${effect.description} */\n`;
        css += effect.cssCode + "\n\n";
      });
    }

    if (includeButtons && buttons.length > 0) {
      css += "/* ===== BUTTON ANIMATIONS ===== */\n\n";
      buttons.forEach((btn) => {
        css += `/* ${btn.name} - ${btn.description} */\n`;
        css += btn.cssCode + "\n\n";
      });
    }

    return css;
  };

  const generateJSON = () => {
    const data: Record<string, unknown> = {
      exportedAt: new Date().toISOString(),
      version: "1.0.0",
    };

    if (includeAnimations) {
      data.animations = animations.map((a) => ({
        id: a.id,
        name: a.name,
        category: a.category,
        description: a.description,
        cssCode: a.cssCode,
      }));
    }

    if (includeEffects) {
      data.effects = effects.map((e) => ({
        id: e.id,
        name: e.name,
        category: e.category,
        description: e.description,
        cssCode: e.cssCode,
      }));
    }

    if (includeButtons) {
      data.buttons = buttons.map((b) => ({
        id: b.id,
        name: b.name,
        category: b.category,
        description: b.description,
        cssCode: b.cssCode,
        duration: b.duration,
      }));
    }

    return JSON.stringify(data, null, 2);
  };

  const generateTailwind = () => {
    let config = "// Add this to your tailwind.config.ts\n\n";
    config += "const animationConfig = {\n";
    config += "  keyframes: {\n";

    const extractKeyframes = (cssCode: string): { name: string; frames: string } | null => {
      const match = cssCode.match(/@keyframes\s+(\w+[-\w]*)\s*\{([\s\S]*?)\n\}/);
      if (match) {
        return { name: match[1], frames: match[2].trim() };
      }
      return null;
    };

    const allKeyframes: { name: string; frames: string }[] = [];

    if (includeAnimations) {
      animations.forEach((anim) => {
        const kf = extractKeyframes(anim.cssCode);
        if (kf) allKeyframes.push(kf);
      });
    }

    if (includeButtons) {
      buttons.forEach((btn) => {
        const kf = extractKeyframes(btn.cssCode);
        if (kf) allKeyframes.push(kf);
      });
    }

    // Deduplicate keyframes by name
    const uniqueKeyframes = allKeyframes.filter(
      (kf, index, self) => index === self.findIndex((t) => t.name === kf.name)
    );

    uniqueKeyframes.forEach((kf) => {
      config += `    "${kf.name}": {\n`;
      // Simplified - in real implementation, would parse keyframe properly
      config += `      // Add keyframe values here\n`;
      config += `    },\n`;
    });

    config += "  },\n";
    config += "  animation: {\n";

    uniqueKeyframes.forEach((kf) => {
      config += `    "${kf.name}": "${kf.name} 1s ease-in-out infinite",\n`;
    });

    config += "  },\n";
    config += "};\n\n";
    config += "export default animationConfig;\n";

    return config;
  };

  const getExportContent = () => {
    switch (format) {
      case "css":
        return generateCSS();
      case "json":
        return generateJSON();
      case "tailwind":
        return generateTailwind();
      default:
        return "";
    }
  };

  const getFileExtension = () => {
    switch (format) {
      case "css":
        return "css";
      case "json":
        return "json";
      case "tailwind":
        return "ts";
      default:
        return "txt";
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(getExportContent());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const content = getExportContent();
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `animation-library.${getFileExtension()}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const totalItems =
    (includeAnimations ? animations.length : 0) +
    (includeEffects ? effects.length : 0) +
    (includeButtons ? buttons.length : 0);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="gap-2">
            <Download size={16} />
            Exportar
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Download size={20} />
            Exportar Biblioteca
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {/* Format Selection */}
          <div>
            <label className="text-sm font-medium text-foreground mb-3 block">
              Formato de Exportação
            </label>
            <div className="flex gap-2">
              {[
                { id: "css", label: "CSS", icon: <FileCode size={16} /> },
                { id: "tailwind", label: "Tailwind", icon: <FileCode size={16} /> },
                { id: "json", label: "JSON", icon: <FileJson size={16} /> },
              ].map(({ id, label, icon }) => (
                <button
                  key={id}
                  onClick={() => setFormat(id as ExportFormat)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                    transition-all duration-200 flex-1 justify-center
                    ${format === id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Include Options */}
          <div>
            <label className="text-sm font-medium text-foreground mb-3 block">
              Incluir
            </label>
            <div className="space-y-2">
              {[
                {
                  checked: includeAnimations,
                  onChange: setIncludeAnimations,
                  label: `Animações (${animations.length})`,
                  color: "text-neon-cyan",
                },
                {
                  checked: includeEffects,
                  onChange: setIncludeEffects,
                  label: `Efeitos Visuais (${effects.length})`,
                  color: "text-neon-magenta",
                },
                {
                  checked: includeButtons,
                  onChange: setIncludeButtons,
                  label: `Animações de Botões (${buttons.length})`,
                  color: "text-neon-green",
                },
              ].map(({ checked, onChange, label, color }) => (
                <label
                  key={label}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 cursor-pointer hover:bg-muted transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    className="w-4 h-4 rounded border-border"
                  />
                  <span className={`text-sm ${color}`}>{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="p-4 rounded-lg bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">{totalItems}</span> itens serão exportados como{" "}
              <span className="text-foreground font-medium">.{getFileExtension()}</span>
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleCopy}
              className="flex-1 gap-2"
              disabled={totalItems === 0}
            >
              {copied ? <Check size={16} className="text-neon-green" /> : <Copy size={16} />}
              {copied ? "Copiado!" : "Copiar"}
            </Button>
            <Button
              onClick={handleDownload}
              className="flex-1 gap-2"
              disabled={totalItems === 0}
            >
              <Download size={16} />
              Baixar Arquivo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
