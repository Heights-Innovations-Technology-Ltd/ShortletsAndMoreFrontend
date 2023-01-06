import React from "react";
import confirm_booking from "../../assets/confirm_booking.png";

const ConfirmBooking = () => {
  return (
    <div className="flex flex-col justify-between items-center p-20 bg-gray-100 ">
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
          <h5 className="text-xs">31-03-2022</h5>
          <h5 className="text-xs">Direct Bank Transfer</h5>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div
          className="bg-white shadow-md m-3 p-4 w-[500px] rounded-sm"
          //   style={{ width: "250px" }}
        >
          <h1 className="ml-4 font-semibold text-xs">Booking details</h1>

          <div className="p-4 flex flex-row justify-between items-center">
            <h4 className="text-xs">Product</h4>
            <h5 className="text-xs">Subtotal</h5>
          </div>

          <hr className="ml-4 mr-4" />

          <div className="p-4 flex flex-row justify-between items-center">
            <h4 className="text-xs">Luxury Duplex</h4>
            <h5 className="text-xs">NGN104,700</h5>
          </div>

          <div className="p-4 flex flex-row justify-between items-center">
            <h4 className="text-xs">Luxury Duplex</h4>
            <h5 className="text-xs">NGN104,700</h5>
          </div>

          <div className="p-4 flex flex-row justify-between items-center">
            <h4 className="text-xs font-semibold">Subtotal</h4>
            <h5 className="text-xs">NGN209,700</h5>
          </div>

          <hr className="ml-4 mr-4" />

          <div className="p-4 flex flex-row justify-between items-center">
            <h4 className="text-xs font-semibold">Total</h4>
            <h5 className="text-xs ">NGN220,800</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;
