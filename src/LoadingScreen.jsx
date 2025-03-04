import { useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import { LoadingContext } from "./contexts/LoadingContext";
import { AnimationLoadContext } from "./contexts/AnimationLoad";
import useCubeRotation from "./utility/useCubeRotation";

export default function Dice() {
  const diceRef = useRef();
  const {setIsLoading} = useContext(LoadingContext)
  const {setAnimationLoad} = useContext(AnimationLoadContext)
  const {handlePointDown} = useCubeRotation(diceRef)
  
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
        x: Math.PI * 6 ,
        y: Math.PI * 6 ,
        duration: 6,
        ease: "power3.out",
      }, 0
    )

    
    tl.to(diceRef.current.position, {
      y: "+=0.3",
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      onStart:()=> setIsLoading(false)
    })

    

    return () => {
      setAnimationLoad(false)
      tl.kill();
    };

  },[setIsLoading, setAnimationLoad]);


  return (
    
    <mesh onPointerDown={handlePointDown} ref={diceRef} rotateY={true}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial side={2}  color="white"/>
    </mesh>
  );
}
