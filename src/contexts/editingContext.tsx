"use client";

import React, { ReactNode, useState } from "react"

interface EditingContextState {
  title: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  subtitle: string,
  setSubtitle: React.Dispatch<React.SetStateAction<string>>,
}

export const EditingContext = React.createContext<EditingContextState | undefined>(undefined)

export interface ContextProviderProps {
  children: ReactNode
}

export const EditingContextProvider: React.FC<ContextProviderProps> = ({ children }) => {

  const [title, setTitle] = useState("Andrei")
  const [subtitle, setSubtitle] = useState("")

  return <EditingContext.Provider
    value={
      {
        title,
        setTitle,
        subtitle,
        setSubtitle
      }
    }
  >
    {children}
  </EditingContext.Provider>

}

