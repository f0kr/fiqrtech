import { useContext, useEffect, useState } from "react";
import gsap from "gsap";
import { LoadingContext } from "../contexts/LoadingContext";

export default function useCubeRotation(diceRef) {
  const { isLoading } = useContext(LoadingContext);
  const [setIsDragging] = useState(false);
  const [allowRotate, setAllowRotate] = useState(true); 

  function handleStart() {
    setAllowRotate(false);
  }
  function handleComplete() {
    setAllowRotate(true);
  }

  useEffect(() => {
    const handleMouseUp = () => {
      if (!isLoading && allowRotate) {
        gsap.to(diceRef.current.rotation, {
          duration: 1,
          y: "+=1.5707963267948966", 
          ease: "power2.out",
          onStart: handleStart,   
          onComplete: handleComplete  
        });
      }
    };

    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
    
  }, [isLoading, allowRotate, diceRef]);

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  return { handlePointerDown };
}
