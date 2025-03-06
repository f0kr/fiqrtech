import { useContext, useEffect, useState } from "react"
import gsap from "gsap"
import { LoadingContext } from "../contexts/LoadingContext"

export default function useCubeRotation(diceRef) {
  const { isLoading } = useContext(LoadingContext)
  const [allowRotate, setAllowRotate] = useState(true)
  const [startX, setStartX] = useState(null)

  function handleStart() {
    setAllowRotate(false)
  }

  function handleComplete() {
    setAllowRotate(true)
  }

  useEffect(() => {
    const handleMouseUp = (e) => {
      if (!isLoading && allowRotate && startX !== null) {
        const endX = e.clientX;
        const direction = endX < startX ? -1 : 1
        gsap.to(diceRef.current.rotation, {
          duration: 1,
          z: `+=${direction * Math.PI / 2}`,
          ease: "power2.out",
          onStart: handleStart,   
          onComplete: handleComplete  
        });

        setStartX(null)
      }
    };

    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
    
  }, [isLoading, allowRotate, startX, diceRef]);

  const handlePointerDown = (e) => {
    setStartX(e.clientX)
  };

  return { handlePointerDown };
}
