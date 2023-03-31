import React from "react";
import {
  StaffProfileContainer,
  Delete,
  ProfileLists,
  ProfileList,
} from "./style";
import { ReactComponent as User } from "../../assets/svg/user.svg";
import { ReactComponent as DeleteI } from "../../assets/svg/de.svg";
import { Link, useNavigate } from "react-router-dom";

const StaffProfile = () => {
  const localProfile = localStorage.getItem("userProfile");

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <StaffProfileContainer
      key="Profile"
      // initial={{ y: 10, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // exit={{ y: 10, opacity: 0 }}
      // transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 200 }}
    >
      {!localProfile && (
        <Link to="/register">
          <ProfileLists>
            <User />
            <ProfileList>Profile</ProfileList>
          </ProfileLists>
        </Link>
      )}

      {!localProfile && (
        <Link to="/login">
          <ProfileLists>
            <User />
            <ProfileList>Reset Password</ProfileList>
          </ProfileLists>
        </Link>
      )}

      {localProfile && (
        <Link to="/home">
          <ProfileLists>
            <User />
            <ProfileList>Home</ProfileList>
          </ProfileLists>
        </Link>
      )}
      {localProfile && (
        <Link to="/login" onClick={handleLogout}>
          <ProfileLists onClick={handleLogout}>
            <DeleteI />
            <Delete>Logout</Delete>
          </ProfileLists>
        </Link>
      )}
    </StaffProfileContainer>
  );
};

export default StaffProfile;
