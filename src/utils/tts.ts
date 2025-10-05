let currentSpeech: SpeechSynthesisUtterance | null = null;

export const speak = (text: string, preferredVoice?: string) => {
  // Stop any ongoing speech
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  if ('speechSynthesis' in window) {
    currentSpeech = new SpeechSynthesisUtterance(text);

    // Enhanced Indonesian language support
    currentSpeech.lang = 'id-ID';

    // Try multiple Indonesian voices in order of preference
    const voices = window.speechSynthesis.getVoices();

    if (preferredVoice && preferredVoice !== 'auto') {
      // Use the specifically selected voice
      const selectedVoice = voices.find(voice => voice.name === preferredVoice);
      if (selectedVoice) {
        currentSpeech.voice = selectedVoice;
      }
    } else {
      // Auto-select best Indonesian voice
      const indonesianVoices = voices.filter(voice =>
        voice.lang.startsWith('id') || // Indonesian
        voice.lang.startsWith('ms') || // Malay (similar to Indonesian)
        voice.name.toLowerCase().includes('indonesia') ||
        voice.name.toLowerCase().includes('malay')
      );

      // Prefer female voice for children's content
      const femaleIndonesianVoices = indonesianVoices.filter(voice =>
        voice.name.toLowerCase().includes('female') ||
        voice.name.toLowerCase().includes('woman') ||
        voice.name.toLowerCase().includes('zira') || // Microsoft Zira
        voice.name.toLowerCase().includes('hazel')   // Microsoft Hazel
      );

      // Use preferred voice if available, fallback to first Indonesian voice
      if (femaleIndonesianVoices.length > 0) {
        currentSpeech.voice = femaleIndonesianVoices[0];
      } else if (indonesianVoices.length > 0) {
        currentSpeech.voice = indonesianVoices[0];
      }
    }

    // Optimized settings for children's Indonesian content
    currentSpeech.rate = 0.8;  // Slightly slower for clarity
    currentSpeech.pitch = 1.1; // Slightly higher pitch for friendliness
    currentSpeech.volume = 0.9; // Good volume level

    window.speechSynthesis.speak(currentSpeech);
  }
};

export const stopSpeech = () => {
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }
};

// Get available Indonesian voices for debugging
export const getIndonesianVoices = () => {
  if ('speechSynthesis' in window) {
    const voices = window.speechSynthesis.getVoices();
    return voices.filter(voice =>
      voice.lang.startsWith('id') ||
      voice.lang.startsWith('ms') ||
      voice.name.toLowerCase().includes('indonesia')
    );
  }
  return [];
};
