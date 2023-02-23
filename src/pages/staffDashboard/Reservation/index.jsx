import React from "react";
import ApartmentCard from "../../../components/Cards/ApartmentCard";
import StaffHeader from "../../../components/StaffHeader";
import {
  useGetAllApartmentQuery,
  useGetAllRoomTypeQuery,
} from "../../../store/Services/apartmentService";
import {
  ApartmentContainer,
  ButtonWrapper,
  LeftIconContainer,
  Status,
  TableContainer,
} from "./style";
import image from "../../../assets/listing_img_four.png";
import { useEffect } from "react";
import { useState } from "react";
import { FaPen, FaPlus } from "react-icons/fa";
import PrimaryButton from "../../../components/PrimaryButton";
import {
  servicesData,
  similarListingData,
  tableData,
  tableDatas,
} from "../../../utils/config";
import ServiceCard from "../../../components/Cards/ServiceCard";
import StaffTable from "../../../components/Table";
import { useGetAllBookingsQuery } from "../../../store/Services/staffService";
// import { ReactComponent as EditIcon } from "../../../assets/svg/edit.svg";
const iconName = (
  <LeftIconContainer>
    <FaPen color="#8BA00D" />
  </LeftIconContainer>
);

const addIcon = <FaPlus color="white" />;
const StaffReservation = () => {
  const getAllBookings = useGetAllBookingsQuery();
  const header = [
    "Name",
    "No of Rooms",
    "Start Date",
    "End Date",
    "Status",
    "Action",
  ];
  const dataBody = getAllBookings?.data?.data?.map((data) => [
    data.guest,
    data.numberOfRooms,
    data.startDate.slice(0, 10),
    data.endDate.slice(0, 10),
    <Status
      color={
        data.status === "booked"
          ? "#2F8511"
          : data.status === "Pending"
          ? "#FFCA2A"
          : "#C43C20"
      }
      background={
        data.status === "booked"
          ? "rgba(47, 133, 17, 0.1)"
          : data.status === "Pending"
          ? "rgba(255, 233, 168, 0.5)"
          : "rgba(231, 175, 164, 0.3)"
      }
    >
      {data.status}
    </Status>,
    <PrimaryButton title=" View " lightBtn />,
  ]);

  return (
    <div>
      <StaffHeader title="Reservations" />
      {/* <ButtonWrapper>
        <PrimaryButton title="Third Part Booking" leftIcon iconName={addIcon} />
      </ButtonWrapper> */}
      <TableContainer>
        <StaffTable header={header} body={dataBody} />
      </TableContainer>
    </div>
  );
};

export default StaffReservation;
