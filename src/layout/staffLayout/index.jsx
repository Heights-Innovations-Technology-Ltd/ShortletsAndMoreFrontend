import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { useLocation, Outlet } from "react-router-dom";
import { Body, BodyLeft, BodyRight, Dashboard } from "./style";
import StaffSidebar from "../../components/Sidebar/StaffSidebar";

const DashboardLayout = ({ isStaff, children }) => {
  return (
    <Dashboard>
      {isStaff ? (
        <Body>
          <BodyLeft>
            <StaffSidebar />
          </BodyLeft>
          <BodyRight>
            <Outlet />
            {children}
          </BodyRight>
        </Body>
      ) : (
        <Body>
          <BodyLeft>
            <StaffSidebar />
          </BodyLeft>
          <BodyRight>
            <Outlet />
            {children}
          </BodyRight>
        </Body>
      )}
    </Dashboard>
  );
};

export default DashboardLayout;
