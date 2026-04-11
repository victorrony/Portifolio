"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { cardItem, staggerContainer } from "@/app/utils/motion";

// Stack organizado por categoria com contexto real
const stack = [
  // Card grande — Frontend (destaque)
  {
    id: "frontend",
    size: "col-span-2 row-span-2",
    label: "Frontend",
    description: "Interfaces que parecem vivas. Do layout ao micro-detalhe.",
    techs: [
      { name: "React JS", icon: "/assets/tech/reactjs.png" },
      { name: "Next.js", icon: "/assets/tech/nextjs.jpeg" },
      { name: "TypeScript", icon: "/assets/tech/typescript.png" },
      { name: "Tailwind CSS", icon: "/assets/tech/tailwind.png" },
      { name: "Motion", icon: "/assets/tech/motion.png" },
    ],
    accent: "from-blue-500/20 to-indigo-500/10",
    dot: "bg-blue-400",
  },
  // Card médio — Backend
  {
    id: "backend",
    size: "col-span-1 row-span-1",
    label: "Backend",
    description: "APIs robustas e arquiteturas que escalam.",
    techs: [
      { name: "Node JS", icon: "/assets/tech/nodejs.png" },
      { name: "NestJS", icon: null },
      { name: "PHP", icon: null },
      { name: "Strapi", icon: null },
      { name: "MySQL", icon: "/assets/tech/mysql.png" },
      { name: "SQLite", icon: "/assets/tech/sqlite.jpeg" },
    ],
    accent: "from-emerald-500/20 to-teal-500/10",
    dot: "bg-emerald-400",
  },
  // Card médio — State & Data
  {
    id: "state",
    size: "col-span-1 row-span-1",
    label: "State & Data",
    description: "Gestão de estado e consumo de APIs.",
    techs: [
      { name: "Redux", icon: "/assets/tech/redux.png" },
      { name: "Axios", icon: "/assets/tech/axios.png" },
      { name: "Material UI", icon: "/assets/tech/material-ui.png" },
      { name: "Headless UI", icon: "/assets/tech/@headlessui.png" },
    ],
    accent: "from-purple-500/20 to-pink-500/10",
    dot: "bg-purple-400",
  },
  // Card largo — 3D & Motion
  {
    id: "creative",
    size: "col-span-2 row-span-1",
    label: "3D & Motion",
    description: "WebGL, animações cinematográficas e experiências imersivas.",
    techs: [
      { name: "Three.js", icon: "/assets/tech/Threejs.png" },
      { name: "GSAP", icon: null },
      { name: "Anime.js", icon: null },
      { name: "Lottie", icon: null },
      { name: "R3F", icon: null },
    ],
    accent: "from-violet-500/20 to-fuchsia-500/10",
    dot: "bg-violet-400",
  },
  // Card largo — DevOps / Tools
  {
    id: "tools",
    size: "col-span-2 row-span-1",
    label: "Tools & DevOps",
    description: "Do código ao deploy — fluxo completo.",
    techs: [
      { name: "Git", icon: "/assets/tech/git.png" },
      { name: "GitHub", icon: "/assets/github.png" },
      { name: "Vercel", icon: "/assets/tech/vercel.png" },
      { name: "Figma", icon: "/assets/tech/figma.png" },
      { name: "Postman", icon: "/assets/tech/postman.jpeg" },
      { name: "VS Code", icon: "/assets/tech/vscode.jpeg" },
    ],
    accent: "from-amber-500/15 to-orange-500/10",
    dot: "bg-amber-400",
  },
  // // Card pequeno — stat projetos
  // {
  //   id: "stat-projects",
  //   size: "col-span-1 row-span-1",
  //   label: null,
  //   stat: "10+",
  //   statLabel: "Projetos entregues",
  //   accent: "from-indigo-500/15 to-violet-500/10",
  //   dot: "bg-indigo-400",
  //   techs: [],
  // },
  // // Card pequeno — stat anos
  // {
  //   id: "stat-years",
  //   size: "col-span-1 row-span-1",
  //   label: null,
  //   stat: "2+",
  //   statLabel: "Anos de experiência",
  //   accent: "from-emerald-500/15 to-teal-500/10",
  //   dot: "bg-emerald-400",
  //   techs: [],
  // },
];

function TechPill({ name, icon }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-xs text-white/70 font-mono">
      {icon && (
        <Image
          src={icon}
          alt={name}
          width={14}
          height={14}
          className="object-contain rounded-sm"
        />
      )}
      {name}
    </span>
  );
}

function BentoCard({ card, index }) {
  return (
    <motion.div
      variants={cardItem()}
      className={`${card.size} relative overflow-hidden rounded-2xl border border-white/7 p-6 flex flex-col justify-between min-h-[160px] group cursor-default`}
      style={{ background: "rgba(15, 23, 42, 0.6)" }}
      whileHover={{ scale: 1.015, borderColor: "rgba(255,255,255,0.14)" }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Gradiente de fundo */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Glow no canto */}
      <div
        className={`absolute -top-8 -right-8 w-24 h-24 rounded-full ${card.dot} opacity-10 blur-2xl group-hover:opacity-25 transition-opacity duration-500`}
      />

      {card.stat ? (
        // Card de estatística
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2">
          <span className="text-5xl font-bold bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent">
            {card.stat}
          </span>
          <span className="text-xs text-white/40 uppercase tracking-widest text-center font-mono">
            {card.statLabel}
          </span>
        </div>
      ) : (
        // Card de categoria
        <div className="relative z-10 flex flex-col gap-4 h-full">
          {/* Header */}
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${card.dot} flex-shrink-0`}
            />
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-mono">
              {card.label}
            </span>
          </div>

          {/* Descrição — só nos cards grandes */}
          {card.description && card.size.includes("row-span-2") && (
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {card.description}
            </p>
          )}

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {card.techs.map((t) => (
              <TechPill key={t.name} {...t} />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function SkillsBento() {
  return (
    <div className="w-full mt-16">
      <motion.div
        variants={staggerContainer(0.08, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-3 gap-3 auto-rows-[160px]"
      >
        {stack.map((card, i) => (
          <BentoCard key={card.id} card={card} index={i} />
        ))}
      </motion.div>
    </div>
  );
}
