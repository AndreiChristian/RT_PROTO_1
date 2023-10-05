"use client"

import { EditingContext } from "@/contexts/editingContext"
import { useContext } from "react"

export default function PageComponent({ pageId }: { pageId: string }) {

  const context = useContext(EditingContext)

  if (!context) {
    throw new Error("Shit hit the fan")
  }

  const { title, subtitle } = context

  return (
    <>
      <h1 className="text-2xl" >Title</h1>
      <h1 className="text-2xl" >{title}</h1>
      <h2>Subtitle</h2>
      <h2>{subtitle}</h2>
    </>
  )

}

