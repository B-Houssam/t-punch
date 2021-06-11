import React, { useState } from "react";
//import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
//import HeroSection from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Services from "../components/whySection";
import { homeObj, homeObj2 } from "../components/InfoSection/Data";
import Ftr from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle}></Navbar>
      {/*<HeroSection></HeroSection>*/}
      <InfoSection {...homeObj}></InfoSection>
      <Services></Services>
      <InfoSection {...homeObj2}></InfoSection>
      <Ftr></Ftr>
    </>
  );
};

export default Home;
