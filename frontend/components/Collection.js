import React, { useRef, useEffect } from "react";
import Carousel from './Carousel'

export default function Collection() {

  return (
    <section id="collection" className='w-full h-screen bg-[#E5E7EB] flex flex-col justify-center items-center'>
       <p className='text-5xl font-lekton my-2 font-bold mt-10'>Playable collectible avatars living on the</p>
       <p className='text-5xl font-lecton my-2 font-bold'>Ethereum blockchain</p>
       <p className='text-2xl font-lecton mt-6 '>3,333 cute NFTs contrived from over 140 unique, hand drawn traits with varying rarity.</p>
       <p className='text-2xl font-lecton '>Each one will be a fully playable character in the Oceans of Terra MMORPG.</p>
      <div className="w-full mt-20 p-10 cursor-grab">
        <Carousel/>
      </div>
      <div className="flex space-x-4 justify-center items-center">
         <p className='text-2xl font-lecton my-2 font-semibold'>SWIPE FOR MORE TERRA'S</p>
         <div className="h-12 w-12">
          <svg cache-id="323f48e34a6c4ac1a70f530e7fb633a2" id="eAMFUpbS1PV1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><g transform="matrix(1.67563 0 0 1.568499-651.114949-529.745335)"><path d="M568.13,0.012L392,176.142l783.864,783.989L392,1743.87L568.13,1920l960.118-959.87Z" transform="matrix(.25 0 0 0.25 344.443347 691.83011)" fill="#8932df" fill-rule="evenodd"/><path d="M568.13,0.012L392,176.142l783.864,783.989L392,1743.87L568.13,1920l960.118-959.87Z" transform="matrix(.25 0 0 0.25 597.288189 691.83011)" fill="#8932df" fill-opacity="0.8" fill-rule="evenodd"/><path d="M568.13,0.012L392,176.142l783.864,783.989L392,1743.87L568.13,1920l960.118-959.87Z" transform="matrix(.25 0 0 0.25 858.784595 691.83011)" fill="#8932df" fill-opacity="0.6" fill-rule="evenodd"/><path d="M568.13,0.012L392,176.142l783.864,783.989L392,1743.87L568.13,1920l960.118-959.87Z" transform="matrix(.25 0 0 0.25 1102.92522 691.83011)" fill="#8932df" fill-opacity="0.2" fill-rule="evenodd"/></g></svg>
         </div>
      </div>
    </section>
  )
}

