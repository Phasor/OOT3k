import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import ScrollLink from "../ScrollLink";
import { motion } from "framer-motion";

function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const menu = document.getElementById("menu");

    function slideIn() {
      menu.classList.remove("hidden");
      menu.classList.add("slide-in");
    }

    function slideOut() {
      menu.classList.add("slide-out");

      setTimeout(() => {
        menu.classList.add("hidden");
        menu.classList.remove("slide-out");
      }, 300);
    }

    if (showMobileMenu) {
      // check if screen width is less than 768px (tailwind's sm breakpoint)
      if (window.innerWidth < 768) {
        slideIn();
        menu.classList.remove("hidden");
        menu.classList.add("block");
        menu.classList.add("md:p-0");
      }
    } else {
      // remove slide-in and slide-out classes on larger screens
      if (window.innerWidth >= 768) {
        menu.classList.remove("slide-in");
        menu.classList.remove("slide-out");
      } else {
        slideOut();
      }
    }
  }, [showMobileMenu]);

  function handleMenuClick() {
    // add white background to mobile menu
    if (typeof window !== "undefined") {
      const body = document.querySelector("body");
      body.classList.add("scroll-up"); // adds bg-white
      setShowMobileMenu((prev) => !prev);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const body = document.querySelector("body");
      let lastScroll = 0;

      const nav = document.getElementById("nav");

      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        // console.log(`currentScroll: ${currentScroll}`)

        if (currentScroll <= 0) {
          // at the top of the screen
          body.classList.remove("scroll-up");
        }

        if (
          currentScroll > lastScroll &&
          !body.classList.contains("scroll-down")
        ) {
          // scrolling down
          body.classList.remove("scroll-up");
          body.classList.add("scroll-down");
        }

        if (
          currentScroll < lastScroll &&
          body.classList.contains("scroll-down")
        ) {
          // scrolling up
          body.classList.remove("scroll-down");
          body.classList.add("scroll-up");
          setShowMobileMenu(false);
        }

        lastScroll = currentScroll;
      });
    }
  }, [initialLoad]);

  return (
    <div id="nav" className="stickynav w-full z-50">
      <nav
        className={`w-full fixed top-0 left-0 right-0 z-50 bg-transparent sm:bg-transparent nav-transition`}
      >
        <div className="w-full sm:flex sm:justify-between px-4 mx-auto sm:items-center sm:px-8">
          {/* Icons */}
          <div>
            <div className="flex items-center justify-between py-3 md:py-1 md:block">
              {/* LOGO */}
              <ScrollLink href="#nav">
                <Image
                  height={60}
                  width={60}
                  className="p-1"
                  src="/logocompressed.png"
                />
              </ScrollLink>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  id="toggleButton"
                  className="p-2 text-gray-200 rounded-md outline-none focus:border-gray-200 focus:border"
                  onClick={handleMenuClick}
                >
                  {showMobileMenu ? (
                    <Image
                      src="/close.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="text-white"
                    />
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
            <div id="menu" className="pb-3 md:pb-0 md:mt-0 hidden md:block">
              <ul className="h-screen md:h-auto md:flex items-center justify-center sm:space-x-10">
                <li className="border-b-2 md:border-b-0 hover:bg-mobile-clicked sm:hover:bg-transparent border-blue-400  py-5">
                  <div onClick={() => setShowMobileMenu(false)}>
                    <ScrollLink href="#intro">
                      <div className="sm:animated-button">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className=" flex justify-center items-center cursor-pointer"
                        >
                          <span className="text-gray-900 sm:text-nav-link bg-transparent font-raleway text-lg font-bold">
                            Lore
                          </span>
                        </motion.div>
                      </div>
                    </ScrollLink>
                  </div>
                </li>

                <li className="border-b-2 md:border-b-0 hover:bg-mobile-clicked sm:hover:bg-transparent border-blue-400 py-5">
                  <div onClick={() => setShowMobileMenu(false)}>
                    <ScrollLink href="#collection">
                      <div className="sm:animated-button">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex justify-center items-center cursor-pointer"
                        >
                          <p className="text-gray-900 sm:text-nav-link bg-transparent font-raleway text-lg font-bold px-3">
                            Collection
                          </p>
                        </motion.div>
                      </div>
                    </ScrollLink>
                  </div>
                </li>

                <li className="border-b-2 md:border-b-0 hover:bg-mobile-clicked sm:hover:bg-transparent border-blue-400 py-5">
                  <Link
                    className=""
                    href="/check"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <div className="sm:check-wallet-button">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex justify-center items-center cursor-pointer"
                      >
                        <p className="text-gray-900 sm:text-nav-link bg-transparent font-raleway text-lg font-bold px-3">
                          Check Wallet
                        </p>
                      </motion.div>
                    </div>
                  </Link>
                </li>

                <li className="border-b-2 md:border-b-0 hover:bg-mobile-clicked sm:hover:bg-transparent border-blue-400 py-5">
                  <Link
                    className=""
                    href="/mint"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <div className="sm:mint-button ">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex justify-center items-center cursor-pointer"
                      >
                        <p className="text-gray-900 sm:text-nav-link bg-transparent font-raleway text-lg font-bold px-3">
                          MINT
                        </p>
                      </motion.div>
                    </div>
                  </Link>
                </li>

                <li className="border-b-2 md:border-b-0 hover:bg-mobile-clicked sm:hover:bg-transparent border-blue-400 py-5">
                  <div onClick={() => setShowMobileMenu(false)}>
                    <ScrollLink href="#FAQ">
                      <div className="sm:animated-button">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex justify-center items-center cursor-pointer"
                        >
                          <p className="text-gray-900 sm:text-nav-link bg-transparent font-raleway text-lg font-bold px-3">
                            FAQ
                          </p>
                        </motion.div>
                      </div>
                    </ScrollLink>
                  </div>
                </li>

                <li className="border-b-2 md:border-b-0 hover:bg-mobile-clicked sm:hover:bg-transparent border-blue-400 py-5">
                  <div onClick={() => setShowMobileMenu(false)}>
                    <ScrollLink href="#team">
                      <div className="sm:animated-button">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex justify-center items-center cursor-pointer"
                        >
                          <p className="text-gray-900 sm:text-nav-link bg-transparent font-raleway text-lg font-bold px-3">
                            Team
                          </p>
                        </motion.div>
                      </div>
                    </ScrollLink>
                  </div>
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
