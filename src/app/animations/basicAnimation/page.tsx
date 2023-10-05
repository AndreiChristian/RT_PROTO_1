"use client"
import { motion } from "framer-motion"

import { useState } from "react"

export default function BasicAnimation() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [opacity, setOpacity] = useState(1)
  const [borderRadius, setBorderRadius] = useState(0)

  return (
    <>
      <div className="w-full flex items-center justify-evenly" >
        <motion.div
          className="bg-green-400 h-40 w-40"
          animate={{
            x: x,
            y: y,
            rotate: rotation,
            opacity,
            borderRadius
          }}
        />
        <div className=" flex flex-col items-center justify-between h-full gap-4 " >
          <h1>X</h1>
          <input type="range" min={-50} max={50} value={x} step={1} onChange={e => setX(e.target.valueAsNumber)} />
          <h1>Y</h1>
          <input type="range" min={-50} max={50} value={y} step={1} onChange={e => setY(e.target.valueAsNumber)} />
          <h1>Rotation</h1>
          <input type="range" min={-180} max={180} value={rotation} step={1} onChange={e => setRotation(parseFloat(e.target.value))} />
          <h1>Opacity</h1>
          <input type="range" min={0} max={1} value={opacity} step={0.1} onChange={e => setOpacity(e.target.valueAsNumber)} />
          <h1>borderRadius</h1>
          <input type="range" min={0} max={50} value={borderRadius} step={1} onChange={e => setBorderRadius(e.target.valueAsNumber)} />
        </div>
      </div>
      <motion.div
        animate={{ x: [0, 100, 0] }}
        className="bg-green-400 h-40 w-40"
      />
    </>
  )
}
