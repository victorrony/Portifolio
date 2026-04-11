"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  fadeIn,
  revealText,
  staggerContainer,
  cardItem,
} from "../../utils/motion";
import { socialLinks } from "../../constants/index";
import { SectionWrapper } from "@/app/hoc";

// Fast-facts shown in the right column
const facts = [
  {
    id: "years",
    value: "2+",
    label: "Years shipping products",
    accent: "from-indigo-500/20 to-blue-500/10",
    dot: "bg-indigo-400",
  },
  {
    id: "projects",
    value: "10+",
    label: "Projects delivered",
    accent: "from-emerald-500/20 to-teal-500/10",
    dot: "bg-emerald-400",
  },
  {
    id: "stack",
    value: "Full",
    label: "Stack — front to back",
    accent: "from-purple-500/20 to-pink-500/10",
    dot: "bg-purple-400",
  },
  {
    id: "curiosity",
    value: "∞",
    label: "Curiosity for new tech",
    accent: "from-amber-500/15 to-orange-500/10",
    dot: "bg-amber-400",
  },
];

// Highlighted traits / what I bring
const traits = [
  {
    id: "perf",
    icon: "⚡",
    text: "Performance-first mindset — I obsess over Core Web Vitals.",
  },
  {
    id: "design",
    icon: "🎨",
    text: "Design eye — pixel-precise UI with smooth motion at every step.",
  },
  {
    id: "fs",
    icon: "🔗",
    text: "Full-stack — from database schema to Vercel deploy, end to end.",
  },
  {
    id: "comm",
    icon: "🤝",
    text: "Clear communicator — I explain technical trade-offs in plain language.",
  },
];

const About = () => {
  return (
    <motion.section
      suppressHydrationWarning
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="w-full"
    >
      {/* Heading */}
      <div className="overflow-hidden mb-3">
        <motion.h1
          variants={revealText()}
          className="text-4xl md:text-6xl font-semibold text-white"
        >
          About Me
        </motion.h1>
      </div>

      {/* Two-column layout */}
      <div className="mt-10 flex flex-col xl:flex-row gap-12 xl:gap-20">
        {/* ── Left: bio + traits ── */}
        <motion.div
          variants={fadeIn("right", "tween", 0.1, 0.8)}
          className="flex-1 flex flex-col gap-8"
        >
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
            I&apos;m a{" "}
            <span className="text-white font-medium">Full Stack Developer</span>{" "}
            based in Capo verde, building fast, accessible web products that
            feel as polished as they perform. I&apos;ve worked across the entire
            stack — React&nbsp;/&nbsp;Next.js on the front,
            Node.js&nbsp;+&nbsp;NESTJS on the back, MySQL in the middle — and I
            care deeply about the craft at every layer.
          </p>

          <p className="text-white/50 text-base leading-relaxed max-w-2xl">
            What drives me is the intersection of <em>engineering rigour</em>{" "}
            and <em>creative execution</em>. I&apos;m not happy with a feature
            until it&apos;s both correct <em>and</em> beautiful.
          </p>

          {/* Traits list */}
          <motion.ul
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-3 mt-2"
          >
            {traits.map((t) => (
              <motion.li
                key={t.id}
                variants={cardItem("left", 24)}
                className="flex items-start gap-3 text-white/60 text-sm leading-relaxed"
              >
                <span className="text-base mt-0.5 select-none">{t.icon}</span>
                <span>{t.text}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Social links */}
          <motion.div
            variants={fadeIn("up", "tween", 0.35, 0.6)}
            className="flex items-center gap-4 mt-2"
          >
            <span className="text-white/30 text-xs font-mono uppercase tracking-widest">
              Find me
            </span>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right: fast-facts grid ── */}
        <motion.div
          variants={staggerContainer(0.12, 0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 gap-3 xl:w-[380px] xl:flex-shrink-0 self-start"
        >
          {facts.map((f) => (
            <motion.div
              key={f.id}
              variants={cardItem("up", 30)}
              whileHover={{
                scale: 1.03,
                borderColor: "rgba(255,255,255,0.14)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative overflow-hidden rounded-2xl border border-white/7 p-5 flex flex-col gap-2 cursor-default"
              style={{ background: "rgba(15, 23, 42, 0.6)" }}
            >
              {/* gradient bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${f.accent} opacity-60`}
              />
              {/* glow dot */}
              <div
                className={`absolute -top-6 -right-6 w-20 h-20 rounded-full ${f.dot} opacity-10 blur-2xl`}
              />

              <div className="relative z-10">
                <span className="text-4xl font-bold bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent leading-none">
                  {f.value}
                </span>
                <p className="text-white/40 text-xs font-mono uppercase tracking-widest mt-2 leading-tight">
                  {f.label}
                </p>
              </div>
            </motion.div>
          ))}

          {/* "Currently learning" wide card */}
          <motion.div
            variants={cardItem("up", 30)}
            whileHover={{ scale: 1.02, borderColor: "rgba(99,102,241,0.3)" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="col-span-2 relative overflow-hidden rounded-2xl border border-white/7 p-5 cursor-default"
            style={{ background: "rgba(15, 23, 42, 0.6)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-violet-500/5 opacity-60" />
            <div className="relative z-10 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0 animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-mono">
                Currently exploring
              </span>
            </div>
            <p className="relative z-10 mt-3 text-white/70 text-sm leading-relaxed">
              AI-integrated web apps, edge runtimes, and WebGL shader art —
              always expanding the stack.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SectionWrapper(About, "about");
