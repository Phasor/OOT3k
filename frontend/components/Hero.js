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
  const [key, setKey] = useState(0); // Add a state variable for the key

  useEffect(() => {
    function handleResize() {
      setMobile(isMobile());
      setKey(key => key + 1); // Update the key whenever the screen size changes
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
              {/* <div className="w-full h-[100vh] flex justify-center items-center relative bg-[url('/muacademymobiletest.jpg')] bg-center bg-cover bg-no-repeat" priority></div>
              <Image 
                src="/OOTLogo.png"
                alt="Oceans of Terra Logo"
                height={100}
                width={100}
                priority={true}
                className="absolute top-[100px] right-[20px] object object-cover h-[100px] w-[150px]"
              /> */}

              <div className="w-full h-[110vh] flex justify-center items-center relative" priority>
                <video autoPlay muted playsinline preload="auto"
                  className='object-cover h-full w-full'
                  key={key} // Pass the key as a prop to the video element
                >
                  <source src={'/MUacademy-mobile-noswaying.mp4'} type="video/mp4" />
                </video>
                <Image 
                  src="/OOTLogo.png"
                  alt="Oceans of Terra Logo"
                  height={100}
                  width={100}
                  priority={true}
                  className="absolute top-[100px] right-[10px] object object-cover h-[100px] w-[150px]"
                />

              </div>


            </>
        ) : 
        ( 
          <> 
            <div className="w-full h-[110vh] flex justify-center items-center">
                {/* <Image
                  src="/muCompressed2.jpg"
                  alt="Picture of the Mu Academy, underwater sunken ship scene."
                  height={1500}
                  width={1500}
                  quality={90}
                  priority={true}
                  placeholder="blur"
                  blurDataURL="/muLoading.jpeg"
                  className="object-cover h-full w-full"
                /> */}
                <video autoPlay muted loop
                  className='object-cover h-full w-full'
                  key={key} // Pass the key as a prop to the video element
                >
                  <source src={'/MUacademy-desktop-noswaying.mp4'} type="video/mp4" />
                </video>
            </div>

            <Image 
              src="/OOTLogo.png"
              alt="Oceans of Terra Logo"
              height={350}
              width={350}
              priority={true}
              className="absolute 
                top-[10vh] sm:top-[14vh] xl:top-[20vh] 
                right-[10vw] md:right-[5vw] 2xl:right-[10vw] 
                object object-cover 
                sm:h-[150px] sm:w-[250px] lg:h-[250px] lg:w-[350px] xl:h-[350px] xl:w-[450px]"
            />

          </>
        )
      }
    </>
  )
}


