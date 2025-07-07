# Marcus Prater - Portfolio Website

A modern, responsive portfolio website showcasing front-end development skills and projects.

## 🚀 Features

- **Modern Stack**: Built with React 18, TypeScript, and Express.js
- **Responsive Design**: Mobile-first approach with smooth animations
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Project Showcase**: Dynamic project gallery with filtering capabilities
- **Skills Display**: Animated skill badges and proficiency indicators
- **Contact Form**: Functional contact form with validation

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Shadcn/ui** component library
- **Framer Motion** for animations
- **Wouter** for routing
- **TanStack Query** for data fetching

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** for database operations
- **PostgreSQL** database
- **Session management** with connect-pg-simple

## 🏗️ Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and constants
├── server/                 # Backend Express application
├── shared/                 # Shared types and schemas
└── dist/                   # Built application
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MacMittenss/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5000`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Run TypeScript type checking

## 🎨 Customization

The portfolio is designed to be easily customizable:

- **Projects**: Update project data in `client/src/components/sections/projects.tsx`
- **Skills**: Modify skills in `client/src/components/sections/skills.tsx`
- **Personal Info**: Update constants in `client/src/lib/constants.ts`
- **Styling**: Customize theme colors in `client/src/index.scss`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🌙 Theme Support

Supports both light and dark themes with:
- System preference detection
- Manual theme toggle
- Persistent theme selection
- Smooth theme transitions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/MacMittenss/portfolio-website/issues).

## 📞 Contact

Marcus Prater - [GitHub](https://github.com/MacMittenss)

Project Link: [https://github.com/MacMittenss/portfolio-website](https://github.com/MacMittenss/portfolio-website)

---

⭐️ From [MacMittenss](https://github.com/MacMittenss)