import React, { useState } from "react";
import StaffHeader from "../../../components/StaffHeader";

import {
  ButtonWrapper,
  ModalWrapper,
  Status,
  TableContainer,
  CloseWrapper,
  FormContainer,
  ModalButton,
  TextContainer,
  Top,
} from "./style";
import { Dialog } from "@mui/material";
import { ReactComponent as CloseIcon } from "../../../assets/svg/close.svg";
import { FaPen, FaPlus } from "react-icons/fa";
import PrimaryButton from "../../../components/PrimaryButton";

import PuffLoader from "../../../components/Loader";
import StaffTable from "../../../components/Table";
import TestingMultiple from "../../../components/Input/testingMultiple";
import toast from "react-hot-toast";
import { useGetAllReservationsQuery } from "../../../store/Services/apartmentService";

const addIcon = <FaPlus color="white" />;

const UserBooking = () => {
  const localProfile = localStorage.getItem("userProfile");
  const parseData = JSON.parse(localProfile);
  let guestEmail = parseData?.email;
  const getAllReservation = useGetAllReservationsQuery(guestEmail);

  const [reference, setReference] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [roomList, setRoomList] = useState([]);
  const [lists, setList] = useState([]);

  let filteredList = getAllReservation?.data?.data?.filter(
    (item) => item.status === "booked"
  );

  console.log(filteredList);

  const header = [
    "Name",
    "Reference Number",
    "Number of Rooms",
    "Start Date",
    "End Date",
    "Status",
    "Action",
  ];

  let responseData = filteredList || [];

  const dataBody = responseData.map((data) => [
    data.guest,
    data.referenceNumber,
    data.numberOfRooms,
    data.startDate.slice(0, 10),
    data.endDate.slice(0, 10),
    <Status
      color={
        data.status === "booked"
          ? "#2F8511"
          : data.status === "reserved"
          ? "#FFCA2A"
          : "#C43C20"
      }
      background={
        data.status === "booked"
          ? "rgba(47, 133, 17, 0.1)"
          : data.status === "reserved"
          ? "rgba(255, 233, 168, 0.5)"
          : "rgba(231, 175, 164, 0.3)"
      }
    >
      {data.status}
    </Status>,
    <PrimaryButton title="Check In" />,
  ]);

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <StaffHeader title="Reservation History" />
      <ButtonWrapper>
        <PrimaryButton title="Third Part Booking" leftIcon iconName={addIcon} />
      </ButtonWrapper>
      <TableContainer>
        {getAllReservation?.isLoading ? (
          <PuffLoader />
        ) : (
          <StaffTable header={header} body={dataBody} arrOfObject />
        )}
      </TableContainer>
    </div>
  );
};

export default UserBooking;
