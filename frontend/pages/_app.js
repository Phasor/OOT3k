import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion"; 
import { useRouter } from "next/router";
import { ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const INFURA_RPC = process.env.NEXT_PUBLIC_INFURA_API_KEY;

	return (
		<ThirdwebProvider 
		    // *** UNCOMMENT BELOW FOR MUMBAI ***
			activeChain={{
				// === Required information for connecting to the network === \\
				chainId: 80001, // Chain ID of the network

				// Array of RPC URLs to use
				rpc: [
					"https://mumbai.rpc.thirdweb.com",	 							// ThirdWeb RPC
					`https://polygon-mumbai.infura.io/v3/${INFURA_RPC}`, 			// MY RPC key
				],
		
				// === Information for adding the network to your wallet (how it will appear for first time users) === \\
				// Information about the chains native currency (i.e. the currency that is used to pay for gas)
				nativeCurrency: {
				  decimals: 18,
				  name: "MATIC",
				  symbol: "MATIC"
				},
				shortName: "maticmum", // Display value shown in the wallet UI
				slug: "mumbai", // Display value shown in the wallet UI
				testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
				chain: "Polygon", // Name of the network
				name: "Mumbai", // Name of the network
				icon: {
					"url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/polygon/512.png",
					"height": 512,
					"width": 512,
					"format": "png"
				  },
			  }}		

			// *** UNCOMMENT BELOW FOR ETH MAINNET ***
			// Reference values here: https://github.com/thirdweb-dev/js/blob/main/packages/chains/chains/1.ts
			
			// activeChain={{
			// 	// === Required information for connecting to the network === \\
			// 	chainId: 1, // Chain ID of the network

			// 	// Array of RPC URLs to use
			// 	rpc: [
			// 		"https://ethereum.rpc.thirdweb.com",	 						// ThirdWeb RPC
			// 		`https://mainnet.infura.io/v3/${INFURA_RPC}`, 					// MY RPC key
			// 	],
		
			// 	// === Information for adding the network to your wallet (how it will appear for first time users) === \\
			// 	// Information about the chains native currency (i.e. the currency that is used to pay for gas)
			// 	nativeCurrency: {
			// 	  decimals: 18,
			// 	  name: "Ether",
			// 	  symbol: "ETH"
			// 	},
			// 	shortName: "eth", // Display value shown in the wallet UI
			// 	slug: "ethereum", // Display value shown in the wallet UI
			// 	testnet: false, // Boolean indicating whether the chain is a testnet or mainnet
			// 	chain: "ETH", // Name of the network
			// 	name: "Ethereum Mainnet", // Name of the network
			// 	icon: {
			// 		"url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png",
			// 		"height": 512,
			// 		"width": 512,
			// 		"format": "png"
			// 	  },
			//   }}		
		>


			{/* Fade in and out between page changes */}
			<AnimatePresence mode="wait">
				<motion.div
					key={router.pathname}
					initial="initialState"
					animate="animateState"
					exit="exitState"
					transition={{
						duration: 0.25,
					}}
					variants={{
						initialState: {
							opacity: 0,
						},
						animateState: {
							opacity: 1,
						},
						exitState: {
							opacity: 0,
						}
					}}
				>
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
		</ThirdwebProvider>
	);
}

export default MyApp;
