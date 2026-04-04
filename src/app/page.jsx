"use client";
import "./globals.css";
import dynamic from "next/dynamic";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import SectionProgress from "./components/SectionProgress";
import { SectionSkeleton } from "./components/SkeletonLoader";

// Lazy load de componentes fora do viewport inicial para melhor performance
const About = dynamic(() => import("./components/about/About"), {
  loading: () => <SectionSkeleton />,
});
const Experience = dynamic(() => import("./components/experience/Experience"), {
  loading: () => <SectionSkeleton />,
});
const Project = dynamic(() => import("./components/project/Project"), {
  loading: () => <SectionSkeleton />,
});
const Contact = dynamic(() => import("./components/contact/Contact"), {
  loading: () => <SectionSkeleton />,
});
const DynamicStars = dynamic(
  () => import("./components/contact/DynamicStars"),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <ErrorBoundary>
      <div className="relative w-full flex flex-col justify-center text-white items-center m-auto z-0 bg-primary bg-[url('/steve-johnson-jDoTMvp8E_o-unsplash.jpg')] bg-cover bg-center bg-no-repeat">
        <SectionProgress />
        <NavBar />

        <main role="main" className="w-full">
          <section
            id="home"
            className="flex flex-col items-center justify-center h-screen"
            aria-label="Seção principal com apresentação"
          >
            <Hero />
          </section>

          <section id="about" aria-label="Sobre mim" className="scroll-mt-20">
            <About />
          </section>

          <section
            id="experience"
            aria-label="Experiência profissional"
            className="scroll-mt-20"
          >
            <Experience />
          </section>

          <section
            id="projects"
            aria-label="Projetos desenvolvidos"
            className="scroll-mt-20"
          >
            <Project />
          </section>

          <section
            id="contact"
            className="relative z-0 w-full scroll-mt-20"
            aria-label="Contato"
          >
            <Contact />
          </section>
        </main>

        <div className="fixed inset-0 z-[-1]" aria-hidden="true">
          <DynamicStars />
        </div>
      </div>
    </ErrorBoundary>
  );
}
