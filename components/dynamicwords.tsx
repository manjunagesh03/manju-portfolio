/*use client- tells Next.js that this component needs to run interactively in the browser*/
"use client";

/*useState- stores information that can change*/
import { useEffect, useState } from "react";

const words = ["building", "developing" ,"designing", "innovating","creating", "discovering", "learning", "exploring", "optimizing"];

export default function DynamicWords() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    /*repeating timer*/
    const interval = setInterval(() => {
      /*moves to the next word*/
      setWordIndex((currentIndex) => {
        return (currentIndex + 1) % words.length;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-blue-400">
      {words[wordIndex]}
    </span>
  );
}