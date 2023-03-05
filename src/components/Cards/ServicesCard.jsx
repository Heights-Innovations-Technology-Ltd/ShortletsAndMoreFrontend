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
    <ServicesContainer
      key="statusCard"
      // initial={{ y: 10, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // exit={{ y: 10, opacity: 0 }}
      transition={{ duration: 0.9 }}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 200 }}
    >
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
