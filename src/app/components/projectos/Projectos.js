export default function Projectos({href, label, description, handleMouseOver, handleMouseOut }) {
  return (
    <div className="w-36 h-40 border-2  m-auto mx-1 xl:mx-auto xl:h-36 xl:w-50">
      <a
        href={href}
        target="blank"
        onMouseOver={() => handleMouseOver("p1")}
        onMouseOut={handleMouseOut}
        className="flex justify-center mt-8 text-lg font-semibold"
      >
        <u>{label}</u>
      </a>
      <p className="mt-5">{description}</p>
    </div>
  );
}
