import React from "react";
import { ButtonContainer, IconContainer } from "./style";
import { Oval } from "react-loading-icons";

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
  loading,
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
    <ButtonContainer
      width={btnWidth}
      key="MainButton"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
    >
      <button
        type={type}
        className="inline-block px-5 py-3 border-gray-800 text-gray-800 font-medium text-xs leading-tight rounded hover:bg-[#8BA00D] hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        style={lightBtn ? lightStyle : darkStyle}
        onClick={onClick}
      >
        {loading ? (
          <Oval stroke="#ffffff" fill="white" width={24} height={24} />
        ) : (
          <>
            {title}
            {icon && <IconContainer>{iconName}</IconContainer>}
          </>
        )}
      </button>
    </ButtonContainer>
  );
};

export default PrimaryButton;
