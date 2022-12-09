import React from "react";
import { BsEnvelope, BsGeoAltFill, BsTelephone } from "react-icons/bs";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import bg from "../../assets/bg.png";
import footer_logo from "../../assets/footer_logo.png";

const FooterSection = () => {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: "#282F34", height: "60vh" }}
    >
      <div style={{ position: "relative" }}>
        <img src={bg} alt="/" className="w-full  object-cover opacity-50" />

        <div
          className="flex justify-between items-center"
          style={{
            position: "absolute",
            top: "20px",
            left: "0%",
            // transform: "translate(-50%,118%)",
          }}
        >
          <img
            src={footer_logo}
            alt="/"
            className="w-2/3 object-cover opacity-50"
          />
        </div>

        <div
          className="flex justify-between"
          style={{
            position: "absolute",
            top: "10px",
            left: "82px",
            width: "1123px",
            padding: "4rem",
          }}
        >
          <div className="flex flex-col justify-between text-white">
            <h6 className="text-sm">Contact Us</h6>
            <div className="flex items-center">
              <BsGeoAltFill
                size={12}
                className="mr-4"
                style={{ color: "#8BA00D" }}
              />
              <span className="mt-4" style={{ fontSize: "0.5rem" }}>
                233 old ring Street, North <br /> Ajah Lagos, Nigeria
              </span>
            </div>
            <div className="flex items-center">
              <BsTelephone
                size={12}
                className="mr-4 mt-3"
                style={{ color: "#8BA00D" }}
              />
              <span className="mt-4" style={{ fontSize: "0.5rem" }}>
                123 453 3432
              </span>
            </div>
            <div className="flex items-center">
              <BsEnvelope
                size={12}
                className="mr-4 mt-3"
                style={{ color: "#8BA00D" }}
              />
              <span className="mt-4" style={{ fontSize: "0.5rem" }}>
                Support@message.com
              </span>
            </div>
            <div className="flex justify-between items-center mt-5">
              <FiFacebook
                size={12}
                // className="mr-4"
                style={{ color: "#8BA00D" }}
              />
              <FiTwitter
                size={12}
                // className="mr-4"
                style={{ color: "#8BA00D" }}
              />
              <FiInstagram
                size={12}
                // className="mr-4"
                style={{ color: "#8BA00D" }}
              />
              <FiLinkedin
                size={12}
                // className="mr-4"
                style={{ color: "#8BA00D" }}
              />
            </div>
          </div>

          <div className="flex flex-col justify-between text-white">
            <h6 className="text-sm">List by Category</h6>
            <span className="mt-4" style={{ fontSize: "0.5rem" }}>
              Apartments
            </span>
            <span className="mt-4" style={{ fontSize: "0.5rem" }}>
              Condos
            </span>
            <span className="mt-4" style={{ fontSize: "0.5rem" }}>
              Houses
            </span>
            <span className="mt-4" style={{ fontSize: "0.5rem" }}>
              Offices
            </span>
            <span className="mt-4" style={{ fontSize: "0.5rem" }}>
              Retail
            </span>
            <span className="mt-4" style={{ fontSize: "0.5rem" }}>
              Villas
            </span>
          </div>

          <div className="flex flex-col justify-between text-white">
            <h6 className="text-sm">Quick Links</h6>
            <span className="mt-4" style={{ fontSize: "0.5rem" }}>
              About Us
            </span>
            <span className="mt-4" style={{ fontSize: "0.5rem" }}>
              Terms & Conditions
            </span>
            <span className="mt-4" style={{ fontSize: "0.5rem" }}>
              User's Guide
            </span>
            <span className="mt-4" style={{ fontSize: "0.5rem" }}>
              Support Center
            </span>
            <span className="mt-4" style={{ fontSize: "0.5rem" }}>
              Press Info
            </span>
            <span className="mt-4" style={{ fontSize: "0.5rem" }}>
              Contact Us
            </span>
          </div>

          <div className="flex flex-col justify-between text-white">
            <h6 className="text-sm">Properties</h6>
            <span className="mt-4" style={{ fontSize: "0.5rem" }}>
              Rent
            </span>
            <span className="mt-4" style={{ fontSize: "0.5rem" }}>
              Buy
            </span>
            <span className="mt-4" style={{ fontSize: "0.5rem" }}>
              Sell
            </span>
            <span className="mt-4" style={{ fontSize: "0.5rem" }}>
              New Homes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
