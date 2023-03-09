import React, { useState } from 'react'
import Image from 'next/image'
import ConnectButtonCustom from '../components/ConnectButtonCustom'

export default function Mint() {
  const [mintAmount, setMintAmount] = useState(1)
  const [error, setError] = useState(null)

  const handleIncrement = () => {
    if(mintAmount >= 10) {
      setError("Like your style, but it's a max mint of 10 at a time :(")
      return
    } else {
      setMintAmount(prev => prev + 1)
    }
  }

  const handleDecrement = () => {
    setMintAmount(prev => prev - 1)
  }

  return (
    <div className='w-screen h-screen'>
      <div className='w-full flex justify-center items-center'>
        
        {/* Navbar */}
        <div className='mx-6 mt-2 w-full h-20 border-b border-gray-600 flex justify-between items-center'>
          
            <div className='flex flex-col mb-2 ml-8 justify-center items-center cursor-pointer hover:scale-105'>
              <p className='font-singleDay text-4xl'>Home</p> 
              <Image
                src="/waves.png"
                height={80}
                width={80}
                className="object-cover"
              />
            </div>
          
          {/* Connect Button */}
          <div className='relative mt-2 mr-8 h-12 cursor-pointer hover:scale-105'>
            {/* <Image
              src="/corner-scribble.png"
              height={200}
              width={200}
              className="absolute bottom-1"
            /> */}
            {/* <p className='font-singleDay text-3xl ml-4'>CONNECT</p> */}
            <ConnectButtonCustom/>
            
          </div>
        </div>
      </div>


      {/* Minting Section */}
        <div className='flex flex-col w-screen mt-[10rem] justify-center items-center'>
            <Image
                src="/narwhale-sketch.png"
                height={350}
                width={350}
                className="border-2 border-gray-500 rounded-sm"
            />
            <p className='font-singleDay text-2xl mt-10'>How many Terra's do you want to mint?</p>

            <div className='flex justify-between w-[20%] mt-10'>

              <div className='w-[50%] border-2 border-gray-800 p-2 mr-2 flex justify-center items-center space-x-8'>
                <div className="h-6 w-6 bg-gray-800 rounded-full flex justify-center  items-center cursor-pointer hover:scale-105">
                  <p onClick={handleDecrement} className="text-gray-100 text-2xl mb-2">-</p>
                </div>
                <p className='text-2xl font-singleDay'>{mintAmount}</p>
                <div className="h-6 w-6 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer hover:scale-105">
                  <p onClick={handleIncrement} className="text-gray-100 text-2xl mb-1">+</p>
                </div>


              </div>

              <div className='w-[50%] bg-gray-800 ml-2 hover:scale-105 cursor-pointer flex justify-center items-center'>
                <p className='font-singleDay text-2xl text-center text-white py-1 px-3'>MINT</p>
              </div>

            </div>
              {error && <p className='font-singleDay text-xl mt-2'>{error}</p>}
        </div>


    </div>
  )
}
