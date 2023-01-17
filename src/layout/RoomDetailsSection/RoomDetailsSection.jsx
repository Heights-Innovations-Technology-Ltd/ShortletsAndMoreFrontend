import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { PaginationNav1Presentation } from "../../components/Pagination/Pagination";
import galleryMainImage from "../../assets/gallery_main.png";
import ApartmentCard from "../../components/Cards/ApartmentCard";
import { roomDetailsGalleryData, similarListingData } from "../../utils/config";

const RoomDetailsSection = () => {
  const { featuredRooms, loading, success, errorr } = useSelector(
    (store) => store.apartmentDataReducer
  );
  console.log("fetch", featuredRooms);

  const { id } = useParams();
  console.log("fetch", id);

  // useEffect(() => {
  //   const responseData = data === undefined ? [] : [...data];

  //   const rewardDetails = responseData.find(
  //     (reward) => reward.rewardID === rewardID
  //   );
  //   setSelectedReward(rewardDetails);
  //   // console.log(rewardDetails);
  // }, [data]);

  return (
    <>
      {/* <h1 className="ml-4 font-semibold mb-2">Luxuxry Duplex With Terrace</h1>
      <p>234 Ring road, Lekki Phase 1, Lekki, Lagos</p> */}
      <div className="flex justify-center items-start p-20 bg-gray-100">
        <div className="bg-white shadow-md m-3 p-4" style={{ width: "600px" }}>
          <h3>Description</h3>
          <p style={{ fontSize: "0.5rem" }}>
            Occupying over 8,000 square feet, perched over 1,100 feetin the air
            with absolutely breathtaking panoramic 360-degree views of all of
            New York City and the surrounding tri-state area, The 82nd Floor at
            432 Park Avenue has been completely reimagined by one of the most
            sought-after design houses in London and represents an utterly
            unique opportunity to own a globally significant property.
          </p>

          <p
            className="underline mt-20 mb-10"
            style={{ fontSize: "0.5rem", color: "#8BA00D" }}
          >
            Show more
          </p>

          <hr />

          <h6 className="mt-4">Gallery</h6>
          <div>
            <div className="flex flex-col justify-center items-center p-1">
              <img className="" src={galleryMainImage} alt="" />

              <div className="flex items-center justify-between mt-4">
                {roomDetailsGalleryData.map((data) => {
                  return (
                    <div className="p-1">
                      <img className="" src={data.gallerySubImage} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <h6 className="mt-4">Features</h6>
        </div>
      </div>

      <h2 className="text-center">Similar Listings</h2>
      <div className="flex flex-wrap md:flex-wrap justify-center">
        <div className="flex flex-row items-center w-4/5">
          {similarListingData.map((apartment) => (
            <div>
              <ApartmentCard
                apartmentImage={apartment.apartmentImage}
                apartmentName={apartment.apartmentName}
                apartmentLocation={apartment.apartmentLocation}
                apartmentDetails={apartment.apartmentDetails}
              />
            </div>
          ))}

          {/* <PaginationNav1Presentation /> */}
        </div>
      </div>
    </>
  );
};

export default RoomDetailsSection;
