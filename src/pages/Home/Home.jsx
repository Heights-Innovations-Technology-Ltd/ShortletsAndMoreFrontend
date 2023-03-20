import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const message = queryParams.get("message");

  const status = queryParams.get("status");

  useEffect(() => {
    if (status === "success") {
      navigate("/confirm");
      toast.success(message);
    }
  }, [status, message, navigate]);

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
      {/* <AboutUs /> */}
      {/* <ExplorePropertiesSection /> */}
      <WhyChooseUsSection />
      <OurTestimonialSection />
      <SignUpNewsLetterSection />
      <FooterSection />
    </>
  );
};

export default Home;
