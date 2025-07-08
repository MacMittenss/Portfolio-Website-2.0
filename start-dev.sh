#!/bin/bash
cd "$(dirname "$0")/client"
# Create a wrapper vite config that properly resolves paths
cat > vite.config.ts << 'EOF'
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
  },
  build: {
    outDir: path.resolve(__dirname, "..", "dist/public"),
    emptyOutDir: true,
  },
});
EOF
exec npx vite dev