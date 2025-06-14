
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

function HydrogenAtom({ position = [0,0,0], color = "#62D0FF" }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.29, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
    </mesh>
  );
}

function HydrogenBond() {
  // Cylinder connects two atoms at [-0.45,0,0] and [0.45,0,0]
  return (
    <mesh position={[0, 0, 0]}>
      <cylinderGeometry args={[0.05, 0.05, 0.9, 32]} />
      <meshStandardMaterial color="#bababa" />
    </mesh>
  );
}

function Orbit({ radius = 0.37 }) {
  // Torus for visual electron orbit
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.015, 16, 100]} />
      <meshStandardMaterial color="#55cfff" opacity={0.55} transparent />
    </mesh>
  );
}

const HydrogenMolecule = () => (
  <group>
    <HydrogenAtom position={[-0.45, 0, 0]} />
    <HydrogenAtom position={[0.45, 0, 0]} color="#58e3a0" />
    <HydrogenBond />
    <Orbit radius={0.37} />
  </group>
);

const Scene = () => (
  <Canvas camera={{ position: [0, 0, 2], fov: 35 }}>
    <ambientLight intensity={0.6} />
    <directionalLight position={[2, 2, 2]} intensity={0.5} />
    <Suspense fallback={null}>
      <HydrogenMolecule />
    </Suspense>
  </Canvas>
);

const Hydrogen3DVisualization = () => (
  <div className="w-full flex flex-col items-center">
    <div
      className="rounded-lg border border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-gray-800 p-3 my-3"
      style={{ width: "100%", maxWidth: 320, height: 180 }}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <Scene />
      </div>
    </div>
    <p className="text-center text-xs text-gray-600 dark:text-gray-300 mt-2">
      A simple 3D model of H<sub>2</sub> molecule:<br />
      <span className="text-blue-800 dark:text-blue-200">light blue/green spheres</span> – hydrogen atoms,
      <span className="text-gray-500 px-1">gray bond</span> – covalent bond,
      <span className="text-cyan-600 dark:text-cyan-300 px-1">circle</span> – electron orbit.
    </p>
  </div>
);

export default Hydrogen3DVisualization;
