import React from "react";

const PrimaryButton = ({ lightBtn, title, onClick }) => {
  const lightStyle = {
    border: "1px solid #8BA00D",
    color: "#8BA00D",
  };
  const darkStyle = {
    border: "1px solid #8BA00D",
    color: "#ffffff",
    backgroundColor: "#8BA00D",
  };

  return (
    <>
      <button
        type="button"
        className="inline-block px-5 py-3 border-gray-800 text-gray-800 font-medium text-xs leading-tight rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        style={lightBtn ? lightStyle : darkStyle}
        onClick={onClick}
      >
        {title}
      </button>
    </>
  );
};

export default PrimaryButton;
