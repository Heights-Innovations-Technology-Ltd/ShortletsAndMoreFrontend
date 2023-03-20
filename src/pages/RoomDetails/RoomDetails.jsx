import React from "react";
import { useParams } from "react-router-dom";
import HeroImage from "../../assets/heroimage_bg_Property.png";
import FooterSection from "../../layout/FooterSection/FooterSection";
import Hero from "../../layout/Hero/Hero";
import NavBar from "../../layout/Navbar/Navbar";
import RoomDetailsSection from "../../layout/RoomDetailsSection/RoomDetailsSection";

const RoomDetails = () => {
  const { roomID } = useParams();
  return (
    <div>
      {/* <TopBar /> */}
      <NavBar />
      <Hero
        HeroImage={HeroImage}
        // heroMainText="Let's Find an apartment that's perfect for you"
        // heroSubText="search confidently with your trusted source of apartment"
      />
      <RoomDetailsSection />

      <FooterSection />
    </div>
  );
};

export default RoomDetails;
