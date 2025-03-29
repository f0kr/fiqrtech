"use client"

import { createContext, useState } from "react";

const FaceNumberContext = createContext();

const FaceNumberProvider = ({ children }) => {
  const [faceNumber, setFaceNumber] = useState(1)

  return (
    <FaceNumberContext.Provider value={{ faceNumber, setFaceNumber }}>
      {children}
    </FaceNumberContext.Provider>
  );
}

export { FaceNumberContext, FaceNumberProvider };