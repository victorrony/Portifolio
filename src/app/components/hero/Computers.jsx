"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
   const { scene } = useGLTF("./desktop_pc/scene.gltf");
   const ref = useRef();

   // useFrame(() => {
   //    ref.current.rotation.x += isMobile ? 0.001 : 0.002;
   // });

   return (
      <mesh ref={ref}>
         <hemisphereLight intensity={6.15} groundColor="black" />
         <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={4} castShadow shadow-mapSize={1024} />
         <primitive
            object={scene}
            scale={isMobile ? 0.7 : 0.75}
            position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
         />
      </mesh>
   );
};

const ComputersCanvas = () => {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 300px)");
      setIsMobile(mediaQuery.matches);

      const handleMediaQueryChange = (event) => {
         setIsMobile(event.matches);
      };
      mediaQuery.addEventListener("change", handleMediaQueryChange);

      return () => {
         mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
   }, []);

   return (
      // <Canvas> is a component that provides a 3D rendering context
      // frameloop="demand" allows the canvas to render only when needed
      // <Suspense> is a component that suspends rendering until the child components are loaded
      // <OrbitControls> is a component that provides camera controls
      <Canvas
         frameloop="demand"
         shadows
         dpr={[1, 2]}
         camera={{ position: [20, 3, 5], fov: 25 }}
         gl={{ preserveDrawingBuffer: true }}
      >
         <Suspense fallback={<CanvasLoader />}>
            <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            <Computers isMobile={isMobile} />
         </Suspense>

         <Preload all />
      </Canvas>
   );
};

export default ComputersCanvas;
