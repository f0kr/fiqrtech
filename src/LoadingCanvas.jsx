import { OrbitControls,  } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import Dice from "./LoadingScreen";
import Plane from "./Plane";
import '../src/styles/canvas.css'
import * as THREE from "three";

export default function LoadingCanvas(){

    function CameraSceneControl(){
    const {camera, scene} = useThree()
  
    useEffect(()=>{
      camera.position.z = 5
      camera.lookAt(0, 0, 0);
      scene.background = new THREE.Color('#222222')
    },[camera, scene])
    return null
  }

    return(
        <div id='canvas-container'>
        <Canvas gl={{antialias: true}} dpr={window.devicePixelRatio}
        shadows
        >
         {/*  <primitive object={new THREE.AxesHelper(3)} position={[0, 0.5, 0]} /> */}

        <CameraSceneControl />
        <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.1} />
        <directionalLight position={[1, 10, 50]} intensity={1.7} distance={50}
        />
        <directionalLight position={[0, 30, 25]} intensity={0.1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        />
        <Dice/>
        <Plane />
      </Canvas>
    </div>
    )
}