import React from "react";
import StaffHeader from "../../../components/StaffHeader";

import { ApartmentContainer } from "./style";
import image from "../../../assets/listing_img_four.png";

import ServiceCard from "../../../components/Cards/ServiceCard";
import { useGetAllCategoriesQuery } from "../../../store/Services/staffService";
import { useNavigate } from "react-router-dom";

const StaffSettings = () => {
  const navigate = useNavigate();
  const categories = useGetAllCategoriesQuery();
  const handleCategoryNavigate = (id) => {
    navigate("/staff/settings/categories");
    localStorage.setItem("staffCategoryID", JSON.stringify(id));
  };
  return (
    <div>
      <StaffHeader title="Settings" />

      <ApartmentContainer>
        {categories?.data?.data?.map((category) => (
          <div key={category.id}>
            <ServiceCard
              title={category.name}
              detail={`${category.name} a suite of rooms in a big building which forms a society.`}
              image={image}
              handleCategoryNavigate={() => handleCategoryNavigate(category.id)}
            />
          </div>
        ))}
      </ApartmentContainer>
    </div>
  );
};

export default StaffSettings;
