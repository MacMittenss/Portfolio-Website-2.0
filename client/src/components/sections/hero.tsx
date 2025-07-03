import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import Typewriter from "@/components/ui/typewriter";

const typewriterWords = [
  "< Front End Developer />",
  "< Web Content Editor />"
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
    <section id="header-home" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-section"
    style={{
      backgroundImage: `url('https://raw.githubusercontent.com/MacMittenss/Portfolio-Website/master/img/myshowcase1.jpg')`,
      backgroundPosition: 'left center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh'
    }}>
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div
          ref={ref}
          className={`text-left max-w-5xl mx-auto py-16 ${
            isIntersecting ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="header-content text-left pt-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight font-['Poppins'] text-foreground">
              I Am Marcus, The{" "}
              <span className="block">
                <Typewriter 
                  words={typewriterWords}
                  wait={1000}
                  className="gradient-text font-normal"
                />
              </span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-start mt-12 mb-24">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="text-lg px-8 py-3 bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold transition-all duration-300"
            >
              View My Work
            </Button>
            
            <Button
              size="lg"
              className="text-lg px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300"
              asChild
            >
              <a href="mailto:scttjssy@gmail.com">
                Hire Me!
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
