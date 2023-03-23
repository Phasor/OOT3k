import Navbar from "../components/navigation/NavBar";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Banner from "../components/Banner";
import Lore from "../components/Lore";
import Collection from "../components/Collection";
import Team from "../components/Team";
import FixedImage from "../components/FixedImage";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <main className="flex flex-col justify-center items-center flex-1 relative">
        <Navbar/>
        <Hero/>
        <Intro/>
        <Banner/>
        <Lore/>
        <Collection/>
        <FixedImage/>
        <FAQ/>
        <Team/>
        <Footer/>
      </main>
    </div>
  );
}
