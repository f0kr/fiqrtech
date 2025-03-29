"use client"

import { useEffect, useState} from "react";
import { createContext } from "react";

const DragContext = createContext();

const DragProvider = ({ children }) => {
    
    const [draged, setDraged] = useState(false);
    
        useEffect(()=>{
            if(draged){
                setTimeout(()=>{
                    setDraged(false)
                },5000)
            }
        },[draged])


    return(
        <DragContext.Provider value={{ draged, setDraged }}>
            {children}
        </DragContext.Provider>
    )
    
}

export { DragContext, DragProvider };
