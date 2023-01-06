import React from "react";
import { BsGeoAltFill } from "react-icons/bs";
import PrimaryButton from "../PrimaryButton";
import { ReactComponent as PoolIcon } from "../../assets/svg/pool.svg";
import { ReactComponent as SecurityIcon } from "../../assets/svg/security.svg";
import { ReactComponent as GarageIcon } from "../../assets/svg/car.svg";
import { ReactComponent as RulerIcon } from "../../assets/svg/ruler.svg";

const ApartmentCard = ({
  apartmentImage,
  apartmentName,
  apartmentLocation,
  apartmentDetails,
}) => {
  return (
    <>
      <div className="bg-white w-80  m-3 rounded-sm border border-[#E6E9EC]">
        <div className="h-2/3 w-full relative">
          <img
            className="w-full h-full object-cover"
            src={apartmentImage}
            alt="apartment image"
          />
          <div className="absolute bg-[#0D263B] px-3 py-1.5 rounded top-5 right-4">
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
            <p className=" mt-2 font-normal" style={{ fontSize: "13px" }}>
              {apartmentLocation}
            </p>
          </div>
          <p
            className=" mt-2 mb-4"
            style={{ fontSize: "12px", lineHeight: "16px" }}
          >
            {apartmentDetails}
          </p>
        </div>

        <div className="flex justify-between items-center mb-4 px-6">
          <div className="flex flex-col justify-center items-center">
            <PoolIcon />
            <p className="font-light" style={{ fontSize: "14px" }}>
              Pool
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <SecurityIcon />
            <p className="font-light" style={{ fontSize: "14px" }}>
              Security
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <GarageIcon />
            <p className="font-light" style={{ fontSize: "14px" }}>
              1 Garage
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <RulerIcon />
            <p className="font-light" style={{ fontSize: "14px" }}>
              1200 Sq Ft
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-end p-4">
          <PrimaryButton lightBtn title="View more" />
        </div>
      </div>
    </>
  );
};

export default ApartmentCard;
