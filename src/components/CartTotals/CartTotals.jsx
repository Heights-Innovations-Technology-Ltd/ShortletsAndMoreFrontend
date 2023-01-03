import React from "react";

const CartTotals = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white shadow-md m-3 p-4" style={{ width: "250px" }}>
        <h1 className="ml-4 font-semibold">Cart Totals</h1>
        <div className="p-4 flex flex-row justify-between items-center">
          <h4 className="text-xs font-semibold">Subtotal</h4>
          <h5 className="text-xs">NGN34,900</h5>
        </div>

        <hr className="ml-4 mr-4" />

        <div className="p-4 flex flex-row justify-between items-center">
          <h4 className="text-xs font-semibold">Total</h4>
          <h5 className="text-xs ">NGN34,900</h5>
        </div>
      </div>

      <button
        type="button"
        className="inline-block px-2 py-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight capitalize hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        style={{
          border: "1px solid #8BA00D",
          color: "#ffffff",
          backgroundColor: "#8BA00D",
          width: "250px",
        }}
      >
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
};

export default CartTotals;
