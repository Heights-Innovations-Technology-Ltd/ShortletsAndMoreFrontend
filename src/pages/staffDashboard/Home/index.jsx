import React from "react";
import StaffHeader from "../../../components/StaffHeader";

import { Container, LeftContainer, RightContainer, Status } from "./style";

import { tableDatas } from "../../../utils/config";
import StaffTable from "../../../components/Table";
import CheckInBarChart from "../../../components/Chart";
import StaffStatusCard from "../../../components/Cards/staffStatusCard";
import ServicesCard from "../../../components/Cards/ServicesCard";
import CalenderCard from "../../../components/Calender";
import PrimaryButton from "../../../components/PrimaryButton";
import { useGetAllCheckInsQuery } from "../../../store/Services/staffService";
import PuffLoader from "../../../components/Loader";
// import { ReactComponent as EditIcon } from "../../../assets/svg/edit.svg";

const StaffHome = () => {
  const getAllCheckIns = useGetAllCheckInsQuery();
  const header = ["Room Type", "Chcek In", "Check Out", "Status", "Action"];
  const dataBody = getAllCheckIns?.data?.data[0].slice(0, 5)?.map((data) => [
    data.roomType,
    data.checkinDate.slice(0, 10),
    data.checkoutDate.slice(0, 10),
    <Status
      color={
        data.status === "checked-in"
          ? "#2F8511"
          : data.status === "Pending"
          ? "#FFCA2A"
          : "#C43C20"
      }
      background={
        data.status === "checked-in"
          ? "rgba(47, 133, 17, 0.1)"
          : data.status === "Pending"
          ? "rgba(255, 233, 168, 0.5)"
          : "rgba(231, 175, 164, 0.3)"
      }
    >
      {data.status}
    </Status>,
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
            {getAllCheckIns?.isLoading ? (
              <PuffLoader />
            ) : (
              <StaffTable
                header={header}
                body={dataBody}
                arrOfObject
                staffHome
              />
            )}
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
