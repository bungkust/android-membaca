let currentSpeech: SpeechSynthesisUtterance | null = null;

export const speak = (text: string) => {
  // Stop any ongoing speech
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  if ('speechSynthesis' in window) {
    currentSpeech = new SpeechSynthesisUtterance(text);
    currentSpeech.lang = 'id-ID';
    currentSpeech.rate = 0.8;
    currentSpeech.pitch = 1.0;
    
    window.speechSynthesis.speak(currentSpeech);
  }
};

export const stopSpeech = () => {
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }
};
