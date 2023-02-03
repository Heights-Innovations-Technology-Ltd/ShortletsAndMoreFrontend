import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ButtonWrapper,
  CartContainer,
  CartItemWrap,
  CartTop,
  CartWrapperContainer,
  DeleteContainer,
  Image,
  ImageWrapper,
  ItemDetails,
  ItemName,
  ItemPrice,
  TitleText,
  TotalPrice,
  TotalText,
  TotalWrapper,
} from "./style";
import { FiX } from "react-icons/fi";
import PrimaryButton from "../PrimaryButton";
import image from "../../assets/cartImage.png";
import { useGetAllRoomTypeQuery } from "../../store/Services/apartmentService";
import { setShowCart } from "../../store/Slice/roomSlice";
import { useNavigate } from "react-router-dom";
import PuffLoader from "../Loader";

const CartShow = () => {
  const [roomContainer, setRoomContainer] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let localApartmentID = localStorage.getItem("apartmentID");
  let ApartmentId = JSON.parse(localApartmentID);
  const check = useGetAllRoomTypeQuery(ApartmentId);

  const { data, isLoading, isSuccess, isError } =
    useGetAllRoomTypeQuery(ApartmentId);

  const handleClose = () => {
    dispatch(setShowCart());
  };
  const handleView = () => {
    navigate("/cart");
    dispatch(setShowCart());
  };

  const handleCheckOut = () => {
    navigate("/cart/checkout");
    dispatch(setShowCart());
  };
  //   useEffect(() => {
  //     const check = data?.find((room) => room.id === cID);
  //     // // if (check) {
  //     // // }
  //     setRoomContainer(check);
  //   }, [roomID, data]);

  useEffect(() => {
    const localData = localStorage.getItem("cartItemId");
    let newItemContainer = JSON.parse(localData);
    console.log(newItemContainer);

    let cartData = [];
    if (newItemContainer) {
      data?.data.forEach((data) => {
        if (newItemContainer.includes(data?.id)) {
          cartData.push(data);

          return;
        }
      });
      setRoomContainer(cartData);
    }
  }, [data]);
  return (
    <>
      {isLoading ? (
        <PuffLoader />
      ) : (
        <CartContainer
          key="CartContainer"
          // initial={{ y: 10, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          // exit={{ y: 10, opacity: 0 }}
          // transition={{ duration: 0.3 }}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
        >
          <CartTop>
            <TitleText>Cart</TitleText>
            <FiX
              size={24}
              onClick={handleClose}
              style={{ cursor: "pointer" }}
            />
          </CartTop>
          {roomContainer?.map((room) => (
            <CartItemWrap>
              <ImageWrapper>
                <DeleteContainer>
                  <FiX size={18} />
                </DeleteContainer>
                <Image src={image} alt="cartImage" />
              </ImageWrapper>
              <ItemDetails>
                <ItemName>{room.name}</ItemName>
                <ItemPrice>NGN{room.price}</ItemPrice>
              </ItemDetails>
            </CartItemWrap>
          ))}
          <TotalWrapper>
            <TotalText>Total</TotalText>
            <TotalPrice>NGN50,000.00</TotalPrice>
          </TotalWrapper>

          <ButtonWrapper>
            <PrimaryButton title="VIEW CART" onClick={handleView} />
            <PrimaryButton title="CHECKOUT" lightBtn onClick={handleCheckOut} />
          </ButtonWrapper>
        </CartContainer>
      )}
    </>
  );
};

export default CartShow;
