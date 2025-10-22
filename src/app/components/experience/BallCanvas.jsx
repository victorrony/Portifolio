"use client";
import React, { Suspense, useMemo, memo, useState, useEffect } from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

// Componente otimizado com memoization
const Ball = memo(({ imgUrl, name }) => {
   const isValidImg = typeof imgUrl === "string" && imgUrl.trim() !== "";

   const textureUrl = useMemo(() => (isValidImg ? imgUrl : null), [isValidImg, imgUrl]);
   const [decal] = useTexture(textureUrl ? [textureUrl] : []);

   return (
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
         <ambientLight intensity={0.25} />
         <directionalLight position={[0, 0, 0.05]} />
         <mesh castShadow receiveShadow scale={2.75}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
            {decal && (
               <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading />
            )}
         </mesh>
      </Float>
   );
});

Ball.displayName = "Ball";

// Fallback simples para quando há muitos Canvas
const SimpleImageIcon = memo(({ icon, name }) => (
   <div className="w-full h-full flex items-center justify-center bg-tertiar rounded-lg">
      <Image src={icon} alt={name} width={64} height={64} className="object-contain" />
   </div>
));

SimpleImageIcon.displayName = "SimpleImageIcon";

// Limite de Canvas 3D para melhor performance
const MAX_CANVAS_COUNT = 10;

const BallCanvas = memo(({ icon, name, index }) => {
   // Detectar se é mobile para usar fallback 2D
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      // Detecta dispositivos mobile (largura < 768px)
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      setIsMobile(mediaQuery.matches);

      const handleMediaQueryChange = (event) => {
         setIsMobile(event.matches);
      };

      mediaQuery.addEventListener("change", handleMediaQueryChange);
      return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
   }, []);

   // Usa o index para determinar se deve renderizar Canvas
   // Mais estável que contador global mutável
   const shouldUseCanvas = index < MAX_CANVAS_COUNT && !isMobile;

   // Se for mobile, exceder o limite ou não ter ícone, usar imagem simples
   if (!shouldUseCanvas || !icon) {
      return <SimpleImageIcon icon={icon} name={name} />;
   }

   return (
      <Canvas
         frameloop="demand"
         dpr={[1, 2, 3]}
         gl={{
            preserveDrawingBuffer: true,
            antialias: true,
            alpha: true,
         }}
      >
         <Suspense fallback={null}>
            <OrbitControls
               enableZoom={false}
               enablePan={false}
               maxPolarAngle={Math.PI / 2}
               minPolarAngle={Math.PI / 2}
            />
            <Ball imgUrl={icon} name={name} />
         </Suspense>
         <Preload all />
      </Canvas>
   );
});

BallCanvas.displayName = "BallCanvas";

export default BallCanvas;
