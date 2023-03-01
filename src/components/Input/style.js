import styled from "styled-components";
import { motion } from "framer-motion";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  background: #fafafa;
  align-items: center;
  border: 1px solid #e1e1de;
  border-radius: 4px;
`;
export const CheckInputContainer = styled.div`
  width: 100%;
  display: flex;
  background: rgba(217, 217, 217, 0.19);
  align-items: center;
`;

export const CheckWrap = styled(motion.div)`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-flow: column;
`;
export const Input = styled.input`
  border-radius: 3px;
  width: 100%;
  border: none;
  padding: ${(props) => (props.padding ? props.padding : "16px 24px")};
  background: none;
  color: black;
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    font-size: 14px;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #8ba00d;
  }
`;

export const CheckInput = styled.input`
  border-radius: 3px;
  width: 100%;
  border: solid blue;
  padding: 12px;
  background: none;
  color: black;
  outline: none;
`;
export const Show = styled.p`
  cursor: pointer;
  color: #4e5152;
  font-size: 14px;
  margin-right: 24px;

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Error = styled.p`
  font-size: 12px;
  color: red;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: clamp(8px, 0.8px, 12px);
  margin-bottom: 24px;
  width: 100%;
  position: relative;

  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

export const Label = styled.p`
  font-weight: 400;
  font-size: 16px;
`;
export const Iconwrapper = styled.div`
  margin-right: 20px;

  @media screen and (max-width: 600px) {
    margin-right: 18px;
  }
`;
export const InputWrapper = styled.div`
  border: ${(props) => props.border};
  align-items: center;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  transition: 0.3s all ease;
  background-color: ${({ disable }) => (disable ? "#f2f2f2" : "#fafafa")};

  &:focus {
    outline: none;
    border-color: yellow;
  }

  @media screen and (max-width: 600px) {
    height: 48px;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TransparentBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

export const CalendarWrapper = styled.div`
  position: absolute;
  z-index: 3;
  top: 90%;
  left: 30px;
  width: 100%;
  @media screen and (max-width: 500px) {
    left: 0;
    top: 110%;
  }

  .calendar {
    @media screen and (max-width: 500px) {
      font-size: 12px;
      max-width: 100%;
    }
  }
`;

export const DropDownWrapper = styled.div`
  background: #ffffff;
  width: 100%;
  position: relative;
  padding: 10px auto;
  height: 50px;
  border-radius: 8px;
  background: #fafafa;
  border: 1px solid #e1e1de;
`;

export const CheckInputBox = styled.input`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.46);
`;

export const ShowList = styled.div`
  background: #ffffff;
  width: 90%;
  display: flex;
  gap: 10px;
`;

export const ShowListIcon = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
`;

export const DropDown = styled.div`
  background: #ffffff;
  border: 1px solid #e1e1de;
  position: absolute;
  width: 100%;
  z-index: 5;
  padding: 10px 0px;
`;

export const ListItems = styled.ul`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  padding: 5px 10px;
  align-items: center;

  &:hover {
    background-color: #f3f6e7;
    cursor: pointer;
  }
`;

export const Item = styled.p`
  border: solid 1px #e1e1de;
  border-radius: 4px;
  align-items: center;
  text-align: center;
  padding: 5px 5px 0px 5px;
  background-color: #f3f6e7;
`;
