import React from "react";
import { NavLink } from "react-router-dom";
import { services } from "../../utils/config";
import {
  SeeAll,
  ServiceImage,
  Services,
  ServicesCardTitle,
  ServicesCardTop,
  ServicesContainer,
  ServicesLeft,
  ServicesList,
  ServicesListTitle,
  ServicesRight,
} from "./style";
import { AiOutlineMore } from "react-icons/ai";
const ServicesCard = () => {
  return (
    <ServicesContainer>
      <ServicesCardTop>
        <ServicesCardTitle>Services</ServicesCardTitle>
        <NavLink to="/staff/services">
          <SeeAll>See all</SeeAll>
        </NavLink>
      </ServicesCardTop>
      <ServicesList>
        {services.map((service, index) => (
          <Services key={index}>
            <ServicesLeft>
              <ServiceImage>
                <service.image />
              </ServiceImage>
              <ServicesListTitle>{service.name}</ServicesListTitle>
            </ServicesLeft>
            <ServicesRight>
              <AiOutlineMore color="black" size={20} />
            </ServicesRight>
          </Services>
        ))}
      </ServicesList>
    </ServicesContainer>
  );
};

export default ServicesCard;
