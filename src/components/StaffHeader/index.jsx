import React, { useState } from "react";
import {
  BellContainer,
  Container,
  DropDown,
  Image,
  ImageContainer,
  Input,
  LeftContainer,
  LeftHeader,
  LeftInputWrapper,
  RightContainer,
  UserContainer,
  Username,
} from "./style";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import { ReactComponent as SearchIcon } from "../../assets/svg/headerSearch.svg";
import { ReactComponent as NotificationIcon } from "../../assets/svg/notification.svg";

const image = "../../assets//user.png";
const StaffHeader = () => {
  const [click, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!click);
  };
  return (
    <Container>
      <LeftContainer>
        <LeftHeader>Dashboard</LeftHeader>
        <LeftInputWrapper>
          <Input type="text" placeholder="Search" />
          <SearchIcon />
        </LeftInputWrapper>
      </LeftContainer>
      <RightContainer>
        <BellContainer>
          <NotificationIcon />
        </BellContainer>
        <UserContainer>
          <ImageContainer>
            {/* <Image src={image} alt="users" /> */}A
          </ImageContainer>
          <Username>Akinyemi Bamidele</Username>
          <DropDown onClick={handleClick}>
            {click ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
          </DropDown>
        </UserContainer>
      </RightContainer>
    </Container>
  );
};

export default StaffHeader;
