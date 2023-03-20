import React, { useEffect, useState } from "react";
import {
  BsArrowRightShort,
  BsGeoAltFill,
  BsShieldShaded,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import image from "../../assets/listing_img_four.png";
import listing_img_one from "../../assets/listing_img_one.png";
import listing_img_three from "../../assets/listing_img_three.png";
import listing_img_two from "../../assets/listing_img_two.png";
import ApartmentCard from "../../components/Cards/ApartmentCard";
import PuffLoader from "../../components/Loader";
import { getApartment } from "../../store/Action/actions";
import { useGetAllApartmentQuery } from "../../store/Services/apartmentService";
import { apartmentHomeData } from "../../utils/config";
// import { Puff } from "react-loading-icons";
const RecentListingSection = () => {
  const dispatch = useDispatch();
  const [apartmentData, setApartmentData] = useState([]);

  const { data, isLoading, isSuccess, isError } = useGetAllApartmentQuery();

  useEffect(() => {
    setApartmentData(data?.data);
  }, [data]);

  return (
    <>
      <h1 className="text-center mt-8 mb-4 lg:text-2xl font-semibold">
        Recent Apartment Listings
      </h1>
      <p
        className="text-center lg:text-sm w-6/12 mb-8 my-0 mx-auto"
        style={{ width: "53%" }}
      >
        If you're looking for a brand new, cutting edge apartment in the heart
        of the city, look no further than our recent development
      </p>

      <div className="flex items-center justify-center flex-wrap">
        {isLoading ? (
          <PuffLoader />
        ) : (
          apartmentData?.slice(0, 4).map((apartment) => (
            <div key={apartment.id}>
              <ApartmentCard
                landing
                apartmentImage={image}
                apartmentName={apartment.name}
                apartmentLocation="234 Ring road, Lekki Phase 1, Lekki, Lagos"
                apartmentDetails={apartment.description}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default RecentListingSection;
