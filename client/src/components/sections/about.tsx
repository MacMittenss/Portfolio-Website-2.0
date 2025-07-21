import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import AnimatedCounter from "@/components/ui/animated-counter";
import { SiHtml5, SiCss3, SiSass, SiJavascript, SiTypescript, SiReact, SiExpress, SiTailwindcss } from "react-icons/si";

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto ${
            isIntersecting ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-border">
              About Me
            </Badge>
            <h2 className="text-5xl font-black mb-8 font-['Poppins']">
              Crafting Digital <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dedicated developer with a passion for transforming complex problems into elegant solutions. Crafting visually stunning and seamlessly functional front-end wonders, meticulously translating UI/UX blueprints into immersive web and mobile experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-6 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                With 3 years of experience as a self-taught software engineer with a passion for innovation, I craft responsive, intuitive, and visually engaging front-end experiences that not only meet but exceed expectations. I'm well-versed in HTML, CSS, JavaScript, and React.js to deepen my skills in dynamic UI development.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                With a sharp eye for detail and a constant drive to stay current with modern technologies, I'm committed to delivering high-quality, user-focused solutions.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">My Tech Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
                {["HTML", "CSS", "SASS", "JavaScript", "TypeScript", "React", "Express.js", "Tailwind"].map((tech, index) => (
                  <div
                    key={tech}
                    className={`flex flex-col items-center justify-center p-3 rounded-lg bg-card/10 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 min-h-[110px] md:bg-transparent md:border-none md:p-2 md:min-h-[90px] ${
                      isIntersecting ? "animate-scale-in" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-3xl md:text-5xl mb-3 flex items-center justify-center">
                      {tech === "HTML" && <SiHtml5 className="text-orange-500" />}
                      {tech === "CSS" && <SiCss3 className="text-blue-500" />}
                      {tech === "SASS" && <SiSass className="text-pink-500" />}
                      {tech === "JavaScript" && <SiJavascript className="text-yellow-500" />}
                      {tech === "TypeScript" && <SiTypescript className="text-blue-600" />}
                      {tech === "React" && <SiReact className="text-cyan-500" />}
                      {tech === "Express.js" && <SiExpress className="text-gray-700 dark:text-gray-300" />}
                      {tech === "Tailwind" && <SiTailwindcss className="text-cyan-400" />}
                    </div>
                    <div className="mt-auto w-full flex justify-center">
                      <Badge className="bg-primary/20 text-primary border-border hover:bg-primary hover:text-primary-foreground transition-colors text-xs text-center px-2 py-1 max-w-full inline-block">
                        {tech}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
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
