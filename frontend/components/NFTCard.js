import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NFTCard({ url }) {
  return (
    <div className="h-[200px] w-[200px] sm:h-[500px] sm:w-[500px] flex items-center justify-center">
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: [0.5, 1.8, 1] }}
        transition={{
          duration: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Image
          height={500}
          width={500}
          alt="Picture of a swirling vortex or water"
          src={url}
          priority
          className="object-cover border-2 border-gray-600 rounded shadow-2xl h-[200px] w-[200px] sm:h-[500px] sm:w-[500px]"
        />
      </motion.div>
    </div>
  );
}
