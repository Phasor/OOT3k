import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion"; 
import { useRouter } from "next/router";
import { ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	// activeChain can be "mumbai" or "ethereum"

	return (
		<ThirdwebProvider activeChain="mumbai">
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
