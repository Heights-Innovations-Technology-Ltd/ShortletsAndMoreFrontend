import styled from "styled-components";

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
  border: solid red;
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

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 40px 24px;
  flex-flow: column;
`;
export const ModalButton = styled.div`
  width: 100%;
`;
export const Question = styled.p`
  margin-bottom: 30px;
  font-size: clamp(16px, 1.5vw, 20px);
  max-width: 300px;
  text-align: center;
`;
export const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 80%;
`;

export const CloseWrapper = styled.div`
  /* display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  padding: 10px;
  border-radius: 100%;
  background-color: #d7d7d7;
  margin-bottom: 20px; */
`;
