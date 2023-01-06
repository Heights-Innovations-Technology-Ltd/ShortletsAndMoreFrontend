import React from "react";
import { GrEdit, GrTrash } from "react-icons/gr";
import cart_img from "../../assets/cart_img.png";
import CartTotals from "../CartTotals/CartTotals";

const Cart = () => {
  return (
    <div className="flex justify-center items-start p-20 bg-gray-100">
      <div className="bg-white shadow-md m-3 p-4" style={{ width: "700px" }}>
        <h1 className="ml-4 font-semibold mb-2">Cart</h1>
        <div>
          <hr className="ml-4 mr-4" />
          <div className="p-4 flex flex-row justify-between items-center">
            <div className="flex justify-between items-center">
              <img src={cart_img} alt="/" className="w-11" />
              <h4 className="text-xs ml-4">Luxury Duplex With Terrace</h4>
            </div>
            <h5 className="text-xs">NGN34,900</h5>
            <input
              type="number"
              className="outline-none border-transparent focus:border-transparent focus:ring-0"
              style={{
                width: "4.25rem",
                border: "1px solid #eaeaea",
                borderRadius: "0.3rem",
                height: "2.4rem",
              }}
            />

            <h5 className="text-xs">NGN34,900</h5>
            <div className="flex justify-center items-center">
              <GrEdit size={12} className="mr-4" style={{ color: "#8BA00D" }} />
              <GrTrash size={12} className="" style={{ color: "#8BA00D" }} />
            </div>
          </div>
          <hr className="mb-2 ml-4 mr-4" />
        </div>
        <div>
          <div className="p-4 flex flex-row justify-between items-center">
            <div className="flex justify-between items-center">
              <img src={cart_img} alt="/" className="w-11" />
              <h4 className="text-xs ml-4">Luxury Duplex With Terrace</h4>
            </div>
            <h5 className="text-xs">NGN34,900</h5>
            <input
              type="number"
              className="outline-none border-transparent focus:border-transparent focus:ring-0"
              style={{
                width: "4.25rem",
                border: "1px solid #eaeaea",
                borderRadius: "0.3rem",
                height: "2.4rem",
              }}
            />
            <h5 className="text-xs">NGN34,900</h5>
            <div className="flex justify-center items-center">
              <GrEdit size={12} className="mr-4" style={{ color: "#8BA00D" }} />
              <GrTrash size={12} className="" style={{ color: "#8BA00D" }} />
            </div>
          </div>
          <hr className="mb-2 ml-4 mr-4" />
        </div>

        <div>
          <div className="p-4 flex flex-row justify-between items-center">
            <div className="flex justify-between items-center">
              <img src={cart_img} alt="/" className="w-11" />
              <h4 className="text-xs ml-4">Luxury Duplex With Terrace</h4>
            </div>
            <h5 className="text-xs">NGN34,900</h5>

            <input
              type="number"
              className="outline-none border-transparent focus:border-transparent focus:ring-0"
              style={{
                width: "4.25rem",
                border: "1px solid #eaeaea",
                borderRadius: "0.3rem",
                height: "2.4rem",
              }}
            />

            <h5 className="text-xs">NGN34,900</h5>
            <div className="flex justify-center items-center">
              <GrEdit size={12} className="mr-4" style={{ color: "#8BA00D" }} />
              <GrTrash size={12} className="" style={{ color: "#8BA00D" }} />
            </div>
          </div>
          <hr className="mb-2 ml-4 mr-4" />
        </div>

        <div>
          <div className="p-4 flex flex-row justify-between items-center">
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="coupon "
                className="block p-2 w-40 text-xs mr-2 text-gray-700  border-0 border-b-2 border-gray-100  dark:text-gray-700 dark:border-gray-100 focus:outline-none focus:ring-0 focus:border-gray-200"
              />
              <button
                type="button"
                className="inline-block rounded-md px-6 py-3 border-gray-800 text-gray-800 font-medium text-xs leading-tight capitalize hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                style={{ border: "1px solid #8BA00D", color: "#8BA00D" }}
              >
                APPLY COUPON
              </button>
            </div>

            <div>
              <span className="underline text-xs" style={{ color: "#8BA00D" }}>
                Update Cart
              </span>
            </div>
          </div>
        </div>
      </div>
      <CartTotals />
    </div>
  );
};

export default Cart;
