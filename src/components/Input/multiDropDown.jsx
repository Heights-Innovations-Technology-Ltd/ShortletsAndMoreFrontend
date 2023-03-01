import React from "react";

import Select from "react-select";
import { Label, Top, Wrapper } from "./style";

const MultiDropDown = ({
  onChange,
  disable,
  options,
  label,
  labelStyle,
  containerStyle,
  defaultValue,
}) => {
  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = "green";
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? data.color
          : isFocused
          ? color.color
          : undefined,
        color: isDisabled ? "#ccc" : isSelected ? "black" : data.color,
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.color
            : undefined,
        },
      };
    },
    multiValue: (styles, { data }) => {
      const color = "red";
      return {
        ...styles,
        backgroundColor: data.color,
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ":hover": {
        backgroundColor: data.color,
        color: "white",
      },
    }),
  };

  return (
    <Wrapper
      // className={containerStyle}
      key="DropDown"
      style={containerStyle && containerStyle}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Top>
        {label && <Label className={labelStyle}>{label}</Label>}

        {/* {errorMessage ? <ErrMsg>{errorMessage}</ErrMsg> : null} */}
      </Top>
      <Select
        closeMenuOnSelect={false}
        isMulti
        onChange={onChange}
        isDisabled={disable}
        options={options}
        styles={colourStyles}
        defaultValue={defaultValue}
      />
    </Wrapper>
  );
};
export default MultiDropDown;
