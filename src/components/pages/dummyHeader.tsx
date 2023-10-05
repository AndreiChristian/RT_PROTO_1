"use client"

import { useEffect } from "react"

export default function Hello() {

  useEffect(() => {
    console.warn("I am mounted bitch")
  })

  return <h1>Hello from a shithead component</h1>

}
