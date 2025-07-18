"use client";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

// import { SectionWrapper } from "../hoc";

// Utility function to validate geometry positions
const validateGeometry = (geometry) => {
   if (geometry?.attributes?.position?.array.some((val) => isNaN(val))) {
      console.error("Geometry position attributes contain NaN values.");
   }
};

// Example usage (replace with actual geometry object)
const exampleGeometry = {}; // Replace with your geometry object
validateGeometry(exampleGeometry);

const ExperienceCard = ({ experience }) => {
   const { title, company_name, date, icon, iconBg, points } = experience;

   return (
      <VerticalTimelineElement
         contentStyle={{
            background: "#1d1836",
            color: "#fff",
            padding: "1.5rem",
            borderRadius: "1rem",
            minWidth: 0, // Evita overflow em telas pequenas
            maxWidth: "60%", // Garante que o conteúdo não exceda a largura do elemento pai
         }}
         contentArrowStyle={{ borderRight: "7px solid  #232631" }}
         dateClassName="text-white-100 flex text-[16px] font-semibold"
         dateStyle={{
            color: "black",
            fontSize: "16px",
            display: "flex",
            flexWrap: "wrap", // Permite quebra de linha
         }}
         date={date}
         iconStyle={{
            background: iconBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
         }}
         icon={
            <Image
               src={experience.icon}
               alt={experience.company_name}
               width={40}
               height={40}
               className="w-[40px] h-[40px] object-contain sm:w-[60px] sm:h-[60px]"
            />
         }
      >
         <div>
            <h3 className="text-white text-[20px] sm:text-[24px] font-bold">{title?.trim()}</h3>
            <p className="text-secondary text-[14px] sm:text-[16px] font-semibold" style={{ margin: 0 }}>
               {company_name}
            </p>
         </div>

         <ul className="mt-5 list-disc ml-5 space-y-2">
            {points.map(
               (point, index) =>
                  typeof point === "string" && (
                     <li
                        key={`experience-point-${index}`}
                        className="text-white-100 text-[12px] sm:text-[14px] pl-1 tracking-wider"
                     >
                        {point}
                     </li>
                  )
            )}
         </ul>
      </VerticalTimelineElement>
   );
};

export default ExperienceCard;
