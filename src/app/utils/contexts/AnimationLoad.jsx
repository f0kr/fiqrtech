"use client"

import { useState} from "react";
import { createContext } from "react";

const AnimationLoadContext = createContext();

const AnimationLoadProvider = ({ children }) => {
    
    const [animationLoad, setAnimationLoad] = useState(true);
    return(
        <AnimationLoadContext.Provider value={{ animationLoad, setAnimationLoad }}>
            {children}
        </AnimationLoadContext.Provider>
    )
    
}

export { AnimationLoadContext, AnimationLoadProvider };
