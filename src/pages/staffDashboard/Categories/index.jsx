import React, { useState } from "react";
import StaffHeader from "../../../components/StaffHeader";

import {
  BackText,
  BackWrapper,
  ButtonContainer,
  ButtonWrapper,
  CloseWrapper,
  FormContainer,
  ModalButton,
  ModalWrapper,
  TableContainer,
  TextContainer,
  Top,
} from "./style";

import PrimaryButton from "../../../components/PrimaryButton";
import StaffTable from "../../../components/Table";
import { FaPlus, FaPen } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import { Dialog } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useEditCategoryMutation,
  useCreateCategoryMutation,
  useGetAllCategoriesQuery,
} from "../../../store/Services/staffService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../../../assets/svg/close.svg";
import PrimaryInput from "../../../components/Input";
import { categorySchema } from "../../../utils/config";
import PuffLoader from "../../../components/Loader";

const process = <FaPen color="white" size={14} />;
const deleteIcon = <AiOutlineDelete color="white" size={18} />;
const addIcon = <FaPlus color="white" />;

const StaffSettingsCategories = () => {
  const navigate = useNavigate();
  const { data, refetch, isLoading } = useGetAllCategoriesQuery();
  const [createCategory, createState] = useCreateCategoryMutation();
  const [editCategory, editState] = useEditCategoryMutation();

  const [openModal, setOpenModal] = useState(false);
  const [action, setAction] = useState();
  const [fetchedEditCategory, setFetchedEditCategory] = useState({});
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(categorySchema),
  });

  console.log(data?.data);

  const header = ["Name", "Number of Apartments", "Created On", "Action"];
  const dataBody = data?.data?.map((data) => [
    <>{data.Name}</>,
    data.id,
    data.id,
    <ButtonContainer>
      <PrimaryButton
        title="Edit"
        leftIcon
        iconName={process}
        onClick={() => handleCategoryEdit(data.id)}
      />
      <PrimaryButton
        title="Delete"
        redBtn
        leftIcon
        iconName={deleteIcon}
        onClick={() => handleDeleteCategory(data.id)}
      />
    </ButtonContainer>,
  ]);

  const handleBack = () => {
    navigate(-1);
  };
  const addCategory = () => {
    setAction("add");
    setOpenModal(true);
  };

  const handleDeleteCategory = (categoryId) => {};

  const onSubmit = async (formData) => {
    setAction("add");
    console.log(formData);

    let createCateoryResponse = await createCategory(formData);
    console.log("ggg", createCateoryResponse);
    const error = createCateoryResponse?.error;
    const responseData = createCateoryResponse?.data;
    if (responseData) {
      toast.success(responseData?.message);
      refetch();
      setOpenModal(false);
    }
    if (error) {
      toast.error("Error Occurred");
    }
  };

  const handleCategoryEdit = async (categoryId) => {
    setAction("edit");
    setOpenModal(true);

    const getCategoryDetails = data?.data.find(
      (category) => category.id === categoryId
    );
    setFetchedEditCategory(getCategoryDetails);
    console.log("getRoomDetails", getCategoryDetails);
    if (getCategoryDetails) {
      setValue("categoryName", getCategoryDetails?.name, {
        shouldValidate: true,
      });
    } else {
      setValue("categoryName", "");
    }
  };
  const handleEdit = async (formData) => {
    setAction("edit");
    console.log(formData);
    let editCateoryResponse = await editCategory({
      id: fetchedEditCategory?.id,
      categoryName: formData.categoryName,
    });

    const error = editCateoryResponse?.error;
    const responseData = editCateoryResponse?.data;
    if (responseData) {
      toast.success(responseData?.message);
      refetch();
      setOpenModal(false);
    }
    if (error) {
      toast.error("Error Occurred");
    }
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <StaffHeader title="Settings/Categories" />
      <ButtonWrapper>
        <BackWrapper onClick={handleBack}>
          <AiFillCaretLeft color="#8BA00D" size="24px" />
          <BackText>Back</BackText>
        </BackWrapper>
        <PrimaryButton
          title="Add Category"
          leftIcon
          iconName={addIcon}
          onClick={addCategory}
        />
      </ButtonWrapper>

      <TableContainer>
        {isLoading ? (
          <PuffLoader />
        ) : (
          <StaffTable header={header} body={dataBody} />
        )}
      </TableContainer>

      <Dialog open={openModal} fullWidth maxWidth="sm">
        <ModalWrapper>
          <Top>
            <CloseWrapper onClick={handleModalClose}>
              <CloseIcon />
            </CloseWrapper>
          </Top>
          <TextContainer>
            <h1 className="ml-4 mb-4 font-semibold text-xl text-left">
              {action === "add" ? "Create a Category" : "Edit Category"}
            </h1>
          </TextContainer>

          <FormContainer
            onSubmit={
              action === "add"
                ? handleSubmit(onSubmit)
                : handleSubmit(handleEdit)
            }
          >
            <PrimaryInput
              placeholder="Category Name"
              type="text"
              label="Cateory Name"
              register={register}
              name="categoryName"
              // error={errors.roomType?.message}
            />

            <ModalButton>
              <PrimaryButton
                title={action === "add" ? "Create Category" : "Edit Category"}
                width="100%"
                type="submit"
                loading={
                  action === "add" ? createState.isLoading : editState.isLoading
                }
              />
            </ModalButton>
          </FormContainer>
        </ModalWrapper>
      </Dialog>
    </div>
  );
};

export default StaffSettingsCategories;
