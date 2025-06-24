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
            <Badge variant="outline" className="mb-4">
              About Me
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Passionate About <span className="gradient-text">Technology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a dedicated full-stack developer with a passion for creating
              exceptional digital experiences. With expertise in modern web
              technologies, I bring ideas to life through clean code and
              thoughtful design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Started my development journey 5 years ago, I've worked with
                startups and established companies to build scalable web
                applications. I specialize in React, Node.js, and modern web
                technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source projects, or sharing knowledge with
                the developer community.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS"].map((tech) => (
                  <Badge key={tech} variant="secondary">
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
