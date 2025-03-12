import LoadingCanvas from './LoadingCanvas'
import { LoadingProvider } from './contexts/LoadingContext'
import { AnimationLoadProvider } from './contexts/AnimationLoad'
import { FaceNumberProvider } from './contexts/FaceNumberContext'
import { DragProvider } from './contexts/DragContext'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import './index.css'
import { useRef, useEffect } from 'react'

export default function App(){

  const cursorRef = useRef(null);

  useEffect(() => {
    function handleMouseMove(e) {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.pageX + 'px';
        cursorRef.current.style.top = e.pageY + 'px';
      }
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
 <DragProvider>
  <FaceNumberProvider>
   <AnimationLoadProvider>
    <LoadingProvider>
      {/* <div id="custom-cursor" ref={cursorRef}></div> */}
      <Header/>
      <Outlet/>
      <Footer/>
    </LoadingProvider>
   </AnimationLoadProvider>
  </FaceNumberProvider>
 </DragProvider>
    
  )
}

