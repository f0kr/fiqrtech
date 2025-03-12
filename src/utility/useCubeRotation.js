import { useContext, useEffect, useState } from "react"
import gsap from "gsap"
import { LoadingContext } from "../contexts/LoadingContext"
import { FaceNumberContext } from "../contexts/FaceNumberContext"

export default function useCubeRotation(diceRef) {
  const { isLoading } = useContext(LoadingContext)
  const [allowRotate, setAllowRotate] = useState(true)
  const [startX, setStartX] = useState(null)
  const { faceNumber, setFaceNumber } = useContext(FaceNumberContext)

  useEffect(()=> {
    console.log(faceNumber)
  },[faceNumber])

  useEffect(() => {

  
    function handleStart() {
      setAllowRotate(false)
    }
  
    function handleComplete() {
      setAllowRotate(true)  
    }

    const handleMouseUp = (e) => {
      if (!isLoading && allowRotate && startX !== null) {
        const endX = e.clientX;
        const direction = endX < startX ? -1 : 1
        handleFaceNumberChange(direction)
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
    
    function handleFaceNumberChange(direction) {
      if(faceNumber < 4 && direction === 1){
        setFaceNumber(faceNumber + 1)
      }else if(faceNumber === 4 && direction === 1){
        setFaceNumber(1)
      }else if(faceNumber > 1 && direction === -1){
        setFaceNumber(faceNumber - 1)
      }else if(faceNumber === 1 && direction === -1){
        setFaceNumber(4)
      }
    }

    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
    
  }, [isLoading, allowRotate, startX, diceRef, faceNumber]);

  const handlePointerDown = (e) => {
    setStartX(e.clientX)
  };

  return { handlePointerDown };
}
