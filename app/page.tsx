import Hero from "./components/hero/page";
import Navbar from "./components/navbar/page";

export default function () {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
