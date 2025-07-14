"use client";
import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

const Ball = ({ imgUrl }) => {
   const [decal] = useTexture([imgUrl]);

   return (
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
         <ambientLight intensity={0.25} />
         <directionalLight position={[0, 0, 0.05]} />
         <mesh castShadow receiveShadow scale={2.75}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
            <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading />
         </mesh>
      </Float>
   );
};

const BallCanvas = ({ icon, name }) => {
   // Verificar se o icon existe antes de renderizar
   if (!icon) {
      return (
         <div className="w-full h-full flex items-center justify-center bg-gray-800 rounded-full">
            <span className="text-white text-xs">{name}</span>
         </div>
      );
   }

   return (
      <Canvas
         frameloop="demand"
         dpr={[1, 2]}
         gl={{
            preserveDrawingBuffer: true,
            antialias: true,
            alpha: true,
         }}
         // camera={{ position: [0, 0, 5], fov: 50 }}
      >
         <Suspense fallback={null}>
            <OrbitControls
               enableZoom={false}
               enablePan={false}
               maxPolarAngle={Math.PI / 2}
               minPolarAngle={Math.PI / 2}
            />
            <Ball imgUrl={icon} />
         </Suspense>
         <Preload all />
      </Canvas>
   );
};

export default BallCanvas;
