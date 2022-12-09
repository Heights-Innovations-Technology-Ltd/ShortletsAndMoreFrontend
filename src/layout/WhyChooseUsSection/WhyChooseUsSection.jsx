import React from "react";
import calculator from "../../assets/calculator.png";
import discord from "../../assets/discord.png";
import house_us from "../../assets/house_us.png";
import maps from "../../assets/maps.png";
import whychooseus_img from "../../assets/whychooseus_img.png";

const WhyChooseUsSection = () => {
  return (
    <div className="w-full mb-10 mt-10" style={{ backgroundColor: "#102442" }}>
      <div style={{ position: "relative" }}>
        <img
          src={whychooseus_img}
          alt="/"
          className="w-full  object-cover opacity-50"
        />

        <div
          className="flex flex-col justify-between items-center"
          style={{
            position: "absolute",
            top: "0px",
            left: "50%",
            transform: "translate(-50%,118%)",
          }}
        >
          <h1 className="flex justify-center font-semibold lg:text-2xl md:text-xl sm:text-sm text-center mb-1 text-white">
            Why Choose Us
          </h1>
          <p className="flex justify-center text-xs text-center  text-white">
            We provide full service at every step
          </p>
        </div>

        <div className="flex items-center justify-between flex-wrap">
          <div
            className="flex flex-col justify-between items-center"
            style={{
              position: "absolute",
              top: "108px",
              left: "16%",
            }}
          >
            <img className="text-white mt-20 mb-10" src={discord} alt="piña" />
            <p className="text-white text-center text-sm">
              Trusted By Thousands
            </p>
          </div>

          <div
            className="flex flex-col justify-between items-center"
            style={{
              position: "absolute",
              top: "108px",
              left: "35%",
            }}
          >
            <img className="text-white mt-20 mb-10" src={house_us} alt="piña" />
            <p className="text-white text-center text-sm">
              Wide Range Of Properties
            </p>
          </div>

          <div
            className="flex flex-col justify-between items-center"
            style={{
              position: "absolute",
              top: "108px",
              left: "55%",
            }}
          >
            <img
              className="text-white mt-20 mb-10"
              src={calculator}
              alt="piña"
            />
            <p className="text-white text-center text-sm">
              Financing Made Easy
            </p>
          </div>

          <div
            className="flex flex-col justify-between items-center"
            style={{
              position: "absolute",
              top: "108px",
              left: "74%",
            }}
          >
            <img className="text-white mt-20 mb-10" src={maps} alt="piña" />
            <p className="text-white text-center text-sm">See Neighborhoods</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
