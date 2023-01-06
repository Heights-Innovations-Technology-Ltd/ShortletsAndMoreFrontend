import React from "react";
import ApartmentCard from "../components/Cards/ApartmentCard";
import PrimaryButton from "../components/PrimaryButton";
import image from "../assets/listing_img_one.png";
import imageFive from "../assets/recent_listing.png";
import AddToCartCard from "../components/Cards/AddToCartCard";
import HeroSearch from "../components/HeroSearch";

const Testing = () => {
  return (
    <div>
      <PrimaryButton title="View more" />
      <ApartmentCard
        apartmentImage={image}
        apartmentName="Apartment in ajah, Abraham"
        apartmentLocation="234 Ring road, Lekki Phase 1, Lekki, Lagos"
        apartmentDetails="Our fully furnished and equipped apartments are perfect for business
            or pleasure."
      />

      <AddToCartCard
        apartmentImage={imageFive}
        apartmentName="Luxury duplex With Terrace"
        apartmentPrice="34,900"
      />
      <HeroSearch />
    </div>
  );
};

export default Testing;
