import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ThemeToggle from "@/components/ui/theme-toggle";
import { Github, Linkedin, Mail, X } from "lucide-react";
import { SheetClose } from "@/components/ui/sheet";

interface MobileMenuProps {
  navItems: Array<{ href: string; label: string }>;
  onNavigate: (href: string) => void;
}

export default function MobileMenu({ navItems, onNavigate }: MobileMenuProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-6">
        <h2 className="text-lg font-semibold gradient-text">Navigation</h2>
        <SheetClose asChild>
          <Button variant="ghost" size="icon">
            <X className="h-4 w-4" />
          </Button>
        </SheetClose>
      </div>
      
      <Separator />
      
      <div className="flex-1 py-6">
        <nav className="space-y-4">
          {navItems.map((item) => (
            <SheetClose key={item.href} asChild>
              <button
                onClick={() => onNavigate(item.href)}
                className="w-full text-left px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md"
              >
                {item.label}
              </button>
            </SheetClose>
          ))}
        </nav>
      </div>
      
      <Separator />
      
      <div className="p-6 space-y-6">
        {/* Theme Toggle */}
        <div>
          <h3 className="text-sm font-medium mb-3">Theme</h3>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <span className="text-sm text-muted-foreground">Toggle theme</span>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-sm font-medium mb-3">Connect</h3>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/MacMittenss"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/marcusprater"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:scttjssy@gmail.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
