"use client"

import { EditingContext } from "@/contexts/editingContext"
import { title } from "process"
import { useContext } from "react"

export default function EditingBar() {

  const context = useContext(EditingContext)

  if (!context) {
    throw new Error("Shit hit the fan")
  }

  const { title, subtitle, setTitle, setSubtitle } = context

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value)
  }


  function handleSubTtileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSubtitle(e.target.value)
  }

  return <section className="fixed top-4 right-4 z-10 p-10 rounded-sm  shadow-white shadow-md " >
    <h1>Bar</h1>
    <br />
    <label htmlFor="Title">
      <div>Title</div>
      <input type="text" value={title} onChange={handleTitleChange}
        className="bg-gray-800"
      />
    </label>
    <label htmlFor="Title">
      <div>Subtitle</div>
      <input type="text" value={subtitle} onChange={handleSubTtileChange}
        className="bg-gray-800"
      />
    </label>
  </section>
}
