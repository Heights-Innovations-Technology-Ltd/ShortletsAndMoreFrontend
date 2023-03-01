import React from "react";
import { Wrapper, Label, ErrMsg, Top } from "./style";
import Select, { StylesConfig } from "react-select";

const DropDown = ({
  label,
  labelStyle,
  containerStyle,
  error,
  errorMessage,
  container,
  onSelectedChange = () => {},
  placeholder,
  onChange,
  type,
  options,
  name,
  value,
  defaultValue,
  register,
  launch,
  height,
  multiSelect,
  fontSize,
  disable,
  ...rest
}) => {
  const selectStyle = {
    background: "red",
    container: (base, state) => ({
      ...base,
      width: "100%",
    }),
    control: (base, state) => ({
      ...base,
      boxShadow: "none",
      borderRadius: 5,
      height: height || 55,
      paddingInline: 20,
      fontSize: fontSize ? fontSize : launch && 14,
      outline: "none",
      background: "#FAFAFA",
      "&:hover": {
        borderColor: "none",
      },
      border: `1px solid ${
        state.isFocused ? "" : errorMessage ? "red" : "#ECECEC"
      }`,
      outlineColor: "#E1E1DE",
    }),
    placeholder: (base, state) => ({
      ...base,
      fontSize: fontSize ? fontSize : 14,
      border: "none",

      outlineColor: "none",
      // border: "solid blue",
    }),
    input: (provided, { isFocused }) => ({
      ...provided,
      height: height || 50,
      borderRadius: 5,
      margin: 0,
      width: "100%",
      border: isFocused ? "none" : "none",
      padding: 0,
      outlineColor: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      padding: 20,
      fontSize: fontSize ? fontSize : 14,
    }),

    multiValue: (styles, { data }) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        // backgroundColor: color.alpha(0.1).css(),
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

  // const colourStyles: StylesConfig<ColourOption, true> = {
  //   control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  //   option: (styles, { data, isDisabled, isFocused, isSelected }) => {
  //     const color = chroma(data.color);
  //     return {
  //       ...styles,
  //       backgroundColor: isDisabled
  //         ? undefined
  //         : isSelected
  //         ? data.color
  //         : isFocused
  //         ? color.alpha(0.1).css()
  //         : undefined,
  //       color: isDisabled
  //         ? '#ccc'
  //         : isSelected
  //         ? chroma.contrast(color, 'white') > 2
  //           ? 'white'
  //           : 'black'
  //         : data.color,
  //       cursor: isDisabled ? 'not-allowed' : 'default',

  //       ':active': {
  //         ...styles[':active'],
  //         backgroundColor: !isDisabled
  //           ? isSelected
  //             ? data.color
  //             : color.alpha(0.3).css()
  //           : undefined,
  //       },
  //     };
  //   },
  //   multiValue: (styles, { data }) => {
  //     const color = chroma(data.color);
  //     return {
  //       ...styles,
  //       backgroundColor: color.alpha(0.1).css(),
  //     };
  //   },
  //   multiValueLabel: (styles, { data }) => ({
  //     ...styles,
  //     color: data.color,
  //   }),
  //   multiValueRemove: (styles, { data }) => ({
  //     ...styles,
  //     color: data.color,
  //     ':hover': {
  //       backgroundColor: data.color,
  //       color: 'white',
  //     },
  //   }),
  // };

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
      {multiSelect ? (
        //   <Select
        //   closeMenuOnSelect={false}
        //   defaultValue={[colourOptions[0], colourOptions[1]]}
        //   isMulti
        //   options={colourOptions}
        //   styles={colourStyles}
        // />
        <Select
          onChange={onChange}
          options={options}
          styles={selectStyle}
          defaultValue={{
            value: defaultValue && defaultValue,
            label: defaultValue && defaultValue,
          }}
          isDisabled={disable}
        />
      ) : (
        <Select
          onChange={onChange}
          options={options}
          styles={selectStyle}
          defaultValue={{
            value: defaultValue && defaultValue,
            label: defaultValue && defaultValue,
          }}
          isDisabled={disable}
        />
      )}
    </Wrapper>
  );
};

export default DropDown;
