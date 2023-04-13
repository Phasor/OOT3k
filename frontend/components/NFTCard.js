import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NFTCard({ url }) {

  return (
    <div 
        style={{ width: '100%', perspective: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: [0.5, 1.8, 1] }}
          transition={{
            duration: 1.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          {/* <img className='object-cover border-2 border-gray-600 rounded shadow-2xl' src={url} height={500} width={500} /> */}
          <Image 
            height={500} 
            width={500}
            alt="Picture of a swirling vortex or water"
            src={url} 
            priority
            className='object-cover border-2 border-gray-600 rounded shadow-2xl sm:h-[500px] sm:w-[500px]'
          />
        </motion.div>

    </div>
  );
}
