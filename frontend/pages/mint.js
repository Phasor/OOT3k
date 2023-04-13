import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import lottie from 'lottie-web';
import { useContract, useContractRead, useClaimNFT, useClaimedNFTSupply  } from "@thirdweb-dev/react";
import Link from 'next/link'
import NFTCard from '../components/NFTCard'
import Head from 'next/head'
import { motion } from "framer-motion"
import { ConnectWallet, useConnectionStatus, useAddress } from "@thirdweb-dev/react";
const { ethers } = require('ethers');
const CONTRACT_ADDRESS = "0xf07fe4C560cD1BbCd95d20955d3e0bB3D92A56D8"

// How to use ThirdWeb react hook to call contract functions
// https://portal.thirdweb.com/react/react.useclaimnft

export default function Mint() {
  const [mounted, setMounted] = useState(false);
  const [mintAmount, setMintAmount] = useState(1)
  const [error, setError] = useState(null)
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
  const image = '/whirlpool-compressed.gif'

  // new ThirdWeb hooks
  const { contract } = useContract(CONTRACT_ADDRESS, "nft-drop");
  const { mutate: mint, isLoading: claimNftLoading, error: claimNftError } = useClaimNFT(contract);
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
    console.log(`totalSupplyData: ${JSON.stringify(totalSupplyData)}`);
    setTotalMinted(totalSupplyData?.toNumber());
  }, [totalSupplyData]);
  

  // controls the state of the minting progress
  useEffect(() => {
    if (claimNftLoading) {
      setIsMintStarted(true);
    } else if (claimNftError) {
      setMintError(true)
    } else if (!claimNftLoading && isMintStarted === true) {
      setTxSuccess(true);
    }
  }, [claimNftLoading, claimNftError, isMintStarted]);


  useEffect(() => {
    if (txSuccess) {
      const anim = lottie.loadAnimation({
        container: animationContainerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: require('../public/fireworks.json'),
      });
      setAnimation(anim);
    }
  }, [txSuccess]);

  useEffect(() => {
    if (isMintStarted) {

      // play audio
      if (typeof window !== 'undefined') {
        setAudio(new Audio('/elevator.mp3'));
        setEndAudio(new Audio('/yeah.mp3'));
      }

      //run loading animation
      const animation = lottie.loadAnimation({
        container: animationLoadingContainerRef.current,
        animationData: require('../public/loading.json'),
        loop: true,
        autoplay: true,
        renderer: 'svg'
      });

      animation.setSpeed(0.7); // Set the initial speed
      setTimeout(() => {
        animation.setSpeed(1.0); // Increase the speed 
      }, 2000);
      setTimeout(() => {
        animation.setSpeed(1.25); // Increase the speed
      }, 4000);
      setTimeout(() => {
        animation.setSpeed(1.5); // Increase the speed
      }, 6000);
      setTimeout(() => {
        animation.setSpeed(2.0); // Increase the speed
      }, 8000);
      setTimeout(() => {
        animation.setSpeed(2.5); // Increase the speed
      }, 10000);
    }
  }, [isMintStarted]);

  useEffect(() => {
    if (audio) {
      audio.loop = true;
      audio.play();
      audio.playbackRate = 1.0;

      setTimeout(() => {
        audio.playbackRate = 1.2;
      }, 4000);

      setTimeout(() => {
        audio.playbackRate = 1.3;
      }, 6000);

      setTimeout(() => {
        audio.playbackRate = 1.4;
      }, 8000);

      setTimeout(() => {
        audio.playbackRate = 1.5;
      }, 10000);
    }
  }, [audio]);

  useEffect(() => {
    if (txSuccess) {
      audio.pause();
      audio.currentTime = 0;
      audio.loop = false;
      endAudio.loop = true;
      endAudio.play();
    }
  }, [endAudio, txSuccess]);



  const handleIncrement = () => {
    if(mintAmount >= 2) {
      setError("Like your style, but it's a max mint of 2 per wallet :(")
      return
    } else {
      setMintAmount(prev => prev + 1)
    }
  }

  const handleDecrement = () => {
    if(mintAmount == 1) {
      setError("Can't mint less than 1!")
      return
    } else {
      setMintAmount(prev => prev - 1)
    }
  }

  return (
    <div className='w-screen h-screen'>
      <Head>
        <title>Oceans of Terra | Mint </title>
      </Head>
      <div className='w-full flex justify-center items-center'>
        {/* Navbar */}
        <div className='min-h-[70px] bg-white opacity-95 w-full flex justify-between items-center' >
            <Link href="/"><Image height={80} width={80} className="px-4 ml-5" src="/logocompressed.png" alt='logo'/></Link>

                <div id="menu" className="pb-0 mt-0 mr-12">
                    <ul className="flex items-center justify-center space-x-10">
                        <li className="py-5">
                        <Link className="" href="/mint">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className=" flex justify-center items-center cursor-pointer">           
                              <ConnectWallet/>
                            </motion.div>  
                        </Link>
                        </li>
                    </ul>
                </div>
        </div>        
      </div>


      {/* Minting Section */}
      { mounted && !isMintStarted && (
        <div className='flex flex-col w-screen mt-[7rem] justify-center items-center'>
          
            <Image
                src="/narwhale-sketch.png"
                height={350}
                width={350}
                className="border-2 border-gray-500 rounded-sm"
                alt='narwhale picture'
                priority
            />

          { isConnected ? ( 
            <div className='flex flex-col'>
                <p className='font-lekton text-2xl mt-10'>How many Terra's do you want to mint?</p>
                {totalSupplyData && <p className='font-lekton text-2xl mt-6 text-center'>{totalMinted} of 3600 are already gone.  </p>}
              <div className=' w-full flex justify-between mt-10'>
            
                <div className='w-[50%] border-2 border-gray-800 p-2 mr-2 flex justify-center items-center space-x-8'>
                  <div className="h-6 w-6 bg-gray-800 rounded-full flex justify-center  items-center cursor-pointer hover:scale-105">
                    <p onClick={handleDecrement} className="text-gray-100 text-2xl mb-2">-</p>
                  </div>
                  <p className='text-2xl font-lekton'>{mintAmount}</p>
                  <div className="h-6 w-6 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer hover:scale-105">
                    <p onClick={handleIncrement} className="text-gray-100 text-2xl mb-1">+</p>
                  </div>
                </div>

                {/* mint button */}
                <div className='w-[50%] bg-gray-800 ml-2 hover:scale-105 cursor-pointer flex justify-center items-center'>
                    {mounted && (
                      <button
                        id="start-animation"
                        disabled={!mint || isMintStarted }
                        className="min-w-[350px] button font-lekton text-2xl text-center text-white py-1 px-3 cursor-pointer"
                        // data-mint-loading={isMintLoading}
                        data-mint-started={isMintStarted}
                        onClick={() => {
                          console.log(`Minting ${mintAmount} Terra's`)
                          mint?.({
                            to: address,
                            quantity: mintAmount,
                          })}
                        }
                      >
                     
                        {isMintStarted && 'Minting...'}
                        {!isMintStarted && 'Mint'}
                      </button>
                    )}
                </div> 
              </div>
            </div>
          ) : (
            <>
             <p className="font-lekton text-2xl text-center mt-8" >Please Connect Your Wallet</p>
              <p className="font-lekton text-2xl text-center mt-1" >to Ethereum Mainnet</p>
            </>
            )
          }
        </div>
      )}

        {txSuccess && (
          <div className='h-screen w-screen relative'>

            <div class="bg"></div>
              <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                  <div class="success-content bg-transparent">
                    <div className='w-full h-full'>
                      
                      {/* Content here */}
                      <div className='sm:w[800px] sm:h[800px] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 ' >
                          {image && (
                            <NFTCard url={image} className="z-10"/>
                          )}
                        <h1 className='font-lekton text-4xl font-bold text-center bg-transparent mt-5'>Success!</h1>
                      </div>

                      <div className='animation' ref={animationContainerRef}></div>


                    </div>
                  </div>
          </div>     
         )}

        {error && <p className='flex justify-center items-center font-lekton text-xl mt-2'>{error}</p>}

        {mintError && (
        <p className="flex justify-center items-center font-lekton text-xl text-red-500 mt-2">
          Error: {mintError.message}
        </p>
        )}

     
      { mounted && isMintStarted && !txSuccess && (
        <div className='flex flex-col w-screen mt-[100px] justify-center items-center'>
          <div className='animation' ref={animationLoadingContainerRef}></div>
        </div>
      )} 

    </div>
  )
}
