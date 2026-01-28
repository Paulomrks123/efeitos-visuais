import { useState, useEffect } from "react";
import { 
  Download, 
  Smartphone, 
  Share, 
  Plus, 
  Check, 
  Sparkles,
  Zap,
  Heart,
  Star,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    // Check if already installed
    const standalone = window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;
    setIsInstalled(standalone);

    // Check if iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(iOS);

    // Listen for the beforeinstallprompt event
    const handleBeforeInstall = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall as EventListener);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall as EventListener);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    setIsInstalling(true);
    
    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === "accepted") {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } catch (error) {
      console.error("Installation error:", error);
    } finally {
      setIsInstalling(false);
    }
  };

  const features = [
    { icon: Zap, text: "Acesso instantâneo às animações", color: "text-primary" },
    { icon: Heart, text: "Salve seus favoritos offline", color: "text-accent" },
    { icon: Star, text: "Notificações de novas animações", color: "text-secondary" },
    { icon: Sparkles, text: "Interface otimizada para mobile", color: "text-primary" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="p-4 border-b border-border">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Voltar</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full space-y-8">
          {/* App Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-1 shadow-2xl shadow-primary/30">
                <div className="w-full h-full rounded-[22px] bg-card flex items-center justify-center">
                  <Smartphone className="w-12 h-12 text-primary" />
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent opacity-30 blur-xl -z-10" />
            </div>
          </div>

          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Biblioteca Visual
            </h1>
            <p className="text-muted-foreground">
              Instale o app para uma experiência completa
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border"
              >
                <div className={`p-2 rounded-lg bg-muted ${feature.color}`}>
                  <feature.icon size={20} />
                </div>
                <span className="text-sm text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Install Section */}
          {isInstalled ? (
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary">
                <Check size={20} />
                <span className="font-medium">App instalado!</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Você já pode acessar o app pela tela inicial do seu dispositivo.
              </p>
              <Link to="/">
                <Button className="w-full">
                  Continuar para o App
                </Button>
              </Link>
            </div>
          ) : isIOS ? (
            <div className="space-y-4">
              <p className="text-center text-sm text-muted-foreground">
                Siga os passos abaixo para instalar no iOS:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Share size={18} className="text-primary" />
                      <span className="font-medium">Toque em Compartilhar</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Na barra inferior do Safari
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Plus size={18} className="text-secondary" />
                      <span className="font-medium">Adicionar à Tela de Início</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Role para baixo nas opções
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Check size={18} className="text-accent" />
                      <span className="font-medium">Confirme a instalação</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Toque em "Adicionar" no canto superior
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : deferredPrompt ? (
            <Button
              onClick={handleInstall}
              disabled={isInstalling}
              className="w-full gap-2 h-12 text-base bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg shadow-primary/30"
            >
              {isInstalling ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Instalando...
                </>
              ) : (
                <>
                  <Download size={20} />
                  Instalar Aplicativo
                </>
              )}
            </Button>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                A instalação do app está disponível através do menu do seu navegador.
              </p>
              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <p className="text-xs text-muted-foreground">
                  <strong>Chrome:</strong> Menu (⋮) → "Instalar aplicativo"
                  <br />
                  <strong>Edge:</strong> Menu (⋯) → "Aplicativos" → "Instalar este site"
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-xs text-muted-foreground border-t border-border">
        Biblioteca Visual © 2024 • PWA
      </footer>
    </div>
  );
};

export default Install;
