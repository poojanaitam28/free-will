import React from "react";
import HeroSection from "./HeroSection";
import Products from "./Products";
import Trusted from "./Trusted";
import WhyisFree from "./WhyisFree";
import HowFreeWillWorks from "./HowFreeWillWorks";
import Legacy from "./Legacy";
import FAQs from "./FAQs";


function Home() {
  return (
    <div className="w-full h-auto">
     <HeroSection />
     <Products />
     <Trusted />
     <WhyisFree />
     <HowFreeWillWorks />
     <Legacy />
     <FAQs />
    </div>
  );
}

export default Home;
