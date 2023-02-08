import React from 'react'
import styled from "styled-components";
// import StaffSidebar from "components/Sidebar/StaffSidebar";
// import Navbar from "components/navbar";
// import MobileNavbar from "components/navbar/MobileNavbar";
import { useSelector } from "react-redux";
import { useLocation, Outlet } from "react-router-dom";
import { Body, BodyLeft, BodyRight, Dashboard } from './style';
import StaffSidebar from '../../components/Sidebar/StaffSidebar';

const StaffLayout = ({ children }) => {
  // const layoutInfo = useSelector((store) => store.LayoutInfo);
  // const { sidebarWidth } = layoutInfo;

  const location = useLocation();

//   let hideMobileNav =
//     location.pathname.includes("/dashboard/rewards") &&
//     location.pathname.length > 31;

  // let hideSearch = location.pathname.includes("/dashboard/rewards");

  return (
    <Dashboard>
      {/* <Navbar
        dashboard
        imgStyles={{ maxWidth: "100px" }}
        style={{ padding: "12px 24px" }}
      /> */}
      {/* <MobileNavbar hideNav={hideMobileNav} /> */}
      <Body>
        <BodyLeft>
          <StaffSidebar />
        </BodyLeft>
        <BodyRight >
          <Outlet />
          {children}
        </BodyRight>
      </Body>
    </Dashboard>
  );
};

export default StaffLayout;

