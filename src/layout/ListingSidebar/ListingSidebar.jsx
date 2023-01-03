import React from "react";

const ListingSidebar = () => {
  return (
    <div className="px-4 py-4 bg-gray-200 w-64 md:h-4/5 h-screen ml-4">
      <h1 className="uppercase" style={{ color: "#8BA00D" }}>
        Filters
      </h1>
      <h4 className="underline mt-2" style={{ color: "#8BA00D" }}>
        Clear All
      </h4>

      <h6 className="uppercase mt-6 mb-4 text-xs">Reference No / Name</h6>

      <label class="relative block">
        <input
          className="w-full bg-white placeholder:font-italitc border-0 py-1 pl-3 pr-10 outline-none border-transparent focus:border-transparent focus:ring-0"
          placeholder=""
          type="text"
        />

        <span class="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            class="h-5 w-5 fill-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
          </svg>
        </span>
      </label>

      <h6 className="uppercase mt-6 text-xs">Type Of Accomodation</h6>

      <div className="flex flex-col justify-between mt-2">
        <div className="flex items-center">
          {/* <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"> */}
          <input
            checked
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
          />
          <label
            for="default-radio-2"
            className="ml-2 text-xs font-medium text-gray-900 "
          >
            All
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
          />
          <label
            for="default-radio-2"
            className="ml-2 text-xs font-medium text-gray-900"
          >
            Apartment
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
          />
          <label
            for="default-radio-2"
            className="ml-2 text-xs font-medium text-gray-900"
          >
            House
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
          />
          <label
            for="default-radio-2"
            className="ml-2 text-xs font-medium text-gray-900"
          >
            Villa
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
          />
          <label
            for="default-radio-2"
            className="ml-2 text-xs font-medium text-gray-900"
          >
            Office
          </label>
        </div>
      </div>

      <h6 className="uppercase mt-6 text-xs">Number Of Bathrooms</h6>

      <div className="flex mt-2">
        <div
          class="flex items-center justify-center w-3 h-3 p-2 border-gray-500 text-xs cursor-pointer"
          style={{ border: "1px solid" }}
        >
          1
        </div>
        <div
          class="flex items-center justify-center w-3 h-3 p-2 border-gray-500 text-xs ml-2 cursor-pointer"
          style={{ border: "1px solid" }}
        >
          2
        </div>
        <div
          class="flex items-center justify-center w-3 h-3 p-2 border-gray-500 text-xs ml-2 cursor-pointer"
          style={{ border: "1px solid" }}
        >
          3
        </div>
        <div
          class="flex items-center justify-center w-3 h-3 p-2 border-gray-500 text-xs ml-2 cursor-pointer"
          style={{ border: "1px solid" }}
        >
          4
        </div>
        <div
          class="flex items-center justify-center w-3 h-3 p-2 border-gray-500 text-xs ml-2 cursor-pointer"
          style={{ border: "1px solid" }}
        >
          5
        </div>

        <span className="text-xs ml-2">or more</span>
      </div>

      <h6 className="uppercase mt-6 text-xs">Main Features</h6>

      <div className="flex flex-col justify-between mt-2">
        <div className="flex items-center">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
          />
          <label for="checked-checkbox" className="ml-2 text-xs text-gray-900">
            Television
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
          />
          <label for="checked-checkbox" className="ml-2 text-xs text-gray-900">
            Swimming Pool
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
          />
          <label for="checked-checkbox" className="ml-2 text-xs text-gray-900">
            Microwave
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
          />
          <label for="checked-checkbox" className="ml-2 text-xs text-gray-900">
            Air Conditioning
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
          />
          <label for="checked-checkbox" className="ml-2 text-xs text-gray-900">
            Parking
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
          />
          <label for="checked-checkbox" className="ml-2 text-xs text-gray-900">
            Heater
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
          />
          <label for="checked-checkbox" className="ml-2 text-xs text-gray-900">
            Washing Machine
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
          />
          <label for="checked-checkbox" className="ml-2 text-xs text-gray-900">
            Balcony
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
          />
          <label for="checked-checkbox" className="ml-2 text-xs text-gray-900">
            Wifi
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
          />
          <label for="checked-checkbox" className="ml-2 text-xs text-gray-900">
            Dishwasher
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
          />
          <label for="checked-checkbox" className="ml-2 text-xs text-gray-900">
            Garage
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
          />
          <label for="checked-checkbox" className="ml-2 text-xs text-gray-900">
            Satellite Tv
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
          />
          <label for="checked-checkbox" className="ml-2 text-xs text-gray-900">
            Terrace
          </label>
        </div>
      </div>

      <div className="flex flex-col justify-between mt-14">
        <div className="flex items-center justify-between">
          <div className="flex justify-between ">
            <input
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
            />
            <label
              for="checked-checkbox"
              className="text-gray-900 ml-1"
              style={{ fontSize: "0.6rem" }}
            >
              Low Budget
            </label>
          </div>
          <p className="text-xs" style={{ fontSize: "0.6rem" }}>
            NGN10,000 - NGN30,000
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex justify-between ">
            <input
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
            />
            <label
              for="checked-checkbox"
              className="text-gray-900 ml-1"
              style={{ fontSize: "0.6rem" }}
            >
              Medium Budget
            </label>
          </div>
          <p className="text-xs" style={{ fontSize: "0.6rem" }}>
            NGN10,000 - NGN30,000
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex justify-between ">
            <input
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
            />
            <label
              for="checked-checkbox"
              className="text-gray-900 ml-1"
              style={{ fontSize: "0.6rem" }}
            >
              High Budget
            </label>
          </div>
          <p className="text-xs ml-8" style={{ fontSize: "0.6rem" }}>
            NGN30,000 Up
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListingSidebar;
