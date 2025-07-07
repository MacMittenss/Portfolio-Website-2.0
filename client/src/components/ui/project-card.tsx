import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
  compact?: boolean;
}

export default function ProjectCard({
  project,
  index,
  isVisible,
  compact = false,
}: ProjectCardProps) {
  return (
    <Card
      className={`card-hover overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {project.imageUrl && (
        <div className="relative overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className={`w-full h-48 transition-transform duration-300 hover:scale-105 ${
              project.title === "SoleGrid" || project.title === "Portfolio Website" ? "object-contain bg-gray-200 dark:bg-gray-700" : "object-cover"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      
      <CardHeader className={compact ? "p-4" : "p-6"}>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className={compact ? "text-lg" : "text-xl"}>
            {project.title}
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            {project.category}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm">
          {project.description}
        </p>
      </CardHeader>

      <CardContent className={compact ? "p-4 pt-0" : "p-6 pt-0"}>
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, compact ? 3 : 5).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > (compact ? 3 : 5) && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - (compact ? 3 : 5)}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className={`${compact ? "p-4" : "p-6"} pt-0 flex gap-2`}>
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button size="sm" asChild>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
