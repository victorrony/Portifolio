"use client";

import dynamic from "next/dynamic";
import { memo } from "react";

// Dynamic import with no SSR to prevent Three.js server-side rendering issues
const BallCanvas = dynamic(() => import("./BallCanvas"), {
   ssr: false,
   loading: () => (
      <div className="w-28 h-28 flex items-center justify-center">
         <img 
            src="/assets/logo.svg" 
            alt="Loading..." 
            className="w-16 h-16 animate-spin"
         />
      </div>
   )
});

const DynamicBallCanvas = memo(({ icon, name, index }) => {
   return 
//    <BallCanvas icon={icon} name={name} index={index} />;
}); 

DynamicBallCanvas.displayName = "DynamicBallCanvas";

export default DynamicBallCanvas;
