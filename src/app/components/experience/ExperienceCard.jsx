"use client";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
         contentStyle={{ background: "#1d1836", color: "#fff" }}
         contentArrowStyle={{ borderRight: "7px solid  #232631" }}
         dateClassName="text-white-100 display: flex text-[16px] font-semibold"
         dateStyle={{ color: "black", fontSize: "16px", display: "flex" }}
         date={date}
         iconStyle={{ background: iconBg }}
         icon={
            <div className="flex justify-center items-center w-full h-full">
               <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
            </div>
         }
      >
         <div>
            <h3 className="text-white text-[24px] font-bold">{title?.trim()}</h3>
            <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
               {company_name}
            </p>
         </div>

         <ul className="mt-5 list-disc ml-5 space-y-2">
            {points.map((point, index) => (
               // Check if point is a string before rendering
               typeof point === "string" && (
                  <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
                     {point}
                  </li>
               )
            ))}
         </ul>
      </VerticalTimelineElement>
   );
};

export default ExperienceCard;
