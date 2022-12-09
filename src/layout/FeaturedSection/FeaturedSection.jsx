import React from "react";
import { BsShieldShaded } from "react-icons/bs";
import recent_listing from "../../assets/recent_listing.png";
// import listing_img_one from "../../assets/listing_img_one.png";
// import listing_img_three from "../../assets/listing_img_three.png";
// import listing_img_two from "../../assets/listing_img_two.png";

const FeaturedSection = () => {
  return (
    <>
      <h1 className="text-center mt-8 mb-4 lg:text-2xl font-semibold">
        Featured room
      </h1>
      <p
        className="text-center lg:text-sm w-6/12 mb-8 my-0 mx-auto"
        style={{ width: "53%" }}
      >
        Looking for a comfortable and stylish place on your next vacaction? Look
        no further than our featured room!
      </p>

      <div className="flex items-center justify-center flex-wrap">
        <div className="bg-white w-64 shadow-md m-3">
          <div className="h-2/3 w-full">
            <img
              className="w-full h-full object-cover"
              src={recent_listing}
              alt="piña"
            />
          </div>
          <div className="px-4 flex flex-col mt-4">
            <p className="text-xs font-semibold capitalize">
              Apartment in Ikoyi, Road Ad..
            </p>
          </div>

          <div className="flex justify-start">
            <p className="text-xs mt-2 ml-4 mb-4" style={{ fontSize: "10px" }}>
              Lekki, Apartment
            </p>
          </div>

          <div className="flex justify-between items-center mb-4 px-6">
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>4 Beds</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>Tv Cable</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>Wifi</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>AC</p>
            </div>
          </div>

          <div className="flex justify-between items-center p-4">
            <button
              type="button"
              className="inline-block px-2 py-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight capitalize hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              style={{
                border: "1px solid #8BA00D",
                color: "#ffffff",
                backgroundColor: "#8BA00D",
              }}
            >
              Quick View
            </button>

            <button
              type="button"
              className="inline-block px-2 py-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight capitalize hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              style={{ border: "1px solid #8BA00D", color: "#8BA00D" }}
            >
              View Details
            </button>
          </div>

          <hr />

          <div className="px-4 py-4 " style={{ color: "#8BA00D" }}>
            <span className="font-semibold lg:text-sm">NGN34,900</span>
            <span className="" style={{ fontSize: "0.75rem" }}>
              /Night
            </span>
          </div>
        </div>

        <div className="bg-white w-64 shadow-md m-3">
          <div className="h-2/3 w-full">
            <img
              className="w-full h-full object-cover"
              src={recent_listing}
              alt="piña"
            />
          </div>
          <div className="px-4 flex flex-col mt-4">
            <p className="text-xs font-semibold capitalize">
              Apartment in Ikoyi, Road Ad..
            </p>
          </div>

          <div className="flex justify-start">
            <p className="text-xs mt-2 ml-4 mb-4" style={{ fontSize: "10px" }}>
              Lekki, Apartment
            </p>
          </div>

          <div className="flex justify-between items-center mb-4 px-6">
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>4 Beds</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>Tv Cable</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>Wifi</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>AC</p>
            </div>
          </div>

          <div className="flex justify-between items-center p-4">
            <button
              type="button"
              className="inline-block px-2 py-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight capitalize hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              style={{
                border: "1px solid #8BA00D",
                color: "#ffffff",
                backgroundColor: "#8BA00D",
              }}
            >
              Quick View
            </button>

            <button
              type="button"
              className="inline-block px-2 py-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight capitalize hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              style={{ border: "1px solid #8BA00D", color: "#8BA00D" }}
            >
              View Details
            </button>
          </div>

          <hr />

          <div className="px-4 py-4 " style={{ color: "#8BA00D" }}>
            <span className="font-semibold lg:text-sm">NGN34,900</span>
            <span className="" style={{ fontSize: "0.75rem" }}>
              /Night
            </span>
          </div>
        </div>

        <div className="bg-white w-64 shadow-md m-3">
          <div className="h-2/3 w-full">
            <img
              className="w-full h-full object-cover"
              src={recent_listing}
              alt="piña"
            />
          </div>
          <div className="px-4 flex flex-col mt-4">
            <p className="text-xs font-semibold capitalize">
              Apartment in Ikoyi, Road Ad..
            </p>
          </div>

          <div className="flex justify-start">
            <p className="text-xs mt-2 ml-4 mb-4" style={{ fontSize: "10px" }}>
              Lekki, Apartment
            </p>
          </div>

          <div className="flex justify-between items-center mb-4 px-6">
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>4 Beds</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>Tv Cable</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>Wifi</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>AC</p>
            </div>
          </div>

          <div className="flex justify-between items-center p-4">
            <button
              type="button"
              className="inline-block px-2 py-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight capitalize hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              style={{
                border: "1px solid #8BA00D",
                color: "#ffffff",
                backgroundColor: "#8BA00D",
              }}
            >
              Quick View
            </button>

            <button
              type="button"
              className="inline-block px-2 py-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight capitalize hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              style={{ border: "1px solid #8BA00D", color: "#8BA00D" }}
            >
              View Details
            </button>
          </div>

          <hr />

          <div className="px-4 py-4 " style={{ color: "#8BA00D" }}>
            <span className="font-semibold lg:text-sm">NGN34,900</span>
            <span className="" style={{ fontSize: "0.75rem" }}>
              /Night
            </span>
          </div>
        </div>

        <div className="bg-white w-64 shadow-md m-3">
          <div className="h-2/3 w-full">
            <img
              className="w-full h-full object-cover"
              src={recent_listing}
              alt="piña"
            />
          </div>
          <div className="px-4 flex flex-col mt-4">
            <p className="text-xs font-semibold capitalize">
              Apartment in Ikoyi, Road Ad..
            </p>
          </div>

          <div className="flex justify-start">
            <p className="text-xs mt-2 ml-4 mb-4" style={{ fontSize: "10px" }}>
              Lekki, Apartment
            </p>
          </div>

          <div className="flex justify-between items-center mb-4 px-6">
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>4 Beds</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>Tv Cable</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>Wifi</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>AC</p>
            </div>
          </div>

          <div className="flex justify-between items-center p-4">
            <button
              type="button"
              className="inline-block px-2 py-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight capitalize hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              style={{
                border: "1px solid #8BA00D",
                color: "#ffffff",
                backgroundColor: "#8BA00D",
              }}
            >
              Quick View
            </button>

            <button
              type="button"
              className="inline-block px-2 py-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight capitalize hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              style={{ border: "1px solid #8BA00D", color: "#8BA00D" }}
            >
              View Details
            </button>
          </div>

          <hr />

          <div className="px-4 py-4 " style={{ color: "#8BA00D" }}>
            <span className="font-semibold lg:text-sm">NGN34,900</span>
            <span className="" style={{ fontSize: "0.75rem" }}>
              /Night
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedSection;
