import React from "react";
import { Down, Image, Paragraph, ServiceContainer, Title, Top } from "./style";
// import image from "../../assets/listing_img_one.png";
const ServiceCard = ({ image, title, detail }) => {
  return (
    <ServiceContainer>
      <Top>
        <Image src={image} alt="service" />
      </Top>
      <Down>
        <Title>{title}</Title>
        <Paragraph>{detail}</Paragraph>

        <hr />
      </Down>
    </ServiceContainer>
  );
};

export default ServiceCard;
