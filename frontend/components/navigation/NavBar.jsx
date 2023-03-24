import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import ScrollLink from "../ScrollLink";

function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const menu = document.getElementById('menu');
  
    function slideIn() {
      menu.classList.remove('hidden');
      menu.classList.add('slide-in');
    }
  
    function slideOut() {
      menu.classList.add('slide-out');
      
      setTimeout(() => {
        menu.classList.add('hidden');
        menu.classList.remove('slide-out');
      }, 300);
    }
  
    if (showMobileMenu) {
      // check if screen width is less than 768px (tailwind's sm breakpoint)
      if (window.innerWidth < 768) {
        slideIn();
        menu.classList.remove('hidden');
        menu.classList.add('block');
        menu.classList.add('md:p-0');
      }
    } else {
      // remove slide-in and slide-out classes on larger screens
      if (window.innerWidth >= 768) {
        menu.classList.remove('slide-in');
        menu.classList.remove('slide-out');
      } else {
        slideOut();
      }
    }
  }, [showMobileMenu]);
  


  function handleMenuClick() {
    setShowMobileMenu(prev => !prev);
  }
//#000447
  return (
    <div className="w-full">
      <nav className="w-full bg-[#BDF0FA] opacity-90 sm:fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">

          {/* Icons */}
          <div>
            <div className="flex items-center justify-between py-3 md:py-1 md:block">
              {/* LOGO */}
              <Link href="/">
					    < Image height={60} width={60} className="p-1" src="/logocompressed.png"/>
 				      </Link>
              
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button id="toggleButton"
                  className="p-2 text-gray-200 rounded-md outline-none focus:border-gray-200 focus:border"
                  onClick={handleMenuClick}
                >
                  {showMobileMenu ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" className="text-white"/>
                  ) : (
                    <Image
                      src="/burger.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none text-white"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
            
          {/* Menu Links */}
          <div>
            <div id="menu"
              className="pb-3 md:pb-0 md:mt-0 hidden md:block"
            >
              <ul className="h-screen md:h-auto md:flex items-center justify-center">
                {/* <li className="text-2xl text-[#C9E5EB] font-raleway font-regular py-5 md:px-6 md:py-1 text-center md:hover:-translate-y-1.5 transition-transform duration-200  hover:bg-[#4b1fcd] md:hover:bg-transparent  border-blue-400">
                  <ScrollLink href="#intro" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    Intro
                  </ScrollLink>
                </li> */}
                <li className="text-2xl text-nav-link font-raleway font-regular py-5 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#4b1fcd] border-blue-400 md:hover:bg-transparent md:hover:-translate-y-1.5">
                  <ScrollLink href="#lore" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    Lore
                  </ScrollLink>
                </li>
                <li className="text-2xl text-nav-link font-raleway font-regular py-5 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#4b1fcd] border-blue-400 md:hover:bg-transparent md:hover:-translate-y-1.5">
                  <ScrollLink href="#collection" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    Collection
                  </ScrollLink>
                </li>
                <li className="text-2xl text-nav-link font-raleway font-semibold py-5 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#4b1fcd] border-blue-400 md:hover:bg-transparent md:hover:-translate-y-1.5">
                  <Link className="border-2 border-nav-link rounded-full px-3 " href="/mint" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    Mint
                  </Link>
                </li>
                <li className="text-2xl text-nav-link font-raleway font-regular py-5 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#4b1fcd] border-blue-400 md:hover:bg-transparent md:hover:-translate-y-1.5">
                  <ScrollLink href="#FAQ" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    FAQ
                  </ScrollLink>
                </li>
                <li className="text-2xl text-nav-link font-raleway font-regular py-5 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#4b1fcd] border-blue-400  md:hover:bg-transparent md:hover:-translate-y-1.5">
                  <ScrollLink href="#team" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    Team
                  </ScrollLink>
                </li>
                <li className="py-3 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#4b1fcd] border-blue-400 md:hover:bg-transparent md:hover:-translate-y-1.5">
                  <Link className="flex justify-center items-center" href="https://twitter.com/OceansOfTerra" target="_blank" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <svg class="text-nav-link fill-current h-12 w-12" viewBox="0 0 60 60">
                      <path d="M41.05 18.44a6.6 6.6 0 00-4.84-2.29c-3.66-.06-6.62 3.04-6.62 6.91 0 .55.05 1.09.17 1.6a18.68 18.68 0 01-13.66-7.55 7.33 7.33 0 00-.9 3.55 7.3 7.3 0 002.95 5.92 6.34 6.34 0 01-3-.92v.1c0 3.42 2.28 6.3 5.31 6.97a6.24 6.24 0 01-3 .1 6.74 6.74 0 006.2 4.93 12.8 12.8 0 01-9.81 2.9A17.89 17.89 0 0024 43.85c12.19 0 18.86-10.61 18.86-19.81l-.02-.9c1.3-.97 2.42-2.18 3.3-3.56-1.18.54-2.46.9-3.8 1.04a6.8 6.8 0 002.91-3.8c-1.28.77-2.7 1.33-4.2 1.62z"/>
                    </svg>
                  </Link>
                </li>
                <li className="py-5 text-center md:px-6 border-b-2 md:border-b-0  hover:bg-[#4b1fcd] border-blue-400 md:hover:bg-transparent md:hover:-translate-y-1.5">
                  <Link className="flex justify-center items-center text-center" href="https://discord.gg/CBZNXrRVjH" target="_blank" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <svg class="text-nav-link fill-current h-8 w-8" viewBox="0 0 90 90">
                      <path d="M 78.527 20.998 c -10.973 -8.229 -21.412 -8.001 -21.412 -8.001 l -1.067 1.219 c 12.954 3.962 18.973 9.677 18.973 9.677 c -7.925 -4.343 -15.697 -6.477 -22.936 -7.315 c -5.486 -0.61 -10.744 -0.457 -15.392 0.152 c -0.457 0 -0.838 0.076 -1.295 0.152 c -2.667 0.229 -9.144 1.219 -17.297 4.801 c -2.819 1.295 -4.496 2.21 -4.496 2.21 s 6.325 -6.02 20.04 -9.982 l -0.762 -0.914 c 0 0 -10.439 -0.229 -21.412 8.001 c 0 0 -10.973 19.888 -10.973 44.424 c 0 0 6.401 11.049 23.241 11.582 c 0 0 2.819 -3.429 5.105 -6.324 c -9.677 -2.896 -13.335 -8.991 -13.335 -8.991 s 0.762 0.533 2.134 1.295 c 0.076 0.076 0.152 0.152 0.305 0.229 c 0.229 0.152 0.457 0.229 0.686 0.381 c 1.905 1.067 3.81 1.905 5.563 2.591 c 3.124 1.219 6.858 2.438 11.201 3.276 c 5.715 1.067 12.42 1.448 19.735 0.076 c 3.581 -0.61 7.239 -1.676 11.049 -3.277 c 2.667 -0.991 5.639 -2.438 8.763 -4.496 c 0 0 -3.81 6.248 -13.792 9.068 c 2.286 2.896 5.029 6.172 5.029 6.172 C 83.023 76.47 89.5 65.422 89.5 65.422 C 89.5 40.886 78.527 20.998 78.527 20.998 z M 30.751 58.335 c -4.267 0 -7.772 -3.81 -7.772 -8.458 s 3.429 -8.458 7.772 -8.458 s 7.848 3.81 7.772 8.458 C 38.523 54.525 35.094 58.335 30.751 58.335 z M 58.563 58.335 c -4.267 0 -7.772 -3.81 -7.772 -8.458 s 3.429 -8.458 7.772 -8.458 s 7.772 3.81 7.772 8.458 S 62.907 58.335 58.563 58.335 z"/>
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




