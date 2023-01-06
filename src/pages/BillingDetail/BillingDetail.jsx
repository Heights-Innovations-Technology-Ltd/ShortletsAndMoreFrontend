import React from "react";
import BillingDetailsSection from "../../layout/BillingDetailsSection/BillingDetailsSection";
import FooterSection from "../../layout/FooterSection/FooterSection";
import NavBar from "../../layout/Navbar/Navbar";

const BillingDetail = () => {
  return (
    <div>
      <NavBar />
      <BillingDetailsSection />
      <FooterSection />
    </div>
  );
};

export default BillingDetail;
