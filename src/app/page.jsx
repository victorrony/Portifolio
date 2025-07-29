"use client";
import "./globals.css";
import Experience from "./components/experience/Experience";
import NavBar from "./components/navbar/NavBar";
import Project from "./components/project/Project";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import DynamicStars from "./components/contact/DynamicStars";
import ErrorBoundary from "./components/ErrorBoundary";

export default function Home() {
   return (
      <ErrorBoundary>
         <div className="relative w-full flex flex-col justify-center text-white items-center m-auto z-0 bg-primary bg-[url('/steve-johnson-jDoTMvp8E_o-unsplash.jpg')] bg-cover bg-center bg-no-repeat">
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

               <section id="experience" aria-label="Experiência profissional" className="scroll-mt-20">
                  <Experience />
               </section>

               <section id="projects" aria-label="Projetos desenvolvidos" className="scroll-mt-20">
                  <Project />
               </section>

               <section id="contact" className="relative z-0 w-full scroll-mt-20" aria-label="Contato">
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
