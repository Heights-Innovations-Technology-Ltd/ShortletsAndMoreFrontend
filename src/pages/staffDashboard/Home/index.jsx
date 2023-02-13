import React from "react";
import StaffHeader from "../../../components/StaffHeader";

import { Container, LeftContainer, RightContainer } from "./style";

import { tableDatas } from "../../../utils/config";
import StaffTable from "../../../components/Table";
import CheckInBarChart from "../../../components/Chart";
import StaffStatusCard from "../../../components/Cards/staffStatusCard";
import ServicesCard from "../../../components/Cards/ServicesCard";
import CalenderCard from "../../../components/Calender";
import PrimaryButton from "../../../components/PrimaryButton";
// import { ReactComponent as EditIcon } from "../../../assets/svg/edit.svg";

const StaffHome = () => {
  const header = ["Name", "Apartment", "Room Type", "Date", "Time", "Action"];
  const dataBody = tableDatas
    .slice(0, 5)
    .map((data) => [
      data.name,
      data.apartment,
      data.roomType,
      data.date,
      data.time,
      <PrimaryButton title="Checkout" />,
    ]);

  return (
    <div>
      <StaffHeader />
      <Container>
        <LeftContainer>
          <StaffStatusCard />
          <CheckInBarChart />
          <>
            <StaffTable header={header} body={dataBody} arrOfObject />
          </>
        </LeftContainer>
        <RightContainer>
          <CalenderCard />
          <ServicesCard />
        </RightContainer>
      </Container>
    </div>
  );
};

export default StaffHome;
