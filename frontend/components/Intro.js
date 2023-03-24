import Image from 'next/image';

export default function Intro() {
 
  return (
    <div className=' bg-[#C9E5EB]'>
        {/* Section 1 */}
        <div id="intro" className='w-full flex flex-col lg:flex-row relative'>
            <div className='flex flex-col items-center justify-center lg:items-start sm:w-[60%]'>
                <h2 className='text-gray-800 font-raleway font-extrabold text-3xl mt-4 sm:text-6xl  lg:w-[80%] 2xl:w-[90%] text-center lg:text-left lg:pl-24 pb-8'>JUMP INTO THE OCEAN</h2>
                <p className="text-gray-800 font-raleway font-normal text-2xl md:text-3xl my-4  text-center lg:text-start md:w-[90%] lg:w-[80%] xxl:w-[40%] items-center justify-center lg:justify-start lg:items-start lg:pl-24 px-8 lg:px-4 -mt-4">Oceans of Terra is an underwater adventure game full of magic and wonder. Defend the underwater World against the evil Mermaid Princess, Delila and you shall have life long glory!</p>
            </div>

            <div className='flex flex-row items-center justify-center mx-6 lg:mr-0 lg:p-0 mt-4 md:mb-16 lg:mt-14'>
                <Image
                    src="/town.jpg"
                    alt="Picture of the town in the game"
                    width={600}
                    height={600}
                    className="object-cover p-2 sm:p-0 sm:h-[750px] sm:w-[750px]"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
        </div>

        {/* Section 2 */}
        <div id="intro" className='w-full flex flex-col lg:flex-row relative'>
            {/* Need to reverse order of image on mobile so it is text > image > text > image on mobile and text > image > image > text on desktop*/}
            <div className='hidden sm:block flex-row items-center justify-center mx-6 md:mr-12 lg:mx-0 mt-4 mb-20 lg:mt-14'>
                <Image
                    src="/map.png"
                    alt="Picture of the map in the game"
                    width={600}
                    height={600}
                    className="object-cover p-2 sm:p-0 h-[750px] w-[750px]"
                    loading="lazy"
                    sizes="50vw"
                />
            </div>

            <div className='flex flex-col items-center justify-center shrink lg:items-end sm:w-[60%]'>
                <h2 className='text-gray-800 font-raleway font-extrabold text-3xl sm:text-6xl mt-4 mb-2 p-4 lg:w-[80%] 2xl:w-[90%] text-center lg:text-right lg:pr-24 pb-8'>A MAGICAL WORLD AWAITS</h2>
                <p className="text-gray-800 font-raleway font-normal text-2xl md:text-3xl text-center lg:text-end md:w-[90%] lg:w-[80%] xxl:w-[40%] items-center justify-center lg:justify-start lg:items-start lg:pr-24 px-8 lg:px-4 -mt-4">Oceans of Terra is an underwater adventure game full of magic and wonder. Defend the underwater World against the evil Princess Tytania and get eternal glory!</p>
            </div>  

            <div className='block sm:hidden flex-row items-center justify-center mx-6 md:mr-12 lg:mx-0 mt-4 mb-20 lg:mt-14'>
                <Image
                    src="/map.png"
                    alt="Picture of the map in the game"
                    width={600}
                    height={600}
                    className="object-cover p-2 sm:p-0"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw"
                />
            </div>  
        </div>
    </div>
  );
}
