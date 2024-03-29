import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import HeaderSin from "./components/HeaderSin";
import HeroSin from "./components/HeroSin";
import AboutUs from "./components/AboutUs";
import Payment from "./components/Payment";
import Updates from "./components/Updates";
import Footer from "./components/Footer";
import Tips from "./components/Tips";

export default function App() {
  return (
    <header>
      <SignedOut>
        <Header id="Home"/>
        <Hero/>
        <AboutUs/>
        <Tips/>
        <Updates/>
        <Footer/>
      </SignedOut>
      <SignedIn>
        <HeaderSin id="SignInHome"/>
        <HeroSin/>
        <AboutUs/>
        <Payment/>
        <Tips/>
        <Updates/>
        <Footer/>
      </SignedIn>
    </header>
  )
}