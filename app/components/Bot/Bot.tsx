"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF as GLTFThree } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";
import * as THREE from "three";

export function Model(): JSX.Element {
  // Adjust these values as needed:
  const fixedScale = 3; 
  const canvasSize = 250; // px

  return (
    <Canvas
      // Make the canvas a fixed size (e.g., 250x250), no background box
      style={{
        width: `${canvasSize}px`,
        height: `${canvasSize}px`,
        background: "transparent",
      }}
      // Turn on alpha so that the canvas background is transparent
      gl={{ alpha: true }}
      camera={{
        position: [0, 0, 10 * fixedScale],
        fov: 50,
      }}
    >
      <ambientLight intensity={0.5} />
      {/* If you want to rotate/pan/zoom, uncomment OrbitControls:
          <OrbitControls enablePan enableZoom enableRotate /> 
      */}
      <ModelContent scale={fixedScale} />
    </Canvas>
  );
}

function ModelContent({ scale }: { scale: number }) {
  const modelRef = useRef<THREE.Group>(null);
  // Load your GLTF model
  const { scene } = useGLTF("/bot.glb") as unknown as GLTFThree;

  // Simple rotation around Y axis
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  // Render the model if it exists
  return scene ? <primitive ref={modelRef} object={scene} scale={scale} /> : null;
}
