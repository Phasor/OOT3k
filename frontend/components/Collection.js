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
         {/* <div className="h-12 w-12">
          <svg cache-id="323f48e34a6c4ac1a70f530e7fb633a2" id="eAMFUpbS1PV1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><g transform="matrix(1.67563 0 0 1.568499-651.114949-529.745335)"><path d="M568.13,0.012L392,176.142l783.864,783.989L392,1743.87L568.13,1920l960.118-959.87Z" transform="matrix(.25 0 0 0.25 344.443347 691.83011)" fill="#8932df" fill-rule="evenodd"/><path d="M568.13,0.012L392,176.142l783.864,783.989L392,1743.87L568.13,1920l960.118-959.87Z" transform="matrix(.25 0 0 0.25 597.288189 691.83011)" fill="#8932df" fill-opacity="0.8" fill-rule="evenodd"/><path d="M568.13,0.012L392,176.142l783.864,783.989L392,1743.87L568.13,1920l960.118-959.87Z" transform="matrix(.25 0 0 0.25 858.784595 691.83011)" fill="#8932df" fill-opacity="0.6" fill-rule="evenodd"/><path d="M568.13,0.012L392,176.142l783.864,783.989L392,1743.87L568.13,1920l960.118-959.87Z" transform="matrix(.25 0 0 0.25 1102.92522 691.83011)" fill="#8932df" fill-opacity="0.2" fill-rule="evenodd"/></g></svg>
         </div> */}
         <div className="bg-[#E5E7EB]">
         <svg className="triangles" width="60" height="60" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Triangles" clip-path="url(#clip0_0_1)">
            <rect width="120" height="120" fill="#E5E7EB"/>
            <g id="LightGroup">
            <path  id="Light1" opacity="0.7" d="M44.0642 55.5528C45.2312 56.3558 45.2166 58.0841 44.0361 58.8671L8.13744 82.6795C6.80162 83.5656 5.01836 82.5988 5.03197 80.9959L5.44161 32.7648C5.45523 31.1619 7.25465 30.2255 8.57523 31.1341L44.0642 55.5528Z" />
            <g id="DarkGroup">
            <path id="Dark1" opacity="0.7" d="M61.8562 55.9828C63.0233 56.7858 63.0086 58.5141 61.8281 59.2971L25.9295 83.1095C24.5936 83.9956 22.8104 83.0288 22.824 81.4258L23.2336 33.1947C23.2472 31.5918 25.0467 30.6554 26.3672 31.5641L61.8562 55.9828Z"/>
            <path  id="Dark2" opacity="0.7" d="M43.8562 55.9828C45.0233 56.7857 45.0086 58.514 43.8281 59.2971L7.92945 83.1095C6.59363 83.9956 4.81037 83.0288 4.82399 81.4258L5.23362 33.1947C5.24724 31.5918 7.04666 30.6554 8.36724 31.5641L43.8562 55.9828Z"/>
            </g>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_0_1">
            <rect width="120" height="120" fill="white"/>
            </clipPath>
            </defs>
        </svg>

         </div>
      </div>
    </section>
  )
}

