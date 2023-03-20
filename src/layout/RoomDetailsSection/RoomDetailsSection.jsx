import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
// import { PaginationNav1Presentation } from "../../components/Pagination/Pagination";
import galleryMainImage from "../../assets/gallery_main.png";
import ApartmentCard from "../../components/Cards/ApartmentCard";
import PrimaryInput from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import { Dialog } from "@mui/material";

import { ReactComponent as CloseIcon } from "../../assets/svg/close.svg";
import availableImage from "../../assets/available.png";
import notAvailableImage from "../../assets/notAvailable.png";
import { HiX } from "react-icons/hi";
import {
  checkAvailabilitySchema,
  roomDetailsGalleryData,
  similarListingData,
} from "../../utils/config";
import {
  BtnWrap,
  Container,
  CountWrap,
  CountWrapper,
  Count,
  DesContainer,
  Description,
  DescriptionText,
  FirstDes,
  Form,
  Label,
  LeftContainer,
  PriceText,
  PriceWrapper,
  RightContainer,
  SecondDes,
  SpanText,
  ThirdDes,
  Title,
  TitlePara,
  Wrap,
  FeatureItems,
  ModalWrapper,
  Top,
  CloseWrapper,
  Question,
  FeatureItem,
  ModalButton,
  FeatureWrapper,
  Button,
} from "./style";
import toast from "react-hot-toast";
import {
  useCheckForAvailabilityMutation,
  useGetAllRoomTypeQuery,
} from "../../store/Services/apartmentService";
import { DateInput } from "../../components/Input/dateInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ReactComponent as MicrowaveIcon } from "../../assets/svg/microwave.svg";

import { ReactComponent as HeaterIcon } from "../../assets/svg/Heater.svg";

const RoomDetailsSection = () => {
  const features = [
    { id: 2, result: true, category: "Television", icon: MicrowaveIcon },
    { id: 3, result: true, category: "Microwave", icon: MicrowaveIcon },
    { id: 4, result: true, category: "Heater", icon: HeaterIcon },
  ];

  let localApartmentID = localStorage.getItem("apartmentID");
  let ApartmentId = JSON.parse(localApartmentID);

  const { data, loading, success, error } = useGetAllRoomTypeQuery(ApartmentId);

  const [checkForAvailability, { isLoading, isSuccess }] =
    useCheckForAvailabilityMutation();
  const [roomContainer, setRoomContainer] = useState({});
  const [roomFeatures, setRoomFeatures] = useState([]);
  const createdAt = new Date().toISOString().split("T")[0];
  const [isAdd, setIsAdd] = useState(false);
  const [availableContainer, setAvailableContainer] = useState([]);
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkAvailabilitySchema),
  });

  // console.log("fetch", roomTypes.data);

  const [openModal, setOpenModal] = useState(false);

  const [openNotModal, setOpenNotModal] = useState(false);
  const { roomID } = useParams();
  let cID = parseInt(roomID);
  const [itemCount, setItemCount] = useState(1);
  const [noOfRooms, setNoOfRooms] = useState(0);

  useEffect(() => {
    let cID = parseInt(roomID);
    const check = data?.data.find((room) => room.id === cID);
    setRoomContainer(check);
    // setRoomFeatures(JSON.parse(check?.features));
  }, [roomID, data]);

  const handleDateChange = (value) => {
    setValue("startDate", value);
  };

  const handleEndDateChange = (value) => {
    setValue("endDate", value);
  };

  //checking for availability
  const submitForm = async (formData) => {
    // const addData ={
    //   roomTypeId: "",
    //   hotelId: data?.hotelId
    // }
    const newFormData = {
      ...formData,
      roomTypeId: cID,
      hotelId: roomContainer?.hotelId,
    };
    const availableData = {
      ...formData,
      createdAt: createdAt,
      discountPercent: 0,
      totalPrice: roomContainer?.price * itemCount,
      numberOfRooms: itemCount,
      roomTypeId: cID,
    };
    const result = await checkForAvailability(newFormData);

    // const error = result?.error;
    const responseData = result?.data;
    if (responseData) {
      toast.success(responseData.message);
      let message = responseData.message;
      let number = message.replace(/[^0-9]/g, "");
      let convertedNumber = parseInt(number);
      setNoOfRooms(convertedNumber);
      // setOpenNotModal(true);
      setOpenModal(true);

      let availableArray = await localStorage.getItem("itemAvailability");
      let newAvailableArray = JSON.parse(availableArray);

      if (newAvailableArray) {
        newAvailableArray.push(availableData);
        setAvailableContainer(newAvailableArray);

        // try {
        //     setAvailableContainer(newAvailableArray)
        //     await localStorage.setItem(
        //       "itemAvailability",
        //       JSON.stringify(newAvailableArray)
        //     );

        // } catch (error) {
        //   return error;
        // }
      } else {
        let availabilityContainer = [];
        availabilityContainer.push(availableData);

        setAvailableContainer(availabilityContainer);

        // try {
        //   if (isAdd === true) {
        //     await localStorage.setItem(
        //       "itemAvailability",
        //       JSON.stringify(availabilityContainer)
        //     );

        //   setAvailableContainer(newAvailableArray)
        //   }
        // } catch (error) {
        //   return error;
        // }
      }
    } else {
      // setOpenModal(true);
      setOpenNotModal(true);
    }
  };

  //add item to cart
  const addToCart = async (data) => {
    // navigate("/cart");
    let itemArray = await localStorage.getItem("cartItemId");
    let newItemArray = JSON.parse(itemArray);
    if (itemCount <= noOfRooms) {
      //add to cart
      if (newItemArray) {
        const findId = newItemArray.find((item) => item.id === data.id);
        if (findId) {
          toast.error("item added already");
        } else {
          let newData = { ...data, number: noOfRooms, quantity: itemCount };
          newItemArray.push(newData);
          setIsAdd(true);
          await localStorage.setItem(
            "itemAvailability",
            JSON.stringify(availableContainer)
          );
          try {
            await localStorage.setItem(
              "cartItemId",
              JSON.stringify(newItemArray)
            );
            toast.success("item added successfully");
            setIsAdd(true);
            await localStorage.setItem(
              "itemAvailability",
              JSON.stringify(availableContainer)
            );
          } catch (error) {
            setIsAdd(false);
            return error;
          }
        }
      } else {
        //if the array is empty
        let array = []; //create a new array of items
        let newData = { ...data, number: noOfRooms, quantity: itemCount };
        array.push(newData); //push the item id to the array

        setIsAdd(true);
        try {
          await localStorage.setItem("cartItemId", JSON.stringify(array));
          toast.success("item added successfully");
          setIsAdd(true);
          await localStorage.setItem(
            "itemAvailability",
            JSON.stringify(availableContainer)
          );
        } catch (error) {
          setIsAdd(false);
          return error;
        }
      }
    } else {
      toast.error(`Just ${noOfRooms} room availablbe for this room type`);
    }
  };

  const handleCountIncrease = (e) => {
    e.preventDefault();
    let count = itemCount + 1;
    setItemCount(count);
  };

  const handleCountDecrease = (e) => {
    e.preventDefault();
    let count = itemCount - 1;
    setItemCount(count);
  };
  // console.log("che", roomContainer);
  // useEffect(() => {
  //   setRoomFeatures(JSON.parse(roomContainer?.features));
  // }, [roomContainer]);

  // console.log("cherrrrr", roomFeatures);
  return (
    <>
      <Container>
        <LeftContainer>
          <Title>{roomContainer?.name}</Title>
          <TitlePara>234 Ring road, Lekki Phase 1, Lekki, Lagos</TitlePara>
          <DesContainer>
            <FirstDes>
              <Description>Description</Description>
              <DescriptionText>{roomContainer?.description}</DescriptionText>
              <NavLink to="">
                <SpanText>Show more</SpanText>
              </NavLink>
            </FirstDes>
            <SecondDes>
              <Description>Gallery</Description>

              <div className="flex flex-col justify-center items-center p-1">
                <img className="" src={galleryMainImage} alt="" />

                <div className="flex mt-4">
                  {roomDetailsGalleryData.map((data, index) => {
                    return (
                      <div className="p-3" key={index}>
                        <img className="" src={data.gallerySubImage} alt="" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </SecondDes>
            <ThirdDes>
              <Description>Features</Description>
              <FeatureWrapper>
                {features?.map((item, index) => (
                  <FeatureItems key={index}>
                    <item.icon />

                    <FeatureItem>{item.category}</FeatureItem>
                  </FeatureItems>
                ))}
              </FeatureWrapper>
            </ThirdDes>
          </DesContainer>
        </LeftContainer>
        <RightContainer>
          <Wrap>
            <PriceWrapper>
              <PriceText>NGN{roomContainer?.price}/Night</PriceText>
            </PriceWrapper>
            <Form>
              <DateInput
                label={"Check In Date"}
                name="startDate"
                register={register}
                selectDate={handleDateChange}
                errorMessage={errors.startDate?.message}
              />

              <DateInput
                label={"Check Out Date"}
                name="endDate"
                register={register}
                selectDate={handleEndDateChange}
                errorMessage={errors.endDate?.message}
              />

              <CountWrapper>
                <Button onClick={handleCountDecrease}>-</Button>
                <Count>{itemCount}</Count>
                <Button onClick={handleCountIncrease}>+</Button>
              </CountWrapper>
              <BtnWrap>
                <PrimaryButton
                  title="Check Availability"
                  width="100%"
                  height="55px"
                  onClick={handleSubmit(submitForm)}
                  loading={isLoading}
                />
              </BtnWrap>
            </Form>
          </Wrap>
        </RightContainer>
      </Container>
      <h2 className="text-center mt-4">Similar Listings</h2>
      <div className="flex flex-wrap md:flex-wrap justify-center py-3">
        <div className="flex flex-row items-center w-4/5 justify-center">
          {similarListingData.map((apartment) => (
            <div key={apartment.id}>
              <ApartmentCard
                apartmentImage={apartment.apartmentImage}
                apartmentName={apartment.apartmentName}
                apartmentLocation={apartment.apartmentLocation}
                apartmentDetails={apartment.apartmentDetails}
              />
            </div>
          ))}

          {/* <PaginationNav1Presentation /> */}
        </div>
      </div>

      <Dialog open={openModal} fullWidth maxWidth="sm">
        <ModalWrapper>
          <Top>
            <CloseWrapper onClick={() => setOpenModal(false)}>
              <CloseIcon />
            </CloseWrapper>
          </Top>
          <img src={availableImage} alt="available" />
          <Question>
            {roomContainer?.name} is available. Proceed to add to cart{" "}
          </Question>
          <ModalButton>
            <PrimaryButton
              title="Add to Cart"
              width="100%"
              onClick={() => addToCart(roomContainer)}
            />
          </ModalButton>
        </ModalWrapper>
      </Dialog>

      <Dialog open={openNotModal} fullWidth maxWidth="sm">
        <ModalWrapper>
          <Top>
            <CloseWrapper onClick={() => setOpenNotModal(false)}>
              <CloseIcon />
            </CloseWrapper>
          </Top>
          <img src={notAvailableImage} alt="available" />
          <Question>
            {roomContainer?.name} isn’t available at the moment. Check back
            later
          </Question>
        </ModalWrapper>
      </Dialog>
    </>
  );
};

export default RoomDetailsSection;
