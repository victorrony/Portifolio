"use client";import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { getSharedRenderer } from "../app/utils/renderer";

const CanvasWrapper = (props) => {
   useEffect(() => {
      const handleResize = () => {
         const renderer = getSharedRenderer();
         renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   return (
      <Canvas
         {...props}
         onCreated={({ gl }) => {
            const sharedRenderer = getSharedRenderer();
            gl.dispose(); 
            Object.assign(gl, sharedRenderer);
         }}
      />
   );
}; 

export default CanvasWrapper;
