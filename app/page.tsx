import FeaturePlants from "./components/featureplants/page";
import Hero from "./components/hero/page";
import Navbar from "./components/navbar/page";
import Sustanaibility from "./components/sustainablity/page";
import TrustText from "./components/trusttext/page";

export default function () {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustText />
        <FeaturePlants />
        <Sustanaibility />
      </main>
    </div>
  );
}
