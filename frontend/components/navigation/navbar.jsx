import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className="flex justify-between items-center w-full p-4 mb- z-50">
			<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
				<img className={styles.alchemy_logo} src="/logo.jpg"></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
