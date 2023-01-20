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
import { HiX } from "react-icons/hi";
import { roomDetailsGalleryData, similarListingData } from "../../utils/config";
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
  ModalWrapper,
  Top,
  CloseWrapper,
  Question,
  ModalButton,
} from "./style";

const RoomDetailsSection = () => {
  const { roomTypes, loading, success, errorr } = useSelector(
    (store) => store.apartmentDataReducer
  );
  const [roomContainer, setRoomContainer] = useState({});

  console.log("fetch", roomTypes.data);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const { roomID } = useParams();
  console.log("lkdsjk", useParams());

  const checkAvailability = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  useEffect(() => {
    const responseData = roomTypes.data;
    console.log("responseData", responseData);
    console.log(roomID);

    let cID = parseInt(roomID);
    const check = responseData.find((room) => room.id === cID);
    // // if (check) {
    // //   console.log("check", check);
    // // }
    setRoomContainer(check);
  }, [roomID, roomTypes]);
  const addToCart = () => {
    navigate("/cart");
  };
  return (
    <>
      <Container>
        <LeftContainer>
          <Title>{roomContainer.name}</Title>
          <TitlePara>234 Ring road, Lekki Phase 1, Lekki, Lagos</TitlePara>
          <DesContainer>
            <FirstDes>
              <Description>Description</Description>
              <DescriptionText>{roomContainer.description}</DescriptionText>
              <NavLink to="">
                <SpanText>Show more</SpanText>
              </NavLink>
            </FirstDes>
            <SecondDes>
              <Description>Gallery</Description>

              <div className="flex flex-col justify-center items-center p-1">
                <img className="" src={galleryMainImage} alt="" />

                <div className="flex mt-4">
                  {roomDetailsGalleryData.map((data) => {
                    return (
                      <div className="p-3">
                        <img className="" src={data.gallerySubImage} alt="" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </SecondDes>
            <ThirdDes>
              <Description>Features</Description>
            </ThirdDes>
          </DesContainer>
        </LeftContainer>
        <RightContainer>
          <Wrap>
            <PriceWrapper>
              <PriceText>NGN{roomContainer.price}/Night</PriceText>
            </PriceWrapper>
            <Form>
              <PrimaryInput
                placeholder="31-03-2022"
                label="Check In Date"
                name="check"
                padding="10px"
                check
                type="text"
              />

              <PrimaryInput
                placeholder="31-03-2022"
                label="Check Out Date"
                check
                padding="10px"
                name="check"
                type="text"
              />

              <CountWrap>
                <Label>No. of Rooms</Label>
                <CountWrapper>
                  <Count>-</Count>
                  <Count padding="0px 40px">1</Count>
                  <Count>+</Count>
                </CountWrapper>
              </CountWrap>
              <BtnWrap>
                <PrimaryButton
                  title="Check Availability"
                  width="100%"
                  onClick={checkAvailability}
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
            <div>
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
            Luxury terrance is available. Proceed to add to cart{" "}
          </Question>
          <ModalButton>
            <PrimaryButton
              title="Add to Cart"
              width="100%"
              onClick={addToCart}
            />
          </ModalButton>
        </ModalWrapper>
      </Dialog>
    </>
  );
};

export default RoomDetailsSection;
