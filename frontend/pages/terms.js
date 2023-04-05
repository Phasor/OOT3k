import React from 'react'
import Footer from '../components/Footer'
import Image from 'next/image'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function terms() {
  return (
    <div className='flex flex-col w-screen min-h-screen bg-gray-100 '>

        {/* Navbar */}
        <div className='min-h-[70px] bg-white opacity-95 w-full flex justify-between items-center' >
            <Link href="/"><Image height={80} width={80} className="px-4 ml-5" src="/logocompressed.png" alt='logo'/></Link>

                <div id="menu" className="pb-0 mt-0 mr-12">
                    <ul className="flex items-center justify-center space-x-10">

                        <li className="py-5">
                        <Link className="" href="/">
                            <div className="animated-button ">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex justify-center items-center cursor-pointer">
                                <p className="text-white bg-transparent font-raleway text-lg font-bold px-3">Home</p>
                            </motion.div>
                            </div>
                        </Link>
                        </li>
                        <li className="py-5">
                        <Link className="" href="/mint">
                            <div className="mint-button ">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex justify-center items-center cursor-pointer">
                                <p className="text-white bg-transparent font-raleway text-lg font-bold px-3">MINT</p>
                            </motion.div>
                            </div>
                        </Link>
                        </li>

                    </ul>
                </div>
        </div>

        {/* License */}
        <div className='flex flex-row justify-center items-center'>
            <div>
                <div className='p-4 sm:p-[2rem] my-[5rem] sm:my-[10rem] sm:max-w-[70vw] bg-gray-100 flex flex-col justify-center items-center'>
                    <p className='text-center w-full font-lekton text-3xl font-bold my-4 text-gray-800'>Terms and Conditions</p>
                    <p className='text-left w-full font-lekton text-xl text-gray-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque itaque quis iure dolorem consequuntur nisi quos, magni facilis repellat provident rerum, non asperiores quisquam facere voluptates similique repudiandae dicta soluta?</p>
                    <p className='text-left w-full font-lekton text-xl text-gray-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque itaque quis iure dolorem consequuntur nisi quos, magni facilis repellat provident rerum, non asperiores quisquam facere voluptates similique repudiandae dicta soluta?</p>
                    <p className='text-left w-full font-lekton text-xl text-gray-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque itaque quis iure dolorem consequuntur nisi quos, magni facilis repellat provident rerum, non asperiores quisquam facere voluptates similique repudiandae dicta soluta?</p>
                    <p className='text-left w-full font-lekton text-xl text-gray-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque itaque quis iure dolorem consequuntur nisi quos, magni facilis repellat provident rerum, non asperiores quisquam facere voluptates similique repudiandae dicta soluta?</p>
                    <p className='text-left w-full font-lekton text-xl text-gray-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque itaque quis iure dolorem consequuntur nisi quos, magni facilis repellat provident rerum, non asperiores quisquam facere voluptates similique repudiandae dicta soluta?</p>
                    <p className='text-left w-full font-lekton text-xl text-gray-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque itaque quis iure dolorem consequuntur nisi quos, magni facilis repellat provident rerum, non asperiores quisquam facere voluptates similique repudiandae dicta soluta?</p>
                    <p className='text-left w-full font-lekton text-xl text-gray-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque itaque quis iure dolorem consequuntur nisi quos, magni facilis repellat provident rerum, non asperiores quisquam facere voluptates similique repudiandae dicta soluta?</p>
                    <p className='text-left w-full font-lekton text-xl text-gray-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque itaque quis iure dolorem consequuntur nisi quos, magni facilis repellat provident rerum, non asperiores quisquam facere voluptates similique repudiandae dicta soluta?</p>
                </div>
                <Footer/>
            </div>
        </div>

    </div>
  )
}
