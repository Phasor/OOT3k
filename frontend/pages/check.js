import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";
import Head from "next/head";

export default function Check() {
  const [onWhitelist, setOnWhitelist] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const address = useAddress();

  useEffect(() => {
    const checkWL = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/check-whitelist?address=${address}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        // console.log(`data: ${JSON.stringify(data)}`);
        setOnWhitelist(data.message);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
        setLoading(false);
      }
    };
    if (address) {
      checkWL();
    }
  }, [address]);

  return (
    <div className="w-screen min-h-screen relative">
      <Head>
        <title>Oceans of Terra | Check Your Wallet</title>
        <meta
          name="description"
          content="Check your wallet for the Oceans of Terra Mint."
        />
        <meta name="keywords" content="Crypto gaming, web3, nft, nfts" />
      </Head>
      <div className="w-full absolute top-0 left-0 bg-white opacity-80 p-2 flex items-center justify-start ">
        <Link href="/">
          <Image
            src="/logocompressed.png"
            alt="Oceans of Terra Logo, an image of a Narwhal"
            height={100}
            width={100}
            className="px-6 my-2 ml-1 mt-3  object-cover "
          />
        </Link>
      </div>
      <div>
        <Image
          src="/background-whitelist-compressed-smaller.png"
          alt="Picture of an underwater scene"
          height={1500}
          width={1500}
          className="object-cover min-h-screen w-full"
          priority={true}
        />
      </div>
      <div className="min-w-[80vw] sm:min-w-[0vw] absolute left-1/2 transform -translate-x-1/2 top-[30vh] sm:top-[40vh] flex flex-col justify-center items-center p-8 bg-gray-800 border border-gray-800 rounded-lg shadow">
        <h1 className="text-white text-2xl sm:text-3xl font-leckton font-semibold text-center mb-6">
          Check Wallet
        </h1>
        <ConnectWallet />
        {loading && (
          <p className="my-4 text-white text-xl sm:text-3xl font-leckton">
            Checking...
          </p>
        )}
        {error && (
          <p className="my-4 text-red text-lg sm:text-xl font-leckton">
            {error}
          </p>
        )}
        {onWhitelist && (
          <p className="my-4 text-white text-xl sm:text-3xl font-leckton text-center">
            {onWhitelist}
          </p>
        )}
      </div>
    </div>
  );
}
