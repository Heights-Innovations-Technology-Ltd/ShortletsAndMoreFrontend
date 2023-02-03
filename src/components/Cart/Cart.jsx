import React, { useEffect, useState } from "react";
import { GrEdit, GrTrash } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import cart_img from "../../assets/cart_img.png";
import { useGetAllRoomTypeQuery } from "../../store/Services/apartmentService";
import CartTotals from "../CartTotals/CartTotals";

const Cart = () => {
  const [roomContainer, setRoomContainer] = useState([]);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  let localApartmentID = localStorage.getItem("apartmentID");
  let ApartmentId = JSON.parse(localApartmentID);

  const { data, loading, success, error } = useGetAllRoomTypeQuery(ApartmentId);

  console.log(data);
  useEffect(() => {
    const localData = localStorage.getItem("cartItemId");
    let newItemContainer = JSON.parse(localData);
    console.log(newItemContainer);

    let cartData = [];
    if (newItemContainer) {
      data?.data.forEach((data) => {
        if (newItemContainer.includes(data?.id)) {
          cartData.push(data);

          return;
        }
      });
      setRoomContainer(cartData);
    }
  }, [data]);

  console.log(roomContainer);
  return (
    <div
      className="flex justify-center items-start p-20  bg-gray-100"
      style={{
        padding: " 150px 80px",
      }}
    >
      <div className="bg-white shadow-md m-3 p-4" style={{ width: "700px" }}>
        <h1 className="ml-4 font-semibold mb-2">Cart</h1>
        {roomContainer?.map((room) => (
          <div key={room.id}>
            <hr className="ml-4 mr-4" />
            <div className="p-4 flex flex-row justify-between items-center">
              <div className="flex justify-between items-center">
                <img src={cart_img} alt="/" className="w-11" />
                <h4 className="text-xs ml-4">{room.name}</h4>
              </div>
              <h5 className="text-xs">NGN {room.price}.00</h5>

              <div className="flex justify-center items-center">
                <GrEdit
                  size={12}
                  className="mr-4"
                  style={{ color: "#8BA00D" }}
                  onClick={() => navigate("/property/rooms")}
                />
                <GrTrash size={12} className="" style={{ color: "#8BA00D" }} />
              </div>
            </div>
            <hr className="mb-2 ml-4 mr-4" />
          </div>
        ))}

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
