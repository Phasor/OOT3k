import React from "react";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
// superfluous comment to enable env variable update for vercel

export default function License() {
  return (
    <div className="flex flex-col w-screen min-h-screen bg-gray-100 ">
      {/* Navbar */}
      <div className="min-h-[70px] bg-white opacity-95 w-full flex justify-between items-center">
        <Link href="/">
          <Image
            height={80}
            width={80}
            className="px-4 ml-5"
            src="/logocompressed.png"
            alt="logo"
          />
        </Link>

        <div id="menu" className="pb-0 mt-0 mr-12">
          <ul className="flex items-center justify-center space-x-10">
            <li className="py-5 hidden sm:block">
              <Link className="" href="/">
                <div className="animated-button ">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex justify-center items-center cursor-pointer"
                  >
                    <p className="text-white bg-transparent font-raleway text-lg font-bold px-3">
                      Home
                    </p>
                  </motion.div>
                </div>
              </Link>
            </li>
            <li className="py-5">
              <Link className="" href="/check">
                <div className="mint-button ">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex justify-center items-center cursor-pointer"
                  >
                    <p className="text-white bg-transparent font-raleway text-lg font-bold px-3">
                      Check Wallet
                    </p>
                  </motion.div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* License */}
      <div className="flex flex-row justify-center items-center">
        <div>
          <div className="p-4 sm:p-[2rem] my-[5rem] sm:my-[6rem] sm:max-w-[70vw] bg-gray-100 text-gray-800 flex flex-col justify-center ">
            <div className="flex justify-center w-full">
              <h1 className="font-lekton text-2xl sm:text-3xl mb-5 text-center w-full">
                Nautical Narwhal Game Studios Inc. - License Agreement
              </h1>
            </div>

            <p className="font-lekton text-termsbody text-left">
              THIS AGREEMENT (the &quot;Agreement&quot;) is made and entered into
              effective as of the date of purchase (the &quot;Effective Date&quot;), by
              and between Nautical Narwhal Game Studios Inc. (hereinafter known
              as the &quot;Licensor&quot;) and the NFT Buyer (hereinafter known as the
                &quot;Licensee&quot;) of the copyrightable permissible work (&quot;Permissible
              Work&quot;).
            </p>

            <h2 className="font-lekton text-termsheading text-left mt-4">
              Definitions
            </h2>
            <p className="font-lekton text-termsbody text-left">
            &quot;Agreement&quot; means the entire content of this document.
            </p>
            <p className="font-lekton text-termsbody text-left">
            &quot;Nautical Narwhal Game Studios Inc&quot; shall mean and refer to
              Licensor&apos;s creation of a unique digital collectible, also known as
              a NFT, deployed on the Ethereum blockchain.
            </p>
            <p className="font-lekton text-termsbody text-left">
            &quot;NFT&quot; shall mean any blockchain-tracked, non-fungible token, also
              referred to as a &apos;token&apos;.
            </p>
            <p className="font-lekton text-termsbody text-left">
            &quot;Smart Contract&quot; shall mean lines of code or a transaction
              protocol that is intended to automatically execute, control or
              document basic relevant events and actions according to the terms
              of an agreement. The code and the agreements contained therein
              exist across a distributed, decentralized blockchain network.
            </p>
            <p className="font-lekton text-termsbody text-left">
            &quot;Permissible Work&quot; shall mean the visual, literary, dramatic,
              artistic, and subject-matter works and content tied to the
              Nautical Narwhal Game Studios Inc NFTs.
            </p>

            <h2 className="font-lekton text-termsheading text-left mt-4">
              LICENSE
            </h2>
            <p className="font-lekton text-termsbody text-left">
              Ownership Rights. Licensor represents to be the sole author and
              creator of the Permissible Work and that the Permissible Work is
              an original work. Licensor agrees to have the sole and exclusive
              right to enter into this Agreement and the full warrant and
              authority to grant the rights granted hereby.
            </p>
            <p className="font-lekton text-termsbody text-left mt-2">
              Non-Exclusive. Licensee acknowledges and agrees that the license
              granted herein is non-exclusive and that Licensor may license
              others to use the Permissible Work. Licensor shall have the right
              to assign and/or license its rights and obligations under this
              Agreement and all its right, title, and interest in the
              Permissible Work without the consent of Licensee.
            </p>
            <p className="font-lekton text-termsbody text-left mt-2">
              Scope. Licensor grants licensee a non-exclusive license in
              accordance with the terms and conditions of this Agreement, a
              non-exclusive license to use the Permissible Work in the course of
              personal and commercial use and purposes. The license covers the
              non-exclusive right to reproduce, sell and distribute the
              Permissible Work, including reprints, translations, photographic
              reproductions, microform, electronic form (offline, online), or
              any other reproductions of similar nature in accordance with the
              terms of this
            </p>
            <p className="font-lekton text-termsbody text-left mt-2">
              Assignment. This Agreement (including, without limitation, the
              license granted hereunder) is personal to Licensee and shall not
              be assigned or transferred by Licensee, except to a new purchaser
              of all or substantially all of the Permissible Work licensed to
              the Licensee. Any other attempt on the part of Licensee to assign,
              sub-license, or transfer Licensee&apos;s rights under this Agreement,
              except as provided herein, shall be invalid and void.
            </p>
            <p className="font-lekton text-termsbody text-left mt-2">
              Accordance. Licensee desires to obtain, and Licensor has agreed to
              transfer to and authorize the use of the Permissible Work by
              Licensee in accordance with the terms and conditions of this
              Agreement. Licensee&apos;s purchase and use of the Permissible Work, in
              whole or in part, indicates their assent to the terms and
              conditions of this Agreement; and acknowledgment to have read and
              be legally bound by the terms of this Agreement.
            </p>
            <p className="font-lekton text-termsbody text-left mt-4">
              Acknowledged and agreed upon by Nautical Narwhal Game Studios Inc.
              2023.
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
