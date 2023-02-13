import React from "react";
import { Down, Image, Paragraph, ServiceContainer, Title, Top } from "./style";
// import image from "../../assets/listing_img_one.png";
const ServiceCard = ({ image, title, detail, service }) => {
  return (
    <ServiceContainer>
      <Top>
        <Image src={image} alt="service" />
      </Top>
      <Down>
        <Title>{title}</Title>
        <Paragraph>{detail}</Paragraph>

        {service && <hr />}
      </Down>
    </ServiceContainer>
  );
};

export default ServiceCard;
