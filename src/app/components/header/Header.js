import Link from "next/link";
// import NavBar from "../navbar/NavBar";
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";

export default function Header() {
  return (
    <>
      <div
        id="home"
        className="bg-[#abd8e4] h-screen w-full content-center justify-items-center items-center  md:w-100% lg:w-[100%] xl:w-[1280px]"
      >
        
        <div className="flex flex-col flex-wrap  xl:flex-row  xl:h-screen">
          <div className="flex place-content-between ml-6  xl:flex-col xl:ml-20">
            <div className="flex flex-col text-center  w-96 mt-14 m-auto text-black lg:mt-24  xl:mt-[70%] ">
              <h2>
                <span className="font-bold">Olá,</span> o meu nome é{" "}
                <span className="font-bold">Victor Rony.</span> Sou um
              </h2>
              <h1 className="text-4xl mt-4 lg:mt-6">
                Desemvolvedor Web
                <br /> Full Stack.
              </h1>
            </div>
            <div className="relative writing-vertical-rl w-10  top-10 xl:mt-[-20px] xl:mr-[80px] ">
              {" "}
              <ul className="flex justify-end space-x-6 mr-5 md:space-x-10 ">
                {" "}
                <li className="py-4 px-2 text-black font-semibold hover:text-white">
                  {" "}
                  <Link
                    href="https://www.linkedin.com/in/victorfernandes-a41030262/"
                    target="blank"
                  >
                    <IoLogoLinkedin className="w-6 h-6 hover:text-white" />
                  </Link>{" "}
                </li>{" "}
                <li className="py-4 px-2 text-black font-semibold hover:text-white">
                  {" "}
                  <Link href="https://github.com/victorrony" target="_blank">
                    <IoLogoGithub className="w-6 h-6 hover:text-white " />{" "}
                  </Link>{" "}
                </li>{" "}
                <li className="py-4 px-2 text-black font-semibold hover:text-white">
                  {" "}
                  <Link href="https://">
                    <IoLogoWhatsapp className="w-6 h-6 hover:text-white " />{" "}
                  </Link>{" "}
                </li>{" "}
              </ul>{" "}
            </div>
          </div>

          <div className="mt-10 flex justify-center md:m-auto  md:mt-10 xl:m-auto  ">
            <img
              src="/pc.webp"
              className="w-[430px] h-[350px] lg:w-[568px] lg:h-[400px] xl:w-[650px] xl:h-[500px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
