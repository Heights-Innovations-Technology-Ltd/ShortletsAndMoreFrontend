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
  NoItem,
  NoItemText,
  TitleText,
  TotalPrice,
  TotalText,
  TotalWrapper,
} from "./style";
import { FiX } from "react-icons/fi";
import PrimaryButton from "../PrimaryButton";
import image from "../../assets/cartImage.png";
import { setShowCart } from "../../store/Slice/roomSlice";
import { useNavigate } from "react-router-dom";
import { calculateTotalPrice } from "../../utils/helper";

const CartShow = () => {
  const [roomContainer, setRoomContainer] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemContainer, setItemContainer] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const getList = () => {
    const localData = localStorage.getItem("cartItemId");
    let newItemContainer = JSON.parse(localData);
    setRoomContainer(newItemContainer);
    setItemContainer(newItemContainer && newItemContainer.length);
  };
  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    if (roomContainer) {
      const totalPrice = calculateTotalPrice(roomContainer);
      setTotalPrice(totalPrice);
    }
  }, [roomContainer]);

  const handleRemove = (id) => {
    let localItem = localStorage.getItem("cartItemId");
    localItem = JSON.parse(localItem);
    if (localItem) {
      let array = localItem;
      let checkFilter = array.filter((item) => item.id !== id);
      console.log("checking", checkFilter);
      localStorage.setItem("cartItemId", JSON.stringify(checkFilter));
      getList();
    }
  };

  return (
    <>
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
          <FiX size={24} onClick={handleClose} style={{ cursor: "pointer" }} />
        </CartTop>

        {itemContainer > 0 ? (
          <>
            {roomContainer?.map((room, index) => (
              <CartItemWrap key={index}>
                <ImageWrapper>
                  <DeleteContainer onClick={() => handleRemove(room.id)}>
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
              <TotalPrice>NGN{totalPrice}</TotalPrice>
            </TotalWrapper>

            <ButtonWrapper>
              <PrimaryButton title="VIEW CART" onClick={handleView} />
              <PrimaryButton
                title="CHECKOUT"
                lightBtn
                onClick={handleCheckOut}
              />
            </ButtonWrapper>
          </>
        ) : (
          <NoItem>
            <NoItemText>Your cart is empty</NoItemText>
          </NoItem>
        )}
      </CartContainer>
    </>
  );
};

export default CartShow;
