import React, { useEffect, useState } from "react";
// import { staffSidebarLink, StaffSidebarLinks } from "utils/config";
import {
  ListWrapper,
  Logout,
  LogoutText,
  LogoutWrapper,
  SidebarContentItemIcon,
  SidebarContentItemLink,
  SidebarLinks,
  SidebarWrapper,
  SideLinkWrapper,
  SidebarFlex,
  Top,
  Item,
} from "./style";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineLogout } from "react-icons/hi";
// import { store } from "redux/Store";
// import { setSidebarWidth } from "redux/Slices";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { StaffSidebarLinks } from "../../../utils/config";

import { ReactComponent as BrandLogoIcon } from "../../../assets/svg/sidebarLogo.svg";
import { ReactComponent as BrandBigLogoIcon } from "../../../assets/svg/sidebarBig.svg";
// import SidebarItem from "./SidebarItem";

const StaffSidebar = () => {
  const [expanded, setExpaned] = useState(() => window.innerWidth > 1050);

  const location = useLocation();
  const navigate = useNavigate();

  const sidebarVariants = {
    true: {
      width: "236px",
    },
    false: {
      width: "0px",
    },
  };

  return (
    <SidebarWrapper
      width="100px"
      key="sidebar"
      variants={sidebarVariants}
      animate={expanded ? `${expanded}` : ""}
    >
      <Top>
        <BrandLogoIcon />
        <ListWrapper onClick={() => setExpaned(!expanded)}>
          <HiOutlineChevronLeft color="white" size={24} />
        </ListWrapper>
      </Top>
      <SidebarLinks>
        {StaffSidebarLinks.map((item, index) => (
          <Item>
            <div>
              <NavLink
                to={item.path}
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#8ba00d",
                        display: "flex",
                        alignItems: "center",
                      }
                    : {
                        display: "flex",
                        alignItems: "center",
                      }
                }
                onClick={item.function}
              >
                <>
                  <item.icon size={24} />
                  {item.title}
                </>
              </NavLink>
            </div>
          </Item>
        ))}
      </SidebarLinks>
      <Logout>
        <BrandBigLogoIcon />
      </Logout>
    </SidebarWrapper>
  );
};

export default StaffSidebar;
