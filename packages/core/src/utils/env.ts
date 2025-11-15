/**
 * Platform-agnostic environment detection
 * Works in both web (browser) and mobile (React Native) environments
 */

export const isDev = process.env.NODE_ENV !== 'production';
export const isWeb = typeof window !== 'undefined';
export const isMobile = !isWeb;

