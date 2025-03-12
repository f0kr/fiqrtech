import LoadingCanvas from './LoadingCanvas'
import { LoadingProvider } from './contexts/LoadingContext'
import { AnimationLoadProvider } from './contexts/AnimationLoad'
import { FaceNumberProvider } from './contexts/FaceNumberContext'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import './index.css'

export default function App(){
  
  return (
  <FaceNumberProvider>
   <AnimationLoadProvider>
    <LoadingProvider>
      <Header/>
      <Outlet/>
      <Footer/>
    </LoadingProvider>
   </AnimationLoadProvider>
  </FaceNumberProvider>
    
  )
}

