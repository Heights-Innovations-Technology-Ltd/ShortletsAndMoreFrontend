import React from "react";

const Booking = () => {
  return (
    <>
      <label>Destination</label>
      <select className="lg:w-[300px] md:w-full border-b-2 rounded-md p-2">
        <option>Grande Antigua</option>
        <option>Key West</option>
        <option>Maldives</option>
        <option>Cozumel</option>
      </select>
    </>
  );
};

export default Booking;
