import styled from "styled-components";

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
