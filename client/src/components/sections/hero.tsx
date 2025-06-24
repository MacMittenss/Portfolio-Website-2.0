import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function Hero() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-blue-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center max-w-4xl mx-auto ${
            isIntersecting ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Alex Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Full-Stack Developer & UI/UX Enthusiast
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I craft beautiful, functional web applications with modern technologies.
            Passionate about creating seamless user experiences and scalable solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              size="lg"
              className="rounded-full hover:scale-110 transition-transform duration-300"
              asChild
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="rounded-full hover:scale-110 transition-transform duration-300"
              asChild
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
