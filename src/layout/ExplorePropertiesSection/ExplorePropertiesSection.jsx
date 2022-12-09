import React from "react";
import apartment from "../../assets/apartment.png";
import explore_apartment from "../../assets/explore_apartment.png";
import listing_img_one from "../../assets/explore_home.png";
import explore_office from "../../assets/explore_office.png";
import explore_room from "../../assets/explore_room.png";
import explore_villa from "../../assets/explore_villa.png";
import house from "../../assets/house.png";
import living_room from "../../assets/living-room.png";
import office from "../../assets/office.png";
import villa from "../../assets/villa.png";

const ExplorePropertiesSection = () => {
  return (
    <div className="mb-20">
      <h1 className="text-center mt-8 mb-4 lg:text-2xl font-semibold">
        Explore Our Properties
      </h1>
      <p
        className="text-center lg:text-sm w-6/12 mb-8 my-0 mx-auto"
        style={{ width: "53%" }}
      >
        Our Website has a range of properties to suit your needs
      </p>

      <div className="flex items-center justify-center flex-wrap mb-20">
        <div style={{ position: "relative" }}>
          <div className="bg-white shadow-md m-3">
            <div className="h-60 bg-slate-700" style={{ width: "12.5rem" }}>
              <img
                className="w-52 h-60 object-cover opacity-60"
                src={listing_img_one}
                alt="piña"
              />
            </div>
          </div>
          <div
            className="flex flex-col justify-between items-center"
            style={{
              position: "absolute",
              top: "0px",
              left: "50%",
              transform: "translate(-50%,25%)",
            }}
          >
            <img className="text-white mt-20 mb-10" src={house} alt="piña" />
            <p className="text-white text-center text-sm">House</p>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div className="bg-white shadow-md m-3">
            <div className="h-60 bg-slate-700" style={{ width: "12.5rem" }}>
              <img
                className="w-52 h-60 object-cover opacity-60"
                src={explore_apartment}
                alt="piña"
              />
            </div>
          </div>
          <div
            className="flex flex-col justify-between items-center"
            style={{
              position: "absolute",
              top: "0px",
              left: "50%",
              transform: "translate(-50%,25%)",
            }}
          >
            <img
              className="text-white mt-20 mb-10"
              src={apartment}
              alt="piña"
            />
            <p className="text-white text-center text-sm">Apartment</p>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div className="bg-white shadow-md m-3">
            <div className="h-60 bg-slate-700" style={{ width: "12.5rem" }}>
              <img
                className="w-52 h-60 object-cover opacity-60"
                src={explore_office}
                alt="piña"
              />
            </div>
          </div>
          <div
            className="flex flex-col justify-between items-center"
            style={{
              position: "absolute",
              top: "0px",
              left: "50%",
              transform: "translate(-50%,25%)",
            }}
          >
            <img className="text-white mt-20 mb-10" src={office} alt="piña" />

            <p className="text-white text-center text-sm">Office</p>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div className="bg-white shadow-md m-3">
            <div className="h-60 bg-slate-700" style={{ width: "12.5rem" }}>
              <img
                className="w-52 h-60 object-cover opacity-60"
                src={explore_villa}
                alt="piña"
              />
            </div>
          </div>
          <div
            className="flex flex-col justify-between items-center"
            style={{
              position: "absolute",
              top: "0px",
              left: "50%",
              transform: "translate(-50%,25%)",
            }}
          >
            <img className="text-white mt-20 mb-10" src={villa} alt="piña" />

            <p className="text-white text-center text-sm">Villa</p>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div className="bg-white shadow-md m-3">
            <div className="h-60 bg-slate-700" style={{ width: "12.5rem" }}>
              <img
                className="w-52 h-60 object-cover opacity-60"
                src={explore_room}
                alt="piña"
              />
            </div>
          </div>
          <div
            className="flex flex-col justify-between items-center"
            style={{
              position: "absolute",
              top: "0px",
              left: "50%",
              transform: "translate(-50%,25%)",
            }}
          >
            <img
              className="text-white mt-20 mb-10"
              src={living_room}
              alt="piña"
            />
            <p className="text-white text-center text-sm">Room</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ExplorePropertiesSection;
