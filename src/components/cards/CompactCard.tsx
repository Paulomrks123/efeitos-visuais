import { useState } from "react";
import { Copy, Check, Play, Pause, Expand, Lightbulb, ChevronDown } from "lucide-react";
import { FavoriteButton } from "@/components/features/FavoriteButton";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CompactCardProps {
  id: string;
  name: string;
  category: string;
  type: "animation" | "effect" | "button";
  cssCode: string;
  htmlCode: string;
  renderPreview: (isPlaying: boolean) => React.ReactNode;
  categoryColor: string;
  useCaseExample?: string;
}

export function CompactCard({
  id,
  name,
  category,
  type,
  cssCode,
  htmlCode,
  renderPreview,
  categoryColor,
  useCaseExample,
}: CompactCardProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [copied, setCopied] = useState(false);
  const [copiedHTML, setCopiedHTML] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyHTML = async () => {
    await navigator.clipboard.writeText(htmlCode);
    setCopiedHTML(true);
    setTimeout(() => setCopiedHTML(false), 2000);
  };

  return (
    <>
      <div
        className={`
          relative group bg-card/50 backdrop-blur-sm rounded-xl 
          border-2 transition-all duration-300 overflow-hidden
          hover:shadow-lg cursor-pointer
          ${categoryColor}
        `}
        onClick={() => setIsExpanded(true)}
      >
        {/* Quick Actions */}
        <div className="absolute top-2 right-2 z-10 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <FavoriteButton id={id} type={type} size="sm" />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(!isPlaying);
            }}
            className="p-1.5 rounded-lg bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopy();
            }}
            className="p-1.5 rounded-lg bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
          >
            {copied ? <Check size={14} className="text-neon-green" /> : <Copy size={14} />}
          </button>
        </div>

        {/* Preview */}
        <div className="aspect-square flex items-center justify-center p-4 bg-background/30">
          {renderPreview(isPlaying)}
        </div>

        {/* Info */}
        <div className="p-3 border-t border-border/50">
          <p className="text-xs font-mono text-muted-foreground mb-1">{id}</p>
          <h3 className="text-sm font-medium text-foreground truncate">{name}</h3>
        </div>

        {/* Expand indicator */}
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Expand size={14} className="text-muted-foreground" />
        </div>
      </div>

      {/* Expanded Modal */}
      <Dialog open={isExpanded} onOpenChange={setIsExpanded}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                {id}
              </span>
              {name}
              <FavoriteButton id={id} type={type} size="sm" />
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Preview */}
            <div className="bg-background/50 rounded-lg p-8 flex items-center justify-center min-h-[150px] border border-border/50">
              {renderPreview(isPlaying)}
            </div>

            {/* Use Case Example */}
            {useCaseExample && (
              <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20">
                <Lightbulb size={14} className="text-primary shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-medium text-primary">Uso: </span>
                  {useCaseExample}
                </p>
              </div>
            )}

            {/* Controls */}
            <div className="flex gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                {isPlaying ? "Pausar" : "Reproduzir"}
              </button>
            </div>

            {/* Code Toggle Section */}
            <div className="space-y-3">
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                >
                  {copied ? <Check size={12} className="text-neon-green" /> : <Copy size={12} />}
                  {copied ? "Copiado!" : "Copiar CSS"}
                </button>
                <button
                  onClick={() => setShowCode(!showCode)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showCode ? "Ocultar Código" : "Ver Código"}
                  <ChevronDown size={12} className={`transition-transform duration-200 ${showCode ? "rotate-180" : ""}`} />
                </button>
              </div>

              <AnimatePresence>
                {showCode && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">CSS</span>
                        <button
                          onClick={handleCopy}
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                        >
                          {copied ? <Check size={14} className="text-neon-green" /> : <Copy size={14} />}
                          {copied ? "Copiado!" : "Copiar"}
                        </button>
                      </div>
                      <pre className="text-xs bg-muted/50 p-4 rounded-lg overflow-x-auto font-mono max-h-48">
                        <code className="text-muted-foreground">{cssCode}</code>
                      </pre>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">HTML/JSX</span>
                        <button
                          onClick={handleCopyHTML}
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                        >
                          {copiedHTML ? <Check size={14} className="text-neon-green" /> : <Copy size={14} />}
                          {copiedHTML ? "Copiado!" : "Copiar"}
                        </button>
                      </div>
                      <pre className="text-xs bg-muted/50 p-4 rounded-lg overflow-x-auto font-mono max-h-32">
                        <code className="text-muted-foreground">{htmlCode}</code>
                      </pre>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
