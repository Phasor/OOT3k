import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import lottie from "lottie-web";
import {
  useContract,
  useContractRead,
  useClaimNFT,
  useClaimedNFTSupply,
} from "@thirdweb-dev/react";
import Link from "next/link";
import NFTCard from "../components/NFTCard";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  ConnectWallet,
  useConnectionStatus,
  useAddress,
} from "@thirdweb-dev/react";
const { ethers } = require("ethers");
const CONTRACT_ADDRESS = "0x38034Be7BB26819A431a09f010abcbAB2dFbe0B9";

// How to use ThirdWeb react hook to call contract functions
// https://portal.thirdweb.com/react/react.useclaimnft

export default function Mint() {
  const [mounted, setMounted] = useState(false);
  const [mintAmount, setMintAmount] = useState(1);
  const [error, setError] = useState(null);
  const address = useAddress();
  const [totalMinted, setTotalMinted] = useState(null);
  const animationContainerRef = useRef(null);
  const animationLoadingContainerRef = useRef(null);
  const [animation, setAnimation] = useState(null);
  const [audio, setAudio] = useState(null);
  const [endAudio, setEndAudio] = useState(null);
  const [isMintStarted, setIsMintStarted] = useState(false);
  const [mintError, setMintError] = useState(false);
  const [txSuccess, setTxSuccess] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const connectionStatus = useConnectionStatus();
  const image = "/whirlpool-compressed.gif";

  // new ThirdWeb hooks
  const { contract } = useContract(CONTRACT_ADDRESS, "nft-drop");
  const {
    mutate: mint,
    isLoading: claimNftLoading,
    error: claimNftError,
  } = useClaimNFT(contract);
  const { data: totalSupplyData } = useClaimedNFTSupply(contract);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (connectionStatus === "connected") {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [connectionStatus]);

  useEffect(() => {
    // console.log(`totalSupplyData: ${JSON.stringify(totalSupplyData)}`);
    setTotalMinted(totalSupplyData?.toNumber());
  }, [totalSupplyData]);

  // controls the state of the minting progress
  useEffect(() => {
    if (claimNftLoading) {
      setIsMintStarted(true);
    } else if (claimNftError) {
      setMintError(true);
    } else if (!claimNftLoading && isMintStarted === true) {
      setTxSuccess(true);
    }
  }, [claimNftLoading, claimNftError, isMintStarted]);

  useEffect(() => {
    if (txSuccess) {
      const anim = lottie.loadAnimation({
        container: animationContainerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: require("../public/fireworks.json"),
      });
      setAnimation(anim);
    }
  }, [txSuccess]);

  useEffect(() => {
    if (isMintStarted) {
      // play audio
      if (typeof window !== "undefined") {
        setAudio(new Audio("/elevator.mp3"));
        setEndAudio(new Audio("/yeah.mp3"));
      }

      //run loading animation
      const animation = lottie.loadAnimation({
        container: animationLoadingContainerRef.current,
        animationData: require("../public/loading.json"),
        loop: true,
        autoplay: true,
        renderer: "svg",
      });
    }
  }, [isMintStarted]);

  useEffect(() => {
    if (audio) {
      audio.loop = true;
      audio.play();
      audio.playbackRate = 1.0;
    }
  }, [audio]);

  useEffect(() => {
    if (txSuccess) {
      audio.pause();
      audio.currentTime = 0;
      audio.loop = false;
      endAudio.loop = true;
      endAudio.play();

      //end music after 25 seconds
      setTimeout(() => {
        endAudio.pause();
        endAudio.currentTime = 0;
        endAudio.loop = false;
      }, 25000);
    }
  }, [endAudio, txSuccess, audio]);

  const handleIncrement = () => {
    if (mintAmount >= 2) {
      setError("Like your style, but it's a max mint of 2 per wallet :(");
      return;
    } else {
      setMintAmount((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (mintAmount == 1) {
      setError("Can't mint less than 1!");
      return;
    } else {
      setMintAmount((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Head>
        <title>Oceans of Terra | Mint </title>
      </Head>

      {/* Navbar */}
      <div className="w-full flex justify-center items-center">
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

          <div id="menu" className="pb-0 mt-0 mr-3 sm:mr-12">
            <ul className="flex items-center justify-center">
              <li className="py-5">
                <Link className="" href="/mint">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className=" flex justify-center items-center cursor-pointer"
                  >
                    <ConnectWallet />
                  </motion.div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Minting Section */}
      {mounted && !isMintStarted && (
        <div className="flex flex-col min-w-full mt-[7rem] justify-center items-center">
          <Image
            src="/water-minting-compressed.gif"
            height={350}
            width={350}
            className=""
            alt="swirling water"
            priority
          />

          {isConnected ? (
            <div className="flex flex-col w-full items-center">
              <p className="font-lekton text-2xl text-center mt-10 p-2">
                Welcome to the Oceans of Terra
              </p>
              {totalSupplyData && (
                <p className="font-lekton text-2xl mt-6 text-center p-2">
                  {totalMinted} of 3600 are already gone.{" "}
                </p>
              )}

              <div className="w-full sm:max-w-[200px] flex justify-between mt-5 p-4">
                {/* <div className='w-[50%] border-2 border-gray-800 p-2 mr-2 flex justify-center items-center space-x-8'>
                  <div className="h-6 w-6 bg-gray-800 rounded-full flex justify-center  items-center cursor-pointer hover:scale-105">
                    <p onClick={handleDecrement} className="text-gray-100 text-2xl mb-2">-</p>
                  </div>
                  <p className='text-2xl font-lekton'>{mintAmount}</p>
                  <div className="h-6 w-6 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer hover:scale-105">
                    <p onClick={handleIncrement} className="text-gray-100 text-2xl mb-1">+</p>
                  </div>
                </div> */}

                {/* mint button */}
                <div className="w-full bg-gray-800 hover:scale-105 cursor-pointer flex justify-center items-center">
                  {mounted && (
                    <button
                      id="start-animation"
                      disabled={!mint || isMintStarted}
                      className="min-w-[350px] button font-lekton text-2xl text-center text-white py-1 px-3 cursor-pointer"
                      // data-mint-loading={isMintLoading}
                      data-mint-started={isMintStarted}
                      onClick={() => {
                        // console.log(`Minting ${mintAmount} Terra's`)
                        mint?.({
                          to: address,
                          quantity: mintAmount,
                        });
                      }}
                    >
                      {isMintStarted && "Minting..."}
                      {!isMintStarted && "Mint"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <>
              <p className="font-lekton text-2xl text-center mt-8">
                Please Connect Your Wallet
              </p>
              <p className="font-lekton text-2xl text-center mt-1">
                on Ethereum Mainnet
              </p>
            </>
          )}
        </div>
      )}

      {txSuccess && (
        <div className="min-h-screen w-screen relative">
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
          <div className="success-content bg-transparent">
            <div className="w-full h-full">
              {/* Content here */}
              <div className="sm:w[800px] sm:h[800px] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 ">
                {image && <NFTCard url={image} className="z-10" />}
                <h1 className="font-lekton text-4xl font-bold text-center bg-transparent mt-10">
                  Success! Welcome Explorer.
                </h1>
              </div>

              <div className="animation" ref={animationContainerRef}></div>
            </div>
          </div>
        </div>
      )}

      {error && (
        <p className="w-full flex justify-center items-center font-lekton text-xl mt-2">
          {error}
        </p>
      )}

      {mintError && (
        <p className="w-full flex justify-center items-center font-lekton text-xl text-red-500 mt-2">
          Error. Make sure you are on the Whitelist if its before 10am PDT and
          aren&apos;t trying to mint more than 1 per wallet for the Whitelist and 2
          for the Public mint.
        </p>
      )}

      {mounted && isMintStarted && !txSuccess && (
        <div className="flex flex-col min-w-full mt-[100px] justify-center items-center">
          <div className="animation" ref={animationLoadingContainerRef}></div>
        </div>
      )}
    </div>
  );
}

// ** Uncomment the below if you want to hide the mint functionality e.g. post mint **
// import React from 'react'

// export default function mint() {
//   return (
//     <div></div>
//   )
// }
