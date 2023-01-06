import React from "react";
import AddToCartSection from "../../layout/AddToCartSection/AddToCartSection";
import FooterSection from "../../layout/FooterSection/FooterSection";
import NavBar from "../../layout/Navbar/Navbar";

const AddToCart = () => {
  return (
    <>
      <NavBar />
      <AddToCartSection />
      <FooterSection />
    </>
  );
};

export default AddToCart;
