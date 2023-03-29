import React, { useRef, useEffect } from "react";
import Carousel from './Carousel'

export default function Collection() {


  return (
    <section id="collection" className='w-full min-h-screen  bg-bg-dg flex flex-col items-center justify-center text-center'>
       <div>
          <div className="mx-auto p-1 max-w-[70rem]">
            <p className='p-2 text-3xl sm:text-5xl text-blue-800 font-lekton font-bold sm:mt-20 text-center'>THERE IS NO EVIL WITHOUT GOOD</p>
            <p className='p-2 text-2xl sm:text-3xl text-gray-800 font-lekton font-normal mt-3 text-center'>Our heroes Nariyo, Merma, and Turtaloo must now stop Empress Tytania and her team of Qworvox for the greater good of their glorious, mythical, and truly unfounded home. Empress Tytania must now lead her team into battle to reveal the Universe’s best-kept secrets. The great scavenge is on… But must it be stopped? Who’s side are YOU on?</p>
          </div>
          
          <div className="w-full sm:max-w-6xl flex justify-center items-center sm:mt-20 p-1 sm:p-0 ">
            <Carousel/>
          </div>
       </div>
    </section>
  )
}

