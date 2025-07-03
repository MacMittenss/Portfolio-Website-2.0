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

  useEffect(() => {
    const current = wordIndex % words.length;
    const fullText = words[current];
    
    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }
    }, isDeleting ? 75 : 150);

    // Check if we've finished typing the word
    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), wait);
    }
    // Check if we've finished deleting the word
    else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, wait]);

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}