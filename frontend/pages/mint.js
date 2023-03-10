import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ConnectButtonCustom from '../components/ConnectButtonCustom'
import { goerli } from 'wagmi/chains'
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { abi } from '../ABI/contract-abi'  

const contractConfig = {
  address: '0xc5617A28f8494B131902DE5063e68E4Ed9B77f1E',
  abi,
};

export default function Mint() {
  const [mounted, setMounted] = useState(false);
  const [mintAmount, setMintAmount] = useState(1)
  const [error, setError] = useState(null)
  const { isConnected } = useAccount();
  const [totalMinted, setTotalMinted] = useState(0);

  useEffect(() => setMounted(true), []);

  const { config: contractWriteConfig } = usePrepareContractWrite({
    ...contractConfig,
    functionName: 'mint',
    args: [1],
    chainId: goerli.id,
  });

  const {
    data: mintData,
    write: mint,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
    error: mintError,
  } = useContractWrite({...contractWriteConfig});

  const { data: totalSupplyData } = useContractRead({
    ...contractConfig,
    functionName: 'totalSupply',
    args: [0],
    watch: false,
  });

  const {
    data: txData,
    isSuccess: txSuccess,
    error: txError,
  } = useWaitForTransaction({
    hash: mintData?.hash,
  });

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
    setMintAmount(prev => prev - 1)
  }


  return (
    <div className='w-screen h-screen'>
      <div className='w-full flex justify-center items-center'>
        
        {/* Navbar */}
        <div className='mx-6 mt-2 w-full h-20 border-b border-gray-600 flex justify-between items-center'>
          
            <div className='flex flex-col mb-2 ml-8 justify-center items-center cursor-pointer hover:scale-105'>
              <p className='font-singleDay text-4xl'>Home</p> 
              <Image
                src="/waves.png"
                height={80}
                width={80}
                className="object-cover"
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
        <div className='flex flex-col w-screen mt-[10rem] justify-center items-center'>
            <Image
                src="/narwhale-sketch.png"
                height={350}
                width={350}
                className="border-2 border-gray-500 rounded-sm"
            />
            <p className='font-singleDay text-2xl mt-10'>How many Terra's do you want to mint?</p>
            <p className='font-singleDay text-2xl mt-10'>{totalMinted} minted so far!</p>

            <div className='flex justify-between w-[20%] mt-10'>
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
                  {mounted && isConnected && !isMinted && (
                    <button
                      disabled={!mint || isMintLoading || isMintStarted}
                      className="button font-singleDay text-2xl text-center text-white py-1 px-3"
                      data-mint-loading={isMintLoading}
                      data-mint-started={isMintStarted}
                      onClick={() => {
                        console.log("Minting")
                        mint?.()}
                      }
                    >
                      {isMintLoading && 'Waiting for approval'}
                      {isMintStarted && 'Minting...'}
                      {!isMintLoading && !isMintStarted && 'Mint'}
                    </button>
                  )}
              </div> 
            </div>


            {txSuccess && (
              <>
                <h1>MINTED!</h1>
                <p className='font-singleDay text-2xl text-black'>
                  <a href={`https://goerli.etherscan.io/tx/${mintData?.hash}`} className='font-singleDay text-2xl text-black'>
                    Etherscan
                  </a>
                </p>
              </>
            )}

              {error && <p className='font-singleDay text-xl mt-2'>{error}</p>}

              {mintError && (
              <p style={{ marginTop: 24, color: '#FF6257' }}>
                Error: {mintError.message}
              </p>
              )}

              {txError && (
                <p style={{ marginTop: 24, color: '#FF6257' }}>
                  Error: {txError.message}
                </p>
              )}
        </div>


    </div>
  )
}
