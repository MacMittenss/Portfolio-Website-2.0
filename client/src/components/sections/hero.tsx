import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import Typewriter from "@/components/ui/typewriter";

const typewriterWords = [
  "Full-Stack Developer",
  "UI/UX Designer", 
  "Problem Solver",
  "Tech Enthusiast"
];

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-background/50">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0px,_transparent_1px)] [background-size:24px_24px] opacity-10" />
      
      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full animate-float blur-sm" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/20 rotate-45 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-primary/25 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-left max-w-5xl mx-auto ${
            isIntersecting ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="mb-6">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight font-['Poppins']">
            I'm{" "}
            <span className="gradient-text">MacMittens</span>
          </h1>
          
          <div className="text-2xl md:text-4xl text-muted-foreground mb-8 leading-relaxed h-16 flex items-center">
            <Typewriter 
              words={typewriterWords}
              wait={2000}
              className="gradient-text font-semibold"
            />
          </div>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            Crafting exceptional digital experiences with modern technologies.
            I transform ideas into powerful, scalable applications that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start mb-16">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="text-lg px-10 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl"
            >
              View My Work
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href="mailto:contact@macmittens.com">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
          </div>

          <div className="flex space-x-6">
            <Button
              variant="ghost"
              size="lg"
              className="text-primary hover:text-primary/80 hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <a
                href="https://github.com/MacMittenss"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
                <span className="ml-2 hidden sm:inline">GitHub</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-primary hover:text-primary/80 hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
                <span className="ml-2 hidden sm:inline">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll Down</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>
    </section>
  );
}
