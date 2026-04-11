"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname();

  return (
    <>
      {/* Conteúdo — fade suave ao entrar */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.div>

      {/* Overlay preto cinematográfico — cobre a tela e sobe revelando o conteúdo */}
      <motion.div
        key={`overlay-${pathname}`}
        className="fixed inset-0 bg-black pointer-events-none z-[9999]"
        initial={{ scaleY: 1, originY: "top" }}
        animate={{ scaleY: 0, originY: "top" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
      />
    </>
  );
}
