import React from 'react'
import Image from 'next/image'

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
   
        <div className='w-full flex justify-end'>
          <div className='p-8 my-[10rem] mr-20 '>
            <p className='font-lucky text-5xl'>SOMETHING COOL</p>
            <p className='font-raleway text-3xl'>SOMETHING COOL</p>
            <p className='font-leckton text-3xl'>SOMETHING COOL</p>
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
