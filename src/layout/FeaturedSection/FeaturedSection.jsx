import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToCartCard from "../../components/Cards/AddToCartCard";
import { getRoomType } from "../../store/Action/actions";
import imageFive from "../../assets/recent_listing.png";

const FeaturedSection = () => {
  const [availableRooms, setAvailableRooms] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getRooms = async () => {
      const res = await dispatch(getRoomType(14));
      setAvailableRooms(res?.payload?.data);
    };

    getRooms();
  }, [dispatch]);

  console.log("availableRooms", availableRooms);
  return (
    <>
      <h1 className="text-center mt-8 mb-4 lg:text-2xl font-semibold">
        Featured room
      </h1>
      <p
        className="text-center lg:text-sm w-6/12 mb-8 my-0 mx-auto"
        style={{ width: "53%" }}
      >
        Looking for a comfortable and stylish place on your next vacation? Look
        no further than our featured room!
      </p>

      <div className="flex items-center justify-center flex-wrap">
        {availableRooms?.map((apartment) => (
          <div key={apartment.id}>
            <AddToCartCard
              apartmentImage={imageFive}
              apartmentName={apartment.name}
              apartmentPrice={apartment.price}
              apartmentDescription={apartment.description}
              landing
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedSection;
