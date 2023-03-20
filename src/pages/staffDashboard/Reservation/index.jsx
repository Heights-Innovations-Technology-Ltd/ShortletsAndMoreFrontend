import React, { useState } from "react";
import StaffHeader from "../../../components/StaffHeader";
import { Dialog } from "@mui/material";
import {
  CloseWrapper,
  ModalButton,
  ModalWrapper,
  Status,
  TableContainer,
  TextContainer,
  Top,
  PriceText,
  ModalContent,
} from "./style";
import { ReactComponent as CloseIcon } from "../../../assets/svg/close.svg";
import PrimaryButton from "../../../components/PrimaryButton";

import StaffTable from "../../../components/Table";
import { useGetAllBookingsQuery } from "../../../store/Services/staffService";
import PuffLoader from "../../../components/Loader";

const StaffReservation = () => {
  const getAllBookings = useGetAllBookingsQuery();
  const [openModal, setOpenModal] = useState(false);
  const [getClickedData, setClickedData] = useState({});

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleView = (referenceNumber) => {
    setOpenModal(true);
    const check = getAllBookings?.data?.data?.find(
      (reserve) => reserve.referenceNumber === referenceNumber
    );
    setClickedData(check);
  };
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
    <PrimaryButton
      title=" View "
      lightBtn
      onClick={() => handleView(data.referenceNumber)}
    />,
  ]);

  return (
    <div>
      <StaffHeader title="Reservations" />
      <TableContainer>
        {getAllBookings?.isLoading ? (
          <PuffLoader />
        ) : (
          <StaffTable header={header} body={dataBody} />
        )}
      </TableContainer>

      <Dialog open={openModal} fullWidth maxWidth="sm">
        <ModalWrapper>
          <Top>
            <TextContainer>
              <h1 className="ml-4 mb-4 font-semibold text-xl text-left">
                Reservation
              </h1>
            </TextContainer>
            <CloseWrapper onClick={handleModalClose}>
              <CloseIcon />
            </CloseWrapper>
          </Top>

          <ModalContent>
            <PriceText>{getClickedData?.guest}</PriceText>
            <PriceText>{getClickedData?.totalPrice}</PriceText>
            <PriceText>
              Number of Room(s): {getClickedData?.numberOfRooms}
            </PriceText>
            <Status
              color={
                getClickedData?.status === "booked"
                  ? "#2F8511"
                  : getClickedData?.status === "reserved"
                  ? "#FFCA2A"
                  : "#C43C20"
              }
              background={
                getClickedData?.status === "booked"
                  ? "rgba(47, 133, 17, 0.1)"
                  : getClickedData?.status === "reserved"
                  ? "rgba(255, 233, 168, 0.5)"
                  : "rgba(231, 175, 164, 0.3)"
              }
            >
              {getClickedData?.status}
            </Status>
          </ModalContent>
        </ModalWrapper>
      </Dialog>
    </div>
  );
};

export default StaffReservation;
