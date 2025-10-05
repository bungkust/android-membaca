import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Settings, History, Star } from "lucide-react";

interface QuizSelectionProps {
  onSelectQuiz: (type: 'suku_kata' | 'awal_kata' | 'akhir_kata' | 'tengah_kata' | 'lengkapi_suku_kata' | 'lengkapi_suku_kata_belakang') => void;
  onBack: () => void;
  onOpenSettings?: () => void;
  onOpenHistory?: () => void;
  sessionHistory?: any[];
}

const QuizSelection = ({ onSelectQuiz, onBack, onOpenSettings, onOpenHistory, sessionHistory = [] }: QuizSelectionProps) => {
  const quizTypes = [
    {
      id: 'suku_kata' as const,
      emoji: '📚',
      title: 'Suku Kata',
      description: 'Pelajari suku kata dasar',
      count: '130 Soal',
      badge: 'Dasar',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'awal_kata' as const,
      emoji: '🔤',
      title: 'Awal Kata',
      description: 'Tebak huruf awal dari kata',
      count: '150 Soal',
      badge: 'Huruf Awal',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 'akhir_kata' as const,
      emoji: '🎯',
      title: 'Akhir Kata',
      description: 'Tebak huruf akhir dari kata',
      count: '120 Soal',
      badge: 'Huruf Akhir',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 'tengah_kata' as const,
      emoji: '🔍',
      title: 'Kuis Tengah Kata',
      description: 'Tebak huruf tengah dari kata yang didengar',
      count: '100 Soal',
      badge: 'Kata Menarik',
      gradient: 'from-success to-primary'
    },
    {
      id: 'lengkapi_suku_kata' as const,
      emoji: '🔄',
      title: 'Lengkapi Suku Kata Belakang',
      description: 'Lengkapi bagian depan kata dengan suku kata yang tepat',
      count: '80 Soal',
      badge: 'Kata Sehari-hari',
      gradient: 'from-warning to-secondary'
    },
    {
      id: 'lengkapi_suku_kata_belakang' as const,
      emoji: '✏️',
      title: 'Lengkapi Suku Kata Depan',
      description: 'Lengkapi kata dengan suku kata yang tepat',
      count: '80 Soal',
      badge: 'Kata Sehari-hari',
      gradient: 'from-info to-primary'
    }
  ];

  // Calculate total stars earned across all quiz types
  const getTotalStars = () => {
    return sessionHistory.reduce((total, session) => total + (session.stars || 0), 0);
  };

  // Calculate stars for each quiz type (for individual display)
  const calculateQuizStars = (quizType: string) => {
    const sessions = sessionHistory.filter(session => session.quizType === quizType);
    if (sessions.length === 0) return 0;

    const totalStars = sessions.reduce((sum, session) => sum + (session.stars || 0), 0);
    return Math.min(totalStars, 3); // Cap at 3 stars max per quiz type
  };

  const renderStars = (starCount: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= starCount
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 p-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          size="lg"
          className="mb-6"
          onClick={onBack}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Kembali
        </Button>

        <div className="bg-card rounded-3xl shadow-playful p-8 mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Pilih Jenis Kuis
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Pilih jenis kuis yang ingin dimainkan!
          </p>

          {/* Star Summary */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-6 h-6 ${
                      star <= getTotalStars()
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-yellow-700">
                {getTotalStars()}/15 Bintang
              </span>
            </div>
            <p className="text-sm text-yellow-600">
              Total bintang yang telah kamu kumpulkan dari semua kuis!
            </p>
          </div>
        </div>

        {/* Settings and History buttons */}
        {(onOpenSettings || onOpenHistory) && (
          <div className="grid grid-cols-2 gap-4 mb-8">
            {onOpenSettings && (
              <Button
                variant="outline"
                size="lg"
                className="h-20 text-base bg-card hover:bg-muted border-2 shadow-button btn-bounce"
                onClick={onOpenSettings}
              >
                <Settings className="w-5 h-5 mr-2" />
                Pengaturan
              </Button>
            )}

            {onOpenHistory && (
              <Button
                variant="outline"
                size="lg"
                className="h-20 text-base bg-card hover:bg-muted border-2 shadow-button btn-bounce"
                onClick={onOpenHistory}
              >
                <History className="w-5 h-5 mr-2" />
                Riwayat
              </Button>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {quizTypes.map((quiz) => {
            const stars = calculateQuizStars(quiz.id);
            return (
              <div
                key={quiz.id}
                className="bg-card rounded-3xl shadow-playful p-6 hover:scale-105 transition-transform slide-up"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${quiz.gradient} rounded-2xl flex items-center justify-center mb-4`}>
                  <span className="text-4xl">{quiz.emoji}</span>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold text-foreground">
                    {quiz.title}
                  </h2>
                  {renderStars(stars)}
                </div>

                <p className="text-muted-foreground mb-4">
                  {quiz.description}
                </p>

                <div className="flex gap-2 mb-6">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm font-semibold text-foreground">
                    {quiz.count}
                  </span>
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                    {quiz.badge}
                  </span>
                  {stars > 0 && (
                    <span className="px-3 py-1 bg-yellow-100 rounded-full text-sm font-semibold text-yellow-800">
                      ⭐ {stars} Bintang
                    </span>
                  )}
                </div>

                <Button
                  className={`w-full bg-gradient-to-r ${quiz.gradient} hover:opacity-90 transition-all shadow-button btn-bounce`}
                  size="lg"
                  onClick={() => onSelectQuiz(quiz.id)}
                >
                  🚀 Mulai Kuis
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizSelection;
