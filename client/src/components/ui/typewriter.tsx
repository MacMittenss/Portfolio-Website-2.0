import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  wait?: number;
  className?: string;
}

export default function Typewriter({ words, wait = 3000, className = "" }: TypewriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Debug logging
  console.log("Typewriter state:", { text, wordIndex, isDeleting, words });

  useEffect(() => {
    const type = () => {
      const current = wordIndex % words.length;
      const fullText = words[current];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      let typeSpeed = 150;

      if (isDeleting) {
        typeSpeed /= 2;
      }

      if (!isDeleting && text === fullText) {
        typeSpeed = wait;
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    };

    const timer = setTimeout(type, 150);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, wait]);

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}