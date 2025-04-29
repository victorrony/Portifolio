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
            gl.dispose(); // Dispose of the default renderer
            Object.assign(gl, sharedRenderer); // Replace with the shared renderer
         }}
      />
   );
};

export default CanvasWrapper;
