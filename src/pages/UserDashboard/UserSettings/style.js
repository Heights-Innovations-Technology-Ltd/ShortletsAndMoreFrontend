import styled from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-flow: column;
  border: solid red;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 4px;
  padding: 36px 50px;
  width: 100%;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
export const DoubleGridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(45%, 1fr));
  row-gap: 24px;
  column-gap: 24px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
export const ButtonHolder = styled.div`
  width: 20%;
  margin-top: 50px;
`;
