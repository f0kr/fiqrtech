import { OrbitControls,  } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import Dice from "./LoadingScreen";
import '../src/styles/canvas.css'
import * as THREE from "three";

export default function LoadingCanvas(){

    // controling the camera and the scene
    function CameraSceneControl(){
    const {camera, scene} = useThree()
  
    useEffect(()=>{
      camera.position.z = 5
      camera.lookAt(0, 0, 0);
      scene.background = new THREE.Color('#e8e7e2')
  
    },[camera, scene])
    return null
  }

    return(
        <div id='canvas-container'>
      <Canvas>
        <CameraSceneControl />
        <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.1} />
        <directionalLight position={[1, 10, 50]} intensity={1.7} distance={50}/>
        <Dice/>
      </Canvas>
    </div>
    )
}