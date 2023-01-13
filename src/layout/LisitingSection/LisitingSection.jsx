import React from "react";
import bed from "../../assets/bed.png";
import recent_listing from "../../assets/recent_listing.png";
import wifi from "../../assets/wifi.png";
// import { PaginationNav1Presentation } from "../../components/Pagination/Pagination";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ListingSidebar from "../ListingSidebar/ListingSidebar";
import { cartData } from "../../utils/config";
import AddToCartCard from "../../components/Cards/AddToCartCard";

const LisitingSection = () => {
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
        <div className="flex flex-wrap w-4/5">
          {cartData.map((apartment) => (
            <>
              <AddToCartCard
                apartmentImage={apartment.apartmentImage}
                apartmentName={apartment.apartmentName}
                apartmentPrice={apartment.apartmentPrice}
              />
            </>
          ))}

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

export default LisitingSection;
