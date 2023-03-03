import NavBar from "../components/navigation/NavBar";

export default function MainLayout({ children }) {
	return (
		<div>
            <NavBar />
            {children}
		</div>
	);
}
