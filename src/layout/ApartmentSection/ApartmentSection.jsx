import React from "react";
// import { PaginationNav1Presentation } from "../../components/Pagination/Pagination";
import {
  BsArrowLeft,
  BsArrowRight,
  BsGeoAltFill,
  BsShieldShaded,
} from "react-icons/bs";
import listing_img_four from "../../assets/listing_img_four.png";
import listing_img_one from "../../assets/listing_img_one.png";
import listing_img_three from "../../assets/listing_img_three.png";
import listing_img_two from "../../assets/listing_img_two.png";
import ListingSidebar from "../ListingSidebar/ListingSidebar";

const ApartmentSection = () => {
  return (
    <>
      <div
        className="flex justify-between items-center flex-wrap mt-20 mb-4 md:mb-0"
        style={{ width: "93.333333%" }}
      >
        <div>
          <p className="md:ml-96 ml-10" style={{ fontSize: "0.5rem" }}>
            200 results
          </p>
        </div>

        <div className="flex items-center">
          <select
            id="underline_select"
            className="block p-2 px- w-full text-sm text-gray-700  border-0 border-b-2 border-gray-100  dark:text-gray-700 dark:border-gray-100 focus:outline-none focus:ring-0 focus:border-gray-200"
            style={{ fontSize: "0.5rem" }}
          >
            <option selected disabled>
              <span>Sort by:</span> Newest Listings
            </option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>

      <div className="flex md:ml-20 flex-wrap md:flex-nowrap justify-center">
        <div>
          <ListingSidebar />
        </div>
        <div className="flex items-center flex-wrap w-4/5">
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
                  View Rooms
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
                  View Rooms
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
                  View Rooms
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
                  View Rooms
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
                  View Rooms
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
                  View Rooms
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
                  View Rooms
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
                  View Rooms
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
                  View Rooms
                </div>
              </button>
            </div>
          </div>
          {/* <PaginationNav1Presentation /> */}
        </div>
      </div>

      <div class="flex flex-col lg:flex-row justify-center items-center mb-28 mt-20 ml-0 md:ml-80">
        <nav
          aria-label="Pagination"
          class="flex justify-center items-center text-gray-600 mt-8 lg:mt-0"
        >
          <a href="#" class="p-2 mr-4 rounded-2xl hover:bg-gray-100">
            <BsArrowLeft size="1rem" />
          </a>
          <a href="#" class="px-4 py-2 rounded-2xl hover:bg-gray-100">
            1{" "}
          </a>
          <a
            href="#"
            class="px-4 py-2 rounded-3xl  text-gray-900 font-medium hover:bg-gray-100"
            style={{ backgroundColor: "#8BA00D" }}
          >
            {" "}
            2{" "}
          </a>
          <a href="#" class="px-4 py-2 rounded-3xl hover:bg-gray-100">
            {" "}
            3{" "}
          </a>
          <a href="#" class="px-4 py-2 rounded-3xl hover:bg-gray-100">
            {" "}
            4{" "}
          </a>
          <a href="#" class="px-4 py-2 rounded-3xl hover:bg-gray-100">
            {" "}
            ...{" "}
          </a>
          <a href="#" class="px-4 py-2 rounded-3xl hover:bg-gray-100">
            {" "}
            25{" "}
          </a>
          <a href="#" class="p-2 ml-4 rounded-3xl hover:bg-gray-100">
            <BsArrowRight size="1rem" style={{ fontWeight: "bold" }} />
          </a>
        </nav>
      </div>
    </>
  );
};

export default ApartmentSection;
