import Image from 'next/image';

export default function Intro() {
 
  return (
    <div className='bg-bg-blue w-full flex flex-col items-center justify-center border-2 border-yellow-500'>
        {/* Section 1 */}
        <div id="intro" className='sm:max-w-[90rem] flex flex-col sm:flex-row relative'>
            <div className='flex flex-col items-center justify-center lg:items-start sm:w-[60%]'>
                <h2 className='text-gray-50 px-2 font-raleway font-extrabold text-3xl mt-4 sm:text-6xl lg:w-[80%] 2xl:w-[90%] text-center lg:text-left pb-8'>OCEANS OF TERRA</h2>
                <p className="text-gray-800 px-4 my-4 text-center font-raleway font-normal text-xl md:text-3xl lg:text-start md:w-[90%] lg:w-[80%] xxl:w-[40%] items-center justify-center lg:justify-start lg:items-start -mt-4">Oceans of Terra is an underwater adventure game full of magic and wonder. Defend the underwater World against the evil Mermaid Princess, Delila and you shall have life long glory!</p>
            </div>

            <div className='flex flex-row items-center justify-center mx-6 lg:mr-0 lg:p-0 mt-4 md:mb-16 lg:mt-14'>
                <Image
                    src="/evil-princess.jpg"
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
        <div id="intro" className='sm:max-w-[90rem] flex flex-col sm:flex-row relative'>
            {/* Need to reverse order of image on mobile so it is text > image > text > image on mobile and text > image > image > text on desktop*/}
            
            {/* Hide this on mobile */}
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
                <h2 className='text-gray-50 p-2 font-raleway font-extrabold text-3xl sm:text-6xl mt-4 mb-2 lg:w-[80%] 2xl:w-[90%] text-center lg:text-right pb-8'>A MAGICAL WORLD AWAITS</h2>
                <p className="text-gray-800 px-4 my-4 text-center font-raleway font-normal text-xl md:text-3xl lg:text-end md:w-[90%] lg:w-[80%] xxl:w-[40%] items-center justify-center lg:justify-start lg:items-start -mt-4">Oceans of Terra is an underwater adventure game full of magic and wonder. Defend the underwater World against the evil Princess Tytania and get eternal glory!</p>
            </div>  

            {/* Show this on mobile */}
            <div className='block sm:hidden flex-row items-center justify-center mx-6 md:mr-12 lg:mx-0 mt-4 mb-10 sm:mb-20 lg:mt-14'>
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
