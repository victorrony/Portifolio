import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";
import dynamic from "next/dynamic";

const ComputersCanvas = dynamic(() => import("./Computers"), { ssr: false });

export default function Hero() {
   return (
      <header className="relative w-full h-full flex flex-col items-center justify-center md:w-full lg:w-full xl:w-[1280px]">
         <div className="absolute inset-0 top-[-500px] flex flex-col items-center justify-center gap-7">
            <h2 className="text-2xl lg:text-3xl text-white">
               Hi, my name is <span className="font-bold">Victor Rony.</span> I'm a
            </h2>
            <h1 className="text-4xl mt-4 lg:mt-6 text-white">
               <span className="font-bold">Full Stack Developer </span>
            </h1>
            <div className="flex justify-end space-x-6 mt-10 xl:mt-[-20px] xl:mr-[80px]">
               <Link href="https://www.linkedin.com/in/victorfernandes-a41030262/" target="_blank">
                  <IoLogoLinkedin className="w-6 h-6 text-white hover:text-gray-400" />
               </Link>
               <Link href="https://github.com/victorrony" target="_blank">
                  <IoLogoGithub className="w-6 h-6 text-white hover:text-gray-400" />
               </Link>
               <Link href="https://">
                  <IoLogoWhatsapp className="w-6 h-6 text-white hover:text-gray-400" />
               </Link>
            </div>
         </div>
         <ComputersCanvas />
      </header>
   );
}
