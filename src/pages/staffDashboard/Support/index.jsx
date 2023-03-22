import React from "react";
import StaffHeader from "../../../components/StaffHeader";

import { Status, TableContainer } from "./style";
import PuffLoader from "../../../components/Loader";
import PrimaryButton from "../../../components/PrimaryButton";
import { tableDatas } from "../../../utils/config";
import StaffTable from "../../../components/Table";
import { useGetAllEnquiriesQuery } from "../../../store/Services/staffService";

const StaffSupport = () => {
  const getAllEnquiries = useGetAllEnquiriesQuery();

  console.log(getAllEnquiries?.data);
  const header = [
    "Tickets",
    "Email",
    "Topic",
    "Request Status",
    // "Last Updated",
    "Action",
  ];
  const dataBody = getAllEnquiries?.data?.data.map((data) => [
    data.ticketId,
    data.customerEmail,
    data.subject,
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
    // data.time,
    <PrimaryButton title=" View " lightBtn />,
  ]);

  return (
    <div>
      <StaffHeader title="Support" />
      <TableContainer>
        {getAllEnquiries?.isLoading ? (
          <PuffLoader />
        ) : (
          <StaffTable header={header} body={dataBody} arrOfObject />
        )}
      </TableContainer>
    </div>
  );
};

export default StaffSupport;
