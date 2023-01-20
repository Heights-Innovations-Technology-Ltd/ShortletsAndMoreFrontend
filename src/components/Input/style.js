import styled from "styled-components";

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

export const CheckWrap = styled.div`
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

export const Label = styled.p`
  font-weight: 400;
  font-size: 14px;
`;
