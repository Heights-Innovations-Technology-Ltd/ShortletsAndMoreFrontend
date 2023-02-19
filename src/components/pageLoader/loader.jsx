import React from "react";
import { LoaderWrapper } from "./styled";
import "./loader.css";
import { ReactComponent as BrandLogoIcon } from "../../assets/svg/sidebarLogo.svg";

const Loader = () => {
  return (
    <LoaderWrapper>
      <BrandLogoIcon />
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderWrapper>
  );
};

export default Loader;
