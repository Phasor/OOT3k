import Navbar from "../components/navigation/navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center items-center flex-1 relative">
        <Navbar/>
        <Hero/>
      </main>
    </div>
  );
}
