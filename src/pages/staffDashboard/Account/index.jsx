import React from "react";
import StaffHeader from "../../../components/StaffHeader";

import { ButtonContainer, Status, TableContainer } from "./style";

import PrimaryButton from "../../../components/PrimaryButton";
import StaffTable from "../../../components/Table";
import { FaRedo } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import {
  useGetAllStaffsQuery,
  useDeleteUserMutation,
} from "../../../store/Services/staffService";
import toast from "react-hot-toast";

const process = <FaRedo color="white" size={14} />;
const deleteIcon = <AiOutlineDelete color="white" size={18} />;
const StaffAccount = () => {
  const { data, refetch } = useGetAllStaffsQuery();
  const [deleteUser] = useDeleteUserMutation();

  const header = ["Name", "Email", "Username", "Status", "Action"];
  const dataBody = data?.data?.map((data) => [
    <>
      {data.lastName} {data.firstName}
    </>,
    data.email,
    data.userName,
    <Status
      color={data.isActive === true ? "#2F8511" : "#C43C20"}
      background={
        data.isActive === true
          ? "rgba(47, 133, 17, 0.1)"
          : "rgba(231, 175, 164, 0.3)"
      }
      Icon
    >
      {data.isActive + ""}
    </Status>,
    <ButtonContainer>
      <PrimaryButton title="Reset Password" leftIcon iconName={process} />
      <PrimaryButton
        title="Delete"
        redBtn
        leftIcon
        iconName={deleteIcon}
        onClick={() => handleDeleteUser(data.id)}
      />
    </ButtonContainer>,
  ]);

  const handleDeleteUser = async (userId) => {
    const deleteResponse = await deleteUser(userId);

    const error = deleteResponse?.error;
    const responseData = deleteResponse?.data;
    if (responseData) {
      toast.success(responseData?.message);
      refetch();
    }
    if (error) {
      toast.error("Error Occurred");
    }
  };
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
