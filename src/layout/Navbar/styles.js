import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 64px;
  position: fixed;
  background-color: white;
  align-items: center;
  z-index: 999;
  justify-content: space-between;
  box-shadow: ${(props) => props.boxShadow};
`;

export const NavLinksContainer = styled.div`
  display: flex;
  padding: 16px;
  gap: 56px;
  align-items: center;
`;

export const NavLogoContainer = styled.div``;

export const NavRightContainer = styled.div`
  display: flex;
  padding: 16px;
  gap: 56px;
  align-items: center;
`;
export const NavLinkText = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

export const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;
export const LengthContainer = styled.div`
  position: absolute;
  left: 15px;
  bottom: 12px;
  background-color: black;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  height: 18px;
  display: flex;
  width: 18px;
  padding: 0;
`;
export const Length = styled.p`
  font-size: 10px;
  color: white;
  font-weight: 600;
`;
