"use client";

import { useEffect, useState } from "react";

export function useTypingEffect(words: string[], typingSpeed = 80, pause = 1200) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex] ?? "";
    const doneTyping = !deleting && text === current;
    const doneDeleting = deleting && text === "";

    const timeout = window.setTimeout(
      () => {
        if (doneTyping) {
          setDeleting(true);
          return;
        }

        if (doneDeleting) {
          setDeleting(false);
          setWordIndex((index) => (index + 1) % words.length);
          return;
        }

        setText((value) =>
          deleting ? current.slice(0, Math.max(0, value.length - 1)) : current.slice(0, value.length + 1)
        );
      },
      doneTyping ? pause : deleting ? typingSpeed / 2 : typingSpeed
    );

    return () => window.clearTimeout(timeout);
  }, [deleting, pause, text, typingSpeed, wordIndex, words]);

  return text;
}
