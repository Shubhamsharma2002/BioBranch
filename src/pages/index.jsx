import Footer from "@/components/Footer";
import IntroSection from "@/components/IntroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 ">
        <IntroSection/>
      </main>
      <Footer />
    </div>
  );
}
