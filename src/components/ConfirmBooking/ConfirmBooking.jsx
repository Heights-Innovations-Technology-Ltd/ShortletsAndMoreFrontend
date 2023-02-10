import React, { useEffect, useState } from "react";
import confirm_booking from "../../assets/confirm_booking.png";

const ConfirmBooking = () => {
  const bookedAt = new Date().toISOString().split("T")[0];

  return (
    <div className="flex flex-col justify-between items-center p-20 bg-gray-100 py-60">
      <img src={confirm_booking} className="w-14" alt="" />
      <h4 className="text-lg font-semibold">Your booking is confirmed</h4>
      <p className=" text-gray-400" style={{ fontSize: "0.6rem" }}>
        Thank you. Your order has been recieved
      </p>

      <div
        className="bg-white shadow-md m-3 p-4 w-[500px] rounded-sm "
        style={{ border: "2px dashed #8BA00D" }}
      >
        <div className="p-4 flex flex-row justify-between items-center">
          <h4 className="text-xs text-gray-400">Order Number</h4>
          <h5 className="text-xs text-gray-400">Date</h5>
          <h5 className="text-xs text-gray-400">Payment Method</h5>
        </div>

        <div className="p-4 flex flex-row justify-between items-center">
          <h4 className="text-xs">13119</h4>
          <h5 className="text-xs">{bookedAt}</h5>
          <h5 className="text-xs">Direct Bank Transfer</h5>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;
