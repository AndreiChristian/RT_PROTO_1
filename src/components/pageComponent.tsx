"use client"

import { EditingContext } from "@/contexts/editingContext"
import { useContext } from "react"

export default function PageComponent() {

  const context = useContext(EditingContext)

  if (!context) {
    throw new Error("Shit hit the fan")
  }

  const { count } = context

  return <h1>{count}</h1>

}
