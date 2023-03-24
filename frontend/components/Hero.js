import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
        <div className="w-full h-[110vh] flex justify-center items-center  mt-[70px]">
          <Image
            src="/Muacademy.png"
            alt="Picture of the Mu Academy, underwater sunken ship scene."
            height={1500}
            width={1500}
            quality={90}
            className="object-cover h-full w-full"
          />
        </div>
  )
}

// export default function Hero() {
//   return (
//         <div className="w-full h-[110vh] flex justify-center items-center relative bg-[url('/Muacademy.png')] bg-top bg-cover bg-no-repeat mt-[70px]">
//         </div>
//   )
// }