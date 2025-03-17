import "./globals.css";
import Experience from "./components/experience/Experience";
import NavBar from "./components/navbar/NavBar";

import dynamic from "next/dynamic";
import Project from "./components/project/Project";
import About from "./components/about/About";

export default function Home() {
   const Hero = dynamic(() => import("./components/hero/Hero"), { ssr: false });

   return (
      <div className="relative w-full flex flex-col justify-center text-white items-center m-auto z-0 bg-primary">
         <div className="relative w-full h-screen flex flex-col justify-center items-center bg-primary z-0 bg-hero-pattern bg-cover bg-no-repeat">
            <NavBar />
            <Hero />
         </div>
         <About />
         <Experience />
         <Project />
      </div>
   );
}
