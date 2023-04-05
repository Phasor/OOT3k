import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import ConnectButtonCustom from '../components/ConnectButtonCustom'
import { goerli } from 'wagmi/chains'
import lottie from 'lottie-web';
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { abi } from '../ABI/contract-abi'  
import Link from 'next/link'
import NFTCard from '../components/NFTCard'
import Head from 'next/head'

const contractConfig = {
  address: '0xc5617A28f8494B131902DE5063e68E4Ed9B77f1E',
  abi,
};

export default function Mint() {
  const [mounted, setMounted] = useState(false);
  const [mintAmount, setMintAmount] = useState(1)
  const [error, setError] = useState(null)
  const { isConnected } = useAccount();
  console.log(`isConnected: ${isConnected}`)
  const [totalMinted, setTotalMinted] = useState(0);
  const animationContainerRef = useRef(null);
  const animationLoadingContainerRef = useRef(null);
  const [animation, setAnimation] = useState(null);
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const [endAudio, setEndAudio] = useState(null);

  useEffect(() => setMounted(true), []);

  const { config: contractWriteConfig } = usePrepareContractWrite({
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

  // get total supply
  const { data: totalSupplyData } = useContractRead({
    ...contractConfig,
    functionName: 'totalSupply',
    args: [0],
    watch: false,
  });

  // get token uri
  const { data: tokenUri } = useContractRead({
    ...contractConfig,
    functionName: 'uri',
    args: [0],
    watch: false,
  });

  useEffect(() => {
    async function fetchImage() {
      const metaDataURL = tokenUri?.replace('ipfs://', 'https://ipfs.io/ipfs/')
      const response = await fetch(metaDataURL);
      const metadata = await response.json();
      const ipfsUrl = metadata.image;
      const imageUrl = 'https://ipfs.io/ipfs/' + ipfsUrl.substring('ipfs://'.length);
      setImage(imageUrl);
    }

    fetchImage();
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

  //   useEffect(() => {
  //   if (isMintStarted) {
  //     const anim = lottie.loadAnimation({
  //       container: animationLoadingContainerRef.current,
  //       renderer: 'svg',
  //       loop: true,
  //       autoplay: true,
  //       animationData: require('../public/loading.json'),
  //     });
  //   }
  //  }, [isMintStarted]);

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
    if(mintAmount >= 10) {
      setError("Like your style, but it's a max mint of 10 at a time :(")
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
        <div className='mx-6 mt-2 w-full h-20 border-b border-gray-600 flex justify-between items-center'>
          
            <div className='flex flex-col mb-2 ml-8 justify-center items-center cursor-pointer hover:scale-105'>
              <Link href="/"><p className='font-singleDay text-4xl'>Home</p></Link>
              <Image
                src="/waves.png"
                height={80}
                width={80}
                className="object-cover"
                alt='waves'
              />
            </div>
          
          {/* Connect Button */}
          <div className='relative mt-2 mr-8 h-12 cursor-pointer hover:scale-105'>
            {/* <Image
              src="/corner-scribble.png"
              height={200}
              width={200}
              className="absolute bottom-1"
            /> */}
            {/* <p className='font-singleDay text-3xl ml-4'>CONNECT</p> */}
            <ConnectButtonCustom/>
            
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
            />
            


          { isConnected ? ( 
            <div className='flex flex-col'>
                <p className='font-singleDay text-2xl mt-10'>How many Terra's do you want to mint?</p>
                <p className='font-singleDay text-2xl mt-6 text-center'>{totalMinted} of 3333 are already gone.  </p>
              <div className=' w-full flex justify-between mt-10'>
                {/* + and 0 box */}
                <div className='w-[50%] border-2 border-gray-800 p-2 mr-2 flex justify-center items-center space-x-8'>
                  <div className="h-6 w-6 bg-gray-800 rounded-full flex justify-center  items-center cursor-pointer hover:scale-105">
                    <p onClick={handleDecrement} className="text-gray-100 text-2xl mb-2">-</p>
                  </div>
                  <p className='text-2xl font-singleDay'>{mintAmount}</p>
                  <div className="h-6 w-6 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer hover:scale-105">
                    <p onClick={handleIncrement} className="text-gray-100 text-2xl mb-1">+</p>
                  </div>
                </div>

                {/* Mint Button */}
                <div className='w-[50%] bg-gray-800 ml-2 hover:scale-105 cursor-pointer flex justify-center items-center'>
                    {mounted && !isMinted && (
                      <button
                        id="start-animation"
                        disabled={!mint || isMintLoading || isMintStarted}
                        className="button font-singleDay text-2xl text-center text-white py-1 px-3"
                        data-mint-loading={isMintLoading}
                        data-mint-started={isMintStarted}
                        onClick={() => {
                          console.log("Minting")
                          mint?.()}
                        }
                      >
                        {isMintLoading && 'Pls Approve'}
                        {isMintStarted && 'Minting...'}
                        {!isMintLoading && !isMintStarted && 'Mint'}
                      </button>
                    )}
                </div> 
              </div>
            </div>
          ) : (
            <p className="font-singleDay text-2xl text-center mt-8" >Connect Your Wallet!</p>
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
                        <h1 className=' font-singleDay text-5xl text-center bg-transparent mt-5'>YEAH!</h1>
                        { mintData.hash && (
                          <a href={`https://goerli.etherscan.io/tx/${mintData.hash}`} className='font-singleDay text-xl' target="_blank">
                            <p className='font-singleDay text-2xl text-blue-600 text-center bg-transparent cursor-pointer'>Etherscan</p>
                          </a>
                        )}

                      </div>

                      <div className='animation' ref={animationContainerRef}></div>


                    </div>
                  </div>
          </div>     
         )}



        {error && <p className='font-singleDay text-xl mt-2'>{error}</p>}

        {mintError && (
        <p className="font-singleDay text-2xl" style={{ marginTop: 24, color: '#FF6257' }}>
          Error: {mintError.message}
        </p>
        )}

        {txError && (
          <p className="flex justify-center font-singleDay text-2xl" style={{ marginTop: 24, color: '#FF6257' }}>
            Error: {txError.message}
          </p>
        )}

      {/* Loading Spinner
      { mounted && isMintStarted && !txSuccess && (
        <div className='flex flex-col w-screen mt-[35rem] justify-center items-center'>
          <Spinner/>
        </div>
      )} */}
     
      { mounted && isMintStarted && !txSuccess && (
        <div className='flex flex-col w-screen mt-[100px] justify-center items-center'>
          <div className='animation' ref={animationLoadingContainerRef}></div>
        </div>
      )} 

    </div>
  )
}
