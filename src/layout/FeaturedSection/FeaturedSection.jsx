import React, { useEffect, useState } from "react";
import AddToCartCard from "../../components/Cards/AddToCartCard";
import imageFive from "../../assets/recent_listing.png";
import { useGetAllRoomTypeQuery } from "../../store/Services/apartmentService";
import PuffLoader from "../../components/Loader";

const FeaturedSection = () => {
  const [availableRooms, setAvailableRooms] = useState([]);

  const { data, isLoading, isSuccess, isError } = useGetAllRoomTypeQuery(14);

  useEffect(() => {
    setAvailableRooms(data);
  }, [data]);

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
        {isLoading ? (
          <PuffLoader />
        ) : (
          availableRooms?.map((apartment) => (
            <div key={apartment.id}>
              <AddToCartCard
                apartmentImage={imageFive}
                apartmentName={apartment.name}
                apartmentPrice={apartment.price}
                apartmentDescription={apartment.description}
                landing
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default FeaturedSection;
