"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Scroll-reveal wrapper (HANDOFF §7). Fades/translates content in on first
// intersection. Respects prefers-reduced-motion by rendering visible
// immediately, and falls back to visible where IntersectionObserver is absent.
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      // Reveal immediately (deferred a frame to avoid a synchronous re-render in
      // the effect body); the motion-reduce transition reset makes it instant.
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`transition-[opacity,transform] duration-[600ms] ease-out motion-reduce:transition-none ${
        shown ? "opacity-100 translate-y-0" : "translate-y-[22px] opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
