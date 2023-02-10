import React from "react";
import StaffHeader from "../../../components/StaffHeader";

import { Status } from "./style";

import PrimaryButton from "../../../components/PrimaryButton";
import { tableDatas } from "../../../utils/config";
import StaffTable from "../../../components/Table";

const StaffSupport = () => {
  const header = [
    "Tickets",
    "Email",
    "Topic",
    "Request Status",
    "Last Updated",
    "Action",
  ];
  const dataBody = tableDatas.map((data) => [
    data.ticket,
    data.email,
    data.topic,
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
    data.time,
    <PrimaryButton title=" View " lightBtn />,
  ]);

  return (
    <div>
      <StaffHeader />
      <>
        <StaffTable header={header} body={dataBody} />
      </>
    </div>
  );
};

export default StaffSupport;
