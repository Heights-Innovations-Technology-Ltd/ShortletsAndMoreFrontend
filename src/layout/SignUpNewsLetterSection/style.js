import styled from "styled-components";

export const NewsWrapper = styled.div`
  top: 0;
  position: absolute;
  height: 100%;
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  z-index: 2;
  padding: 40px 150px;

  @media screen and (max-width: 600px) {
    padding: 50px;
  }
`;
export const NewsTitle = styled.p`
  font-weight: 600;
  font-size: 30px;
  color: white;
`;

export const NewsText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: white;
`;

export const NewsItem = styled.div`
  display: flex;
  flex-flow: column;
  gap: 18px;
`;
export const InputWrapper = styled.div`
  display: flex;
  background: #ffffff;
  margin-top: 32px;
  border-radius: 3px;
  width: 40%;
  padding: 5px;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const Input = styled.input`
  width: 75%;
  border: none;
  outline: none;
`;
export const Button = styled.div`
  padding: 15px;
  background: #acc130;
  border-radius: 3px;
`;
