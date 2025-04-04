import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function LazyImage({ src, alt, className }){
    const imgRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      }, {
        rootMargin: '100px'
      });
  
      if (imgRef.current) {
        observer.observe(imgRef.current);
      }
  
      return () => {
        if (imgRef.current) {
          observer.disconnect();
        }
      };
    }, []);
  
    const handleLoad = () => {
      setIsLoaded(true);
    };
  
    return (
      <div 
        ref={imgRef} 
        className={`${className} lazy-load ${isLoaded ? 'loaded' : ''}`}
      >
        {isInView && (
          <Image 
            src={src} 
            alt={alt} 
            onLoad={handleLoad}
            style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
            fill
          />
        )}
      </div>
    );
  };