import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";

export default function Header() {
  return (
    <div
      id="home"
      className="bg-[#abd8e4] h-screen w-full content-center justify-items-center items-center  md:w-100% lg:w-[100%] xl:w-[1280px]"
    >
      <div className="flex justify-between text-blue-500 bg-black items-center w-full justify-items-center h-12 fixed md:fixed md:w-[full] md:justify-between lg:justify-between lg:fixed lg:w-[100%] xl:w-[1280px] ">
        <div className="w-32 ml-5 font-bold hover:text-white ">
          <a href="#home">Victor Rony</a>
        </div>
        <div className="invisible w-0 md:w-[400px] md:visible">
          <ul className="flex justify-center space-x-16 md:space-x-10 ">
            <li>
              <a href="#main" className=" hover:text-white ">
                Sobre Mim
              </a>
            </li>
            <li>
              <a href="#section" className=" hover:text-white">
                Experiencias
              </a>
            </li>
            <li>
              <a href="#project" className=" hover:text-white">
                Projecto
              </a>
            </li>
          </ul>
        </div>
        <div className="w-50">
          <ul className="flex justify-end space-x-6 mr-5 md:space-x-10">
            <li>
              <a
                href="www.linkedin.com/in/victorFernandes-a41030262"
                target="blank"
              >
                <IoLogoLinkedin className="w-6 h-6 hover:text-white" />
              </a>
            </li>
            <li>
              <a href="https://github.com/victorrony" target="_blank">
                <IoLogoGithub className="w-6 h-6 hover:text-white "/>
              </a>
            </li>
            <li>
              <a href="https://">
                <IoLogoWhatsapp className="w-6 h-6 hover:text-white" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col flex-wrap   md:justify-center xl:flex-row xl:justify-center xl:h-screen">
        <div className="text-center mt-5 text-black md:mt-20 xl:my-auto xl:mx-auto ">
          <h2>
            <span className="font-bold">Olá,</span> o meu nome é{" "}
            <span className="font-bold">Victor Rony.</span> Sou um
          </h2>
          <h1 className="text-4xl mt-5">
            Desemvolvedor Web
            <br /> Full Stack.
          </h1>
        </div>
        <div className="mt-10 flex justify-center md:m-auto  md:mt-10 xl:my-auto  ">
          <img src="/pc.webp" className="w-[430px] h-[450px] md:w-[568px] md:h-[400px] xl:w-[650px] xl:h-[500px]" />
        </div>
      </div>
    </div>
  );
}
