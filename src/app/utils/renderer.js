import * as THREE from "three";

let sharedRenderer = null;

export function getSharedRenderer() {
   if (!sharedRenderer) {
      sharedRenderer = new THREE.WebGLRenderer({ antialias: true });
      sharedRenderer.setSize(window.innerWidth, window.innerHeight);
   }
   return sharedRenderer;
}

export function disposeSharedRenderer() {
   if (sharedRenderer) {
      sharedRenderer.dispose();
      sharedRenderer = null;
   }
}
