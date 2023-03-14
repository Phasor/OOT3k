import Image from 'next/image';

export default function Intro() {
 
  return (
    <div className='mt-[6rem] md:mt-0'>
        {/* Section 1 */}
        <div id="intro" className='w-full bg-[#E5E7EB] flex flex-col lg:flex-row relative'>
            <div className='flex flex-col items-center justify-center shrink lg:items-start'>
                <h2 className='text-gray-800 font-leckon text-3xl mt-4 sm:text-6xl font-semibold lg:w-[80%] 2xl:w-[90%] text-center lg:text-left lg:pl-24 pb-8'>JUMP INTO THE OCEAN</h2>
                <p className="text-2xl md:text-3xl my-4 text-gray-800 font-medium text-center lg:text-start md:w-[90%] lg:w-[80%] xxl:w-[40%] items-center justify-center lg:justify-start lg:items-start lg:pl-24 px-8 lg:px-4 -mt-4">Oceans of Terra is an underwater adventure game full of magic and wonder. Defend the underwater World against the evil Mermaid Princess, Delila and you shall have life long glory!</p>
            </div>

            <div className='flex flex-row items-center justify-center mx-6 md:mr-12 lg:mx-0 mt-4 md:mb-20 lg:mt-14'>
                <Image
                    src="/town.png"
                    alt="Picture of the author"
                    width={2000}
                    height={2000}
                    className="object-cover p-2 sm:p-0"
                />
            </div>
        </div>

        {/* Section 2 */}
        <div id="intro" className='w-full bg-[#E5E7EB] flex flex-col lg:flex-row relative'>
            <div className='hidden sm:block flex-row items-center justify-center mx-6 md:mr-12 lg:mx-0 mt-4 mb-20 lg:mt-14'>
                <Image
                    src="/map.png"
                    alt="Picture of the author"
                    width={2000}
                    height={2000}
                />
            </div>
            <div className='flex flex-col items-center justify-center shrink lg:items-end'>
                <h2 className='text-gray-800 font-leckon text-3xl sm:text-6xl mt-4 mb-2 p-4 font-semibold lg:w-[80%] 2xl:w-[90%] text-center lg:text-right lg:pr-24 pb-8'>A MAGICAL WORLD AWAITS</h2>
                <p className="text-2xl md:text-3xl text-gray-800 font-medium text-center lg:text-end md:w-[90%] lg:w-[80%] xxl:w-[40%] items-center justify-center lg:justify-start lg:items-start lg:pr-24 px-8 lg:px-4 -mt-4">Oceans of Terra is an underwater adventure game full of magic and wonder. Defend the underwater World against the evil Mermaid Princess, Delila and get eternal glory!</p>
            </div>  

            <div className='block md:hidden flex-row items-center justify-center mx-6 md:mr-12 lg:mx-0 mt-6 mb-20 lg:mt-14'>
                <Image
                    src="/map.png"
                    alt="Picture of the author"
                    width={2000}
                    height={2000}
                    className="object-cover p-2"
                />
            </div>   

        </div>

        <div id="intro" className='w-full bg-[#E5E7EB] flex flex-col justify-center items-center relative'>
            <p className='text-gray-800 font-leckon text-xl md:text-4xl mb-2 md:mt-[20rem] p-4 font-semibold text-center'>A JOURNEY OF <span className='text-3xl md:text-6xl font-bold'>EPIC PROPORTION </span> BEGINS.</p>
            <p className='text-gray-800 font-leckon text-center text-xl md:text-4xl mt-2 mb-[6rem] md:mb-[20rem] p-4 font-semibold'>OUR HEROS SET OUT TO SAVE THE KINGDOM FROM DESTRUCTION...</p>
            <Image
                src="/fireworks.png"
                alt="Picture of explosion"
                width={600}
                height={600}
                className="absolute opacity-10 -top-20 md:top-[10%]"
            />
    
        </div>
    </div>
  );
}
