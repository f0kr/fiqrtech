import LoadingCanvas from './LoadingCanvas'
import { LoadingProvider } from './contexts/LoadingContext'
import { AnimationLoadProvider } from './contexts/AnimationLoad'
import Header from './Header'
import Footer from './Footer'
import OurWorkPage from './OurWorkPage'
import { Outlet } from 'react-router-dom'
import './index.css'

export default function App(){
  
  return (
   <AnimationLoadProvider>
    <LoadingProvider>
      <Header/>
      <Outlet/>
      <Footer/>
    </LoadingProvider>
   </AnimationLoadProvider>
    
  )
}

