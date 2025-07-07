# Netlify Deployment Guide for Marcus Prater Portfolio

## 🚀 Quick Netlify Deployment

Your portfolio is now optimized for Netlify with serverless functions for contact form handling.

### Option 1: Direct Netlify Deployment (Recommended)

1. **Connect to Netlify:**
   - Go to [netlify.com](https://app.netlify.com/)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings:**
   ```
   Build command: npm run build
   Publish directory: dist/public
   ```

3. **Deploy:** Netlify will automatically deploy your site

### Option 2: Manual Upload

1. **Build locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Upload:** Drag the `dist/public` folder to Netlify

## 📁 What's Included for Netlify

### Static Site Features:
✅ **Contact Form** - Uses Netlify Forms (no backend needed)
✅ **Project Gallery** - Static data, no API calls
✅ **Theme Toggle** - Fully client-side
✅ **Responsive Design** - All CSS/JS bundled
✅ **SEO Optimized** - Meta tags and structured data

### Netlify Functions (Optional):
- `/.netlify/functions/contact` - Enhanced contact form handling
- `/.netlify/functions/projects` - API endpoint for projects (if needed)

### Configuration Files:
- `netlify.toml` - Netlify deployment configuration
- `_redirects` - URL routing and SPA fallback
- `vite.config.netlify.ts` - Optimized build configuration

## 🛠️ Current Form Setup

Your contact form uses **Netlify Forms** which requires no backend:

```html
<form method="POST" data-netlify="true" name="contact">
  <!-- Form fields automatically handled by Netlify -->
</form>
```

## 🔧 Build Process

The build script creates:
```
dist/public/
├── index.html          # Main application
├── assets/             # Optimized CSS/JS
├── projects/           # Project images
└── _redirects          # Netlify routing
```

## 📝 Environment Variables (Optional)

If you want to add analytics or external services:

```bash
# Netlify Dashboard > Site Settings > Environment Variables
VITE_ANALYTICS_ID=your_analytics_id
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_key
```

## 🎯 Expected Results

After deployment:
- **Contact Form**: Submissions go to Netlify Dashboard > Forms
- **Project Gallery**: Displays all your projects with images
- **Theme Toggle**: Works completely client-side
- **SEO**: Proper meta tags and OpenGraph data
- **Performance**: Optimized bundle with code splitting

## 🔗 Custom Domain (Optional)

In Netlify Dashboard:
1. Go to Site Settings > Domain Management
2. Add your custom domain
3. Configure DNS records as shown

## 📞 Support

If you encounter any issues:
1. Check Netlify build logs in the dashboard
2. Verify all images are in `client/public/projects/`
3. Ensure `netlify.toml` is in the root directory

Your portfolio is now ready for professional Netlify deployment! 🎉