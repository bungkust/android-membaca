import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";

interface AudioPermissionProps {
  onGrantPermission: () => void;
}

const AudioPermission = ({ onGrantPermission }: AudioPermissionProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleActivate = async () => {
    setIsLoading(true);
    
    // Test TTS availability
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance('Halo');
      utterance.lang = 'id-ID';
      utterance.rate = 0.8;
      
      utterance.onend = () => {
        setIsLoading(false);
        onGrantPermission();
      };
      
      utterance.onerror = () => {
        setIsLoading(false);
        onGrantPermission(); // Continue anyway
      };
      
      window.speechSynthesis.speak(utterance);
    } else {
      setIsLoading(false);
      onGrantPermission();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-card rounded-3xl shadow-playful p-8 text-center slide-up">
        <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
          <Volume2 className="w-12 h-12 text-white" />
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Izin Audio Diperlukan
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Aplikasi ini menggunakan suara untuk membantu belajar membaca. Klik tombol di bawah untuk mengaktifkan audio.
        </p>
        
        <div className="bg-muted rounded-2xl p-6 mb-8 text-left space-y-3">
          <h3 className="font-bold text-foreground mb-3">Mengapa audio diperlukan?</h3>
          <div className="flex items-start gap-3">
            <span className="text-2xl">✅</span>
            <p className="text-foreground">Mendengar cara membaca suku kata yang benar</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">✅</span>
            <p className="text-foreground">Membantu anak belajar pelafalan</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">✅</span>
            <p className="text-foreground">Pengalaman belajar yang lebih interaktif</p>
          </div>
        </div>
        
        <Button
          size="lg"
          className="w-full text-xl py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all shadow-button btn-bounce"
          onClick={handleActivate}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin">🔄</span> Menunggu izin audio...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Volume2 className="w-6 h-6" /> Aktifkan Audio
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default AudioPermission;
