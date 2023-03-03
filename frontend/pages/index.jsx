import Navbar from "../components/navigation/NavBar";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Lore from "../components/Lore";
import Collection from "../components/Collection";
import Team from "../components/Team";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center items-center flex-1 relative">
        <Navbar/>
        <Hero/>
        <Intro/>
        <Lore/>
        <Collection/>
        <Team/>
      </main>
    </div>
  );
}
