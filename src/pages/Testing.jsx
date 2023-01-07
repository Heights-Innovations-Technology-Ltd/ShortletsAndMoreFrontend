import React, { useEffect } from "react";
import ApartmentCard from "../components/Cards/ApartmentCard";
import PrimaryButton from "../components/PrimaryButton";
import image from "../assets/listing_img_one.png";
import imageFive from "../assets/recent_listing.png";
import AddToCartCard from "../components/Cards/AddToCartCard";
import HeroSearch from "../components/HeroSearch";
import RowContainer from "../layout/Container";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getFeaturedRoomsAsync } from "../store/slice";
const Testing = () => {
  const rooms = useSelector(
    (state) => state.ApartmentDataReducer.featuredRooms
  );

  const availableRooms = rooms[0]?.data;
  const dispatch = useDispatch();
  console.log("Testing", availableRooms);

  useEffect(() => {
    dispatch(getFeaturedRoomsAsync());
  }, [dispatch]);

  return (
    <div>
      <PrimaryButton title="View more" />
      {/*<ApartmentCard
        apartmentImage={image}
        apartmentName="Apartment in ajah, Abraham"
        apartmentLocation="234 Ring road, Lekki Phase 1, Lekki, Lagos"
        apartmentDetails="Our fully furnished and equipped apartments are perfect for business
            or pleasure."
      /> */}
      {availableRooms?.map((apartment) => (
        <AddToCartCard
          apartmentImage={imageFive}
          apartmentName={apartment?.description}
          apartmentPrice={apartment?.price}
        />
      ))}
      {/* <AddToCartCard
        apartmentImage={imageFive}
        apartmentName="Luxury duplex With Terrace"
        apartmentPrice="34,900"
      />
      {/* <HeroSearch /> */}
      {/* <RowContainer />  */}
    </div>
  );
};

export default Testing;
