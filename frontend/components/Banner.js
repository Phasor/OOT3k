import Image from 'next/image'

export default function Banner() {
  return (
    <div id="intro" className='w-full h-screen bg-[#C9E5EB] flex flex-col justify-center items-center relative'>
        <p className='text-gray-800 font-poppins font-medium text-xl md:text-4xl mb-2 md:mt-[20rem] p-4 text-center'>A JOURNEY OF <span className='text-3xl md:text-6xl font-extrabold'>EPIC PROPORTION </span> BEGINS.</p>
        <p className='text-gray-800 font-poppins font-medium text-center text-xl md:text-4xl mt-2 mb-[6rem] md:mb-[20rem] p-4'>OUR HEROS SET OUT TO SAVE THE KINGDOM FROM DESTRUCTION...</p>
        <Image
            src="/fireworks.png"
            alt="Picture of explosion"
            width={800}
            height={800}
            className="absolute opacity-10 -top-20 md:top-[10%]"
        />
    </div>
  )
}
