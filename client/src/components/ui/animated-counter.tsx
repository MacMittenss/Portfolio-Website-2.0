import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  isVisible: boolean;
  delay?: number;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  isVisible,
  delay = 0,
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let startTime: number;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setCount(Math.floor(progress * target));
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      
      requestAnimationFrame(animateCount);
    }, delay);

    return () => clearTimeout(timer);
  }, [target, isVisible, delay, duration]);

  return <span>{count}</span>;
}
