import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
`;

export const LeftIconContainer = styled.div`
  background-color: white;
  padding: 2px;
  border-radius: 4px;
`;

export const Status = styled.div`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  text-align: center;
  border-radius: 12px;
  padding: 4px 8px;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  gap: 36px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  margin-top: 36px;
  gap: 24px;
`;
export const LeftHeader = styled.p`
  font-weight: 600;
  font-size: 28px;
  text-align: center;
  color: #171b03;
`;

export const LeftInputWrapper = styled.div`
  display: flex;
  background: #ffffff;
  width: 50%;
  border-radius: 3px;
  align-items: center;
  padding: 5px 10px;
  justify-content: space-between;
`;
export const Input = styled.input`
  width: 85%;
  border: none;
  outline: none;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 30%;
  height: 100%;
  margin-top: 36px;
  gap: 24px;
`;
