import React from "react";
import StaffHeader from "../../../components/StaffHeader";

import { ApartmentContainer } from "./style";
import image from "../../../assets/listing_img_four.png";

import ServiceCard from "../../../components/Cards/ServiceCard";
import { useNavigate } from "react-router-dom";

const StaffSettings = () => {
  const navigate = useNavigate();

  const handleCategoryNavigate = () => {
    navigate("/staff/settings/categories");
    // localStorage.setItem("staffCategoryID", JSON.stringify(id));
  };
  return (
    <div>
      <StaffHeader title="Settings" />

      <ApartmentContainer>
        {/* {categories?.data?.data?.map((category) => ( */}
        <div>
          <ServiceCard
            title={"Categories"}
            detail={
              "Our fully furnished and equipped apartments are perfect for business or pleasure."
            }
            image={image}
            handleCategoryNavigate={handleCategoryNavigate}
          />
        </div>
        {/* ))} */}
      </ApartmentContainer>
    </div>
  );
};

export default StaffSettings;
