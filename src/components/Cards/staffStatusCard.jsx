import React, { useEffect, useState } from "react";
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
import {
  useGetAllApartmentsQuery,
  useGetAllBookingsQuery,
  useGetAllReservationsQuery,
} from "../../store/Services/staffService";

const StaffStatusCard = () => {
  //endpoints
  const allApartments = useGetAllApartmentsQuery();
  const getAllReservations = useGetAllReservationsQuery();
  const getAllBookings = useGetAllBookingsQuery();

  let booking = getAllBookings?.data?.data?.length;
  let reservation = getAllReservations?.data?.data?.length;
  let apartment = allApartments?.data?.data?.length;

  let total = booking + reservation + apartment;

  return (
    <Testing>
      <Container
        key="bookingCard"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 200 }}
      >
        <CardTop>
          <CardTitle>Total Bookings</CardTitle>
          {/*paid */}
          <BookingsSvg />
        </CardTop>
        <ProgressContainer>
          <ProgressFill
            background="#8BA00D"
            width={`${(reservation / total) * 100}%`}
          ></ProgressFill>
        </ProgressContainer>
        <Count>{getAllReservations?.data?.data?.length}</Count>
      </Container>

      <Container
        key="reservationCard"
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 200 }}
      >
        <CardTop>
          <CardTitle>Total Reservation</CardTitle>
          {/*paid or not */}
          <ReservationsSvg />
        </CardTop>
        <ProgressContainer>
          <ProgressFill
            background="#FFCA2A"
            width={`${(booking / total) * 100}%`}
          ></ProgressFill>
        </ProgressContainer>
        <Count>{getAllBookings?.data?.data?.length}</Count>
      </Container>

      <Container
        key="apartmentCard"
        transition={{ duration: 0.6 }}
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 200 }}
      >
        <CardTop>
          <CardTitle>Total Apartment</CardTitle>
          <ApartmentSvg />
        </CardTop>
        <ProgressContainer>
          <ProgressFill
            background="#C43C20"
            width={`${(apartment / total) * 100}%`}
          ></ProgressFill>
        </ProgressContainer>
        <Count>{allApartments?.data?.data?.length}</Count>
      </Container>
    </Testing>
  );
};

export default StaffStatusCard;
