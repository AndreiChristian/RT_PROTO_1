"use client";

import { motion } from "framer-motion"

export default function Page() {
  return (
    <div className="w-full h-full flex items-center justify-center" >
      <motion.div
        className="bg-purple-400 h-60 w-60 "
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 4,
          ease: "easeOut",
          repeat: Infinity,
          times: [0, 0.4, 1, 1.6, 2],
          repeatType: "reverse",
          repeatDelay: 1
        }}
      />
    </div>
  )
}
