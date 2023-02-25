import React from "react";
import StaffHeader from "../../../components/StaffHeader";

import { ButtonWrapper, Status, TableContainer } from "./style";

import { FaPen, FaPlus } from "react-icons/fa";
import PrimaryButton from "../../../components/PrimaryButton";

import StaffTable from "../../../components/Table";
import { useGetAllReservationsQuery } from "../../../store/Services/staffService";
import PuffLoader from "../../../components/Loader";

const addIcon = <FaPlus color="white" />;
const StaffBookings = () => {
  const getAllReservations = useGetAllReservationsQuery();
  const header = [
    "Name",
    "Reference Number",
    "Number of Rooms",
    "Start Date",
    "End Date",
    "Status",
  ];
  const dataBody = getAllReservations?.data?.data[0]?.map((data) => [
    data.guest,
    data.referenceNumber,
    data.numberOfRooms,
    data.startDate.slice(0, 10),
    data.endDate.slice(0, 10),
    <Status
      color={
        data.status === "Checked In"
          ? "#2F8511"
          : data.status === "Pending"
          ? "#FFCA2A"
          : "#C43C20"
      }
      background={
        data.status === "Checked In"
          ? "rgba(47, 133, 17, 0.1)"
          : data.status === "Pending"
          ? "rgba(255, 233, 168, 0.5)"
          : "rgba(231, 175, 164, 0.3)"
      }
    >
      {data.status}
    </Status>,
  ]);

  return (
    <div>
      <StaffHeader title="Bookings" />
      <ButtonWrapper>
        <PrimaryButton title="Third Part Booking" leftIcon iconName={addIcon} />
      </ButtonWrapper>
      <TableContainer>
        {getAllReservations?.isLoading ? (
          <PuffLoader />
        ) : (
          <StaffTable header={header} body={dataBody} arrOfObject />
        )}
      </TableContainer>
    </div>
  );
};

export default StaffBookings;
