import React from "react";
import { BsGeoAltFill } from "react-icons/bs";
import PrimaryButton from "../PrimaryButton";
import { ReactComponent as PoolIcon } from "../../assets/svg/pool.svg";
import { ReactComponent as SecurityIcon } from "../../assets/svg/security.svg";
import { ReactComponent as GarageIcon } from "../../assets/svg/car.svg";
import { ReactComponent as RulerIcon } from "../../assets/svg/ruler.svg";
import { Navigate, useNavigate } from "react-router-dom";

const ApartmentCard = ({
  apartmentImage,
  apartmentName,
  apartmentLocation,
  apartmentDetails,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="bg-white  m-2 rounded-sm border border-[#E6E9EC]"
        style={{
          maxWidth: "300px",
        }}
      >
        <div className="h-2/3 w-full relative">
          <img
            className="w-full h-full object-cover"
            src={apartmentImage}
            alt="apartment image"
          />
          <div
            className="absolute bg-[#0D263B] px-3 py-1.5 rounded top-5 right-4"
            onClick={() => navigate("/home/property/rooms")}
            style={{ cursor: "pointer" }}
          >
            <p className="text-white font-bold" style={{ fontSize: "10px" }}>
              APPARTMENT
            </p>
          </div>
        </div>
        <div className="flex flex-col  mt-4" style={{ padding: "20px" }}>
          <p
            className=" font-medium"
            style={{
              fontSize: "20px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {apartmentName}
          </p>
          <div className="flex items-center">
            <BsGeoAltFill size={12} className="mt-1 mr-1" />
            <p className=" mt-2 font-normal" style={{ fontSize: "12px" }}>
              {apartmentLocation}
            </p>
          </div>
          <p
            className=" mt-2 mb-4"
            style={{ fontSize: "11px", lineHeight: "16px" }}
          >
            {apartmentDetails}
          </p>
        </div>

        <div className="flex justify-between items-center mb-4 px-6">
          <div className="flex flex-col justify-center items-center">
            <PoolIcon />
            <p className="font-light" style={{ fontSize: "13px" }}>
              Pool
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <SecurityIcon />
            <p className="font-light" style={{ fontSize: "13px" }}>
              Security
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <GarageIcon />
            <p className="font-light" style={{ fontSize: "13px" }}>
              1 Garage
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <RulerIcon />
            <p className="font-light" style={{ fontSize: "13px" }}>
              1200 Sq Ft
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-end p-4">
          <PrimaryButton
            lightBtn
            title="View more"
            onClick={() => navigate("/home/property")}
          />
        </div>
      </div>
    </>
  );
};

export default ApartmentCard;
