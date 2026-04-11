"use client";
import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

export function AnimatedCounter({ target, suffix = "%" }) {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
          const obj = { value: 0 };
          animate(obj, {
            value: target,
            duration: 1600,
            ease: "outExpo",
            onUpdate() {
              if (ref.current)
                ref.current.textContent = Math.round(obj.value) + suffix;
            },
          });
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, triggered]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}
