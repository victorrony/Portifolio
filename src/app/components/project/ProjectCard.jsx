"use client";
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { cardItem } from "@/app/utils/motion";
import Image from "next/image";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_code_link_vercel,
}) => {
  return (
    <motion.div
      variants={cardItem()}
      className="group relative sm:w-[360px] w-full rounded-[20px] overflow-hidden cursor-pointer"
    >
      {/* Gradiente de borda animado */}
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

      <div className="relative z-10 bg-tertiary p-5 w-full h-full rounded-[20px] transition-transform duration-500 group-hover:scale-[1.02]">
        {/* Imagem com overlay blur no hover */}
        <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt="project_image"
            sizes="(max-width: 640px) 100vw, 360px"
            fill
            className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay escuro com blur que aparece no hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 backdrop-blur-[0px] group-hover:backdrop-blur-[2px] transition-all duration-500 rounded-2xl" />

          {/* Botão GitHub — sobe no hover */}
          <div className="absolute inset-0 flex justify-end items-start m-3">
            <motion.button
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
              whileHover={{
                scale: 1.15,
                rotate: 8,
                boxShadow: "0 0 12px rgba(168,85,247,0.6)",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
                src="/assets/github.png"
                width={40}
                height={40}
                alt="source code"
                className="object-contain"
              />
            </motion.button>
          </div>
        </div>

        {/* Texto — sobe 4px no hover */}
        <div className="mt-5 transition-transform duration-500 group-hover:-translate-y-1">
          <h3 className="text-white font-bold text-[24px] transition-colors duration-300 group-hover:text-blue-300">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tags de tecnologia */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(({ name, icon }) => (
            <div
              key={`${name}-${icon}`}
              className="group/tag relative cursor-pointer flex items-center justify-center backdrop-blur rounded-xl size-9 lg:size-12 p-2 bg-zinc-800/80 max-lg:hidden transition-transform duration-200 hover:scale-110"
            >
              {icon && (
                <Image
                  src={icon}
                  alt={name}
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              )}
              <span className="text-xs text-white invisible absolute top-[-20px] px-2 py-1 bg-black rounded-md group-hover/tag:visible whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-5 flex justify-center items-center gap-3">
          {source_code_link_vercel && (
            <motion.a
              href={source_code_link_vercel}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative overflow-hidden bg-tertiary border border-white/10 px-4 py-1.5 rounded-lg text-white font-medium group/btn"
            >
              <span className="relative z-10">Live Demo</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string,
      color: PropTypes.string,
    }),
  ).isRequired,
  image: PropTypes.string.isRequired,
  source_code_link: PropTypes.string.isRequired,
  source_code_link_vercel: PropTypes.string,
};

export default ProjectCard;
