import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";
import { Container, Span, DirectLink, TextContainer, Text } from "./style";
import { FaChevronRight } from "react-icons/fa";

const arrowRight = <FaChevronRight />;
const AuthBottom = ({ buttonTitle, text, link, onClick, directionText }) => {
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <Container>
      <PrimaryButton
        title={buttonTitle}
        icon
        type="submit"
        btnWidth="100%"
        size="16px"
        iconName={arrowRight}
      />
      <TextContainer>
        <Text>{text}</Text>
        <Link to={link} style={linkStyle} onClick={onClick}>
          <Span>{directionText}</Span>
        </Link>
      </TextContainer>
    </Container>
  );
};

export default AuthBottom;
