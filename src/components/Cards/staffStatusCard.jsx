import React from "react";
import {
  CardTitle,
  CardTop,
  Container,
  Count,
  ProgressContainer,
  ProgressFill,
  Testing,
} from "./style";

import { ReactComponent as BookingsSvg } from "../../assets/svg/bookings.svg";
import { ReactComponent as ReservationsSvg } from "../../assets/svg/reservations.svg";
import { ReactComponent as ApartmentSvg } from "../../assets/svg/apartment.svg";

const StaffStatusCard = () => {
  return (
    <Testing>
      <Container>
        <CardTop>
          <CardTitle>Total Bookings</CardTitle>
          <BookingsSvg />
        </CardTop>
        <ProgressContainer>
          <ProgressFill background="#8BA00D" width="65%"></ProgressFill>
        </ProgressContainer>
        <Count>5,000</Count>
      </Container>

      <Container>
        <CardTop>
          <CardTitle>Total Reservation</CardTitle>
          <ReservationsSvg />
        </CardTop>
        <ProgressContainer>
          <ProgressFill background="#FFCA2A" width="50%"></ProgressFill>
        </ProgressContainer>
        <Count>1,000</Count>
      </Container>

      <Container>
        <CardTop>
          <CardTitle>Total Apartment</CardTitle>
          <ApartmentSvg />
        </CardTop>
        <ProgressContainer>
          <ProgressFill background="#C43C20" width="30%"></ProgressFill>
        </ProgressContainer>
        <Count>100</Count>
      </Container>
    </Testing>
  );
};

export default StaffStatusCard;
