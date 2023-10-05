"use client";

import { ContextProviderProps, EditingContextProvider } from "./editingContext";


export default function Provider({ children }: ContextProviderProps) {
  return <EditingContextProvider>
    {children}
  </EditingContextProvider>
}
