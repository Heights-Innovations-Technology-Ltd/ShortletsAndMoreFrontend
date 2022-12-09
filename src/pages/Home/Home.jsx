import React from "react";
import ExplorePropertiesSection from "../../layout/ExplorePropertiesSection/ExplorePropertiesSection";
import FeaturedSection from "../../layout/FeaturedSection/FeaturedSection";
import FooterSection from "../../layout/FooterSection/FooterSection";
import Hero from "../../layout/Hero/Hero";
import NavBar from "../../layout/Navbar/Navbar";
import OurTestimonialSection from "../../layout/OurTestimonialSection/OurTestimonialSection";
import RecentListingSection from "../../layout/RecentListingSection/RecentListingSection";
import SignUpNewsLetterSection from "../../layout/SignUpNewsLetterSection/SignUpNewsLetterSection";
import TopBar from "../../layout/TopBar/TopBar";
import WhyChooseUsSection from "../../layout/WhyChooseUsSection/WhyChooseUsSection";

const Home = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <Hero />
      <RecentListingSection />
      <FeaturedSection />
      <ExplorePropertiesSection />
      <WhyChooseUsSection />
      <OurTestimonialSection />
      <SignUpNewsLetterSection />
      <FooterSection />
    </>
  );
};

export default Home;
