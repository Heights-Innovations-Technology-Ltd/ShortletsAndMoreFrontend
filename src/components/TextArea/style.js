import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  background: #fafafa;
  align-items: center;
  border: 1px solid #e1e1de;
  border-radius: 4px;
`;

export const CheckWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-flow: column;
`;
export const Input = styled.textarea`
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

export const Error = styled.p`
  font-size: 12px;
  color: red;
`;

export const Label = styled.p`
  font-weight: 400;
  font-size: 14px;
`;
