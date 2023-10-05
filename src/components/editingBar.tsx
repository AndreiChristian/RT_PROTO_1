"use client"

import { EditingContext } from "@/contexts/editingContext"
import { useContext } from "react"

export default function EditingBar() {

  const context = useContext(EditingContext)

  if (!context) {
    throw new Error("Shit hit the fan")
  }

  const { setCount } = context!

  return <section className="fixed top-4 right-4 z-10 p-10 rounded-sm  shadow-white shadow-md " >
    <h1>Bar</h1>
    <button onClick={() => { setCount(c => c - 1) }} >Increment</button>
    <br />
    <button onClick={() => { setCount(c => c + 1) }} >Delete</button>
  </section>
}
