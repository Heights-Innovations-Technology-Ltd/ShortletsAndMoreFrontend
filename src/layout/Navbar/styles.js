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
