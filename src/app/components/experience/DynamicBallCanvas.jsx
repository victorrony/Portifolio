"use client";
import dynamic from "next/dynamic";

const BallCanvas = dynamic(() => import("./BallCanvas"), {
   ssr: false,
   loading: () => <div className="w-28 h-28 flex items-center justify-center">Loading...</div>,
});

export default BallCanvas;
