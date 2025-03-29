"use client"

import { useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import { LoadingContext } from "../utils/contexts/LoadingContext";
import { AnimationLoadContext } from "../utils/contexts/AnimationLoad";

export default function Plane() {
  const planeRef = useRef();
  const { isLoading } = useContext(LoadingContext);
  const {animationLoad} = useContext(AnimationLoadContext)

  useEffect(() => {
    if (planeRef.current) {
      planeRef.current.position.set(0, -5, 0);
      planeRef.current.scale.set(0, 0, 0);
    }

    const tl = gsap.timeline();
    if (!isLoading && animationLoad) {
      
      tl.to(planeRef.current.scale, { duration: 1, x: 7, y: 5, z: 5, ease: "linear" }, 0.3);
    }else if(!animationLoad){
      tl.to(planeRef.current.scale, { duration: 0, x: 7, y: 5, z: 5, ease: "linear" }, 0);
    }
  }, [isLoading, animationLoad]);

  return (
    <mesh ref={planeRef} receiveShadow rotation={[-Math.PI / 2, 0, 0]} >
      <circleGeometry args={[3, 32, 0, Math.PI]} />  
      <meshStandardMaterial side={2} color="#417290" roughness={5}/>
    </mesh>
  );
}
