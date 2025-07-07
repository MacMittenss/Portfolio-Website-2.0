// Netlify Function for serving project data
export const handler = async (event, context) => {
  // Handle CORS
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Project data - this could come from a CMS, database, or external API
    const projects = [
      {
        id: 1,
        title: "SoleGrid",
        description: "A dynamic e-commerce platform for sneaker enthusiasts",
        longDescription: "SoleGrid is a modern React-based sneaker marketplace featuring responsive design, product filtering, shopping cart functionality, and user authentication. Built with React, CSS3, and vanilla JavaScript with dynamic product catalog and seamless user experience.",
        imageUrl: "/projects/solegrid-logo.png",
        technologies: ["React", "CSS3", "JavaScript", "Node.js"],
        githubUrl: "https://github.com/MacMittenss/SoleGrid-Project",
        liveUrl: "https://solegrid.netlify.app/",
        category: "Full Stack",
        featured: true,
      },
      {
        id: 2,
        title: "StreamX",
        description: "A sleek movie discovery platform with advanced filtering",
        longDescription: "StreamX is a responsive movie discovery web application built with HTML5, CSS3, and vanilla JavaScript. Features dynamic movie browsing, advanced filtering by genre and year, detailed movie information display, and clean modern interface design.",
        imageUrl: "/projects/streamx-new.png",
        technologies: ["HTML5", "CSS3", "JavaScript", "API Integration"],
        githubUrl: "https://github.com/MacMittenss/StreamX-Project",
        liveUrl: "https://streamx-app.netlify.app/",
        category: "Frontend",
        featured: true,
      },
      {
        id: 3,
        title: "OmegaSuit",
        description: "A luxury bespoke suit website with elegant design and smooth interactions",
        longDescription: "OmegaSuit is a responsive mock bespoke suit website designed to emulate high-end tailoring brands. Features elegant presentation with scroll-triggered navigation shadows, smooth scrolling, and animated lightbox gallery—all built with vanilla JavaScript without frameworks.",
        imageUrl: "/projects/omegasuit-new.png",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        githubUrl: "https://github.com/MacMittenss/OmegaSuit-Project",
        liveUrl: "https://omegasuit.netlify.app/",
        category: "Frontend",
        featured: true,
      },
      {
        id: 4,
        title: "Portfolio Website",
        description: "Personal portfolio showcasing front-end projects and technical skills",
        longDescription: "A clean, minimalist portfolio website built from scratch with semantic HTML5, custom SCSS styling, and vanilla JavaScript. Features responsive design, dark mode aesthetic, and clear navigation across dedicated pages for Home, About, Work, and Contact.",
        imageUrl: "/projects/portfolio-logo.png",
        technologies: ["HTML5", "SCSS", "CSS3", "JavaScript"],
        githubUrl: "https://github.com/MacMittenss/Portfolio-Website",
        liveUrl: "https://marcusprater.com/",
        category: "Frontend",
        featured: false,
      },
    ];

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(projects),
    };

  } catch (error) {
    console.error('Projects API error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to fetch projects' 
      }),
    };
  }
};