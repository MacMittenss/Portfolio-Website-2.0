import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "..", "shared"),
      "@assets": path.resolve(__dirname, "public"),
    },
  },
  server: {
    port: 5000,
    host: "0.0.0.0",
    allowedHosts: ["fa85dcbb-1dcb-44c5-96c0-07fbb5f2fa29-00-1ixvni67m317u.spock.replit.dev", ".replit.dev"],
  },
  build: {
    outDir: path.resolve(__dirname, "..", "dist/public"),
    emptyOutDir: true,
  },
});