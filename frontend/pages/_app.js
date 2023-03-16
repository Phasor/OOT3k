import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { AnimatePresence, motion } from "framer-motion"; 
import { useRouter } from "next/router";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
	mainnet,
	goerli,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { infuraProvider } from '@wagmi/core/providers/infura'
import { publicProvider } from '@wagmi/core/providers/public'
const { chains, provider } = configureChains(
	[mainnet, goerli],
	[
	  alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }),
	  infuraProvider({ apiKey: process.env.INFURA_API_KEY }),
	  publicProvider(),
	]
  )

const { connectors } = getDefaultWallets({
	appName: "Oceans of Terra",
	chains,
});

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
});

export { WagmiConfig, RainbowKitProvider };

function MyApp({ Component, pageProps }) {
const router = useRouter();

	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider
				modalSize="compact"
				initialChain={process.env.NEXT_PUBLIC_DEFAULT_CHAIN}
				chains={chains}
			>
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
			</RainbowKitProvider>
		</WagmiConfig>
	);
}

export default MyApp;
