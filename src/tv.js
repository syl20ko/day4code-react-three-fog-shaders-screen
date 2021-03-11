import React, { useState } from "react";
import * as THREE from "three";
import url from "./udemy.mp4";

const Tv = ({ position }) => {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = url;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  return (
    <mesh rotation={[0, 0, 0]} position={position}>
      <planeGeometry args={[3.2, 1.9]} />
      <meshStandardMaterial  side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
    </mesh>
  );
};


export default Tv;