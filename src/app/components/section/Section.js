export default function Section() {
  return (
    <div
      id="section"
      className="h-screen w-full flex flex-col  justify-center  text-black text-center bg-[#abd8e4] lg:w-[100%] xl:w-[1280px] "
    >
      <div className="text-3xl mt-20 md:text-4xl font-semibold lg:mt-0">
        <h1 className=""> Habilidade e Experiencias </h1>
      </div>
      <div className="flex flex-col gap-5 m-auto lg:m-0 mt-8 md:flex-row  md:justify-evenly md:mt-14  lg:flex lg:justify-evenly lg:mt-10">
        <div className="flex flex-col w-[450px]  border-2 bg-blue-500 rounded-3xl shadow-md shadow-black  md:w-[350px] md:h-[450px] ">
          <h2 className="text-2xl mt-3 font-semibold md:mt-10">Habilidades</h2>
          <ul className="flex flex-col justify-left text-center  space-y-4 md:m-auto">
            <li>
              <span className="font-semibold text-xl">
                Linguagens de programação:
              </span>
              <br /> JavaScript (ES6+), HTML5, CSS3
            </li>
            <li>
              <span className="font-semibold text-xl">
                Bibliotecas e frameworks:
              </span>
              <br /> React, Next.js, Node.js, Express
            </li>
            <li>
              <span className="font-semibold text-xl">Bancos de dados:</span>
              <br /> SQL (MySQL, PostgreSQL), NoSQL (MongoDB)
            </li>
            <li>
              <span className="font-semibold text-xl ">
                Ferramentas e plataformas:
              </span>
              <br /> Git, GitHub, npm, ESLint
            </li>
          </ul>
        </div>
        <div className=" w-[450px] h-52  border-2 bg-blue-500 rounded-3xl shadow-md shadow-black  md:w-[350px] md:h-[450px] ">
          <h1 className="text-2xl mt-3 font-semibold md:mt-10">Experiencias</h1>
        </div>
      </div>
    </div>
  );
}
