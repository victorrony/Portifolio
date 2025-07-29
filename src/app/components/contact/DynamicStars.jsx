"use client";
import dynamic from "next/dynamic";

const Stars = dynamic(() => import("./Stars"), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center">Loading stars...</div>,
});

export default Stars;
