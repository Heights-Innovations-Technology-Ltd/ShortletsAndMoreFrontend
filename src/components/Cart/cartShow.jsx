import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ButtonWrapper,
  CartContainer,
  CartItemWrap,
  CartTop,
  CartWrapperContainer,
  Count,
  CountWrapper,
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
import id from "date-fns/esm/locale/id/index.js";

const CartShow = ({ handleCartToggle, setShowCarts, showCarts }) => {
  const [roomContainer, setRoomContainer] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemContainer, setItemContainer] = useState(0);
  const createdAt = new Date().toISOString().split("T")[0];
  const [itemCount, setItemCount] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartRef = useRef();

  useEffect(() => {
    const handleProfile = (e) => {
      if (!cartRef.current.contains(e.target)) {
        e.preventDefault();
        e.stopPropagation();
        handleCartToggle();
      }
    };
    document.addEventListener("mousedown", handleProfile);

    return () => {
      document.removeEventListener("mousedown", handleProfile);
    };
  });
  // const handleClose = () => {
  //   dispatch(setShowCart());
  // };
  const handleView = () => {
    navigate("/cart");
    // dispatch(setShowCart());
  };

  const handleCheckOut = () => {
    navigate("/cart/checkout");
    // dispatch(setShowCart());
  };
  const getList = () => {
    const localData = localStorage.getItem("cartItemId");
    let newItemContainer = JSON.parse(localData);
    setRoomContainer(newItemContainer);
    setItemContainer(newItemContainer && newItemContainer.length);

    // const availableData = {

    //   createdAt: createdAt,
    //   discountPercent: 0,
    //   totalPrice: roomContainer?.price * itemCount,
    //   numberOfRooms: itemCount,
    //   roomTypeId: cID,
    // };
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

  // const handleCountIncrease = () => {
  //   setItemCount((prev) => prev + 1);
  // };

  // const handleCountDecrease = () => {
  //   if (itemCount > 1) {
  //     setItemCount((prev) => prev - 1);
  //   }
  // };

  return (
    <CartContainer
      key="CartContainer"
      ref={cartRef}
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
          onClick={() => setShowCarts(!showCarts)}
          style={{ cursor: "pointer" }}
        />
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
              {/* <CountWrapper>
                  <Button onClick={handleCountDecrease}>-</Button>
                  <Count>{itemCount}</Count>
                  <Button onClick={handleCountIncrease}>+</Button>
                </CountWrapper> */}

              <ItemDetails>
                <ItemName>{room.name}</ItemName>
                <ItemPrice>
                  {room.quantity} X NGN{room.price}
                </ItemPrice>
              </ItemDetails>
            </CartItemWrap>
          ))}
          <TotalWrapper>
            <TotalText>Total</TotalText>
            <TotalPrice>NGN{totalPrice}</TotalPrice>
          </TotalWrapper>

          <ButtonWrapper>
            <PrimaryButton title="VIEW CART" onClick={handleView} />
            <PrimaryButton title="CHECKOUT" lightBtn onClick={handleCheckOut} />
          </ButtonWrapper>
        </>
      ) : (
        <NoItem>
          <NoItemText>Your cart is empty</NoItemText>
        </NoItem>
      )}
    </CartContainer>
  );
};

export default CartShow;
