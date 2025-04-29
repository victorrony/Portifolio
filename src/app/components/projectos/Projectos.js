"use client";

export default function Projectos({
  href,
  label,
  description,
  handleMouseOver,
  handleMouseOut,
}) {
  return (
    <div className="w-36 h-40 border-2   mx-1 my-5 xl:mx-auto xl:h-32 xl:w-50">
      <a
        href={href}
        target="blank"
        onMouseOver={() => handleMouseOver("p1")}
        onMouseOut={handleMouseOut}
        className="flex justify-center  text-base font-semibold"
      >
        <u>{label}</u>
      </a>
      <p className="mt-3">{description}</p>
    </div>
  );
}
