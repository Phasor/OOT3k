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
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold ">LOGO</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
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
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#intro" onClick={() => setNavbar(!navbar)}>
                    Intro
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#lore" onClick={() => setNavbar(!navbar)}>
                    Lore
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#collection" onClick={() => setNavbar(!navbar)}>
                    3k Collection
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#team" onClick={() => setNavbar(!navbar)}>
                    Team
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
