import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  width: 100%;
  gap: 36px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 65%;
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
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;

export const BellContainer = styled.div`
  border-left: 1px solid #7a8699;
  padding-inline: 8px;
  display: flex;
  align-items: center;
  border-right: 1px solid #7a8699;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 16px;
`;
export const ImageContainer = styled.div`
  border: solid #8ba00d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const Username = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #2d2235;
`;

export const DropDown = styled.div`
  display: flex;
  align-items: center;
`;

export const NameT = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
