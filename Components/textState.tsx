import React, { useState, createContext, useContext } from "react";

const MemoContext = createContext<any | undefined>(undefined);

export const useText = () => useContext(MemoContext);

export function MemoProvider({ children }: any) {
  const [text, onChangeText] = useState("");
  return (
    <MemoContext.Provider value={{ text, onChangeText }}>
      {children}
    </MemoContext.Provider>
  );
}
