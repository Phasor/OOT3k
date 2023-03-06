// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import styles from "../../styles/Navbar.module.css";
// import Link from "next/link";
// import { useState } from "react";
// import Image from "next/image";

// export default function Navbar() {
// 	const [showNavBar, setShowNavBar] = useState(false);

// 	return (
// 		<nav className="absolute top-0 w-full z-50">
// 			<div className="flex justify-between items-center p-4 mx-auto lg:max-w-7xl">
// 				<a href="/">
// 					<Image height={100} width={100} className="p-2" src="/logo.jpg"/>
// 				</a>
// 				<div className="hidden md:block">
// 					<ConnectButton/>
// 				</div>
// 				<div className="sm:hidden">
// 					<button 
// 						className="p-2 text-gray-900 rounded-md outline-none focus:border-gray-400"
// 						onClick={() => setShowNavBar(!showNavBar)}>
// 							{showNavBar ? (
// 								<Image src="/close.svg" height={30} width={30} alt="close"/>
// 							) : (
// 								<Image src="/burger.svg" height={30} width={30} alt="hamburger"/>
// 							)}
// 					</button>
// 				</div>
				
// 				{/* Menu */}
// 				<div
//                  	className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//                 	showNavBar ? 'p-12 md:p-0 block' : 'hidden'
//               	}`}>
// 					<ul className="h-screen md:h-auto items-center justify-center md:flex"  >
// 						<div className="">
// 							<li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
// 							<Link href="#intro" onClick={() => setShowNavBar(!showNavBar)}>
// 								Intro
// 							</Link>
// 							</li>
// 							<li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
// 							<Link href="#lore" onClick={() => setShowNavBar(!showNavBar)}>
// 								Lore
// 							</Link>
// 							</li>
// 							<li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
// 							<Link href="#collection" onClick={() => setShowNavBar(!showNavBar)}>
// 								3K Collection
// 							</Link>
// 							</li>
// 							<li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
// 							<Link href="#team" onClick={() => setShowNavBar(!showNavBar)}>
// 								Team
// 							</Link>
// 							</li>
// 						</div>
// 					</ul>
// 				</div>

// 			</div>

// 		</nav>
// 	);
// }

import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div>
      <nav className="w-full bg-[#74acf7] absolute top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">

          {/* Icons */}
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
					    < Image height={100} width={100} className="p-2" src="/logo.jpg"/>
 				      </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  {showMobileMenu ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/burger.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
            
          {/* Menu Links */}
          <div>
            <div
              className={`pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                showMobileMenu ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto md:flex items-center justify-center md:space-x-6 ">
                <li className="text-xl text-white py-5 md:px-6 md:py-1 text-center border-b-2 md:border md:rounded  hover:bg-[#4b1fcd]  border-[#4b1fcd] md:border-blue-800  md:hover:bg-blue-400">
                  <Link href="#intro" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    INTRO
                  </Link>
                </li>
                <li className="text-xl text-white py-5 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#4b1fcd]   border-[#4b1fcd] md:hover:bg-transparent md:hover:-translate-y-1.5">
                  <Link href="#lore" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    LORE
                  </Link>
                </li>
                <li className="text-xl text-white py-5 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#4b1fcd]  border-[#4b1fcd] md:hover:bg-transparent md:hover:-translate-y-1.5">
                  <Link href="#collection" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    COLLECTION
                  </Link>
                </li>
                <li className="text-xl text-white py-5 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#4b1fcd]  border-[#4b1fcd] md:hover:bg-transparent md:hover:-translate-y-1.5">
                  <Link href="#team" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    TEAM
                  </Link>
                </li>
                <li className="">
                  <Link href="https://twitter.com/OceansOfTerra" target="_blank" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <svg class="text-blue-600 fill-current h-12 w-12" viewBox="0 0 60 60">
                      <path d="M41.05 18.44a6.6 6.6 0 00-4.84-2.29c-3.66-.06-6.62 3.04-6.62 6.91 0 .55.05 1.09.17 1.6a18.68 18.68 0 01-13.66-7.55 7.33 7.33 0 00-.9 3.55 7.3 7.3 0 002.95 5.92 6.34 6.34 0 01-3-.92v.1c0 3.42 2.28 6.3 5.31 6.97a6.24 6.24 0 01-3 .1 6.74 6.74 0 006.2 4.93 12.8 12.8 0 01-9.81 2.9A17.89 17.89 0 0024 43.85c12.19 0 18.86-10.61 18.86-19.81l-.02-.9c1.3-.97 2.42-2.18 3.3-3.56-1.18.54-2.46.9-3.8 1.04a6.8 6.8 0 002.91-3.8c-1.28.77-2.7 1.33-4.2 1.62z"/>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
