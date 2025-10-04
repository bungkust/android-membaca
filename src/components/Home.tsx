import { Button } from "@/components/ui/button";
import { Target, Settings, History } from "lucide-react";

interface HomeProps {
  onStartQuiz: () => void;
  onOpenSettings: () => void;
  onOpenHistory: () => void;
}

const Home = ({ onStartQuiz, onOpenSettings, onOpenHistory }: HomeProps) => {
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
          
          <Button
            size="lg"
            className="w-full text-2xl py-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all shadow-button btn-bounce"
            onClick={onStartQuiz}
          >
            🚀 Mulai Kuis
          </Button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            size="lg"
            className="h-24 text-lg bg-card hover:bg-muted border-2 shadow-button btn-bounce"
            onClick={onOpenSettings}
          >
            <Settings className="w-6 h-6 mr-2" />
            Pengaturan
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="h-24 text-lg bg-card hover:bg-muted border-2 shadow-button btn-bounce"
            onClick={onOpenHistory}
          >
            <History className="w-6 h-6 mr-2" />
            Riwayat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
