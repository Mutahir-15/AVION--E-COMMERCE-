import Features from "@/components/Features";
import Features2 from "@/components/Features2";
import HeroSection from "@/components/HeroSection";
import Listing from "@/components/Listing";
import SignUp from "@/components/SignUp";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <Listing/>
      <Features2/>
      <SignUp/>
    </div>
  );
}
