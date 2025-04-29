"use client";
import "./globals.css";
import Experience from "./components/experience/Experience";
import NavBar from "./components/navbar/NavBar";
import Project from "./components/project/Project";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import StarsCanvas from "./components/contact/Stars";

export default function Home() {
   return (
      <div className="relative w-full flex flex-col justify-center text-white items-center m-auto z-0 bg-primary bg-[url('/steve-johnson-jDoTMvp8E_o-unsplash.jpg')] bg-cover bg-center bg-no-repeat">
         <NavBar />
         <div className="flex flex-col items-center justify-center h-screen">
            <Hero />
         </div>
         <About />
         <Experience />
         <Project />
         <div className="relative z-0 w-full">
            <Contact />
            {/* <StarsCanvas /> */}
         </div>
         <StarsCanvas />
      </div>
   );
}
