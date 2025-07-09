import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Github, Linkedin, Mail, Download } from "lucide-react";
import MobileMenu from "./mobile-menu";
import ThemeToggle from "@/components/ui/theme-toggle";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useTheme } from "next-themes";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(['hero', 'about', 'skills', 'projects', 'contact']);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("#hero")}
              className="hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="Marcus Prater"
                className={`h-12 w-auto ${mounted && resolvedTheme === 'light' ? 'invert' : ''}`}
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/MacMittenss"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/marcusprater"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:scttjssy@gmail.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="sm"
              className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 rounded-lg"
              asChild
            >
              <a 
                href="/assets/Marcus_Prater_Resume.pdf" 
                download="Marcus_Prater_Resume.pdf"
                aria-label="Download CV"
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <MobileMenu navItems={navItems} onNavigate={scrollToSection} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
