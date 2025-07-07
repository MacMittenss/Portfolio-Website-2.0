# Portfolio Setup Instructions for GitHub

## 📦 What's Included in the Download

Your portfolio project includes:
- Complete React/TypeScript frontend
- Express.js backend  
- All project images and assets
- Professional README.md
- Clean configuration files (Replit references removed)

## 🚀 Setup Instructions

### 1. Download and Extract
1. Download the `marcus-portfolio-github-ready.tar.gz` file
2. Extract it to your desired directory:
   ```bash
   tar -xzf marcus-portfolio-github-ready.tar.gz
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

### 4. Install Dependencies and Test
```bash
npm install
npm run dev
```

### 5. Commit and Push to GitHub
```bash
git add .
git commit -m "Add Marcus Prater portfolio website"
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