import { useState, useEffect } from "react";
import { X, Download, Smartphone, Share, Plus, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

export const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if already installed
    const standalone = window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;
    setIsStandalone(standalone);

    // Check if iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(iOS);

    // Check if user dismissed the prompt before
    const dismissed = localStorage.getItem("pwa-install-dismissed");
    const dismissedTime = dismissed ? parseInt(dismissed) : 0;
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;

    if (standalone || (dismissed && dismissedTime > oneDayAgo)) {
      return;
    }

    // Listen for the beforeinstallprompt event (Chrome/Android)
    const handleBeforeInstall = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Show banner after 3 seconds
      setTimeout(() => setShowBanner(true), 3000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    // For iOS, show after 5 seconds
    if (iOS && !standalone) {
      setTimeout(() => setShowBanner(true), 5000);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSModal(true);
      setShowBanner(false);
      return;
    }

    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === "accepted") {
        setShowBanner(false);
      }
      setDeferredPrompt(null);
    } catch (error) {
      console.error("Error installing PWA:", error);
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem("pwa-install-dismissed", Date.now().toString());
  };

  if (isStandalone || (!showBanner && !showIOSModal)) {
    return null;
  }

  return (
    <>
      {/* Install Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 safe-area-inset-bottom animate-in slide-in-from-bottom duration-500">
          <div className="mx-auto max-w-lg">
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card/95 backdrop-blur-xl shadow-2xl shadow-primary/20">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-50" />
              
              <div className="relative p-4">
                <button
                  onClick={handleDismiss}
                  className="absolute right-3 top-3 rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  aria-label="Fechar"
                >
                  <X size={18} />
                </button>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent p-0.5">
                      <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                        <Smartphone className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 pr-6">
                    <h3 className="font-semibold text-foreground text-base mb-1">
                      Instale o App
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      Acesse rapidamente suas animações favoritas direto da tela inicial!
                    </p>
                    
                    <Button
                      onClick={handleInstallClick}
                      className="w-full sm:w-auto gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-medium shadow-lg shadow-primary/30"
                    >
                      <Download size={18} />
                      Instalar Agora
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* iOS Installation Modal */}
      <Dialog open={showIOSModal} onOpenChange={setShowIOSModal}>
        <DialogContent className="max-w-sm mx-4 border-primary/30 bg-card/95 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">
              Instalar Biblioteca Visual
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <p className="text-center text-muted-foreground text-sm">
              Para instalar este app no seu iPhone ou iPad, siga os passos:
            </p>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-center gap-4 p-3 rounded-xl bg-muted/50">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Share className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">1. Toque em Compartilhar</p>
                  <p className="text-xs text-muted-foreground">
                    Na barra inferior do Safari
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" />
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-4 p-3 rounded-xl bg-muted/50">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Plus className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-sm">2. "Adicionar à Tela de Início"</p>
                  <p className="text-xs text-muted-foreground">
                    Role para baixo e selecione
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" />
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-4 p-3 rounded-xl bg-muted/50">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Download className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-sm">3. Toque em "Adicionar"</p>
                  <p className="text-xs text-muted-foreground">
                    No canto superior direito
                  </p>
                </div>
              </div>
            </div>

            <Button
              onClick={() => setShowIOSModal(false)}
              variant="outline"
              className="w-full"
            >
              Entendi
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
