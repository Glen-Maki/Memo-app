import React, { useState, createContext, useContext } from "react";

const RotateContext = createContext<any | undefined>(undefined);

export const useRotate = () => useContext(RotateContext);

export function RotateProvider({ children }: any) {
  const [rotate, setRotate] = useState(false);
  return (
    <RotateContext.Provider value={{ rotate, setRotate }}>
      {children}
    </RotateContext.Provider>
  );
}
