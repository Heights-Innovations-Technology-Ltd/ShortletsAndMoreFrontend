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
import image from "../../assets/login_bg.png";
import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg";
import { ReactComponent as InstagramIcon } from "../../assets/svg/instgram.svg";
import { ReactComponent as GoogleIcon } from "../../assets/svg/google.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/facebook.svg";

const AuthLayout = ({ headerText, subText, children }) => {
  return (
    <Container>
      <Image src={image} alt="left-image" />
      <Layout>
        <LayoutLeft>
          <LogoIcon />
          <TextContainer>
            <HeaderText>{headerText}</HeaderText>
            <SubText>{subText}</SubText>
            <IconContainer>
              <InstagramIcon />
              <GoogleIcon />
              <FacebookIcon />
            </IconContainer>
          </TextContainer>
        </LayoutLeft>
        <LayoutRight>{children}</LayoutRight>
      </Layout>
    </Container>
  );
};

export default AuthLayout;
