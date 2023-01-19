import React from "react";
import { ButtonContainer, IconContainer } from "./style";

const PrimaryButton = ({
  lightBtn,
  title,
  onClick,
  icon,
  iconName,
  size,
  type,
  height,
  width,
  btnWidth,
}) => {
  const lightStyle = {
    border: "1px solid #8BA00D",
    color: "#8BA00D",
    display: "flex",
    fontSize: size,
    alignItems: "center",
    height: height,
    width: width,
    justifyContent: "center",
  };
  const darkStyle = {
    border: "1px solid #8BA00D",
    color: "#ffffff",
    backgroundColor: "#8BA00D",
    display: "flex",
    fontSize: size,
    height: height,
    alignItems: "center",
    width: width,
    justifyContent: "center",
  };

  return (
    <ButtonContainer width={btnWidth}>
      <button
        type={type}
        className="inline-block px-5 py-3 border-gray-800 text-gray-800 font-medium text-xs leading-tight rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        style={lightBtn ? lightStyle : darkStyle}
        onClick={onClick}
      >
        {title}
        {icon && <IconContainer>{iconName}</IconContainer>}
      </button>
    </ButtonContainer>
  );
};

export default PrimaryButton;
