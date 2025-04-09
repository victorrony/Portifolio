// Desc: This file contains all the constants used in the application.

import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";

const navLinks = [
   // { href: "/", label: "Home" },
   { href: "#about", label: "About me" },
   { href: "#experience", label: "Experience" },
   { href: "#projects", label: "Projects" },
   { href: "#contact", label: "Contact" },
];

const services = [
   {
      title: "Web Developer",
      icon: "/assets/web.png",
   },
   {
      title: "Frontend Developer",
      icon: "/assets/mobile.png",
   },
   {
      title: "Backend Developer",
      icon: "/assets/backend.png",
   },
   // {
   //    title: "UI/UX Designer",
   //    icon: "/assets/creator.png",
   // },
   {
      title: "Full Stack Developer",
      icon: "/assets/web.png",
   },
   // {
   //    title: "React Native Developer",
   //    icon: "/assets/web.png",
   // },
];

const technologies = [
   {
      name: "HTML 5",
      icon: "/assets/tech/html.png",
   },
   {
      name: "CSS 3",
      icon: "/assets/tech/css.png",
   },
   {
      name: "JavaScript",
      icon: "/assets/tech/javascript.png",
   },
   {
      name: "TypeScript",
      icon: "/assets/tech/typescript.png",
   },
   {
      name: "React JS",
      icon: "/assets/tech/reactjs.png",
   },
   {
      name: "Next JS",
      icon: "/assets/tech/nextjs.jpeg",
   },
   {
      name: "Tailwind CSS",
      icon: "/assets/tech/tailwind.png",
   },
   {
      name: "Node JS",
      icon: "/assets/tech/nodejs.png",
   },
   {
      name: "MySQL",
      icon: "/assets/tech/mysql.png",
   },
   {
      name: "Three JS",
      icon: "/assets/tech/Threejs.png",
   },

   {
      name: "Motion",
      icon: "/assets/tech/motion.png",
   },
];

const tolls = [
   {
      name: "VS Code",
      icon: "/assets/tech/vscode.jpeg",
   },
   {
      name: "Postman",
      icon: "/assets/tech/postman.jpeg",
   },
   {
      name: "Vercel",
      icon: "/assets/tech/vercel.png",
   },
   {
      name: "Figma",
      icon: "/assets/tech/figma.png",
   },
   {
      name: "git",
      icon: "/assets/tech/git.png",
   },
   {
      name: "GitHub",
      icon: "/assets/github.png",
   },
];

const experiences = [
   {
      title: "React.js Developer",
      company_name: "Sintaxy",
      icon: "/assets/company/starbucks.png",
      iconBg: "#383E56",
      date: "March 2023 - April 2024",
      points: [
         "Developing and maintaining web applications using React.js and other related technologies.",
         "I participated in the creation of the website for a full-stack training academy and also in the development of a platform for a university.",
         "Using Git for version control and collaborating with other developers using GitHub.",
         "I was responsible for creating and maintaining the front-end of the projects.",
      ],
   },
   {
      title: "Full Stack Developer",
      company_name: "Sintaxy",
      icon: "/assets/company/tesla.png",
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
         "Developing and maintaining web applications using Next.js and strapi and other related technologies.",
         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
         "Implementing responsive design and ensuring cross-browser compatibility.",
         "I was responsible for creating and maintaining the front-end and back-end of the projects.",
      ],
   },
   {
      title: "PHP Developer",
      company_name: "Sintaxy",
      icon: "/assets/company/shopify.png",
      iconBg: "#383E56",
      date: "Feb 2024 - Present",
      points: [
         "Developing and maintaining web applications using PHP and other related technologies.",
         "Creating and maintaining databases to store application data.",
         "Continuing to provide services to clients and ensuring their satisfaction with delivered solutions.",
         "I am responsible for creating and maintaining the front-end and back-end of the projects.",
      ],
   },
   {
      title: "Software Tester",
      company_name: "Sintaxy",
      icon: "/assets/company/meta.png",
      iconBg: "#E6DEDD",
      date: "Sept 2024 - Present",
      points: [
         "Testing software to ensure the highest quality and reliability.",
         "Creating test plans, test cases, and test scripts.",
         "Collaborating with the development team to identify and fix bugs and issues.",
         "Ensuring that software meets all requirements and specifications.",
      ],
   },
];

const projects = [
   {
      name: "Shoes E-commerce",
      description:
         "Web application that enables users to search for shoes, view details, and add them to the cart for purchase.",
      tags: [
         {
            name: "nextjs",
            color: "blue-text-gradient",
            icon: "/assets/tech/nextjs.jpeg",
         },
         {
            name: "@headlessui/react",
            color: "green-text-gradient",
            icon: "/assets/tech/@headlessui.png",
         },
         {
            name: "@reduxjs/toolkit",
            color: "pink-text-gradient",
            icon: "/assets/tech/redux.png",
         },
         {
            name: "tailwind",
            color: "violet-text-gradient",
            icon: "/assets/tech/tailwind.png",
         },
      ],
      image: "/assets/ShoesShop.png",
      source_code_link: "https://github.com/victorrony/Ecommerce-shoes",
      source_code_link_vercel: "https://ecommerce-shoes-kappa.vercel.app/",
   },
   {
      name: "Rest_Countries website",
      description:
         " A web application that enables users to search for countries and view details like population, area, and borders.",
      tags: [
         {
            name: "Nextjs",
            color: "blue-text-gradient",
            icon: "/assets/tech/nextjs.jpeg",
         },
         {
            name: "@headlessui/react",
            color: "green-text-gradient",
            icon: "/assets/tech/@headlessui.png",
         },
         {
            name: "Tailwind",
            color: "pink-text-gradient",
            icon: "/assets/tech/tailwind.png",
         },
         {
            name: "Axios",
            color: "blue-text-gradient",
            icon: "/assets/tech/axios.png",
         },
      ],
      image: "/assets/Rest_countries.png",
      source_code_link: "https://github.com/victorrony/rest-countries",
      source_code_link_vercel: "https://rest-countries-theta-lime.vercel.app/",
   },
   {
      name: "Space tourism website",
      description: "A multi-page website that showcases space tourism and enables users to book a trip to space.",
      tags: [
         {
            name: "Nextjs",
            color: "blue-text-gradient",
            icon: "/assets/tech/nextjs.jpeg",
         },
         {
            name: "Responsive-carousel",
            color: "green-text-gradient",
            icon: "/assets/tech/react-responsive-carousel.png",
         },
         {
            name: "Tailwind",
            color: "pink-text-gradient",
            icon: "/assets/tech/tailwind.png",
         },
      ],
      image: "/assets/Space_tourism.png",
      source_code_link: "https://github.com/victorrony/Space-tourism",
      source_code_link_vercel: "https://space-tourism-ten-neon.vercel.app/",
   },
   {
      name: "Chat GPT clone",
      description: "A clone of the ChatGPT website that enables users to chat with an AI-powered chatbot.",
      tags: [
         {
            name: "Nextjs",
            color: "blue-text-gradient",
            icon: "/assets/tech/nextjs.jpeg",
         },
         {
            name: "Tailwind",
            color: "pink-text-gradient",
            icon: "/assets/tech/tailwind.png",
         },
         {
            name: "Typescript",
            color: "blue-text-gradient",
            icon: "/assets/tech/typescript.png",
         },
         {
            name: "Openai",
            color: "green-text-gradient",
            icon: "/assets/tech/openai.jpeg",
         },
      ],
      image: "/assets/ChatGPT_clone.png",
      source_code_link: "https://github.com/victorrony/Clone-chatGPT",
      source_code_link_vercel: "https://clone-chat-gpt-rho.vercel.app/",
   },
];
const socialLinks = [
   {
      href: "https://www.linkedin.com/in/victorfernandes-a41030262/",
      icon: <IoLogoLinkedin className="w-6 h-6 hover:text-white" />,
   },
   {
      href: "  https://github.com/victorrony",
      icon: <IoLogoGithub className="w-6 h-6 hover:text-white" />,
   },
   {
      href: "  https://wa.me/+2319519228",
      icon: <IoLogoWhatsapp className="w-6 h-6 hover:text-white" />,
   },
];

export { services, technologies, experiences, projects, socialLinks, navLinks, tolls };
