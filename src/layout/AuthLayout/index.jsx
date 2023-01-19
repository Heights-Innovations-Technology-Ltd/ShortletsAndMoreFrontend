import React from "react";
import {
  Image,
  Layout,
  LayoutLeft,
  LayoutRight,
  Container,
  HeaderText,
  SubText,
  IconContainer,
  TextContainer,
} from "./styles";
import image from "../../assets/bigLogo.png";
import { ReactComponent as InstagramIcon } from "../../assets/svg/insta.svg";
import { ReactComponent as GoogleIcon } from "../../assets/svg/goog.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/face.svg";

const AuthLayout = ({
  headerText,
  hideLeftAt,
  subText,
  children,
  borderBottomL,
  borderBottomR,
  justifyContent,
  flexFlow,
}) => {
  return (
    <Container>
      <Layout flexFlow={flexFlow}>
        <LayoutLeft
          hideLeftAt={hideLeftAt}
          borderBottomR={borderBottomR}
          borderBottomL={borderBottomL}
        >
          <img src={image} alt="brand" />
          <IconContainer justifyContent={justifyContent}>
            <InstagramIcon />
            <GoogleIcon />
            <FacebookIcon />
          </IconContainer>
        </LayoutLeft>
        <LayoutRight hideLeftAt={hideLeftAt}>{children}</LayoutRight>
      </Layout>
    </Container>
  );
};

export default AuthLayout;
