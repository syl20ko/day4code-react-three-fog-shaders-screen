import React, { Suspense } from "react";
import { Canvas, extend } from "react-three-fiber";
import Floor from "./components/floor";
import Boy from "./Boy";
import { OrbitControls, Stars, Effects } from "@react-three/drei";
import Tv from "./tv";
import { BloomPass } from "three/examples/jsm/postprocessing/BloomPass";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass";
import "./App.css";

extend({ BloomPass, GlitchPass });

function App() {
  return (
    <Canvas>
      <directionalLight intensity={0.5} />
      <ambientLight intensity={1} />
      <Stars />
      <fog attach="fog" args={["black", 1, 7]} />
      <Effects>
        <bloomPass attachArray="passes" />
        <glitchPass attachArray="passes" />
      </Effects>
      <Suspense fallback={null}>
        <Tv position={[0, 3, -2]} />
        <Tv position={[4, 3, -2]} />
        <Tv position={[-4, 3, -2]} />
        <Boy />
      </Suspense>
      <Floor />
      <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
    </Canvas>
  );
}

export default App;
