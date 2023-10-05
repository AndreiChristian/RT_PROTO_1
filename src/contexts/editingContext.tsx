"use client";

import React, { ReactNode, useState } from "react"

interface EditingContextState {
  count?: number,
  setCount?: React.Dispatch<React.SetStateAction<number>>,
  luckyNumber: number
}

export const EditingContext = React.createContext<EditingContextState | undefined>(undefined)

export interface ContextProviderProps {
  children: ReactNode
}

export const EditingContextProvider: React.FC<ContextProviderProps> = ({ children }) => {

  const [count, setCount] = useState(0)

  return <EditingContext.Provider
    value={
      {
        luckyNumber: 4
      }
    }
  >
    {children}
  </EditingContext.Provider>

}

