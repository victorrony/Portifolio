"use client";
import React from "react";
import { useState } from "react";
import Projectos from "../projectos/Projectos";

export default function Project() {
  const [activeContent, setActiveContent] = useState([null]);

  const handleMouseOver = (contentId) => {
    setActiveContent(contentId);
  };

  const handleMouseOut = () => {
    setActiveContent(null);
  };

  return (
    <div
      id="project"
      className="flex flex-col h-screen w-full justify-center m-auto  text-center bg-blue-500  md:w-[100%] lg:w-[100%] xl:w-[1280px]"
    >
      <div className="text-center mt-16 md:mt-20">
        <h1 className="text-4xl font-semibold">Projectos</h1>
      </div>
      <div className="flex flex-col m-auto xl:flex-row xl:gap-10 xl:mt-30">
        <div className=" flex w-[450px] h-52 justify-center m-auto border-2 bg-[#abd8e4] rounded-3xl shadow-md shadow-black md:w-[580px] md:h-[200px] lg:w-[570px] lg:h-[200px] xl:flex-col xl:justify-center xl:m-auto xl:w-[250px] xl:h-[500px]">
          <Projectos
            href="https://github.com/victorrony/Encantar.CV"
            label="premioCac"
            description="Reactjs, Nextjs, tailwindCss, strapi"
            handleMouseOut={handleMouseOut}
            handleMouseOver={() => handleMouseOver("p1")}
          />
          <Projectos
            href=""
            label="Month-Calendar"
            description="HTML, CSS, JavaScript"
            handleMouseOut={handleMouseOut}
            handleMouseOver={() => handleMouseOver("p2")}
          />
          <Projectos
            href="https://github.com/victorrony/"
            label="Calculadora"
            description="HTML, CSS, JavaScript"
            handleMouseOut={handleMouseOut}
            handleMouseOver={() => handleMouseOver("p3")}
          />
        </div>
        <div className="w-[450px] h-[300px] mt-4 border-2 bg-[#abd8e4] flex flex-col justify-center rounded-3xl shadow-md shadow-black md:w-[600px] md:h-[300px] lg:w-[700px] lg:h-[300px] xl:my-auto">
          {activeContent === "p1" && (
            <div className="w-[400px] md:w-[550px] md:h-[250px] border-2 m-auto shadow-lg shadow-black rounded-3xl lg:w-[650px] lg:h-[250px]">
              <p className="mt-3">
                um aplicativo provedor do cliente que para além de avaliar o
                atendimento deverá suportar outras valências direcionado para as
                empresas.
              </p>
              <h2 className="mt-5 text-lg font-semibold">funcionalidades:</h2>
              <ol>
                <li>Criação de perfil de clientes.</li>
                <li>Fazer Avaliação no seu melhor atendidor.</li>
              </ol>
              <p className="mt-5">
                <span className="mt-10 text-lg font-semibold">
                  Tecnologias utilizadas:
                </span>
                React, Next.js, tailwindcss, strapi.
              </p>
            </div>
          )}
          {activeContent === "p2" && (
            <div className="w-[400px] h-64 md:w-[550px] md:h-[250px] border-2 m-auto shadow-lg shadow-black rounded-3xl lg:w-[650px] lg:h-[250px]">
              <p className="mt-3">
                um aplicativo calendario muito flexivel onde pode ver data
                actual, data passada e data futura .
              </p>
              <h2 className="mt-5 text-lg font-semibold">funcionalidades:</h2>
              <ol>
                <li>Apresentaçao do calendario.</li>
                <li>Apresentaçao do mes anterior e proximo mes.</li>
              </ol>
              <p className="mt-5">
                <span className="mt-10 text-lg font-semibold">
                  Tecnologias utilizadas:
                </span>
                HTML, CSS, JavaScript.
              </p>
            </div>
          )}
          {activeContent === "p3" && (
            <div className="w-[400px] h-64  border-2 m-auto block shadow-lg shadow-black rounded-3xl md:w-[550px] md:h-[250px] lg:w-[650px] lg:h-[250px]">
              <p className="mt-3">
                um aplicativo calculadora capaz de fazer varios tipos de
                calculos.
              </p>
              <h2 className="mt-5 text-lg font-semibold">funcionalidades:</h2>
              <ol>
                <li>Apresentaçao do calculadora.</li>
                <li>Calcule como Soma, Subtraçao, Diviçao, Multiplicaçao.</li>
              </ol>
              <p className="mt-5">
                <span className="mt-10 text-lg font-semibold">
                  Tecnologias utilizadas:
                </span>
                HTML, CSS, JavaScript.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
