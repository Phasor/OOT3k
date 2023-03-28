import Image from 'next/image'
//

export default function Banner() {
  return (
    <div id="intro" className='w-full h-screen bg-main-bg flex flex-col justify-center items-center relative'>
        <p className='text-gray-800 font-poppins font-medium text-2xl md:text-4xl mb-2 md:mt-[20rem] p-4 text-center'>A JOURNEY OF <span className='text-4xl md:text-6xl font-extrabold'>EPIC PROPORTION </span> BEGINS.</p>
        <p className='text-gray-800 font-poppins font-medium text-center text-2xl md:text-4xl mt-2 mb-[6rem] md:mb-[20rem] p-4'>OUR HEROS SET OUT TO SAVE THE KINGDOM FROM DESTRUCTION...</p>
        <Image
            src="/fireworks.png"
            alt="Picture of explosion"
            width={500}
            height={500}
            className="absolute opacity-10 top-[5rem] md:top-[10%] sm:h-[800px] sm:w-[800px]"
            loading='lazy'
            fallback='/fireworks.png'
        />
    </div>
  )
}
