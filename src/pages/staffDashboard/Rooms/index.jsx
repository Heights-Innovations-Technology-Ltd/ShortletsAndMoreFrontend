import React from "react";
import ApartmentCard from "../../../components/Cards/ApartmentCard";
import StaffHeader from "../../../components/StaffHeader";
import {
  useGetAllApartmentQuery,
  useGetAllRoomTypeQuery,
} from "../../../store/Services/apartmentService";
import { ApartmentContainer, ButtonWrapper, LeftIconContainer } from "./style";
import image from "../../../assets/listing_img_four.png";
import { useEffect } from "react";
import { useState } from "react";
import { FaPen, FaPlus } from "react-icons/fa";
import PrimaryButton from "../../../components/PrimaryButton";
import { similarListingData } from "../../../utils/config";
import AddToCartCard from "../../../components/Cards/AddToCartCard";
import imageFive from "../../../assets/recent_listing.png";
// import { ReactComponent as EditIcon } from "../../../assets/svg/edit.svg";
const iconName = (
  <LeftIconContainer>
    <FaPen color="#8BA00D" />
  </LeftIconContainer>
);

const addIcon = <FaPlus color="white" />;
const StaffRoom = () => {
  let localApartmentID = localStorage.getItem("staffApartmentID");
  let ApartmentId = JSON.parse(localApartmentID);

  const [room, setRooms] = useState([]);
  const { data, isLoading, isSuccess, isError } =
    useGetAllRoomTypeQuery(ApartmentId);
  useEffect(() => {
    setRooms(data?.data);
  }, [data]);

  return (
    <div>
      <StaffHeader title="Apartment/Rooms" />
      <ButtonWrapper>
        <PrimaryButton title="Create Rooms" leftIcon iconName={addIcon} />
      </ButtonWrapper>
      <ApartmentContainer>
        {room?.map((apartment, index) => (
          <>
            <AddToCartCard
              key={index}
              apartmentImage={imageFive}
              apartmentName={apartment.name}
              apartmentPrice={apartment.price}
              apartmentDescription={apartment.description}
              // handleNavigateToDetails={() =>
              //   handleNavigateToDetails(apartment.id)
              // }
            />
          </>
        ))}
      </ApartmentContainer>
    </div>
  );
};

export default StaffRoom;
