# Portfolio Setup Instructions for GitHub

## 📦 What's Included in the Download

Your portfolio project includes:
- Complete React/TypeScript frontend
- Express.js backend
- All project images and assets
- Professional README.md
- Clean configuration files

## 🚀 Setup Instructions

### 1. Download and Extract
1. Download the `marcus-portfolio.tar.gz` file
2. Extract it to your desired directory:
   ```bash
   tar -xzf marcus-portfolio.tar.gz
   cd marcus-portfolio
   ```

### 2. Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Marcus Prater Portfolio"
```

### 3. Connect to GitHub
```bash
git remote add origin https://github.com/MacMittenss/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

### 4. Clean Up Replit Dependencies (Important!)

Edit `vite.config.ts` and remove these lines:

**Remove this import:**
```typescript
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
```

**Remove from plugins array:**
```typescript
runtimeErrorOverlay(),
...(process.env.NODE_ENV !== "production" &&
process.env.REPL_ID !== undefined
  ? [
      await import("@replit/vite-plugin-cartographer").then((m) =>
        m.cartographer(),
      ),
    ]
  : []),
```

**Your vite.config.ts should look like this:**
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
```

### 5. Remove Replit Dependencies
```bash
npm uninstall @replit/vite-plugin-runtime-error-modal @replit/vite-plugin-cartographer
```

### 6. Install Dependencies and Test
```bash
npm install
npm run dev
```

### 7. Commit the Clean Version
```bash
git add .
git commit -m "Remove Replit dependencies and clean up for GitHub"
git push
```

## 🎯 Project Features

✅ **Modern React/TypeScript Stack**
✅ **Responsive Design** - Mobile-first approach
✅ **Dark/Light Theme Toggle**
✅ **Project Gallery** - Showcases your actual websites
✅ **Skills Section** - Interactive skill badges
✅ **Contact Form** - Functional with validation
✅ **Professional Documentation**

## 📁 Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   └── lib/            # Utilities
│   └── public/
│       └── projects/       # Project images
├── server/                 # Express backend
├── shared/                 # Shared schemas
└── README.md              # Documentation
```

## 🚀 Deployment Options

### Netlify (Recommended for static hosting)
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist/public`

### Vercel
1. Import your GitHub repository
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist/public`

## 🔧 Customization

- **Projects**: Update `client/src/components/sections/projects.tsx`
- **Skills**: Modify `client/src/components/sections/skills.tsx`
- **Personal Info**: Edit `client/src/lib/constants.ts`
- **Styling**: Customize `client/src/index.scss`

## 📞 Support

If you need help with setup:
1. Check the README.md file
2. Ensure Node.js 20+ is installed
3. Verify all dependencies are installed with `npm install`

Your portfolio is now ready for GitHub and deployment! 🎉