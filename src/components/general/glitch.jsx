"use client";
import { useEffect, useRef, useState } from "react";

const alphaCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ '".split("");
const alpha = "abcdefghijklmnopqrstuvwxyz '".split("");

/**
 * @param {{ phrases: string[], delay?: number }} props
 */

import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export default function GlitchText({ phrases, delay = 100 }) {
  const [display, setDisplay] = useState("");
  const progressRef = useRef(0);
  const outputRef = useRef("");
  const indexRef = useRef(0);
  const textRef = useRef(phrases[0]);

  useEffect(() => {
    let animationId;

    const glitch = () => {
      const text = textRef.current;
      const len = text.length;

      if (progressRef.current >= len) {
        // Finished current phrase → move to next
        setTimeout(() => {
          indexRef.current = (indexRef.current + 1) % phrases.length;
          textRef.current = phrases[indexRef.current];
          progressRef.current = 0;
          outputRef.current = "";
          animationId = requestAnimationFrame(glitch);
        }, delay);
        return;
      }

      const randIndex = Math.floor(Math.random() * alpha.length);
      const nextChar = alpha[randIndex];

      if (
        nextChar === text[progressRef.current] ||
        alphaCaps[randIndex] === text[progressRef.current]
      ) {
        outputRef.current += text[progressRef.current];
        setDisplay(outputRef.current);
        progressRef.current++;
      } else {
        setDisplay(outputRef.current + nextChar);
      }

      animationId = requestAnimationFrame(glitch);
    };

    animationId = requestAnimationFrame(glitch);
    return () => cancelAnimationFrame(animationId);
  }, [phrases, delay]);

  return <h1 className="text-2xl font-mono">{display}</h1>;
}

GlitchText.propTypes = {
  phrases: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number,
};