import React, { useState } from "react";
import {
  BellContainer,
  Container,
  DropDown,
  NameT,
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
import StaffProfile from "../Profile/StaffProfile";
import image from "../../assets/user.png";
const StaffHeader = ({ title = "Dashboard" }) => {
  const staffInfo = JSON.parse(localStorage.getItem("staffLoginProfile"));
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  const [click, setIsClicked] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const handleClick = () => {
    setIsClicked(!click);
    setShowProfile(!showProfile);
  };

  return (
    <Container>
      <LeftContainer>
        <LeftHeader>{title}</LeftHeader>
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
            <NameT>
              {userProfile
                ? userProfile.firstName.slice(0, 1)
                : staffInfo?.data.firstName.slice(0.1)}
            </NameT>
          </ImageContainer>
          <Username>
            {userProfile ? userProfile.firstName : staffInfo?.data.firstName}{" "}
            {userProfile ? userProfile.lastName : staffInfo?.data.lastName}
          </Username>
          <DropDown onClick={handleClick}>
            {click ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
          </DropDown>
        </UserContainer>
      </RightContainer>
      {showProfile && <StaffProfile />}
    </Container>
  );
};

export default StaffHeader;
