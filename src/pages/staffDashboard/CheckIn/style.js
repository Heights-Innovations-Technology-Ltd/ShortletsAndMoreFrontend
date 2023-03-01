import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
`;

export const ApartmentContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: clamp(16px, 1.6vw, 24px);
  width: 100%;
  position: sticky;
  overflow-y: auto;

  margin-top: 40px;

  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 430px) {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 16px;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: auto;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 1550px) {
    grid-template-columns: auto auto auto auto;
  }
`;

export const LeftIconContainer = styled.div`
  background-color: white;
  padding: 2px;
  border-radius: 4px;
`;
export const TableContainer = styled.div`
  margin-top: 24px;
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
  cursor: pointer;
`;
export const Status = styled.div`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  text-align: center;
  border-radius: 12px;
  padding: 4px 8px;
`;
