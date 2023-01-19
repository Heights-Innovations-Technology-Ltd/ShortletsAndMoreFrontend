import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  background: none;
  align-items: center;
  border: 1px solid #e1e1de;
  border-radius: 4px;
`;
export const Input = styled.input`
  border-radius: 3px;
  width: 100%;
  border: none;
  padding: 18px 24px;
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
