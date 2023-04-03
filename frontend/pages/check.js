import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export default function check() {
    const [onWhitelist, setOnWhitelist] = useState(false)
    const { address, isConnected } = useAccount();
    const [error, setError] = useState(null);

    useEffect(() => {
        const checkWL = async () => {
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
          } catch (err) {
            console.log(err);
          }
        };
        if (address){
            checkWL();
        }
      }, [address]);


  return (
    <div className='w-screen min-h-screen relative'>
        <div>
            <Image
                src="/BACKGROUND-whitelist-compressed.png"
                alt="Picture of an underwater scene"
                height={1500}
                width={1500}
                className='object-cover h-full w-full'
            />
        </div>
        <div className='absolute left-1/2 transform -translate-x-[90%] top-1/2 flex flex-col justify-center items-center p-4 bg-blue-200 border border-gray-100 rounded-lg shadow'>
                <h1 className='text-4xl font-leckton font-semibold text-center mb-6'>Check Wallet</h1>
                <ConnectButton/>

                {onWhitelist && <p className='my-4 text-xl font-leckton'>{onWhitelist}</p>}
        </div>

    </div>
  )
}
