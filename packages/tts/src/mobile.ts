import * as Speech from 'expo-speech';

export const speak = (text: string, preferredVoice?: string) => {
  // Stop any ongoing speech
  Speech.stop();

  // expo-speech options
  const options: Speech.SpeechOptions = {
    language: 'id-ID', // Indonesian
    rate: 0.8,  // Slightly slower for clarity
    pitch: 1.1, // Slightly higher pitch for friendliness
    volume: 0.9, // Good volume level
  };

  // Note: expo-speech doesn't support voice selection like Web Speech API
  // The preferredVoice parameter is kept for API compatibility but won't be used
  // Android will use the system default Indonesian TTS engine

  Speech.speak(text, options);
};

export const stopSpeech = () => {
  Speech.stop();
};

// Get available Indonesian voices for debugging
// expo-speech doesn't provide voice enumeration
// Return empty array for API compatibility
export const getIndonesianVoices = () => {
  return [];
};

