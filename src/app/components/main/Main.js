import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";

export default function Main() {
  return (
    <div
      id="main"
      className="flex flex-col-reverse justify-center w-full align-middle h-screen  bg-blue-500  text-black lg:w-[100%] xl:w-[1280px] xl:flex-row xl:justify-center xl:align-middle"
    >
      <div className="flex mb-6 m-auto lg:mb-10 xl:mb-32">
        <img
          src="/pc.webp"
          className="w-96 h-60 rounded-full lg:w-[390px] lg:h-[290px] xl:w-[430px] xl:h-[430px] xl:ml-20"
        />
      </div>
      <div className="mt-16 flex flex-col justify-center text-center items-center lg:mt-32 xl:m-auto">
        <h1 className=" text-black text-3xl  font-semibold">Sobre Mim</h1>
        <p className="w-[460px] break-words mt-3 md:w-[550px]">
          Olá, Éu sou{" "}
          <span className="font-semibold">Victor Rony Pereira Fernandes,</span>{" "}
          um desenvolvedor <span className="font-semibold">Full Stack</span>{" "}
          especializado em JavaScript, React, Next.js, Node.js e bancos de dados
          SQL. Com experiência no desenvolvimento de aplicações web escaláveis e
          de alto desempenho, estou sempre buscando aprimorar minhas habilidades
          e aprender novas tecnologias. sou apaixonado pela tecnologia. O meu
          primeiro contacto com a programaçao foi no inicio 2022, quando um
          amigo me apresentou o Desemvolvimento web.
        </p>

        <div className="flex justify-center m-auto w-70 my-5">
          <ul className=" space-x-16 flex ">
            <li>
              <a
                href="linkedin.com/in/victorFernandes-a41030262"
                target="blank"
              >
                <IoLogoLinkedin className="w-6 h-6 hover:text-white" />
              </a>
            </li>
            <li>
              <a href="https://github.com/victorrony" target="blank">
                <IoLogoGithub className="w-6 h-6 hover:text-white" />
              </a>
            </li>
            <li>
              <a href="https://" target="blank">
                <IoLogoWhatsapp className="w-6 h-6 hover:text-white" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
