"use client";
import { useEffect, useRef, useState } from "react";

const variants = {
  fadeUp:    { hidden: "opacity:0;transform:translateY(36px)", shown: "opacity:1;transform:translateY(0)" },
  fadeDown:  { hidden: "opacity:0;transform:translateY(-36px)", shown: "opacity:1;transform:translateY(0)" },
  fadeLeft:  { hidden: "opacity:0;transform:translateX(-40px)", shown: "opacity:1;transform:translateX(0)" },
  fadeRight: { hidden: "opacity:0;transform:translateX(40px)",  shown: "opacity:1;transform:translateX(0)" },
  scaleIn:   { hidden: "opacity:0;transform:scale(0.88)",       shown: "opacity:1;transform:scale(1)" },
  fadeIn:    { hidden: "opacity:0",                             shown: "opacity:1" },
};

/**
 * ScrollReveal — triggers a CSS transition when the element scrolls into view.
 *
 * Props:
 *   animation  – "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scaleIn" | "fadeIn"
 *   delay      – ms before the transition starts (for staggered lists)
 *   duration   – transition duration in ms (default 650)
 *   threshold  – IntersectionObserver threshold (default 0.15)
 *   style      – extra inline styles on the wrapper div
 *   className  – extra class names
 */
export default function ScrollReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 650,
  threshold = 0.15,
  style = {},
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const v = variants[animation] || variants.fadeUp;

  // Parse the cssText strings into style objects
  const parse = (cssText) =>
    Object.fromEntries(
      cssText.split(";").filter(Boolean).map((s) => {
        const [k, ...rest] = s.split(":");
        return [k.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase()), rest.join(":").trim()];
      })
    );

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(visible ? parse(v.shown) : parse(v.hidden)),
        transition: `opacity ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
