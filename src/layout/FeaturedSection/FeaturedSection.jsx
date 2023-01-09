import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToCartCard from "../../components/Cards/AddToCartCard";
import { getFeaturedRoomsAsync } from "../../store/roomSlice/roomSlice";
import imageFive from "../../assets/recent_listing.png";

const FeaturedSection = () => {
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
    <>
      <h1 className="text-center mt-8 mb-4 lg:text-2xl font-semibold">
        Featured room
      </h1>
      <p
        className="text-center lg:text-sm w-6/12 mb-8 my-0 mx-auto"
        style={{ width: "53%" }}
      >
        Looking for a comfortable and stylish place on your next vacaction? Look
        no further than our featured room!
      </p>

      <div className="flex items-center justify-center flex-wrap">
        {availableRooms?.map((apartment) => (
          <>
            <AddToCartCard
              apartmentImage={imageFive}
              apartmentName={apartment?.description}
              apartmentPrice={apartment?.price}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default FeaturedSection;
