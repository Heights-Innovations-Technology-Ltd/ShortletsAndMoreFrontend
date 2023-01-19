import React from "react";
import HeroImage from "../../assets/heroimage_bg_home.png";
import AboutUs from "../../layout/AboutUs";
import ExplorePropertiesSection from "../../layout/ExplorePropertiesSection/ExplorePropertiesSection";
import FeaturedSection from "../../layout/FeaturedSection/FeaturedSection";
import FooterSection from "../../layout/FooterSection/FooterSection";
import Hero from "../../layout/Hero/Hero";
import NavBar from "../../layout/Navbar/Navbar";
import OurTestimonialSection from "../../layout/OurTestimonialSection/OurTestimonialSection";
import RecentListingSection from "../../layout/RecentListingSection/RecentListingSection";
import SignUpNewsLetterSection from "../../layout/SignUpNewsLetterSection/SignUpNewsLetterSection";
import WhyChooseUsSection from "../../layout/WhyChooseUsSection/WhyChooseUsSection";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero
        HeroImage={HeroImage}
        heroMainText="Let's Find an apartment that's perfect for you"
        heroSubText="search confidently with your trusted source of apartment"
        objectCover="object-cover"
        opacity60="opacity-60"
      />
      <RecentListingSection />
      <FeaturedSection />
      <AboutUs />
      {/* <ExplorePropertiesSection /> */}
      <WhyChooseUsSection />
      <OurTestimonialSection />
      <SignUpNewsLetterSection />
      <FooterSection />
    </>
  );
};

export default Home;
