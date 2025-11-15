/**
 * Platform-agnostic TTS abstraction
 * Automatically detects platform and uses appropriate implementation
 */

const isWeb = typeof window !== 'undefined';

// Platform-specific implementations
import * as webTTSModule from './web';
import * as mobileTTSModule from './mobile';

// Export unified API
export const speak = isWeb ? webTTSModule.speak : mobileTTSModule.speak;
export const stopSpeech = isWeb ? webTTSModule.stopSpeech : mobileTTSModule.stopSpeech;
export const getIndonesianVoices = isWeb ? webTTSModule.getIndonesianVoices : mobileTTSModule.getIndonesianVoices;

