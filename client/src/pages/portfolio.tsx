import { useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/navigation/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Portfolio() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'black' }}>
      <Navbar />
      
      <main className="relative">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <footer className="border-t border-border py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-black gradient-text mb-2">Marcus Prater</h3>
              <p className="text-muted-foreground">Front End Developer</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/MacMittenss" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/marcus-prater-59222a245/" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/marc.my.wordz/" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="border-t border-grey-color/30 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Marcus Prater. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
