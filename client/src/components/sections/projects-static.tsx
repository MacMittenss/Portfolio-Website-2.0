import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ui/project-card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

// Static project data - no API calls needed for Netlify
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

const categories = ["All", "Full Stack", "Frontend", "Backend"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto ${
            isIntersecting ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-border">
              Portfolio
            </Badge>
            <h2 className="text-5xl font-black mb-8 font-['Poppins']">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my latest work showcasing innovation, technical expertise, and creative problem-solving
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Featured Work</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isVisible={isIntersecting}
                />
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-primary/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* All Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isVisible={isIntersecting}
                compact={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}