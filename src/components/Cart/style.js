import styled from "styled-components";
import { motion } from "framer-motion";

export const CartOverlay = styled.div`
  position: absolute;
  border: solid red;
  padding: 32px 16px;
  background-color: white;
  z-index: 2;
  background-color: rgba(57, 55, 72, 0.22);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 80;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
`;

export const CartContainer = styled(motion.div)`
  display: flex;
  flex-flow: column;
  position: fixed;
  top: 80px;
  width: 450px;
  right: 80px;
  padding: 32px 16px;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  background-color: white;
  z-index: 999;
  padding: 36px;
`;

export const CartTop = styled.div`
  display: flex;
  padding-bottom: 30px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
`;
export const TitleText = styled.h3`
  font-weight: 700;
  font-size: 20px;
  color: #071c1f;
`;

export const CartItemWrap = styled.div`
  display: flex;
  padding-block: 20px;
  border-bottom: 1px solid #eeeeee;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 100px;
  height: 80px;
  position: relative;
`;
export const DeleteContainer = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  height: 20px;
  box-shadow: 0px 1px 6px rgba(32, 33, 36, 0.28);
  display: flex;
  width: 20px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ItemDetails = styled.div`
  display: flex;
  gap: 16px;
  flex-flow: column;
  align-items: center;
`;
export const ItemName = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #071c1f;
`;

export const ItemPrice = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #071c1f;
`;
export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
  border-bottom: 1px solid #eeeeee;
`;
export const TotalText = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: #071c1f;
`;

export const TotalPrice = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: #8ba00d;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  padding-top: 30px;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  padding: 150px 80px;
  display: flex;
  flex-flow: row wrap;
  flex: wrap;
  flex-wrap: wrap;
  background-color: #f7f8f9;
  width: 100%;

  @media screen and (max-width: 900px) {
    flex-flow: column;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-flow: column;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 4px;
  padding: 36px 50px;
  width: 60%;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  flex-flow: column;
  border: solid red;
  width: 60%;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 40%;
  padding: 0px 80px;
  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 0px;
    margin-top: 40px;
  }
`;

export const RightCardWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* @media screen and (max-width: 900px) {
    width: 100%;
  } */
`;

export const NoItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0px;
`;

export const NoItemText = styled.p`
  font-size: 18px;
`;

export const CountWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-flow: row;
  gap: 8px;
  justify-content: space-between;
`;
export const Count = styled.div`
  background: rgba(217, 217, 217, 0.19);
  text-align: center;
  justify-content: center;
  padding: 5px 12px;
  font-size: 14px;
  align-items: center;
  /* padding: ${(props) => (props.padding ? props.padding : "0px 10px")}; */
`;

export const Button = styled.button`
  background: rgba(217, 217, 217, 0.19);
  padding: 5px 12px;
  font-size: 14px;
`;
