import React from 'react'
import { motion } from "framer-motion";

export default function Test() {
  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
        <div className="example-container">
            <motion.div whileHover={{ scale: 1.00 }} whileTap={{ scale: 0.98 }}>
            <span style={{ color: "white" }}>Lore</span>
            </motion.div>
        </div>
    </div>
  )
}
