import React from "react";
import StaffHeader from "../../../components/StaffHeader";

import { ButtonContainer, Status, TableContainer } from "./style";

import PrimaryButton from "../../../components/PrimaryButton";
import { tableDatas } from "../../../utils/config";
import StaffTable from "../../../components/Table";
import { FaRedo } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const process = <FaRedo color="white" size={14} />;
const deleteIcon = <AiOutlineDelete color="white" size={18} />;
const StaffAccount = () => {
  const header = ["Name", "Email", "Phone Number", "Status", "Action"];
  const dataBody = tableDatas.map((data) => [
    data.name,
    data.email,
    data.number,
    <Status
      color={data.active === "Active" ? "#2F8511" : "#C43C20"}
      background={
        data.active === "Active"
          ? "rgba(47, 133, 17, 0.1)"
          : "rgba(231, 175, 164, 0.3)"
      }
      Icon
    >
      {data.active}
    </Status>,
    <ButtonContainer>
      <PrimaryButton title="Reset Password" leftIcon iconName={process} />
      <PrimaryButton title="Delete" redBtn leftIcon iconName={deleteIcon} />
    </ButtonContainer>,
  ]);

  return (
    <div>
      <StaffHeader title="Accounts" />
      <TableContainer>
        <StaffTable header={header} body={dataBody} />
      </TableContainer>
    </div>
  );
};

export default StaffAccount;
