import React from "react";
import StaffHeader from "../../../components/StaffHeader";

import {
  BackText,
  BackWrapper,
  ButtonContainer,
  ButtonWrapper,
  Status,
  TableContainer,
} from "./style";

import PrimaryButton from "../../../components/PrimaryButton";
import StaffTable from "../../../components/Table";
import { FaRedo, FaPlus, FaPen } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import {
  useGetAllStaffsQuery,
  useDeleteUserMutation,
  useGetAllApartmentsQuery,
} from "../../../store/Services/staffService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const process = <FaPen color="white" size={14} />;
const deleteIcon = <AiOutlineDelete color="white" size={18} />;
const addIcon = <FaPlus color="white" />;

const StaffSettingsCategories = () => {
  const [deleteUser] = useDeleteUserMutation();
  const navigate = useNavigate();
  const { data, refetch } = useGetAllApartmentsQuery();
  let localApartmentID = localStorage.getItem("staffCategoryID");
  let CategoyId = JSON.parse(localApartmentID);

  console.log(data?.data);
  const filteredList = data?.data?.filter(
    (filter) => filter.categoryId === CategoyId
  );
  console.log(filteredList);
  const header = ["Name", "Number of Apartments", "Created On", "Action"];
  const dataBody = filteredList?.map((data) => [
    <>{data.name}</>,
    data.categoryId,
    data.categoryId,
    <ButtonContainer>
      <PrimaryButton title="Edit" leftIcon iconName={process} />
      <PrimaryButton
        title="Delete"
        redBtn
        leftIcon
        iconName={deleteIcon}
        // onClick={() => handleDeleteUser(data.id)}
      />
    </ButtonContainer>,
  ]);

  const handleBack = () => {
    navigate(-1);
  };

  // const handleDeleteCategory = async (userId) => {
  //   const deleteResponse = await deleteUser(userId);

  //   const error = deleteResponse?.error;
  //   const responseData = deleteResponse?.data;
  //   if (responseData) {
  //     toast.success(responseData?.message);
  //     refetch();
  //   }
  //   if (error) {
  //     toast.error("Error Occurred");
  //   }
  // };
  return (
    <div>
      <StaffHeader title="Settings/Categories" />
      <ButtonWrapper>
        <BackWrapper onClick={handleBack}>
          <AiFillCaretLeft color="#8BA00D" size="24px" />
          <BackText>Back</BackText>
        </BackWrapper>
        <PrimaryButton title="Add Category" leftIcon iconName={addIcon} />
      </ButtonWrapper>

      <TableContainer>
        <StaffTable header={header} body={dataBody} />
      </TableContainer>
    </div>
  );
};

export default StaffSettingsCategories;
