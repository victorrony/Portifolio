export default function DescriptionOfProject({descriçao, funcionalidades1, funcionalidades2, tecnologia}) {
  return (
    <div className="w-[400px] h-64  border-2 m-auto  block shadow-lg shadow-black rounded-3xl md:w-[550px] md:h-[250px] lg:w-[650px] lg:h-[250px]">
      <p className="mt-3">
        {descriçao}
      </p>
      <h2 className="mt-5 text-lg font-semibold">funcionalidades:</h2>
      <ol>
        <li>{funcionalidades1}</li>
        <li>{funcionalidades2}</li>
      </ol>
      <p className="mt-5">
        <span className="mt-10 text-lg font-semibold">
          Tecnologias utilizadas:
        </span>
        {tecnologia}
      </p>
    </div>
  );
}
