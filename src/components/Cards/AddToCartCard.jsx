import React from "react";
import PrimaryButton from "../PrimaryButton";

import { ReactComponent as BedIcon } from "../../assets/svg/bed.svg";
import { ReactComponent as CoaxialIcon } from "../../assets/svg/coaxial.svg";
import { ReactComponent as WifiIcon } from "../../assets/svg/wifi.svg";
import { ReactComponent as AirIcon } from "../../assets/svg/air-conditioner.svg";
import { useNavigate } from "react-router-dom";
import { FaPen, FaPlus } from "react-icons/fa";

let iconName = <FaPen color="#8BA00D" />;

const AddToCartCard = ({
  apartmentImage,
  apartmentName,
  apartmentDescription,
  apartmentPrice,
  landing,
  handleNavigateToDetails,
  staff,
  handleStaffEdit,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="bg-white w-full shadow-md m-2 pb-2"
        style={{
          maxWidth: "300px",
          height: staff ? "400px" : "",
        }}
      >
        <div className="h-1/2 w-full">
          <img
            className="w-full h-full object-cover"
            src={apartmentImage}
            alt="piña"
          />
        </div>
        <div className="px-4 flex flex-col mt-4 mb-4">
          <p
            className="text-xl font-medium capitalize"
            style={{
              fontSize: "20px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {apartmentName}
          </p>

          <p
            className=""
            style={{
              fontSize: "14px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {apartmentDescription}
          </p>
        </div>

        <div className="flex justify-between items-center mb-4 px-6">
          <div className="flex flex-col justify-center items-center">
            <BedIcon />
            <p className="font-light" style={{ fontSize: "13px" }}>
              4 Beds
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <CoaxialIcon />
            <p className="font-light" style={{ fontSize: "13px" }}>
              Tv Cable
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <WifiIcon />

            <p className="font-light" style={{ fontSize: "13px" }}>
              Wifi
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <AirIcon />
            <p className="font-light" style={{ fontSize: "13px" }}>
              AC
            </p>
          </div>
        </div>

        {!landing && (
          <>
            <hr />

            <div className="flex justify-between items-center p-4">
              <div className="" style={{ color: "#8BA00D" }}>
                <span className="font-semibold lg:text-sm">
                  NGN{apartmentPrice}
                </span>
                <span className="" style={{ fontSize: "0.75rem" }}>
                  /Night
                </span>
              </div>
              {staff ? (
                <PrimaryButton
                  title={
                    <>
                      <FaPen color="white" />
                      Edit
                    </>
                  }
                  onClick={handleStaffEdit}
                />
              ) : (
                <PrimaryButton title="View" onClick={handleNavigateToDetails} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddToCartCard;

// min-width: clamp(181px, 18vw, 263px);
// width: 100%;
// /* max-width: 263px; */
// max-width: 300px;
// min-height: 120px;
// max-height: 238px;
