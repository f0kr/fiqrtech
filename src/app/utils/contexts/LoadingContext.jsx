"use client"

import { useState} from "react";
import { createContext } from "react";

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
    
    const [isLoading, setIsLoading] = useState(true);
       
    return(
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    )
    
}

export { LoadingContext, LoadingProvider };
