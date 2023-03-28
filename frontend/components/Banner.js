import Image from 'next/image'

export default function Banner() {
  return (
    <div id="intro" className='w-full h-screen bg-bg-blue flex flex-col justify-center items-center relative'>
        <p className='text-gray-800 font-poppins font-medium text-2xl md:text-4xl mb-2 md:mt-[20rem] p-4 text-center filter drop-shadow-md opacity-100 z-50'>A JOURNEY OF <span className='text-4xl md:text-6xl font-extrabold'>EPIC PROPORTION </span> BEGINS.</p>
        <p className='text-gray-800 font-poppins font-medium text-center text-2xl md:text-4xl mt-2 mb-[6rem] md:mb-[20rem] p-4 filter drop-shadow-md opacity-100 z-50'>OUR HEROS SET OUT TO SAVE THE KINGDOM FROM DESTRUCTION...</p>
        <Image
            src="/fireworks.png"
            alt="Picture of explosion"
            width={500}
            height={500}
            className="absolute opacity-10 top-[5rem] md:top-[4rem] sm:h-[800px] sm:w-[800px] "
            loading='lazy'
            fallback='/fireworks.png'
        />
        <div
          className='absolute  p-[8rem] bg-yellow-300 border rounded-full filter blur-xl'
        />
    </div>
  )
}

