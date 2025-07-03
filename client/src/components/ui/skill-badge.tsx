import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  name: string;
  isVisible: boolean;
  delay?: number;
}

export default function SkillBadge({ name, isVisible, delay = 0 }: SkillBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={`border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer ${
        isVisible ? "animate-scale-in" : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {name}
    </Badge>
  );
}
