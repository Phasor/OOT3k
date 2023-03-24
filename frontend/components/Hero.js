import Image from 'next/image'
import { useEffect, useState } from 'react';

function isMobile() {
  if (typeof window !== "undefined") {
    return window.innerWidth < 640;
  }
  return false;
}


export default function Hero() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setMobile(isMobile());
    }

    if (typeof window !== "undefined") {
      window.addEventListener('resize', handleResize);
      setMobile(isMobile());
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);


  return (
    <>
      { mobile ? 
        (
            <div className="w-full h-[110vh] flex justify-center items-center relative bg-[url('/muCompressed.png')] bg-top bg-cover bg-no-repeat"></div>
        ) : 
        
        ( 
          <div className="w-full h-[110vh] flex justify-center items-center md:mt-[70px]">
              <Image
                src="/Muacademy.png"
                alt="Picture of the Mu Academy, underwater sunken ship scene."
                height={1500}
                width={1500}
                quality={90}
          
                placeholder="blur"
                blurDataURL="/muLoading.jpeg"
                className="object-cover h-full w-full"
              />
            </div>
        )
      }
    </>
  )
}


