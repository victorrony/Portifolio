"use client";
import React from "react";
import { useState } from "react";
import Projectos from "../projectos/Projectos";
import DescriptionOfProject from "../descriçao de projecto/DescriptionOfProject";

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
      <div className="flex flex-col m-auto  xl:flex-row xl:gap-10 xl:mb-12">
        <div className=" flex w-[460px] h-52 justify-center m-auto border-2 bg-[#abd8e4] rounded-3xl shadow-md shadow-black md:w-[580px] md:h-[200px]  lg:flex  lg:w-[570px] lg:h-[200px] xl:flex-col xl:justify-center xl:my-4 xl:w-[250px] xl:h-[560px]">
          <Projectos
            href="https://github.com/victorrony/Encantar.CV"
            label="premioCac"
            description="Reactjs, Nextjs, tailwindCss, strapi"
            handleMouseOut={handleMouseOut}
            handleMouseOver={() => handleMouseOver("p1")}
          />
          <Projectos
            href="https://github.com/victorrony/Month-Calender"
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
        <div className="w-[460px] h-[300px] mt-4 lg:mb-16 border-2 bg-[#abd8e4] flex flex-col justify-center rounded-3xl shadow-md shadow-black md:w-[600px] md:h-[300px] lg:w-[700px] lg:h-[300px] xl:my-auto">
          {activeContent === "p1" && (
            <DescriptionOfProject
              descriçao="um aplicativo provedor do cliente que para além de avaliar o
                atendimento deverá suportar outras valências direcionado para as
                empresas."
              funcionalidades1="Criação de perfil de clientes."
              funcionalidades2="Fazer Avaliação no seu melhor atendidor."
              tecnologia="React, Next.js, tailwindcss, strapi."
            />
          )}
          {activeContent === "p2" && (
            <DescriptionOfProject
              descriçao="um aplicativo calendario muito flexivel onde pode ver data
                actual, data passada e data futura ."
              funcionalidades1="Apresentaçao do calendario."
              funcionalidades2="Apresentaçao do mes anterior e proximo mes."
              tecnologia="HTML, CSS, JavaScript."
            />
          )}
          {activeContent === "p3" && (
            <DescriptionOfProject
              descriçao="um aplicativo calculadora capaz de fazer varios tipos de
                calculos."
              funcionalidades1="Apresentaçao do calculadora."
              funcionalidades2="Calcule como Soma, Subtraçao, Diviçao, Multiplicaçao."
              tecnologia="HTML, CSS, JavaScript."
            />
          )}
        </div>
      </div>
    </div>
  );
}
