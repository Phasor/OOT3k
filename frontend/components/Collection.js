import React, { useRef, useEffect } from "react";
import Carousel from './Carousel'

export default function Collection() {

  return (
    <section id="collection" className='w-full h-screen bg-[#E5E7EB] flex flex-col justify-center items-center'>
       <p className='text-5xl font-lekton my-2 font-bold mt-10'>Playable collectible avatars living on the</p>
       <p className='text-5xl font-lecton my-2 font-bold'>Ethereum blockchain</p>
       <p className='text-2xl font-lecton mt-6 '>Our cute NFTs are contrived from over 140 unique, hand drawn traits with varying rarity.</p>
       <p className='text-2xl font-lecton '>Each one will be a fully playable character in the Oceans of Terra MMORPG.</p>
      <div className="w-full mt-20 p-10">
        <Carousel/>
      </div>
      <p className='text-2xl font-lecton my-2 font-semibold'>SWIPE FOR MORE TERRA</p>
    </section>
  )
}

