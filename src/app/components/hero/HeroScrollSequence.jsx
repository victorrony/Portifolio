"use client";
import PropTypes from "prop-types";
import { useScrollSequence } from "@/app/hooks/useScrollSequence";
import { motion, useScroll, useTransform } from "framer-motion";

const FRAME_COUNT = 60;
const OVERLAYS = [
  {
    fromProgress: 0.05,
    toProgress: 0.32,
    position: "center",
    content: (
      <div className="text-center px-6">
        <span className="tag mb-4 inline-block">Full Stack Developer</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mt-4">
          Turning ideas into{" "}
          <span className="text-gradient-accent">digital experiences</span>
        </h2>
      </div>
    ),
  },
  {
    fromProgress: 0.38,
    toProgress: 0.65,
    position: "bottom-left",
    content: (
      <div className="max-w-xs">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-2 block">
          Stack
        </span>
        <h3 className="text-2xl font-semibold text-white leading-snug">
          React · Next.js
          <br />
          Node · TypeScript
        </h3>
      </div>
    ),
  },
  {
    fromProgress: 0.72,
    toProgress: 1,
    position: "bottom-right",
    content: (
      <div className="max-w-xs text-right">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-2 block">
          Mindset
        </span>
        <h3 className="text-2xl font-semibold text-white leading-snug">
          Clean code.
          <br />
          Cinematic UI.
        </h3>
      </div>
    ),
  },
];

const positionClasses = {
  "top-left": "top-16 left-8 text-left",
  "top-center": "top-16 left-1/2 -translate-x-1/2 text-center",
  "top-right": "top-16 right-8 text-right",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center",
  "bottom-left": "bottom-20 left-8 text-left",
  "bottom-center": "bottom-20 left-1/2 -translate-x-1/2 text-center",
  "bottom-right": "bottom-20 right-8 text-right",
};

// Fallback CSS exibido enquanto não há frames gerados
function OverlayItem({ overlay, scrollYProgress, positionClass }) {
  const opacity = useTransform(
    scrollYProgress,
    [
      overlay.fromProgress,
      overlay.fromProgress + 0.06,
      overlay.toProgress - 0.06,
      overlay.toProgress,
    ],
    [0, 1, 1, 0],
  );
  const y = useTransform(
    scrollYProgress,
    [overlay.fromProgress, overlay.fromProgress + 0.12],
    [28, 0],
  );
  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute ${positionClass} pointer-events-none z-10 max-w-xl px-6`}
    >
      {overlay.content}
    </motion.div>
  );
}

OverlayItem.propTypes = {
  overlay: PropTypes.shape({
    fromProgress: PropTypes.number.isRequired,
    toProgress: PropTypes.number.isRequired,
    content: PropTypes.node.isRequired,
  }).isRequired,
  scrollYProgress: PropTypes.object.isRequired,
  positionClass: PropTypes.string.isRequired,
};

function CinematicFallback() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[#030712] flex items-center justify-center">
      {/* Grid de código animado */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow central */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* Linhas de código decorativas */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <pre className="text-[11px] text-indigo-400/30 leading-6 font-mono text-left">{`
const portfolio = {
  name: "Victor Rony",
  role: "Full Stack Developer",
  stack: ["React", "Next.js", "Node.js"],
  passion: "Cinematic UI & clean code",
}

function buildExperience(ideas) {
  return ideas
    .map(transform)
    .filter(isImpactful)
    .reduce(ship, {})
}
        `}</pre>
      </div>
      <p className="relative z-10 text-white/20 text-xs uppercase tracking-[0.3em] font-mono mt-48">
        Scroll to explore
      </p>
    </div>
  );
}

// Detecta em runtime se os frames existem antes de tentar carregar
const FRAMES_AVAILABLE = false; // mude para true após gerar os frames com Nano Banana 2

export default function HeroScrollSequence() {
  const { canvasRef, containerRef, isLoaded, loadProgress } = useScrollSequence(
    {
      framesDir: "/frames",
      frameCount: FRAMES_AVAILABLE ? FRAME_COUNT : 0,
      frameFormat: "webp",
    },
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const hasFrames = FRAMES_AVAILABLE && isLoaded;

  return (
    <div
      ref={containerRef}
      style={{ height: "280vh" }}
      className="relative w-full"
    >
      {/* Loading bar — só aparece se houver frames sendo carregados */}
      {!isLoaded && loadProgress > 0 && (
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-[#030712] z-10">
          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-100"
              style={{ width: `${loadProgress * 100}%` }}
            />
          </div>
          <p className="mt-4 text-white/30 text-xs font-mono tracking-widest uppercase">
            {Math.round(loadProgress * 100)}%
          </p>
        </div>
      )}

      {/* Área sticky */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Canvas (frames reais) ou Fallback CSS */}
        {hasFrames ? (
          <canvas ref={canvasRef} className="w-full h-full object-cover" />
        ) : (
          <CinematicFallback />
        )}

        {/* Vinheta lateral */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 60%, rgba(3,7,18,0.8) 100%)",
          }}
        />

        {/* Overlays com Framer Motion */}
        {OVERLAYS.map((overlay, i) => (
          <OverlayItem
            key={i}
            overlay={overlay}
            scrollYProgress={scrollYProgress}
            positionClass={positionClasses[overlay.position]}
          />
        ))}

        {/* Barra de progresso do scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
          <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute top-0 left-0 w-full bg-indigo-400 rounded-full"
              style={{
                height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
              }}
            />
          </div>
          <motion.span
            className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-mono"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          >
            scroll
          </motion.span>
        </div>
      </div>
    </div>
  );
}
