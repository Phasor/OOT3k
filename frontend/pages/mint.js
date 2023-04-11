import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import ConnectButtonCustom from '../components/ConnectButtonCustom'
import { goerli, mainnet } from 'wagmi/chains'
import lottie from 'lottie-web';
import {
  useAccount,
  useContractReads,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction, 
  useNetwork, 
} from 'wagmi';
import { abi } from '../ABI/contract-abi'  
import Link from 'next/link'
import NFTCard from '../components/NFTCard'
import Head from 'next/head'
import { motion } from "framer-motion"

const contractConfig = {
  address: '0xc5617A28f8494B131902DE5063e68E4Ed9B77f1E',
  abi,
};

export default function Mint() {
  const [mounted, setMounted] = useState(false);
  const [mintAmount, setMintAmount] = useState(1)
  const [error, setError] = useState(null)
  const { isConnected } = useAccount();
  const { chain } = useNetwork()
  const [totalMinted, setTotalMinted] = useState(0);
  const animationContainerRef = useRef(null);
  const animationLoadingContainerRef = useRef(null);
  const [animation, setAnimation] = useState(null);
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const [endAudio, setEndAudio] = useState(null);
  const [correctNetwork, setCorrectNetwork] = useState(true);

  useEffect(() => setMounted(true), []);
  
  /* ***** SET NETWORK HERE***** */
  const NETWORK = 'goerli' // 'mainnet' or 'goerli'
  
  // Network configs
  const { config: contractWriteConfig } = NETWORK === 'mainnet' ? 
    // Mainnet config
    usePrepareContractWrite({
      ...contractConfig,
      functionName: 'mint',
      args: [mintAmount],
      chainId: mainnet.id,
    })
    :
    // Goerli config
    usePrepareContractWrite({
      ...contractConfig,
      functionName: 'mint',
      args: [mintAmount],
      chainId: goerli.id,
    });


  const {
    data: mintData,
    write: mint,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
    error: mintError,
  } = useContractWrite({...contractWriteConfig});

  const { data } = useContractReads({
    contracts: [
      {
        ...contractConfig,
        functionName: 'totalSupply',
        args: [0],
        watch: false,
      },
      {
        ...contractConfig,
        functionName: 'uri',
        args: [0],
        watch: false
      }
    ]
  });

  // rename the variables returned from useContractReads
  const [totalSupplyData, tokenUri] = data ?? [];

  useEffect(() => {
    async function fetchImage() {
      const metaDataURL = tokenUri?.replace('ipfs://', 'https://ipfs.io/ipfs/')
      const response = await fetch(metaDataURL);
      const metadata = await response.json();
      const ipfsUrl = metadata.image;
      const imageUrl = 'https://ipfs.io/ipfs/' + ipfsUrl.substring('ipfs://'.length);
      setImage(imageUrl);
    }

    if(tokenUri){
      fetchImage();
    }
  }, [tokenUri]);


  // ipfs://QmbFJhXoWQEGhv6nufAc93R5T57G9Rj3fsf8ARfLZQumAn/metadata.json
 
  const {
    data: txData,
    isSuccess: txSuccess,
    error: txError,
  } = useWaitForTransaction({
    hash: mintData?.hash,
  });

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



  useEffect(() => {
    if (totalSupplyData) {
      setTotalMinted(totalSupplyData.toNumber());
    }
  }, [totalSupplyData]);

  const isMinted = txSuccess;

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



  useEffect(() => {
    if (chain) {
      if (NETWORK === 'goerli') {
        const uppcaseNetwork = NETWORK.charAt(0).toUpperCase() + NETWORK.slice(1);
        if (chain.name && chain.name !== uppcaseNetwork) {
          setError(`Please connect to the ${uppcaseNetwork} network`);
          setCorrectNetwork(false);
        } else {
          setCorrectNetwork(true);
          setError('');
        }
      } else {
        if (chain.name && chain.name !== 'Ethereum') {
          setError('Please connect to Ethereum mainnet');
          setCorrectNetwork(false);
        } else {
          setCorrectNetwork(true);
          setError('');
        }
      }
    }
  }, [chain]);


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
                              <ConnectButtonCustom/>
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
                <p className='font-lekton text-2xl mt-6 text-center'>{totalMinted} of 3333 are already gone.  </p>
              <div className=' w-full flex justify-between mt-10'>
                {/* + and 0 box */}
                <div className='w-[50%] border-2 border-gray-800 p-2 mr-2 flex justify-center items-center space-x-8'>
                  <div className="h-6 w-6 bg-gray-800 rounded-full flex justify-center  items-center cursor-pointer hover:scale-105">
                    <p onClick={handleDecrement} className="text-gray-100 text-2xl mb-2">-</p>
                  </div>
                  <p className='text-2xl font-lekton'>{mintAmount}</p>
                  <div className="h-6 w-6 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer hover:scale-105">
                    <p onClick={handleIncrement} className="text-gray-100 text-2xl mb-1">+</p>
                  </div>
                </div>

                {/* Mint Button */}
                <div className='w-[50%] bg-gray-800 ml-2 hover:scale-105 cursor-pointer flex justify-center items-center'>
                    {mounted && !isMinted && (
                      <button
                        id="start-animation"
                        disabled={!mint || isMintLoading || isMintStarted }
                        className="min-w-[350px] button font-lekton text-2xl text-center text-white py-1 px-3 cursor-pointer"
                        data-mint-loading={isMintLoading}
                        data-mint-started={isMintStarted}
                        onClick={() => {
                          console.log("Minting")
                          mint?.()
                        }
                        }
                      >
                        {isMintLoading && 'Approve in Wallet'}
                        {isMintStarted && 'Minting...'}
                        {!isMintLoading && !isMintStarted && 'Mint'}
                      </button>
                    )}
                </div> 
              </div>
            </div>
          ) : (
            <>
             <p className="font-lekton text-2xl text-center mt-8" >Please Connect Your Wallet</p>
              <p className="font-lekton text-2xl text-center mt-1" >to the {NETWORK=='goerli' ? 'Goerli Network' : 'Ethereum Mainnet'}</p>
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
                    <div className=''>
                      
                      {/* Content here */}
                      <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2' >
                          {image && (
                            <NFTCard url={image} className="z-10"/>
                          )}
                        <h1 className=' font-lekton text-4xl font-bold text-center bg-transparent mt-5'>Success!</h1>
                        { mintData.hash && (
                          <a href={`https://goerli.etherscan.io/tx/${mintData.hash}`} className='font-lekton text-xl' target="_blank">
                            <p className='font-lekton text-md text-blue-600 underline text-center bg-transparent cursor-pointer'>View on Etherscan</p>
                          </a>
                        )}

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

        {txError && (
          <p className="items-center flex justify-center font-lekton text-xl text-red-500 mt-2">
            Error: {txError.message}
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
