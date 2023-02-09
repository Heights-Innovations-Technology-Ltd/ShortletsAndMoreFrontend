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
import {
  servicesData,
  similarListingData,
  tableData,
} from "../../../utils/config";
import ServiceCard from "../../../components/Cards/ServiceCard";
import StaffTable from "../../../components/Table";
// import { ReactComponent as EditIcon } from "../../../assets/svg/edit.svg";
const iconName = (
  <LeftIconContainer>
    <FaPen color="#8BA00D" />
  </LeftIconContainer>
);

const addIcon = <FaPlus color="white" />;
const StaffCheckIn = () => {
  let localApartmentID = localStorage.getItem("staffApartmentID");
  let ApartmentId = JSON.parse(localApartmentID);

  const [room, setRooms] = useState([]);
  const { data, isLoading, isSuccess, isError } =
    useGetAllRoomTypeQuery(ApartmentId);
  useEffect(() => {
    setRooms(data?.data);
  }, [data]);

  const header = ["Name", "Apartment", "Room Type", "Date", "Time", "Status"];

  return (
    <div>
      <StaffHeader />

      <>
        <StaffTable header={header} body={tableData} />
      </>
    </div>
  );
};

export default StaffCheckIn;
