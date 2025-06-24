import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import SkillBadge from "@/components/ui/skill-badge";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Jest", level: 85 },
      { name: "Figma", level: 70 },
    ],
  },
];

const technologies = [
  "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
  "Express.js", "Next.js", "Vue.js", "Tailwind CSS", "Docker", "AWS",
  "Git", "Jest", "Figma", "GraphQL", "Redis", "Prisma", "Supabase", "Vercel"
];

export default function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto ${
            isIntersecting ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Skills & Technologies
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              My <span className="gradient-text">Technical Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I work with modern technologies to build scalable and performant applications
            </p>
          </div>

          {/* Skills with progress bars */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.title}
                className={`card-hover ${
                  isIntersecting ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={isIntersecting ? skill.level : 0}
                        className="h-2"
                        style={{
                          transition: `all 1s ease-in-out ${
                            (categoryIndex * 200 + skillIndex * 100) / 1000
                          }s`,
                        }}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technology badges */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <SkillBadge
                  key={tech}
                  name={tech}
                  isVisible={isIntersecting}
                  delay={index * 50}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
