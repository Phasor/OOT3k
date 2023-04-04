import Image from 'next/image';

export default function Intro() {
 
  return (
    <div className='min-h-screen w-full bg-bg-dg flex flex-col items-center justify-center'>
        <div id="intro" className='max-w-[90vw] sm:max-w-[90rem] flex flex-col sm:flex-row justify-between items-center p-2 mb-10'>
    
            <Image
                src="/evil-princess.jpg"
                alt="Picture of the town in the game"
                width={500}
                height={500}
                className="object-cover sm:p-0 sm:h-[500px] sm:w-[500px] mx-auto mt-10 sm:mt-0"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            <div className='h-full flex flex-col items-center justify-center sm:max-w-[50%]'>
                <h2 className='font-lekton text-3xl sm:text-5xl font-bold text-blue-800 text-center mt-10 sm:mt-0'>The Time is Now</h2>
                <p className="text-gray-800 p-2 font-lekton font-normal text-xl sm:text-2xl text-left sm:ml-8">Swarms of parasitic Qworvox, led by Empress Tytania, dispersed within the OoT, but it wasn’t long before the Narwhals, Mermaids, and Sea Turtles became alerted to the immense dangers they now faced.</p>
                <p className="text-gray-800 p-2 font-lekton font-normal text-xl sm:text-2xl text-left sm:ml-8">Empress Tytania would stop at nothing to ensure that what she desired was collected in full this time around.</p>
            </div>
        </div>
    </div>
  );
}
