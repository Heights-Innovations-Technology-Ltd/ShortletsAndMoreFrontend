import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: wrap;
  flex-wrap: wrap;
  padding-top: 65px;
  padding-bottom: 30px;
  padding-inline: 150px;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  top: 10px;

  @media screen and (max-width: 600px) {
    padding: 50px;
  }
`;

export const FooterItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const FooterLists = styled.div`
  flex-direction: column;
  gap: 13px;
  display: flex;
`;

export const FooterTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: white;
  margin-bottom: 32px;
`;

export const FooterItem = styled.div`
  display: flex;
  gap: 22px;
  align-items: center;
`;

export const FooterItemLink = styled.p`
  font-weight: 300;
  font-size: 16px;
  color: white;
`;

export const FooterText = styled.p`
  font-weight: 300;
  font-size: 16px;
  color: white;
`;

export const FooterContactText = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: white;
`;

export const FooterIcons = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
`;

export const IconDiv = styled.div`
  padding: 14px;
  cursor: pointer;

  &:hover {
    background-color: #424242;
    border-radius: 3px;
    padding: 14px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  background: #ffffff;
  margin-top: 32px;
  border-radius: 3px;
  padding: 5px;
  justify-content: space-between;
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
