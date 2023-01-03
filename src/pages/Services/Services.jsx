import React from "react";
import HeroImage from "../../assets/heroimage_bg_Property.png";
import ApartmentSection from "../../layout/ApartmentSection/ApartmentSection";
// import ExplorePropertiesSection from "../../layout/ExplorePropertiesSection/ExplorePropertiesSection";
import FooterSection from "../../layout/FooterSection/FooterSection";
import Hero from "../../layout/Hero/Hero";
import NavBar from "../../layout/Navbar/Navbar";
// import OurTestimonialSection from "../../layout/OurTestimonialSection/OurTestimonialSection";
// import RecentListingSection from "../../layout/RecentListingSection/RecentListingSection";
// import SignUpNewsLetterSection from "../../layout/SignUpNewsLetterSection/SignUpNewsLetterSection";
// import TopBar from "../../layout/TopBar/TopBar";
// import WhyChooseUsSection from "../../layout/WhyChooseUsSection/WhyChooseUsSection";

const Services = () => {
  return (
    <div>
      {/* <TopBar /> */}
      <NavBar marginTop="2rem" absolute="absolute" />
      <Hero
        HeroImage={HeroImage}
        // heroMainText="Let's Find an apartment that's perfect for you"
        // heroSubText="search confidently with your trusted source of apartment"
      />
      {/* <RecentListingSection /> */}
      <ApartmentSection />
      {/* <ExplorePropertiesSection /> */}
      {/* <WhyChooseUsSection /> */}
      {/* <OurTestimonialSection /> */}
      {/* <SignUpNewsLetterSection /> */}
      <FooterSection />
    </div>
  );
};

export default Services;
