import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import ProjectCard from "@/components/ui/project-card";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with modern UI and secure payments",
    longDescription: "Built with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, order management, and admin dashboard.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/example/ecommerce",
    liveUrl: "https://example-ecommerce.vercel.app",
    category: "Full Stack",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates",
    longDescription: "Team collaboration tool with drag-and-drop functionality, real-time notifications, and project analytics.",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "Express.js", "Socket.io", "PostgreSQL"],
    githubUrl: "https://github.com/example/taskmanager",
    liveUrl: "https://example-tasks.vercel.app",
    category: "Full Stack",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website with modern animations",
    longDescription: "Personal portfolio showcasing projects and skills with smooth animations and responsive design.",
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/example/portfolio",
    liveUrl: "https://example-portfolio.vercel.app",
    category: "Frontend",
    featured: false,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather data visualization with charts and maps",
    longDescription: "Interactive weather dashboard with location-based forecasts, historical data, and weather maps.",
    imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    technologies: ["React", "Chart.js", "Weather API", "Mapbox"],
    githubUrl: "https://github.com/example/weather",
    liveUrl: "https://example-weather.vercel.app",
    category: "Frontend",
    featured: false,
  },
  {
    id: 5,
    title: "API Gateway",
    description: "Scalable API gateway with authentication and rate limiting",
    longDescription: "Microservices API gateway with JWT authentication, rate limiting, and request routing.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    technologies: ["Node.js", "Express.js", "Redis", "JWT", "Docker"],
    githubUrl: "https://github.com/example/api-gateway",
    category: "Backend",
    featured: false,
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with file sharing capabilities",
    longDescription: "Modern chat app with real-time messaging, file uploads, emoji reactions, and group conversations.",
    imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Cloudinary"],
    githubUrl: "https://github.com/example/chat",
    liveUrl: "https://example-chat.vercel.app",
    category: "Full Stack",
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
    <section className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto ${
            isIntersecting ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Portfolio
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
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
