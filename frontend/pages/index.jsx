import Navbar from "../components/navigation/navbar";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Lore from "../components/Lore";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center items-center flex-1 relative">
        <Navbar/>
        <Hero/>
        <Intro/>
        <Lore/>
      </main>
    </div>
  );
}
