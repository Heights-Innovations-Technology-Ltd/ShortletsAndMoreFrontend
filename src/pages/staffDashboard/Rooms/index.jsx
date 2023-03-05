import React from "react";
import StaffHeader from "../../../components/StaffHeader";
import { useGetAllRoomTypeQuery } from "../../../store/Services/apartmentService";
import {
  useCreateRoomMutation,
  useEditRoomMutation,
} from "../../../store/Services/staffService";
import {
  ApartmentContainer,
  ButtonWrapper,
  CheckInput,
  CloseWrapper,
  FormContainer,
  ModalButton,
  ModalWrapper,
  TextContainer,
  TextTitle,
  Top,
  CheckInputContainer,
  CheckListContainer,
  BackWrapper,
  BackText,
  LoaderWrapper,
} from "./style";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
import PrimaryButton from "../../../components/PrimaryButton";
import { createRoomSchema, unitOptions } from "../../../utils/config";
import AddToCartCard from "../../../components/Cards/AddToCartCard";
import imageFive from "../../../assets/recent_listing.png";
import { Dialog } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReactComponent as CloseIcon } from "../../../assets/svg/close.svg";
import PrimaryInput from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import DropDown from "../../../components/Input/dropDown";
import { AiFillCaretLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import PuffLoader from "../../../components/Loader";
import FileUpload from "../../../components/FileUpload";
import { convertToLink } from "../../../utils/helper";

const addIcon = <FaPlus color="white" />;
const StaffRoom = () => {
  const facilities = [
    { category: "Television" },
    { category: "Air Conditioner" },
    { category: "Wifi" },
    { category: "Microwave" },
    { category: "Washing Machine" },
    { category: "Dish Washer" },
    { category: "Heater" },
    { category: "Balcony" },
  ];

  let localApartmentID = localStorage.getItem("staffApartmentID");
  let ApartmentId = JSON.parse(localApartmentID);
  const navigate = useNavigate();

  const [room, setRooms] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [action, setAction] = useState();
  const [fetchedEditRoom, setFetchedEditRoom] = useState({});
  const [image, setImage] = useState({});

  const { data, refetch, isLoading } = useGetAllRoomTypeQuery(ApartmentId);
  const [createRoom, createState] = useCreateRoomMutation();
  const [editRoom, editState] = useEditRoomMutation();

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(createRoomSchema),
  });
  console.log("do me", data);
  useEffect(() => {
    setRooms(data?.data);
  }, [data]);

  const addRoom = () => {
    setAction("add");
    setOpenModal(true);
  };

  const handleUnitChange = (value) => {
    var string = Object.values(value)[0];
    setValue("numberOfUnits", string, { shouldValidate: true });
  };

  const handleModalClose = () => {
    setCheckedItems({});
    setOpenModal(false);
  };
  const handleClick = (e) => {
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
  const handleHandleImage = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    const response = await convertToLink(file);
    console.log("response", response);
    setImage(response);
  };
  const onSubmit = async (formData) => {
    setAction("add");
    console.log(action);
    let requiredData = {
      ...formData,
      coverImage: image.url,
      features: checkedItems,
    };

    console.log("regq", requiredData);
    console.log("regaaq", ApartmentId);
    let createRoomResponse = await createRoom({
      apartmentId: ApartmentId,
      data: requiredData,
    });
    console.log("ggg", createRoomResponse);
    const error = createRoomResponse?.error;
    const responseData = createRoomResponse?.data;
    if (responseData) {
      toast.success(responseData?.message);
      refetch();
      setOpenModal(false);
    }
    if (error) {
      toast.error("Error Occurred");
    }
  };

  const handleRoomEdit = async (id) => {
    setAction("edit");
    setOpenModal(true);

    const getRoomDetails = data?.data.find((room) => room.id === id);
    setFetchedEditRoom(getRoomDetails);
    console.log("getRoomDetails", getRoomDetails);
    if (getRoomDetails) {
      setValue("roomType", getRoomDetails?.name, {
        shouldValidate: true,
      });

      setValue("description", getRoomDetails?.description, {
        shouldValidate: true,
      });
      setValue("numberOfUnits", getRoomDetails?.numberOfUnits, {
        shouldValidate: true,
      });
      setValue("price", getRoomDetails?.price, {
        shouldValidate: true,
      });
    } else {
      setValue("roomType", "");
      setValue("description", "");
      setValue("numberOfUnits", "");
      setValue("price", "");
    }
  };
  const handleEdit = async (formData) => {
    setAction("edit");
    let requiredData = {
      ...formData,
      coverImage: image.url,
      features: checkedItems,
    };
    console.log(ApartmentId);
    console.log(requiredData);
    let editRoomResponse = await editRoom({
      apartmentId: ApartmentId,
      roomTypeId: fetchedEditRoom?.id,
      data: requiredData,
    });

    const error = editRoomResponse?.error;
    const responseData = editRoomResponse?.data;
    if (responseData) {
      toast.success(responseData?.message);
      refetch();
      setOpenModal(false);
    }
    if (error) {
      toast.error("Error Occurred");
    }
  };

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <StaffHeader title="Apartment/Rooms" />
      <ButtonWrapper>
        <BackWrapper onClick={handleBack}>
          <AiFillCaretLeft color="#8BA00D" size="24px" />
          <BackText>Back</BackText>
        </BackWrapper>
        <PrimaryButton
          title="Create Rooms"
          leftIcon
          iconName={addIcon}
          onClick={addRoom}
        />
      </ButtonWrapper>
      {isLoading ? (
        <PuffLoader />
      ) : (
        <ApartmentContainer>
          {room?.map((apartment, index) => (
            <div key={index}>
              <AddToCartCard
                apartmentImage={
                  apartment.coverImage && apartment.coverImage !== "string"
                    ? apartment.coverImage
                    : imageFive
                }
                apartmentName={apartment.name}
                apartmentPrice={apartment.price}
                apartmentDescription={apartment.description}
                staff
                handleStaffEdit={() => handleRoomEdit(apartment.id)}
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
              Create a Room
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
              name="roomType"
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
              label="Number of Units"
              options={unitOptions}
              name="numberOfUnits"
              register={register}
              onChange={handleUnitChange}
              defaultValue={action === "edit" && fetchedEditRoom?.numberOfUnits}
              errorMessage={errors.numberOfUnits?.message}
            />
            <PrimaryInput
              placeholder="Price"
              type="text"
              label="Price"
              register={register}
              name="price"
              // error={errors.password?.message}
            />
            <TextTitle>Features</TextTitle>
            <CheckInputContainer>
              {facilities?.map((fac, index) => (
                <CheckListContainer key={index}>
                  <CheckInput
                    type="checkbox"
                    value={fac.category}
                    onClick={handleClick}
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
                title={action === "add" ? "Create Room" : "Edit Room"}
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

export default StaffRoom;
