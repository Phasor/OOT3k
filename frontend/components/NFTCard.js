import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function NFTCard({ url }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div 
        style={{ width: '100%', perspective: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >

        <motion.div
        style={{
            width: '285px',
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '25px',
            boxShadow: '0 2px 7px 1px rgba(31, 31, 31, 0.2)',
            backgroundColor: '#1d1f21',
            color: '#fff',
            position: 'relative',
            cursor: 'grab',
            transform: 'translate3d(0, 0, 0)',
            transformStyle: 'preserve-3d',
            transformOrigin: '50% 50%',
            rotateX: rotateX,
            rotateY: rotateY,
            x: x,
            y: y,
            z: 100,
        }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        >
        <img className='p-4 object-cover' src={url} height={350} width={350} />
        </motion.div>
    </div>
  );
}
