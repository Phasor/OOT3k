import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import Link from 'next/link'

export default function check() {
    const [onWhitelist, setOnWhitelist] = useState(false)
    const { address, isConnected } = useAccount();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const checkWL = async () => {
          setLoading(true);
          try {
            const res = await fetch(`/api/check-whitelist?address=${address}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
            const data = await res.json();
            console.log(`data: ${JSON.stringify(data)}`);
            setOnWhitelist(data.message);
            setLoading(false);
          } catch (err) {
            console.log(err);
            setError(err)
            setLoading(false);
          }
        };
        if (address){
            checkWL();
        }
      }, [address]);


  return (
    <div className='w-screen min-h-screen relative'>
        <div className='w-full absolute top-0 left-0 bg-white opacity-80 p-2 flex items-center justify-start '>
            <Link href="/">
                <Image 
                    src="/logocompressed.png"
                    alt="Oceans of Terra Logo, an image of a Narwhal"
                    height={100}
                    width={100}
                    className='px-6 my-2 ml-1 mt-3  object-cover '
                />
            </Link>
        </div>
        <div>
            <Image
                src="/BACKGROUND-whitelist-compressed.png"
                alt="Picture of an underwater scene"
                height={1500}
                width={1500}
                className='object-cover h-full w-full'
            />
        </div>
        <div className='absolute left-1/2 transform -translate-x-1/2 top-[40vh] flex flex-col justify-center items-center p-8 bg-gray-800 border border-gray-800 rounded-lg shadow'>
                <h1 className='text-white text-2xl sm:text-3xl font-leckton font-semibold text-center mb-6'>Check Wallet</h1>
                <ConnectButton/>
                {loading && <p className='my-4 text-white text-2xl sm:text-3xl font-leckton'>Checking...</p>}
                {onWhitelist && <p className='my-4 text-white text-2xl sm:text-3xl font-leckton'>{onWhitelist}</p>}
        </div>

    </div>
  )
}