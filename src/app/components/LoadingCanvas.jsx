"use client"

import { OrbitControls,  } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { useEffect } from "react";
import Dice from "./LoadingScreen";
import Plane from "./Plane";
import Wall from "./Wall";
import Discreption from "./sub/Discreption";
import Orderbtn from './sub/Orderbtn';
import OurWorkBtn from './sub/OurWorkBtn.jsx';
import * as THREE from "three";

export default function LoadingCanvas(){

    function CameraSceneControl(){
    const {camera, scene} = useThree()
  
    useEffect(()=>{
      camera.position.z = 5
      camera.lookAt(0, 0, 0);
      scene.background = new THREE.Color('#222222')
      /* scene.fog = new THREE.Fog(0xFFFFFF, 0.1, 80) */
      scene.fog = new THREE.FogExp2(0xffffff, 0.03)

    },[camera, scene])
    return null
  }

    return(
        <div id='canvas-container'>

        

        <Canvas gl={{antialias: true}} /* dpr={window.devicePixelRatio} */
        shadows
        >
          <Preload all />
         {/*  <primitive object={new THREE.AxesHelper(3)} position={[0, 0.5, 0]} /> */}

        <CameraSceneControl />
        <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.1} />
        <directionalLight position={[1, 10, 10]} intensity={1.7} distance={50}
        />
        <directionalLight position={[1, -10, 10]} intensity={0.8} distance={50}
        />
        <directionalLight position={[0, 30, 25]} intensity={0.1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        />
        <Wall/>
        <Dice/>
        <Plane />
      </Canvas>
      <OurWorkBtn/>
      <Orderbtn/>
      <Discreption/>
    </div>
    )
}