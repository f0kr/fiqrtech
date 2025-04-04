"use client"

import { OrbitControls,  } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Discreption from "./sub/Discreption";
/* import styles from '../../../styles/order.module.css' */
import OurWorkBtn from './sub/OurWorkBtn.jsx';
import Wall from './Wall'
import Dice from './LoadingScreen'
import * as THREE from "three";


const Plane = dynamic(() => import('./Plane'), {
  ssr: false,
});

/* const Wall = dynamic(() => import('./Wall'), {
  ssr: false,
}); */

/* const Ordercomponent = dynamic(() => import('./sub/Ordercompnonent'),{
  ssr: false,
}) */

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

        

        <Canvas gl={{antialias: true}} 
        shadows
        >
          <Preload all />

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
      {/* <Ordercomponent className={styles.container2}/> */}
      <Discreption/>
    </div>
    )
}