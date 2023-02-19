import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
`;

export const TableContainer = styled.div`
  margin-top: 24px;
`;
export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 34px 48px;
  flex-flow: column;
`;
export const ModalButton = styled.div`
  width: 100%;
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
export const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 80%;
`;
export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  gap: 24px;
  flex-direction: column;
`;
export const TextContainer = styled.div`
  display: flex;
`;
export const TextTitle = styled.h1`
  display: flex;
  color: #171b03;
  font-weight: 600;
  font-size: 19px;
`;

export const CheckInputContainer = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: clamp(16px, 1.6vw, 24px);
  width: 100%;
`;
export const CheckListContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CheckInput = styled.input`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.46);
  margin-right: 5px;
`;
