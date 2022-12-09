import React from "react";
import {
  BsArrowRightShort,
  BsGeoAltFill,
  BsShieldShaded,
} from "react-icons/bs";
import listing_img_four from "../../assets/listing_img_four.png";
import listing_img_one from "../../assets/listing_img_one.png";
import listing_img_three from "../../assets/listing_img_three.png";
import listing_img_two from "../../assets/listing_img_two.png";

const RecentListingSection = () => {
  return (
    <>
      <h1 className="text-center mt-8 mb-4 lg:text-2xl font-semibold">
        Recent Apartment Listings
      </h1>
      <p
        className="text-center lg:text-sm w-6/12 mb-8 my-0 mx-auto"
        style={{ width: "53%" }}
      >
        If you're looking for a brand new, cutting edge apartment in the heart
        of the city, look no further than our recent development
      </p>

      <div className="flex items-center justify-center flex-wrap">
        <div className="bg-white w-64 shadow-md m-3">
          <div className="h-2/3 w-full">
            <img
              className="w-full h-full object-cover"
              src={listing_img_one}
              alt="piña"
            />
          </div>
          <div className="px-4 flex flex-col justify-center items-center mt-4">
            <p className="text-xs font-semibold capitalize">
              Apartment in ajah, Abraham Ad..
            </p>
            <div className="flex justify-center items-center">
              <BsGeoAltFill size={12} className="mt-1" />
              <p className="text-xs mt-2" style={{ fontSize: "10px" }}>
                234 Ring road, Lekki Phase 1, Lekki, Lagos
              </p>
            </div>
            <p
              className="text-xs mt-2 mb-4 ml-2"
              style={{ fontSize: "8px", lineHeight: "16px" }}
            >
              Our fully furnished and equipped apartments are perfect for
              business or pleasure.
            </p>
          </div>

          <div className="flex justify-between items-center mb-4 px-6">
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>Pool</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>Security</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>1 Garage</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>1200 Sq Ft</p>
            </div>
          </div>

          {/* <div class="grid max-w-sm grid-cols-1 mx-auto text-center divide-y shadow-md">
            <div class="p-4 text-white"></div>
          </div> */}
          <hr />
          <div className="flex justify-end p-4">
            <button
              type="button"
              className="inline-block px-2 py-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight capitalize rounded-lg hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              style={{ border: "1px solid #8BA00D", color: "#8BA00D" }}
            >
              <div className="flex justify-center items-center">
                View Details
                <BsArrowRightShort
                  size={12}
                  // className="mb-2"
                  style={{ color: "#8BA00D" }}
                />
              </div>
            </button>
          </div>
        </div>
        <div className="bg-white w-64 shadow-md m-3">
          <div className="h-2/3 w-full">
            <img
              className="w-full h-full object-cover"
              src={listing_img_two}
              alt="piña"
            />
          </div>
          <div className="px-4 flex flex-col justify-center items-center mt-4">
            <p className="text-xs font-semibold capitalize">
              Apartment in ajah, Abraham Ad..
            </p>
            <div className="flex justify-center items-center">
              <BsGeoAltFill size={12} className="mt-1" />
              <p className="text-xs mt-2" style={{ fontSize: "10px" }}>
                234 Ring road, Lekki Phase 1, Lekki, Lagos
              </p>
            </div>
            <p
              className="text-xs mt-2 mb-4 ml-2"
              style={{ fontSize: "8px", lineHeight: "16px" }}
            >
              Our fully furnished and equipped apartments are perfect for
              business or pleasure.
            </p>
          </div>

          <div className="flex justify-between items-center mb-4 px-6">
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>Pool</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>Security</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>1 Garage</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>1200 Sq Ft</p>
            </div>
          </div>

          {/* <div class="grid max-w-sm grid-cols-1 mx-auto text-center divide-y shadow-md">
            <div class="p-4 text-white"></div>
          </div> */}
          <hr />
          <div className="flex justify-end p-4">
            <button
              type="button"
              className="inline-block px-2 py-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight capitalize rounded-lg hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              style={{ border: "1px solid #8BA00D", color: "#8BA00D" }}
            >
              <div className="flex justify-center items-center">
                View Details
                <BsArrowRightShort
                  size={12}
                  // className="mb-2"
                  style={{ color: "#8BA00D" }}
                />
              </div>
            </button>
          </div>
        </div>

        <div className="bg-white w-64 shadow-md m-3">
          <div className="h-2/3 w-full">
            <img
              className="w-full h-full object-cover"
              src={listing_img_three}
              alt="piña"
            />
          </div>
          <div className="px-4 flex flex-col justify-center items-center mt-4">
            <p className="text-xs font-semibold capitalize">
              Apartment in ajah, Abraham Ad..
            </p>
            <div className="flex justify-center items-center">
              <BsGeoAltFill size={12} className="mt-1" />
              <p className="text-xs mt-2" style={{ fontSize: "10px" }}>
                234 Ring road, Lekki Phase 1, Lekki, Lagos
              </p>
            </div>
            <p
              className="text-xs mt-2 mb-4 ml-2"
              style={{ fontSize: "8px", lineHeight: "16px" }}
            >
              Our fully furnished and equipped apartments are perfect for
              business or pleasure.
            </p>
          </div>

          <div className="flex justify-between items-center mb-4 px-6">
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>Pool</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>Security</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>1 Garage</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>1200 Sq Ft</p>
            </div>
          </div>

          {/* <div class="grid max-w-sm grid-cols-1 mx-auto text-center divide-y shadow-md">
            <div class="p-4 text-white"></div>
          </div> */}

          <hr />
          <div className="flex justify-end p-4">
            <button
              type="button"
              className="inline-block px-2 py-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight capitalize rounded-lg hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              style={{ border: "1px solid #8BA00D", color: "#8BA00D" }}
            >
              <div className="flex justify-center items-center">
                View Details
                <BsArrowRightShort
                  size={12}
                  // className="mb-2"
                  style={{ color: "#8BA00D" }}
                />
              </div>
            </button>
          </div>
        </div>

        <div className="bg-white w-64 shadow-md m-3">
          <div className="h-2/3 w-full">
            <img
              className="w-full h-full object-cover"
              src={listing_img_four}
              alt="piña"
            />
          </div>
          <div className="px-4 flex flex-col justify-center items-center mt-4">
            <p className="text-xs font-semibold capitalize">
              Apartment in ajah, Abraham Ad..
            </p>
            <div className="flex justify-center items-center">
              <BsGeoAltFill size={12} className="mt-1" />
              <p className="text-xs mt-2" style={{ fontSize: "10px" }}>
                234 Ring road, Lekki Phase 1, Lekki, Lagos
              </p>
            </div>
            <p
              className="text-xs mt-2 mb-4 ml-2"
              style={{ fontSize: "8px", lineHeight: "16px" }}
            >
              Our fully furnished and equipped apartments are perfect for
              business or pleasure.
            </p>
          </div>

          <div className="flex justify-between items-center mb-4 px-6">
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>Pool</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>Security</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>1 Garage</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BsShieldShaded
                size={12}
                className="mb-2"
                style={{ color: "#8BA00D" }}
              />
              <p style={{ fontSize: "8px" }}>1200 Sq Ft</p>
            </div>
          </div>

          {/* <div class="grid max-w-sm grid-cols-1 mx-auto text-center divide-y shadow-md">
            <div class="p-4 text-white"></div>
          </div> */}
          <hr />
          <div className="flex justify-end p-4">
            <button
              type="button"
              className="inline-block px-2 py-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight capitalize rounded-lg hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              style={{ border: "1px solid #8BA00D", color: "#8BA00D" }}
            >
              <div className="flex justify-center items-center">
                View Details
                <BsArrowRightShort
                  size={12}
                  // className="mb-2"
                  style={{ color: "#8BA00D" }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentListingSection;
