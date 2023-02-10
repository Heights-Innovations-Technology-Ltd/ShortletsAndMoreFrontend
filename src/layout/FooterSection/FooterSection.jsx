import React from "react";
import { BsEnvelope, BsGeoAltFill, BsTelephone } from "react-icons/bs";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import bg from "../../assets/bg.png";
import footer_logo from "../../assets/footer_logo.png";
import {
  FooterWrapper,
  FooterItems,
  FooterLists,
  FooterTitle,
  FooterItem,
  Button,
  Input,
  InputWrapper,
  IconDiv,
  FooterIcons,
  FooterContactText,
  FooterText,
  FooterItemLink,
} from "./style.js";

import { ReactComponent as FlyIcon } from "../../assets/svg/fly.svg";

const FooterSection = () => {
  return (
    <div className="w-full" style={{ backgroundColor: "#282F34" }}>
      <FooterWrapper>
        <FooterItems>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterLists>
            <FooterItem>
              <BsGeoAltFill
                size={12}
                className="mr-4"
                style={{ color: "#8BA00D" }}
              />
              <FooterContactText>
                87b, corporation drive, Dolphin Estate, ikoyi lagos
              </FooterContactText>
            </FooterItem>
            <FooterItem>
              <BsTelephone
                size={12}
                className="mr-4 mt-3"
                style={{ color: "#8BA00D" }}
              />
              <FooterContactText>08094822156</FooterContactText>
            </FooterItem>
            <FooterItem>
              <BsEnvelope
                size={12}
                className="mr-4 mt-3"
                style={{ color: "#8BA00D" }}
              />
              <FooterContactText>
                inquires@realestatedominoes.com
              </FooterContactText>
            </FooterItem>
          </FooterLists>
          <FooterIcons>
            <IconDiv>
              <FiFacebook size={14} style={{ color: "#8BA00D" }} />
            </IconDiv>

            <IconDiv>
              <FiTwitter size={14} style={{ color: "#8BA00D" }} />
            </IconDiv>

            <IconDiv>
              <FiInstagram size={14} style={{ color: "#8BA00D" }} />
            </IconDiv>

            <IconDiv>
              <FiLinkedin size={14} style={{ color: "#8BA00D" }} />
            </IconDiv>
          </FooterIcons>
        </FooterItems>
        <FooterItems>
          <FooterTitle>Lists by Category</FooterTitle>
          <FooterLists>
            <FooterItemLink>Apartment</FooterItemLink>
            <FooterItemLink>Condos</FooterItemLink>
            <FooterItemLink>Houses</FooterItemLink>
            <FooterItemLink>Offices</FooterItemLink>
            <FooterItemLink>Retail</FooterItemLink>
            <FooterItemLink>Villas</FooterItemLink>
          </FooterLists>
        </FooterItems>
        <FooterItems>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLists>
            <FooterItemLink>About Us</FooterItemLink>
            <FooterItemLink>Terms & Condtions</FooterItemLink>
            <FooterItemLink>User's Guide</FooterItemLink>
            <FooterItemLink>Support Center</FooterItemLink>
            <FooterItemLink>Press Info</FooterItemLink>
            <FooterItemLink>Contact Us</FooterItemLink>
          </FooterLists>
        </FooterItems>
        <FooterItems>
          <FooterTitle>Properties</FooterTitle>
          <FooterLists>
            <FooterItemLink>Rent</FooterItemLink>
            <FooterItemLink>Buy</FooterItemLink>
            <FooterItemLink>Sell</FooterItemLink>
            <FooterItemLink>New Homes</FooterItemLink>
          </FooterLists>
        </FooterItems>
        <FooterItems>
          <FooterTitle>Subscribe</FooterTitle>
          <FooterLists>
            <FooterText>We don't send spam so don't worry.</FooterText>
            <InputWrapper>
              <Input placeholder="Enter your email" />
              <Button>
                <FlyIcon />
              </Button>
            </InputWrapper>
          </FooterLists>
        </FooterItems>
      </FooterWrapper>
    </div>
  );
};

export default FooterSection;
