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
            <>
              <div className="w-full h-[100vh] flex justify-center items-center relative bg-[url('/muacademymobiletest.jpg')] bg-center bg-cover bg-no-repeat" priority></div>
              <Image 
                src="/OOTLogo.png"
                alt="Oceans of Terra Logo"
                height={100}
                width={100}
                priority={true}
                className="absolute top-[150px] right-[20px] object object-cover h-[100px] w-[150px]"
              />
            </>
        ) : 
        ( 
          <> 
            <div className="w-full h-[110vh] flex justify-center items-center">
                <Image
                  src="/muCompressed2.jpg"
                  alt="Picture of the Mu Academy, underwater sunken ship scene."
                  height={1500}
                  width={1500}
                  quality={90}
                  priority={true}
                  placeholder="blur"
                  blurDataURL="/muLoading.jpeg"
                  className="object-cover h-full w-full"
                />
            </div>

            <Image 
              src="/OOTLogo.png"
              alt="Oceans of Terra Logo"
              height={350}
              width={350}
              priority={true}
              className="absolute top-[220px] right-[210px] object object-cover h-[350px] w-[450px]"
            />

          </>
        )
      }
    </>
  )
}


