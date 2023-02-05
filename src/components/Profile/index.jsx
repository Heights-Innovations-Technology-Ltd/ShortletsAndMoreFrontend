import React from "react";
import { ProfileContainer, Delete, ProfileLists, ProfileList } from "./style";
import { ReactComponent as User } from "../../assets/svg/user.svg";
import { ReactComponent as DeleteI } from "../../assets/svg/de.svg";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const localProfile = localStorage.getItem("userProfile");

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <ProfileContainer
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
            <ProfileList>Sign Up</ProfileList>
          </ProfileLists>
        </Link>
      )}

      {!localProfile && (
        <Link to="/login">
          <ProfileLists>
            <User />
            <ProfileList>Sign In</ProfileList>
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
    </ProfileContainer>
  );
};

export default Profile;
