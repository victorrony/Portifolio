import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import CanvasWrapper from "@/components/CanvasWrapper";

const Earth = () => {
   const earth = useGLTF("./planet/scene.gltf");

   return <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />;
};

const EarthCanvas = () => {
   return (
      <CanvasWrapper
         shadows
         frameloop="demand"
         dpr={[1, 2]}
         gl={{ preserveDrawingBuffer: true }}
         camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
         }}
      >
         <Suspense fallback={<CanvasLoader />}>
            <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            {/* <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 5]} angle={1} intensity={1} castShadow={true} shadow-mapSize={1024} /> */}
            <Earth />

            <Preload all />
         </Suspense>
      </CanvasWrapper>
   );
};

export default EarthCanvas;
