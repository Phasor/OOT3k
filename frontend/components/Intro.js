import Image from 'next/image';

export default function Intro() {
 
  return (
    <div className='min-h-screen w-full bg-bg-dg flex flex-col items-center justify-center'>
        <div id="intro" className='sm:max-w-[90rem] flex flex-col sm:flex-row justify-between items-center'>
    
            <Image
                src="/evil-princess.jpg"
                alt="Picture of the town in the game"
                width={500}
                height={500}
                className="object-cover p-2 sm:p-0 sm:h-[500px] sm:w-[500px] mx-auto"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            <div className='h-full flex flex-col items-center justify-center sm:max-w-[50%]'>
                <h2 className='text-blue-800 p-2 font-lekton font-bold text-3xl sm:text-5xl text-center'>THE TIME IS NOW</h2>
                <p className="text-gray-800 p-2 font-lekton font-normal text-2xl sm:text-3xl text-center">Swarms of parasitic Qworvox, led by Empress Tytania, dispersed within the OoT, but it wasn’t soon before long that the Narwhals, Mermaids, and Sea Turtles became alerted to the unfamiliar and immense dangers they now faced. Empress Tytania would stop at nothing to ensure what she truly desired was collected in full this time around.</p>
            </div>

        </div>
    </div>
  );
}
