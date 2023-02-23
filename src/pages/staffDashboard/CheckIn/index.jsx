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
  TableContainer,
} from "./style";
import image from "../../../assets/listing_img_four.png";
import { useEffect } from "react";
import { useState } from "react";
import { FaPen, FaPlus } from "react-icons/fa";
import PrimaryButton from "../../../components/PrimaryButton";
import { useGetAllCheckInsQuery } from "../../../store/Services/staffService";
import {
  servicesData,
  similarListingData,
  tableData,
  tableDatas,
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
  const getAllCheckIns = useGetAllCheckInsQuery();
  const header = ["Name", "Apartment", "Room Type", "Date", "Time", "Action"];
  const dataBody = tableDatas.map((data) => [
    data.name,
    data.apartment,
    data.roomType,
    data.date,
    data.time,
    <PrimaryButton title="Check-Out" />,
  ]);

  return (
    <div>
      <StaffHeader title="Check - Ins" />
      {/* <ButtonWrapper>
        <PrimaryButton title="Third Part Booking" leftIcon iconName={addIcon} />
      </ButtonWrapper> */}
      <TableContainer>
        <StaffTable header={header} body={dataBody} />
      </TableContainer>
    </div>
  );
};

export default StaffCheckIn;
