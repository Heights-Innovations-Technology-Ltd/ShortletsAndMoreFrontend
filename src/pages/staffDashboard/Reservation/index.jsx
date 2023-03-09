import React from "react";
import StaffHeader from "../../../components/StaffHeader";

import { Status, TableContainer } from "./style";

import PrimaryButton from "../../../components/PrimaryButton";

import StaffTable from "../../../components/Table";
import { useGetAllBookingsQuery } from "../../../store/Services/staffService";
import PuffLoader from "../../../components/Loader";


const StaffReservation = () => {
  const getAllBookings = useGetAllBookingsQuery();
  // const [table ]

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
      <TableContainer>
        {getAllBookings?.isLoading ? (
          <PuffLoader />
        ) : (
          <StaffTable header={header} body={dataBody} />
        )}
      </TableContainer>
    </div>
  );
};

export default StaffReservation;
