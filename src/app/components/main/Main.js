import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";

export default function Main() {
  return (
    <div
      id="main"
      className="flex h-screen gap-20  bg-blue-500 w-[1280px] text-black"
    >
      <div className=" ">
        <img
          src="/pc.webp"
          className="w-[490px] h-[396px] mt-32 ml-32 rounded-full "
        />
      </div>
      <div className="mt-32  w-[575px] text-center ">
        <h1 className=" text-black text-3xl my-8 font-semibold">Sobre Mim</h1>
        <p className="m-8">
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

        <div className="flex justify-center m-auto w-80 mt-10">
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
