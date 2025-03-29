"use client"

import { useEffect, useRef, useContext } from "react";
import { RoundedBox } from "@react-three/drei";
import gsap from "gsap";
import { LoadingContext } from "../utils/contexts/LoadingContext";
import { AnimationLoadContext } from "../utils/contexts/AnimationLoad";
import useCubeRotation from "../utils/customHooks/useCubeRotation";

export default function Dice() {
  const diceRef = useRef();
  const {setIsLoading} = useContext(LoadingContext)
  const {setAnimationLoad, animationLoad} = useContext(AnimationLoadContext)
  const {handlePointerDown} = useCubeRotation(diceRef)

  /* const rotationSpeed = useRef(0.2); // Start slow */

  // texture control
/*   const textureLoader = new THREE.TextureLoader()
  const albedo = textureLoader.load('/cloudy-veined-quartz-light-bl/cloudy-veined-quartz-light_albedo.png')
  const ao = textureLoader.load('/cloudy-veined-quartz-light-bl/cloudy-veined-quartz-light_ao.png')
  const metalic = textureLoader.load('/cloudy-veined-quartz-light-bl/cloudy-veined-quartz-light_metallic.png')
  const normal = textureLoader.load('/cloudy-veined-quartz-light-bl/cloudy-veined-quartz-light_normal-ogl.png')
  const roughness = textureLoader.load('/cloudy-veined-quartz-light-bl/cloudy-veined-quartz-light_roughness.png')
  albedo.colorSpace = THREE.SRGBColorSpace */
  
  useEffect(() => {
    const tl = gsap.timeline()
    
    if(animationLoad){
      tl.fromTo(
        diceRef.current.position,
        { x: 1, y: -5, z: -5 },
        {
          x: 0,
          y: 0,
          z: 0,
          duration: 2,
          ease: "power3.out",
        },
        0
      ).to(
        diceRef.current.scale, {
          x: 7,
          y: 7,
          z: 7,
          duration: 2,
        },
        0
      )
      
      tl.fromTo(
        diceRef.current.rotation,
        { x: 1, y: -5},
        {
          x: -(Math.PI * 6)  ,
          y: Math.PI * 6 ,
          duration: 6,
          ease: "power3.out",
        }, 0
      )
      
      tl.fromTo(
        diceRef.current.rotation,
        {x: -(Math.PI * 6)  ,
        y: Math.PI * 6 ,
        z: 0,     
      },
        {
          x: -((Math.PI * 6) + 1.3)  ,
          y: Math.PI * 6 ,
          z: + 1.29,
          duration: 1,
          ease: "power3.out",
        }
      )

    }else{
      tl.to(diceRef.current.position,{
       x: 0,
       y: 0,
       z: 0,
       duration: 0
      })
      tl.to(diceRef.current.scale,{
        x:7,
        y:7,
        z:7,
        duration:0
      })
      tl.fromTo(
        diceRef.current.rotation,
        { x: 1, y: -5},
        {
          x: -((Math.PI * 6) + 1.3)  ,
          y: Math.PI * 6 ,
          z: + 1.29,
          duration: 0,
          ease: "power3.out",
        }
      )
    }

    
    tl.to(diceRef.current.position, {
      y: "+=0.3",
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      onStart:()=> setIsLoading(false)
    })

/*     tl.to(diceRef.current.rotation, {
      z: "-=0.4",
      duration: 0.,
      yoyo: true,
      repeat: -1,
      ease: "linear",
    }) */

    

    return () => {
      setAnimationLoad(false)
      tl.kill();
    };

  },[animationLoad]);

  /* const materials = [
    <meshStandardMaterial attach="material-0" color="orange" />,  // Right (+X)
    <meshStandardMaterial attach="material-1" color="red" />,   // Left (-X)
    <meshStandardMaterial attach="material-2" color="green" />, // Top (+Y)
    <meshStandardMaterial attach="material-3" color="yellow" />, // Bottom (-Y)
    <meshStandardMaterial attach="material-4" color="blue" />, // Front (+Z) ✅ This is the face we changed!
    <meshStandardMaterial attach="material-5" color="purple" />  // Back (-Z)
  ]; */
  return (
      <RoundedBox
      onPointerDown={handlePointerDown} ref={diceRef}
      args={[0.3, 0.3, 0.3]}  // Width, Height, Depth
      radius={0.01}  // Corner radius
      smoothness={3} // Higher = smoother edges
      castShadow
    >
      <meshStandardMaterial side={2} color="#ee771a" />
    </RoundedBox>
  )
  
}
