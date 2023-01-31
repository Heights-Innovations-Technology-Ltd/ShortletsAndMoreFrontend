import styled from "styled-components";
import { motion } from "framer-motion";

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

  @media screen and (max-width: 1000px) {
    display: none;
  }
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

  &:hover {
    color: #8ba00d;
  }
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

//mobile devices

export const MobileNavContainer = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    width: 100%;
    display: flex;
    padding: 20px 64px;
    position: fixed;
    background-color: white;
    align-items: center;
    z-index: 999;
    justify-content: space-between;
    box-shadow: ${(props) => props.boxShadow};
  }
`;

export const MobileLogo = styled.img``;

export const MobileLinkWrapper = styled.div`
  margin-top: 80px;
  gap: 24px;
  display: flex;
  flex-flow: column;
`;

export const MobileDropWrapper = styled(motion.div)`
  height: 300px;
  position: fixed;
  background-color: white;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  width: 100%;
  z-index: 5;
  padding: 20px 64px;
  display: flex;
`;
