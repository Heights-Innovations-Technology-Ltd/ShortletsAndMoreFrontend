import React from "react";
import StaffHeader from "../../../components/StaffHeader";

import { Container, LeftContainer, RightContainer, Status } from "./style";
import StaffTable from "../../../components/Table";
import CheckInBarChart from "../../../components/Chart";
import ServicesCard from "../../../components/Cards/ServicesCard";
import PrimaryButton from "../../../components/PrimaryButton";
import { useGetAllReservationsQuery } from "../../../store/Services/apartmentService";
import PuffLoader from "../../../components/Loader";

const UserHome = () => {
  const localProfile = localStorage.getItem("userProfile");
  const parseData = JSON.parse(localProfile);
  let guestEmail = parseData?.email;
  const getAllReservation = useGetAllReservationsQuery(guestEmail);

  console.log("ddd", getAllReservation);
  const header = ["Room Type", "Chcek In", "Check Out", "Status"];

  let filteredList = getAllReservation?.data?.data?.filter(
    (item) => item.status === "checked-in"
  );

  let responseData = filteredList || [];
  console.log(responseData)
  const dataBody = responseData?.slice(0, 5)?.map((data) => [
    data.roomName,
    data.startDate.slice(0, 10),
    data.endDate.slice(0, 10),
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
  ]);

  return (
    <div>
      <StaffHeader />
      <Container>
        <LeftContainer>
          <CheckInBarChart />
          <>
            {getAllReservation?.isLoading ? (
              <PuffLoader />
            ) : (
              <StaffTable
                header={header}
                body={dataBody}
                arrOfObject
                userHome
              />
            )}
          </>
        </LeftContainer>
        <RightContainer>
          <ServicesCard />
        </RightContainer>
      </Container>
    </div>
  );
};

export default UserHome;
