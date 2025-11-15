import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@repo/core": path.resolve(__dirname, "../core/src"),
      "@repo/storage": path.resolve(__dirname, "../storage/src"),
      "@repo/tts": path.resolve(__dirname, "../tts/src"),
      // Support subpath imports (for TypeScript compatibility)
      "@repo/core/types": path.resolve(__dirname, "../core/src/types"),
      "@repo/core/features": path.resolve(__dirname, "../core/src/features"),
      "@repo/core/utils": path.resolve(__dirname, "../core/src/utils"),
    },
  },
}));
