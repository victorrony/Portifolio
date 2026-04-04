"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function SectionProgress() {
  const [active, setActive] = useState("home");
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 },
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <nav
      aria-label="Navegação por seções"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4"
    >
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <div
            key={id}
            className="relative flex items-center justify-end"
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
          >
            <AnimatePresence>
              {hovered === id && (
                <motion.span
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-7 text-xs font-medium text-white/80 whitespace-nowrap bg-black/40 backdrop-blur-sm px-2 py-1 rounded pointer-events-none"
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>

            <a href={`#${id}`} aria-label={`Ir para ${label}`}>
              <motion.div
                animate={{
                  scale: isActive ? 1 : 0.6,
                  opacity: isActive ? 1 : 0.4,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`rounded-full transition-colors duration-300 ${
                  isActive
                    ? "w-3 h-3 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 shadow-[0_0_8px_2px_rgba(168,85,247,0.6)]"
                    : "w-3 h-3 bg-white/40 hover:bg-white/70"
                }`}
              />
            </a>
          </div>
        );
      })}
    </nav>
  );
}
