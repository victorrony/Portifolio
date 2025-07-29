"use client";
import dynamic from "next/dynamic";

const EarthCanvas = dynamic(() => import("./Earth"), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center">Loading 3D...</div>,
});

export default EarthCanvas;
