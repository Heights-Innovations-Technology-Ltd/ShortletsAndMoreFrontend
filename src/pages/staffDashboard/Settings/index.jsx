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
import { servicesData, similarListingData } from "../../../utils/config";
import ServiceCard from "../../../components/Cards/ServiceCard";
// import { ReactComponent as EditIcon } from "../../../assets/svg/edit.svg";
const iconName = (
  <LeftIconContainer>
    <FaPen color="#8BA00D" />
  </LeftIconContainer>
);

const addIcon = <FaPlus color="white" />;
const StaffSettings = () => {
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
      <StaffHeader title="Settings" />

      <ApartmentContainer>
        {servicesData.map((service) => (
          <div key={service.id}>
            <ServiceCard
              title={service.serviceTitle}
              detail={service.serviceDetails}
              image={service.serviceImage}
            />
          </div>
        ))}
      </ApartmentContainer>
    </div>
  );
};

export default StaffSettings;
