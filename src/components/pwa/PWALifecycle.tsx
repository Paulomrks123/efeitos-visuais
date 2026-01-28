import { useEffect, useState } from "react";
import { RefreshCw, Wifi, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useRegisterSW } from "virtual:pwa-register/react";

export const PWALifecycle = () => {
  const { toast } = useToast();
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(registration) {
      console.log("Service Worker registrado:", registration);
    },
    onRegisterError(error) {
      console.error("Erro ao registrar Service Worker:", error);
    },
  });

  // Handle online/offline status
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      toast({
        title: "Conectado",
        description: "Você está online novamente!",
        duration: 3000,
      });
    };

    const handleOffline = () => {
      setIsOnline(false);
      toast({
        title: "Sem conexão",
        description: "Você está offline. Algumas funcionalidades podem estar limitadas.",
        variant: "destructive",
        duration: 5000,
      });
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [toast]);

  // Handle app update
  const handleUpdate = () => {
    updateServiceWorker(true);
    setNeedRefresh(false);
  };

  const handleDismissUpdate = () => {
    setNeedRefresh(false);
  };

  return (
    <>
      {/* Offline Indicator */}
      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 z-[100] bg-destructive text-destructive-foreground px-4 py-2 text-center text-sm font-medium flex items-center justify-center gap-2 animate-in slide-in-from-top duration-300">
          <WifiOff size={16} />
          Modo Offline - Algumas funcionalidades podem estar limitadas
        </div>
      )}

      {/* Update Available Banner */}
      {needRefresh && (
        <div className="fixed bottom-20 left-4 right-4 z-50 animate-in slide-in-from-bottom duration-500 sm:left-auto sm:right-4 sm:max-w-sm">
          <div className="rounded-xl border border-primary/30 bg-card/95 backdrop-blur-xl p-4 shadow-2xl shadow-primary/20">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-primary animate-spin" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  Nova Versão Disponível
                </h4>
                <p className="text-xs text-muted-foreground mb-3">
                  Uma atualização está pronta para ser instalada.
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={handleUpdate}
                    className="gap-1.5 bg-primary hover:bg-primary/90"
                  >
                    <RefreshCw size={14} />
                    Atualizar
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleDismissUpdate}
                  >
                    Depois
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
