import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import ProjectCard from "@/components/ui/project-card";

const projects = [
  {
    id: 1,
    title: "StreamX",
    description: "A fully responsive movie and TV show discovery platform with real-time search",
    longDescription: "StreamX is a comprehensive entertainment discovery interface that pulls dynamic content from The Movie Database (TMDB) API using vanilla JavaScript. Built with semantic HTML5, CSS custom properties, and featuring a dark-mode aesthetic with smooth slider carousels powered by Swiper.js.",
    imageUrl: "https://marcusprater.com/img/items/item1.png",
    technologies: ["JavaScript", "HTML5", "CSS3", "TMDB API", "Swiper.js"],
    githubUrl: "https://github.com/MacMittenss/StreamX",
    liveUrl: "https://watchstreamx.netlify.app/",
    category: "Frontend",
    featured: true,
  },
  {
    id: 2,
    title: "SoleGrid",
    description: "A modern, responsive sneaker blog with dynamic content and dark mode",
    longDescription: "SoleGrid is a sneaker culture blog inspired by Nike and GOAT's clean layouts. Features semantic HTML5, scalable CSS, and vanilla JavaScript with articles rendered dynamically from JSON. Includes a dark mode toggle and grid-based layout using CSS Grid and Flexbox.",
    imageUrl: "https://marcusprater.com/img/items/item2.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "JSON"],
    githubUrl: "https://github.com/MacMittenss/SoleGrid-Project",
    liveUrl: "https://solegrid.netlify.app/",
    category: "Frontend",
    featured: true,
  },
  {
    id: 3,
    title: "OmegaSuit",
    description: "A luxury bespoke suit website with elegant design and smooth interactions",
    longDescription: "OmegaSuit is a responsive mock bespoke suit website designed to emulate high-end tailoring brands. Features elegant presentation with scroll-triggered navigation shadows, smooth scrolling, and animated lightbox gallery—all built with vanilla JavaScript without frameworks.",
    imageUrl: "https://marcusprater.com/img/items/item3.png",
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
    imageUrl: "https://marcusprater.com/img/items/item4.png",
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
            <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/30">
              Portfolio
            </Badge>
            <h2 className="text-5xl font-black mb-8 font-['Poppins']">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my latest work showcasing innovation, technical expertise, and creative problem-solving
            </p>
          </div>

          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="all">All Projects</TabsTrigger>
            </TabsList>

            <TabsContent value="featured" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    isVisible={isIntersecting}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="all" className="space-y-8">
              {/* Category filters */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    onClick={() => setActiveCategory(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* All projects grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    isVisible={isIntersecting}
                    compact
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
