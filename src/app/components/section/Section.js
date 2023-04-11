export default function Section() {
  return (
    <div
      id="section"
      className="h-screen flex flex-col flex-wrap justify-center text-black text-center bg-[#abd8e4]   w-[1280px]"
    >
      <div className="">
        <h1 className="text-4xl font-semibold"> Habilidade e Experiencias </h1>
      </div>
      <div className="flex flex-row justify-evenly  mt-10">
        <div className="flex flex-col w-[400px] h-[500px] border-2 bg-blue-500 rounded-3xl shadow-md shadow-black">
          <h2 className="text-2xl mt-6 mb-6">Habilidades</h2>
          <ul className="flex flex-col justify-left text-center space-y-12 m-4">
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
              <span className="font-semibold text-xl">
                Ferramentas e plataformas:
              </span>
              <br /> Git, GitHub, npm, ESLint
            </li>
          </ul>
        </div>

        <div className="w-[400px] h-[500px] border-2 bg-blue-500 mr-8 rounded-3xl shadow-md shadow-black">
          <h1 className="text-2xl mt-6 mb-6">Experiencias</h1>
        </div>
      </div>
    </div>
  );
}
