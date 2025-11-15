/**
 * Environment-aware logging utility
 * Cross-platform compatible (works in web and mobile)
 * Only logs in development mode, silent in production
 */

import { isDev } from './env';

export const logger = {
  log: (...args: unknown[]) => {
    if (isDev) {
      console.log(...args);
    }
  },
  
  warn: (...args: unknown[]) => {
    if (isDev) {
      console.warn(...args);
    }
  },
  
  error: (...args: unknown[]) => {
    // Always log errors, even in production (but can be filtered)
    console.error(...args);
  },
  
  debug: (...args: unknown[]) => {
    if (isDev) {
      console.log('[DEBUG]', ...args);
    }
  },
  
  info: (...args: unknown[]) => {
    if (isDev) {
      console.info(...args);
    }
  }
};

