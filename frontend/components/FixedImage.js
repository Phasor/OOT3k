import React from 'react'

// export default function FixedImage() {
//   return (
//     <div className='h-screen w-screen relative'>
//       <div class="absolute w-[90vw] sm:w-[50vw] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-10 p-2 sm:p-10 border border-transparent rounded-3xl">
//         <p className='font-lekton text-3xl sm:text-5xl font-bold text-white text-center'>WATCHING, WAITING, AND PLOTTING</p> 
//         <p className='font-lekton text-xl sm:text-2xl text-white text-center mt-2' style={{'line-height': 35}}>Swarms of parasitic Qworvox, led by Empress Tytania, dispersed within the OoT, but it wasn’t soon before long that the Narwhals, Mermaids, and Sea Turtles became alerted to the unfamiliar and immense dangers they now faced. Empress Tytania would stop at nothing to ensure what she truly desired was collected in full this time around.</p> 
//       </div>
//       <div className="bg-[url('/OOT-many-moons-compressed.jpeg')] h-full bg-center bg-cover bg-fixed"></div>
//     </div>

//   )
// }

export default function FixedImage() {
  return (
    <div className="fixed-bg h-screen w-screen relative">
      <div className="absolute w-[90vw] sm:w-[50vw] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-10 p-2 sm:p-10 border border-transparent rounded-3xl">
        <p className="font-lekton text-3xl sm:text-5xl font-bold text-white text-center">
          WATCHING, WAITING, AND PLOTTING
        </p>
        <p
          className="font-lekton text-xl sm:text-2xl text-white text-center mt-2"
          style={{ lineHeight: 35 }}
        >
          Swarms of parasitic Qworvox, led by Empress Tytania, dispersed within the OoT, but it wasn't soon before long that the Narwhals, Mermaids, and Sea Turtles became alerted to the unfamiliar and immense dangers they now faced. Empress Tytania would stop at nothing to ensure what she truly desired was collected in full this time around.
        </p>
      </div>
      <div className="fixed-bg::before"></div>
    </div>
  );
}


