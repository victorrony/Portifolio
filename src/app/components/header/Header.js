import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";

export default function Header() {
  return (
    <div
      id="home"
      className="bg-[#abd8e4] h-screen content-center justify-items-center items-center  w-[1280px]"
    >
      <div className="flex justify-between text-blue-500 bg-black  text-md items-center justify-items-center h-12 w-[1280px] fixed">
        <div className="w-48 ml-5 font-bold hover:text-white">
          <a href="#home">Victor Rony</a>
        </div>
        <div className="w-[600px]">
          <ul className="flex justify-center space-x-16 ">
            <li>
              <a href="#main" className=" hover:text-white">
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
        <div className="w-80">
          <ul className="flex justify-end space-x-16 mr-5">
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
                <IoLogoGithub className="w-6 h-6 hover:text-white" />
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
      <div className="flex flex-row flex-wrap">
        <div className="ml-52 mt-72 text-md text-black">
          <h2>
            <span className="font-bold">Olá,</span> o meu nome é{" "}
            <span className="font-bold">Victor Rony.</span> Sou um
          </h2>
          <h1 className="text-4xl mt-5">
            Desemvolvedor
            <br /> Full Stack.
          </h1>
        </div>
        <div className=" m-auto flex justify-center mt-28">
          <img src="/pc.webp" className="w-[668px] h-[519px]" />
        </div>
      </div>
    </div>
  );
}
