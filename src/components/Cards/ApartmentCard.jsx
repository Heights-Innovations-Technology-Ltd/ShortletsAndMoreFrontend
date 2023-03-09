import React from "react";
import { BsGeoAltFill } from "react-icons/bs";
import PrimaryButton from "../PrimaryButton";
import { ReactComponent as PoolIcon } from "../../assets/svg/pool.svg";
import { ReactComponent as SecurityIcon } from "../../assets/svg/security.svg";
import { ReactComponent as GarageIcon } from "../../assets/svg/car.svg";
import { ReactComponent as RulerIcon } from "../../assets/svg/ruler.svg";
import { useNavigate } from "react-router-dom";

const ApartmentCard = ({
  apartmentImage,
  apartmentName,
  apartmentLocation,
  apartmentDetails,
  landing,
  onApartmentClick,
  staff,
  iconName,
  handleStaffApartmentClick,
  handleApartmentEdit,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-white  m-2 rounded-md border border-[#E6E9EC]"
        style={{
          maxWidth: "300px",
          height: staff ? "500px" : "",
        }}
      >
        <div className="h-1/2 w-full relative">
          <img
            className="w-full h-full object-cover"
            src={apartmentImage}
            alt="apartment"
          />
          <div
            className="absolute bg-[#0D263B] px-3 py-1.5 rounded top-5 right-4"
            onClick={onApartmentClick}
            style={{ cursor: "pointer" }}
          >
            <p className="text-white font-bold" style={{ fontSize: "10px" }}>
              APPARTMENT
            </p>
          </div>
        </div>
        <div className="flex flex-col h-30% mt-1" style={{ padding: "20px" }}>
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
            <p
              className=" mt-2 font-normal"
              style={{
                fontSize: "12px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {apartmentLocation}
            </p>
          </div>
          <p
            className=" my-2"
            style={{
              fontSize: "11px",
              lineHeight: "16px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {apartmentDetails}
          </p>
        </div>

        <div className="flex justify-between h-10% items-center mb-2 px-6">
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
        {landing && (
          <>
            <hr />
            <div className="flex justify-between p-4">
              <div>
                {staff && (
                  <PrimaryButton
                    leftIcon
                    iconName={iconName}
                    title="Edit"
                    onClick={handleApartmentEdit}
                  />
                )}
              </div>

              <PrimaryButton
                lightBtn
                title={staff ? "View Rooms" : "View more"}
                onClick={
                  staff
                    ? handleStaffApartmentClick
                    : () => navigate("/property")
                }
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ApartmentCard;
