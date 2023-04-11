"use client";
import React from "react";
import { useState } from "react";

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
      className="flex  flex-wrap h-screen justify-center text-center bg-blue-500  w-[1280px]"
    >
      <div className="flex flex-row flex-wrap justify-between w-[1255px] ml-10 my-auto ">
        <div className="w-80 h-[600px] justify-center border-2 bg-[#abd8e4] rounded-3xl shadow-md shadow-black">
          <div className="w-60 h-40 border-2 m-auto mt-8">
            <a
              href="https://github.com/victorrony/Encantar.CV"
              target="blank"
              onMouseOver={() => handleMouseOver("p1")}
              onMouseOut={handleMouseOut}
              className="flex justify-center mt-8 text-lg font-semibold"
            >
              <u>Encantar CV</u>
            </a>
            <p className="mt-5">Reactjs, Nextjs, tailwindcss, strapi</p>
          </div>
          <div className="w-60 h-40 border-2 m-auto mt-8">
            <a
              href="https://github.com/victorrony/Month-Calender"
              target="blank"
              onMouseOver={() => handleMouseOver("p2")}
              onMouseOut={handleMouseOut}
              className="flex justify-center mt-8 text-lg font-semibold"
            >
              <u>Month-Calender</u>
            </a>
            <p className="mt-5">HTML, CSS, JavaScript</p>
          </div>
          <div className="w-60 h-40 border-2 m-auto mt-8">
            <a
              href="https://github.com/victorrony/"
              target="blank"
              onMouseOver={() => handleMouseOver("p3")}
              onMouseOut={handleMouseOut}
              className="flex justify-center mt-8 text-lg font-semibold"
            >
              <u>Calculadora</u>
            </a>
            <p className="mt-5">HTML, CSS, JavaScript</p>
          </div>
        </div>
        <div className="flex flex-col  mx-auto">
          <div className="text-center my-5">
            <h1 className="text-4xl font-semibold">Projectos</h1>
          </div>
          <div className="w-[800px] h-[400px] border-2 bg-[#abd8e4] flex flex-col justify-center rounded-3xl shadow-md shadow-black">
            {activeContent === "p1" && (
              <div className="w-[550px] h-[250px] border-2 m-auto shadow-lg shadow-black rounded-3xl">
                <p className="mt-3">
                  um aplicativo provedor do cliente que para além de avaliar o
                  atendimento deverá suportar outras valências direcionado para
                  as empresas.
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
              <div className="w-[550px] h-[250px] border-2 m-auto shadow-lg shadow-black rounded-3xl">
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
              <div className="w-[550px] h-[250px] border-2 m-auto block shadow-lg shadow-black rounded-3xl">
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
    </div>
  );
}
