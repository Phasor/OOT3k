import { useState, useEffect } from "react";
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
import Head from 'next/head'
import Rights from "../components/Rights";
import Community from "../components/Community";

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Oceans of Terra | Underwater Adventure Game and NFT Collection</title>
      </Head>
      <main className="w-full flex flex-col justify-center items-center flex-1 relative">
        <Navbar/>
        <Hero onVideoLoaded={() => setVideoLoaded(true)} />
        { videoLoaded && (
          <>
            <Banner/>
            <FixedImage/>
            <Intro/>
            <Lore/>
            <Collection/>
            <FAQ/>
            <Rights/>
            <Community/>
            <Team/>
            <Footer/>
          </>
        )}
      </main>
    </div>
  );
}
