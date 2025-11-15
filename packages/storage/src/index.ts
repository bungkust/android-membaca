/**
 * Platform-agnostic storage abstraction
 * Automatically detects platform and uses appropriate implementation
 */

const isWeb = typeof window !== 'undefined';

// Platform-specific implementations
import * as webStorageModule from './web';
import * as mobileStorageModule from './mobile';

// Export unified storage interface
export const storage = isWeb ? webStorageModule.webStorage : mobileStorageModule.mobileStorage;

// Export unified safeSet (async for mobile, sync for web for backward compatibility)
export const safeSet = isWeb ? webStorageModule.safeSet : mobileStorageModule.safeSet;

// Export parse functions (same implementation for both platforms)
export { safeParse, safeParseSettings, safeParseSessionHistory, safeParseAppState } from './web';

// Export types
export type { Settings, SessionHistory, AppState, Question, WrongAnswer } from '@repo/core/types';

