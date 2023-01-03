import React from "react";
import ConfirmBooking from "../../components/ConfirmBooking/ConfirmBooking";
import FooterSection from "../../layout/FooterSection/FooterSection";
import NavBar from "../../layout/Navbar/Navbar";

const BookingConfirmation = () => {
  return (
    <>
      <NavBar />
      <ConfirmBooking />
      <FooterSection />
    </>
  );
};

export default BookingConfirmation;
