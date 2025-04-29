"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import { useRef, useState, useCallback } from "react";

const Ball = ({ scale, imgUrl }) => (
  <mesh scale={scale}>
    <sphereGeometry args={[1, 32, 32]} />
    <meshStandardMaterial color="#fff8eb" map={imgUrl} />
  </mesh>
);

function Object({ scale = 1, z = 0, opacity = 1 }) {
  const { viewport } = useThree();
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState([0, 0, z]);
  const meshRef = useRef(null);

  const bind = useDrag(
    useCallback(
      ({ event, offset: [x, y] }) => {
        event.stopPropagation();
        const aspect = viewport.factor;
        setPosition([x / aspect, -y / aspect, z]);
      },
      [viewport, z]
    )
  );

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  const handlePointerOver = useCallback((e) => {
    e.stopPropagation();
    setHovered(true);
  }, []);

  const handlePointerOut = useCallback((e) => {
    e.stopPropagation();
    setHovered(false);
  }, []);

  const handleClick = useCallback((e) => {
    e.stopPropagation();
    console.log("clicked", { z });
  }, [z]);

  return (
    <mesh
      ref={meshRef}
      position={position}
      {...bind()}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
      castShadow
      scale={scale}
    >
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        transparent
        opacity={opacity}
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
}

export default function Gestures({ icon }) {
  return (
    <Canvas shadows>
      <ambientLight intensity={Math.PI * 0.5} />
      <spotLight
        decay={0}
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        castShadow
      />
      <pointLight decay={0} position={[-10, -10, -10]} />
      <Ball scale={0.5} imgUrl={icon} />
      <Object z={-1} scale={0.5} />
      <Object opacity={0.8} />
    </Canvas>
  );
}
