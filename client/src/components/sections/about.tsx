import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import AnimatedCounter from "@/components/ui/animated-counter";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: Palette,
    title: "Design Focus",
    description: "Creating beautiful and intuitive user interfaces",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in team environments",
  },
];

const stats = [
  { label: "Projects Completed", value: 50 },
  { label: "Years Experience", value: 5 },
  { label: "Technologies", value: 20 },
  { label: "Happy Clients", value: 30 },
];

export default function About() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

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
            <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/30">
              About Me
            </Badge>
            <h2 className="text-5xl font-black mb-8 font-['Poppins']">
              Crafting Digital <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dedicated developer with a passion for transforming complex problems 
              into elegant solutions. I specialize in creating scalable applications 
              that deliver exceptional user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-6 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Over 5 years of experience building innovative web applications 
                for startups and enterprise clients. I focus on creating 
                performant, scalable solutions using cutting-edge technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Passionate about clean code, modern architecture, and staying 
                at the forefront of web development trends. Always learning, 
                always building.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS"].map((tech) => (
                  <Badge key={tech} className="bg-primary/20 text-primary border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={stat.label} className="text-center p-6 card-hover">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold gradient-text mb-2">
                      <AnimatedCounter 
                        target={stat.value} 
                        isVisible={isIntersecting}
                        delay={index * 100}
                      />
                      +
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card
                  key={highlight.title}
                  className={`p-6 card-hover ${
                    isIntersecting ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
