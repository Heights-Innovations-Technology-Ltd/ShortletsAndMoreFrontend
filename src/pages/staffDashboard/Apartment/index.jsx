import React from "react";
import ApartmentCard from "../../../components/Cards/ApartmentCard";
import StaffHeader from "../../../components/StaffHeader";
import { useGetAllApartmentQuery } from "../../../store/Services/apartmentService";
import { ApartmentContainer, ButtonWrapper, LeftIconContainer } from "./style";
import image from "../../../assets/listing_img_four.png";
import { useEffect } from "react";
import { useState } from "react";
import { FaPen, FaPlus } from "react-icons/fa";
import PrimaryButton from "../../../components/PrimaryButton";
import { similarListingData } from "../../../utils/config";
import { useNavigate } from "react-router-dom";
// import { ReactComponent as EditIcon } from "../../../assets/svg/edit.svg";
const iconName = (
  <LeftIconContainer>
    <FaPen color="#8BA00D" />
  </LeftIconContainer>
);

const addIcon = <FaPlus color="white" />;
const StaffApartment = () => {
  const navigate = useNavigate();
  const [apartment, setApartment] = useState([]);
  const { data, isLoading, isSuccess, isError } = useGetAllApartmentQuery();
  useEffect(() => {
    setApartment(data?.data);
  }, [data]);

  const handleStaffApartmentClick = (apartmentId) => {
    console.log("lcccc");
    navigate("/staff/apartments/rooms");
    localStorage.setItem("staffApartmentID", JSON.stringify(apartmentId));
  };

  return (
    <div>
      <StaffHeader title="Apartments" />
      <ButtonWrapper>
        <PrimaryButton title="Create Apartments" leftIcon iconName={addIcon} />
      </ButtonWrapper>
      <ApartmentContainer>
        {apartment?.map((apartment, index) => (
          <div key={apartment.id}>
            <ApartmentCard
              key={index}
              landing
              staff
              apartmentImage={image}
              apartmentName={apartment.name}
              apartmentLocation="234 Ring road, Lekki Phase 1, Lekki, Lagos"
              apartmentDetails={apartment.description}
              iconName={iconName}
              handleStaffApartmentClick={() =>
                handleStaffApartmentClick(apartment.id)
              }
              //   onApartmentClick={() =>
              //     handleApartmentClick(apartment.id)
              //   }
            />
          </div>
        ))}

        {similarListingData.map((apartment, index) => (
          <div key={index}>
            <ApartmentCard
              apartmentImage={apartment.apartmentImage}
              landing
              staff
              iconName={iconName}
              apartmentName={apartment.apartmentName}
              apartmentLocation={apartment.apartmentLocation}
              apartmentDetails={apartment.apartmentDetails}
            />
          </div>
        ))}
      </ApartmentContainer>
    </div>
  );
};

export default StaffApartment;
