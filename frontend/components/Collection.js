import React, { useRef, useEffect } from "react";
import Carousel from "./Carousel";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
// change for redploying vercel env variables

export default function Collection() {
  return (
    <>
      <svg
        className="bg-gray-900 text-gray-100"
        class="section-divider"
        fill="rgb(243 244 246)"
        viewBox="0 0 1920 60"
        aria-hidden="true"
      >
        <rect width="100%" height="100%" style={{ fill: "rgb(17 24 39)" }} />
        <path
          data-theme="softSecondary"
          d="M0,80.75H1920V45.833H1742.083a80.491,80.491,0,0,1,12.863-1.55c5.2-.26,17.24-.3,24.153-.24,26.69.222,54.377,1.094,79.341.96,19.287-.1,37.1-.372,53.573-.788L1920,44V34.078l-6.614.216-9.221.256c-6.252.147-12.7.249-19.265.32-13.132.14-26.739.15-40.206.125-26.935-.052-53.313-.247-74.22.168-14.367-1.4-32.582-.756-48.293-1.92-10.145.509-20.876.936-24.149,2.4-16.09-.266-37.611,2.532-50.019.479V34.684c-10.959-2.291-33.371-1.869-48.292-3.84-15.861-.512-26.214,1.347-39.671,1.92-7.032.178-5.941-.773-13.8-.481-40.751-.071-41.131,5.477-62.087,8.16-4.569-5.691-47.085-5.126-77.622-5.04-2.333-4.154-22.643-5.808-50.015-6.479-4.677-2.069-17.763-2.969-22.423-5.04-4.7-.175-3.474.477-6.9.479-11.485-2.964-40.092-2.449-63.813-3.36-23.312.6-29.4,3.589-55.195,3.841-8.3-3.783-56.5-4.561-84.513-3.361-.316-1.857-5.682-3.862-20.7-4.8-2.193-.137-6.78.122-10.352,0-16.331-.564-22.974-3.145-39.671-1.441-22.812-1.938-73.831-3.919-98.311-.719-4.315-2.2-15.369-3.462-20.7-5.521-23.122-.714-41.26-2.815-65.54-2.64-13.5,1-29.918,1.6-39.671,3.12.27,1.317-1.305,2.38-6.9,2.88-35.562-1.333-83.117-2.545-93.139,2.88-14.338-.314-8.341,2.2-22.423,1.92-5.17-.16-2.615-1.4-6.9-1.68-36.327-1.894-80.653-1.762-100.041,2.161-12.433-1.631-21.648-3.708-36.221-5.04-13.359.1-36.33-.325-48.293-1.2-32.483.6-42.463,4.331-53.471,7.92-25.227-.147-43.752,2.274-58.641,4.321-11.966-1.189-27.56-.426-39.67-1.441-19.514,1.284-40.772,2.328-53.468,4.561C301.584,31.04,294,33.888,283.7,37.8c-15.047-.774-19.865-3.5-36.221-4.321-10.453-.522-37.12-1.01-48.3-.959-10.184.046-17.188,1.062-27.595.719-18.244,2.022-31.516,4.736-46.57,7.2-3.726,2.091-9.8,3.854-17.5,5.39H4.061c-.734-1.281-1.512-2.592-2.344-3.949-.546-.09-1.13-.175-1.717-.26Z"
        />
      </svg>

      <section
        id="collection"
        className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center"
      >
        <div className="h-full">
          <div className="mx-auto p-1 max-w-[90vw] sm:max-w-[75rem]">
            <p className="p-2 text-3xl sm:text-5xl text-blue-800 font-lekton font-bold text-center mt-10 sm:mt-[10rem] ">
              Your Hero Awaits
            </p>
            <p className="p-2 text-xl sm:text-2xl text-gray-800 font-lekton font-normal mt-3 text-center">
              Our heroes Nariyo, Merma, and Turtaloo must now stop the Empress
              in her tracks. An epic battle has surely begun. Join our Heroes as
              they defend the Oceans of Terra.
            </p>
            <p className="p-2 text-xl sm:text-2xl text-gray-800 font-lekton font-normal mt-3 text-center">
              Turtle, Mermaid or Narwhal, which hero will you choose?
            </p>
          </div>

          <div className="w-full flex justify-center items-center">
            <Image
              src="/out-of-stock.png"
              width={200}
              height={200}
              alt="logo"
              loading="lazy"
              className="mb-20 mt-10 h-[150px] w-[150px] sm:w-[200px] sm:h-[200px]"
            />
          </div>

          {/* <div className="w-full max-w-[90vw] sm:max-w-6xl flex flex-col justify-center items-center mt-5 sm:mt-10 p-1 sm:p-0 ">
              <Carousel/>
              <Carousel reversed={true} />
            </div> */}

          {/* <Link href="/check">
              <motion.button whileTap={{ scale: 0.95 }} className="flex justify-center items-center cursor-pointer mx-auto sm:mt-0 sm:mb-10">
                <span className="bg-[#62810D] text-white border-4 border-green-700 shadow-lg rounded-full py-2 px-4 font-lekton text-3xl font-bold my-10 hover:border-4 hover:border-gray-800 hover:bg-white hover:text-gray-800">Check Whitelist</span>
              </motion.button>
            </Link> */}
        </div>
      </section>
    </>
  );
}
