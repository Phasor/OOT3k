import React, { useEffect } from 'react'
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function whitelist() {
    const { address, isConnected } = useAccount();
    const [status, setStatus] = useState(null);

    useEffect(() => {
        if (isConnected) {
            console.log(`address: ${address}`)
            const checkWhitelist = async (add) => {
                const response = await fetch('/api/check-whitelist', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ add }),
                });
                const data = await response.json();
                return data;
            }
            const onWhitelist = checkWhitelist(address);
            setStatus(onWhitelist.message);
        }

  return (
    <div className="w-screen h-screen">
        <div className='flex justify-center items-center'>
            <p>Are you on the Oceans of Terra 3k collection whitelist?</p> 
            <ConnectButton/>
            {status && <p>{status}</p>}
        </div>
    </div>
  )
}
