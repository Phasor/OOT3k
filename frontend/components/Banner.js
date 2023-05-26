import Image from "next/image";
import { useEffect, useState } from "react";

function isMobile() {
  if (typeof window !== "undefined") {
    return window.innerWidth < 640;
  }
  return false;
}

export default function Banner() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setMobile(isMobile());
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      setMobile(isMobile());
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <>
      <div
        id="intro"
        className="w-full min-h-[30rem] bg-bg-dg flex flex-col justify-center items-center relative"
      >
        <div className="sm:max-w-[60rem] min-h-screen p-6 sm:p-2 flex flex-col justify-center items-center">
          <p className="text-gray-800 font-lekton text-3xl sm:text-5xl font-bold text-center">
            Earth’s beauty is truly unbelievable,
          </p>
          <p className="text-gray-800 font-lekton text-xl sm:text-2xl sm:font-normal text-center mt-4">
            and Aliens know this - they’ve all been watching for a long time,
            looking for the perfect place on Earth to search for its deepest
            wonders. Surely a civilization this splendid would hold these
            mysteries…
          </p>
        </div>

        <Image
          src="/fireworks.png"
          alt="Picture of explosion"
          width={500}
          height={500}
          className="absolute opacity-10 top-[8rem] md:top-[4rem] sm:h-[800px] sm:w-[800px] z-10"
          loading="lazy"
          fallback="/fireworks.png"
        />
      </div>
    </>
  );
}
