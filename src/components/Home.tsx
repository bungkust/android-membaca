import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Target, Download } from "lucide-react";

interface HomeProps {
  onStartQuiz: () => void;
}

const Home = ({ onStartQuiz }: HomeProps) => {
  const [canInstall, setCanInstall] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setCanInstall(true);
    };

    const handleAppInstalled = () => {
      setCanInstall(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setCanInstall(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-card rounded-3xl shadow-playful p-8 text-center slide-up mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Kuis Belajar
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Pilih jenis kuis yang ingin dimainkan!
          </p>

          <div className="flex flex-col gap-4 mb-6">
            <Button
              size="lg"
              className="w-full text-2xl py-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all shadow-button btn-bounce"
              onClick={onStartQuiz}
            >
              🚀 Mulai Kuis
            </Button>

            {canInstall && (
              <Button
                size="lg"
                variant="outline"
                className="w-full text-lg py-6 border-2 border-primary/20 hover:bg-primary/5 shadow-button btn-bounce"
                onClick={handleInstallClick}
              >
                <Download className="w-5 h-5 mr-2" />
                📱 Install Aplikasi
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
