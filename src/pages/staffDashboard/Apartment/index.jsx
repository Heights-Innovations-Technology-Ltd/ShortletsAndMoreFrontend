import React from "react";
import ApartmentCard from "../../../components/Cards/ApartmentCard";
import StaffHeader from "../../../components/StaffHeader";
import { useGetAllApartmentQuery } from "../../../store/Services/apartmentService";
import {
  ApartmentContainer,
  ButtonWrapper,
  CheckInput,
  CheckInputContainer,
  CheckListContainer,
  CloseWrapper,
  FormContainer,
  LeftIconContainer,
  ModalButton,
  ModalWrapper,
  TextContainer,
  TextTitle,
  Top,
} from "./style";
import image from "../../../assets/listing_img_four.png";
import { useEffect } from "react";
import { useState } from "react";
import { FaPen, FaPlus } from "react-icons/fa";
import PrimaryButton from "../../../components/PrimaryButton";
import {
  createApartmentSchema,
  similarListingData,
  cityOptions,
} from "../../../utils/config";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PrimaryInput from "../../../components/Input";
import { ReactComponent as CloseIcon } from "../../../assets/svg/close.svg";
import TextArea from "../../../components/TextArea";
import DropDown from "../../../components/Input/dropDown";
import {
  useCreateApartmentMutation,
  useEditApartmentMutation,
  useGetAllCategoriesQuery,
  useGetAllStatesQuery,
} from "../../../store/Services/staffService";
import PuffLoader from "../../../components/Loader";
import FileUpload from "../../../components/FileUpload";
// import { ReactComponent as EditIcon } from "../../../assets/svg/edit.svg";
const iconName = (
  <LeftIconContainer>
    <FaPen color="#8BA00D" />
  </LeftIconContainer>
);

const addIcon = <FaPlus color="white" />;
const StaffApartment = () => {
  const facilities = [
    { category: "Security" },
    { category: "Swimming Pool" },
    { category: "Parking" },
    { category: "Terrace" },
    { category: "Permint House" },
  ];

  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [action, setAction] = useState();
  const [checkedItems, setCheckedItems] = useState({});
  const [category, setCategory] = useState([]);
  const [clickedApartment, setClickedApartment] = useState({});
  const [clickedApartmentId, setClickedApartmentId] = useState();
  const [apartment, setApartment] = useState([]);
  const [image, setImage] = useState(null);
  const [stateContainer, setStateContainer] = useState([]);
  const { data, isLoading, refetch } = useGetAllApartmentQuery();

  const [createApartment] = useCreateApartmentMutation();
  const [editApartment, editState] = useEditApartmentMutation();
  const categories = useGetAllCategoriesQuery();
  const states = useGetAllStatesQuery();

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(createApartmentSchema),
  });

  useEffect(() => {
    setApartment(data?.data);
  }, [data]);

  useEffect(() => {
    setCategory(categories?.data?.data);
  }, [categories]);

  let categoryData = category?.map((c) => ({ value: c.id, label: c.name }));

  let allStates = states?.data?.data[0]?.states;

  let newStatesList = allStates?.map((state, index) => ({
    value: index,
    label: state,
  }));

  const handleHandleImage = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImage(file);
    console.log("files", file);
  };

  const handleCheckClick = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      facilities.forEach((item) => {
        if (value === item.category) {
          setCheckedItems((prev) => ({ ...prev, [value]: true }));
        }
      });
    } else {
      facilities.forEach((fac) => {
        if (value === fac.category) {
          setCheckedItems((prev) => {
            let object = { ...prev };
            let asArray = Object.entries(object);
            let filtered = asArray.filter(
              ([key, value]) => key !== fac.category
            );
            let newObj = Object.fromEntries(filtered);
            return newObj;
          });
        }
      });
    }
  };

  const handleStaffApartmentClick = (apartmentId) => {
    navigate("/staff/apartments/rooms");
    localStorage.setItem("staffApartmentID", JSON.stringify(apartmentId));
  };
  const handleCity = (value) => {
    var string = Object.values(value)[0];
    setValue("city", string, { shouldValidate: true });
  };

  const handleLocation = (value) => {
    var string = Object.values(value)[0];
    setValue("location", string, { shouldValidate: true });
  };

  const handleCategory = (value) => {
    var string = Object.values(value)[0];
    setValue("categoryId", string, { shouldValidate: true });
  };

  const addApartment = () => {
    setAction("add");
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setCheckedItems({});
    setOpenModal(false);
  };

  const onSubmit = async (formData) => {
    setAction("add");
    console.log("formData", formData);

    // const formImgData = new FormData();
    // formImgData.append("image", image);
    // let token = "Wb95IfBjzn0MUJOqTfGuVjJlzNxC8dehEYa9qgL0";
    // let api_key = "ca15a2995042ca013e148db93e887b74bec77";
    // let email =
    //   "v1.0-7995a01f297097c2dfbe68b7-cb8b703ce06e81ac6ea5804fa0e90df3e8904c64f0011598dc54a4cdf6585051fe4e6ad7689417ad516a5ddd47bac712070bb7e6b9dc766ca7a4e40cda2e98ffe137158ed122c47617";

    // const response = await fetch(
    //   "https://api.cloudflare.com/client/v4/accounts/cd9da82696b72c8181f03336f9f63667/images/v1",
    //   {
    //     headers: {
    //       "X-Auth-Email": email,
    //       "X-Auth-Key": api_key,
    //       Authorization: `Bearer ${token}`,
    //     },
    //     method: "POST",
    //     body: formImgData,
    //   }
    // );
    // console.log("response", response);
    // // const imageUrl = await response.text()

    let requiredData = {
      ...formData,

      facilities: checkedItems,
    };

    console.log("requiredData", requiredData);

    let createApartmentResponse = await createApartment(requiredData);
    console.log("ggg", createApartmentResponse);
    const error = createApartmentResponse?.error;
    const responseData = createApartmentResponse?.data;
    if (responseData) {
      toast.success(responseData?.message);
      refetch();
      setOpenModal(false);
    }
    if (error) {
      toast.error("Error Occurred");
    }
  };

  const handleEditApartment = async (id) => {
    console.log("apartment Id", id);
    setAction("edit");
    setOpenModal(true);
    setClickedApartmentId(id);
    const getApartmentDetails = await data?.data?.find(
      (apartment) => apartment.id === id
    );
    console.log("araobje", getApartmentDetails);
    setClickedApartment(getApartmentDetails);
    console.log("details", clickedApartment);
    if (getApartmentDetails && action === "edit") {
      setValue("name", getApartmentDetails?.name, {
        shouldValidate: true,
      });

      setValue("description", getApartmentDetails?.description, {
        shouldValidate: true,
      });
      setValue("city", getApartmentDetails?.numberOfUnits, {
        shouldValidate: true,
      });
      setValue("categoryId", getApartmentDetails?.categoryId, {
        shouldValidate: true,
      });
    } else {
      setValue("name", "");
      setValue("description", "");
      setValue("city", "");
      setValue("categoryId", "");
    }
  };
  const handleEdit = async (formData) => {
    setAction("edit");
    let requiredData = {
      ...formData,
      facilities: checkedItems,
    };
    console.log("details", requiredData);

    let editApartmentResponse = await editApartment({
      id: clickedApartmentId,
      data: requiredData,
    });

    const error = editApartmentResponse?.error;
    const responseData = editApartmentResponse?.data;
    if (responseData) {
      toast.success(responseData?.message);
      refetch();
      setOpenModal(false);
    }
    if (error) {
      toast.error("Error Occurred");
    }
  };

  return (
    <div>
      <StaffHeader title="Apartments" />
      <ButtonWrapper>
        <PrimaryButton
          title="Create Apartments"
          leftIcon
          iconName={addIcon}
          onClick={addApartment}
        />
      </ButtonWrapper>
      {isLoading ? (
        <PuffLoader />
      ) : (
        <ApartmentContainer>
          {apartment?.map((apartment, index) => (
            <div key={apartment.id}>
              <ApartmentCard
                key={index}
                landing
                staff
                apartmentImage={image}
                apartmentName={apartment.name}
                apartmentLocation="234 Ring road, Lekki Phase 1, Lekki, Lagos"
                apartmentDetails={apartment.description}
                iconName={iconName}
                handleStaffApartmentClick={() =>
                  handleStaffApartmentClick(apartment.id)
                }
                handleApartmentEdit={() => handleEditApartment(apartment.id)}
              />
            </div>
          ))}
        </ApartmentContainer>
      )}

      <Dialog open={openModal} fullWidth maxWidth="sm">
        <ModalWrapper>
          <Top>
            <CloseWrapper onClick={handleModalClose}>
              <CloseIcon />
            </CloseWrapper>
          </Top>
          <TextContainer>
            <h1 className="ml-4 mb-4 font-semibold text-xl text-left">
              Create an Apartment
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
              placeholder="Name"
              type="text"
              label="Name"
              register={register}
              name="name"
              // error={errors.roomType?.message}
            />

            <TextArea
              placeholder="Room Description"
              type="text"
              label="Description"
              register={register}
              name="description"
              // error={errors.password?.message}
            />

            <DropDown
              label="City"
              options={newStatesList}
              name="city"
              register={register}
              onChange={handleCity}
              defaultValue={
                action === "edit" && clickedApartment && clickedApartment?.city
              }
              // errorMessage={errors.numberOfUnits?.message}
            />
            <DropDown
              label="Categories"
              options={categoryData}
              name="categoryId"
              register={register}
              onChange={handleCategory}
              defaultValue={
                action === "edit" &&
                clickedApartment &&
                clickedApartment?.categoryId
              }
              // errorMessage={errors.numberOfUnits?.message}
            />

            <TextTitle>Features</TextTitle>
            <CheckInputContainer>
              {facilities?.map((fac, index) => (
                <CheckListContainer key={index}>
                  <CheckInput
                    type="checkbox"
                    value={fac.category}
                    onClick={handleCheckClick}
                  />
                  {fac.category}
                </CheckListContainer>
              ))}
            </CheckInputContainer>

            <FileUpload
              name="file"
              // fileName={"Apartment Image"}
              onChange={handleHandleImage}
            />
            <ModalButton>
              <PrimaryButton
                title={action === "add" ? "Create Apartment" : "Edit Apartment"}
                width="100%"
                type="submit"
                loading={action === "add" ? isLoading : editState.isLoading}
              />
            </ModalButton>
          </FormContainer>
        </ModalWrapper>
      </Dialog>
    </div>
  );
};

export default StaffApartment;
