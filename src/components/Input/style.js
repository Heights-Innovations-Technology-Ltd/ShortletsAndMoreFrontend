import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  border: solid red;
  background: none;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.48);
`;
export const Input = styled.input`
  border-radius: 3px;
  width: 100%;
  border: none;
  padding: 18px 24px;
  background: none;
  color: white;
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
