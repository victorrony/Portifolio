"use client";
import dynamic from "next/dynamic";
import { memo } from "react";

// Dynamic import com no SSR para melhor performance
const BallCanvas = dynamic(() => import("./BallCanvas"), {
   ssr: false,
   loading: () => (
      <div className="w-28 h-28 flex items-center justify-center bg-tertiary rounded-lg animate-pulse">
         <div className="w-4 h-4 bg-secondary rounded-full animate-bounce" />
      </div>
   ),
});

const DynamicBallCanvas = memo(({ icon, name, index }) => {
   return <BallCanvas icon={icon} name={name} index={index} />;
});

DynamicBallCanvas.displayName = "DynamicBallCanvas";

export default DynamicBallCanvas;
