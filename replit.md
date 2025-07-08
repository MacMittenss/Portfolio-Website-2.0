# Marcus Prater - Portfolio Website

## Overview

This is a modern, responsive portfolio website built with React, TypeScript, and Express.js. The application features a full-stack architecture with a clean frontend showcasing projects, skills, and contact information, backed by a PostgreSQL database for data management.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type safety and modern development practices
- **Vite** as the build tool for fast development and optimized production builds
- **Tailwind CSS** with custom design system for consistent styling
- **Shadcn/ui** component library for high-quality, accessible UI components
- **Wouter** for lightweight client-side routing
- **TanStack Query** for efficient data fetching and state management
- **Framer Motion** (implied by animation utilities) for smooth animations

### Backend Architecture
- **Express.js** server with TypeScript for robust API development
- **Drizzle ORM** for type-safe database operations
- **PostgreSQL** as the primary database (configured via Neon serverless)
- **Session management** with connect-pg-simple for user sessions
- **RESTful API** structure with `/api` prefix for all endpoints

### Database Design
The schema includes three main entities:
- **Projects**: Portfolio project information with metadata like technologies, URLs, and categorization
- **Skills**: Technical skills with proficiency levels and categorization
- **Contacts**: Contact form submissions with timestamps

## Key Components

### Frontend Components
- **Navigation**: Responsive navbar with mobile menu and scroll spy functionality
- **Hero Section**: Landing area with animated elements and call-to-action buttons
- **About Section**: Personal information with animated statistics counters
- **Skills Section**: Interactive skill showcase with progress bars and technology badges
- **Projects Section**: Filterable project gallery with detailed project cards
- **Contact Section**: Contact form with social media links and contact information

### UI System
- **Design System**: Custom color palette with CSS variables for theming
- **Component Library**: Comprehensive set of reusable UI components
- **Animations**: Custom animation utilities for smooth user interactions
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Custom Hooks
- **useIntersectionObserver**: For triggering animations on scroll
- **useScrollSpy**: For navigation highlighting based on scroll position
- **useMobile**: For responsive behavior based on screen size

## Data Flow

1. **Static Content**: Most portfolio content is hardcoded in constants for performance
2. **Dynamic Data**: Projects, skills, and contact submissions are managed via database
3. **Client-Server Communication**: REST API endpoints handle CRUD operations
4. **State Management**: TanStack Query manages server state with caching
5. **Form Handling**: Contact forms use React Hook Form with Zod validation

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Hook Form)
- Vite for build tooling with TypeScript support
- Express.js for server functionality

### UI and Styling
- Tailwind CSS for utility-first styling
- Radix UI primitives via Shadcn/ui for accessible components
- Lucide React for consistent iconography

### Database and Validation
- Drizzle ORM for database operations
- Zod for schema validation
- PostgreSQL via Neon serverless driver

### Development Tools
- ESBuild for production server bundling
- PostCSS with Autoprefixer for CSS processing
- TypeScript for type checking across the stack

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with HMR for frontend, TSX for backend development
- **Database**: PostgreSQL instance configured via environment variables
- **Port Configuration**: Frontend serves on port 5000, proxied through Express in production
- **Getting Started**: `npm install` then `npm run dev` to start development server

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Static Assets**: Express serves frontend assets in production mode
- **Database Migrations**: Drizzle Kit handles schema migrations

### Deployment Target
- **Primary Platform**: Netlify with serverless functions
- **Alternative**: Vercel, GitHub Pages, or any static hosting platform  
- **Environment**: Node.js 20+ for build process
- **Build Process**: Vite builds optimized static assets
- **Runtime**: Static site with Netlify Functions for contact form handling
- **Configurations**: netlify.toml, _redirects, and optimized package.json included

## Development Server Fix

### Issue Resolution
The application was failing to start because of a port mismatch:
- **Workflow expected**: Port 5000
- **Vite default**: Port 5173

### Solution Implemented
Created custom development server scripts that run Vite on port 5000:
- `run-dev-server.js` - Main development server script
- `vite-dev.js` - Alternative development server script
- `client/vite.config.ts` - Proper Vite configuration with correct aliases

### Running the Application
To start the development server correctly:
```bash
node run-dev-server.js
```

This will start Vite on port 5000 with proper path resolution for all components.

## Changelog

```
Changelog:
- June 24, 2025. Initial setup
- June 24, 2025. Modernized portfolio with dark theme from original design
- June 24, 2025. Restored original "Header home" section with Marcus Prater branding
- January 3, 2025. Added comprehensive light/dark theme toggle system
- January 3, 2025. Fixed typewriter animation logic and performance
- January 3, 2025. Converted CSS to SCSS format for better organization and Netlify deployment preparation
- January 6, 2025. Restored navigation logo with original PNG from GitHub repository and theme-aware display
- January 7, 2025. Fixed project images by downloading from GitHub and hosting locally
- January 7, 2025. Updated project images with actual website screenshots and SoleGrid logo
- January 7, 2025. Removed all Replit dependencies for clean GitHub deployment
- January 7, 2025. Created Netlify-optimized version with serverless functions and static hosting
- January 7, 2025. Successfully pushed clean Netlify-optimized portfolio to GitHub repository
- January 8, 2025. Fixed development server port configuration issue - resolved workflow startup problems
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
Header preference: Keep original "Header home" section from repository unchanged with minimal modifications.
Branding: Marcus Prater, Front End Developer with typewriter effect showing "< Front End Developer />" and "< Web Content Editor />".
```