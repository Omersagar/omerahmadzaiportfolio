import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// ⚠️ CHANGE THIS to your repo name exactly
const repoName = "omerahmadzaiportfolio";

export default defineConfig(({ mode }) => ({
  base: `/${repoName}/`, // 👈 THIS FIXES THE 404

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
