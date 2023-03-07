import React from 'react'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Collection() {
  return (
    <section id="collection" className='w-full bg-[#74acf7] p-20'>
      <div className='bg-[#3f8bee] relative'>

        <Image 
          src="/banner.jpeg"
          alt="Image of a turtle"
          width={1050}
          height={1050}
          className="w-full h-[600px] object-cover"
        />
   
        <div className='w-full flex justify-center'>
          <div className='p-8 min-h-[30rem] mx-10 '>
            <p className='font-lucky text-5xl'>GOT WHITELIST?</p>
            <p className='font-raleway text-3xl'>Rocket Time</p>
            <p className='font-leckton text-3xl mt-10 mb-3'>MINT HERE</p>
            <div className="border border-gray-100 rounded p-8">
              <ConnectButton />
              <p className='font-leckton text-lg my-4'>PRICE: 0.05 ETH PER NFT  </p>
              <label className='font-leckton text-lg'>NUMBER TO MINT: </label>
              <select className="border rounded p-2 my-2">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <div className='bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-md cursor-pointer shadow py-2 px-3 mt-4 text-white text-center text-2xl'>MINT</div>

            </div>
          </div>
        </div>

        <div className='h-[500px] w-[500px] bg-[#3f8bee] absolute bottom-40 left-[100px] z-20'>
          <div className='p-10'>
            <p className='font-lucky text-6xl'>GENESIS DROP</p>
            <p className='my-2 font-leckton text-4xl'>3000 PLAYABLE NFT CHARACTERS</p>
            <p className='my-2 font-raleway text-xl'>Each NFT is a playable character in the exciting underwater RRG, Oceans of Terra!</p>
            <p className='my-2 font-raleway text-xl'>Defend the Narwhals from the evil Princess Delila using skill and your wits.</p>
            <p className='my-2 font-raleway text-xl'>Defend the Narwhals from the evil Princess Delila using skill and your wits.</p>
            <p className='my-2 font-raleway text-xl'>Defend the Narwhals from the evil Princess Delila using skill and your wits.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
