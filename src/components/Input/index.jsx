import React, { useState } from "react";
import {
  Input,
  Show,
  InputContainer,
  CheckInputContainer,
  Error,
  Label,
  CheckInput,
  CheckWrap,
} from "./style";

const PrimaryInput = ({
  name,
  type,
  placeholder,
  rightText,
  register,
  error,
  label,
  check,
  disabled,
  padding,
}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      {!check ? (
        <CheckWrap
          key="InputWithLabel"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Label>{label}</Label>
          <InputContainer opacity={disabled ? "0.5" : ""}>
            {register && (
              <Input
                type={!show ? type || "password" : "text"}
                name={name}
                padding={padding}
                placeholder={placeholder}
                disabled={disabled}
                {...register(name)}
              />
            )}
            {rightText ? (
              <div onClick={() => setShow(!show)}>
                <Show>{!show ? "show" : "hide"}</Show>
              </div>
            ) : null}
          </InputContainer>
          {error && <Error>{error}</Error>}
        </CheckWrap>
      ) : (
        <CheckWrap
          key="InputWithLabel"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Label>{label}</Label>
          <CheckInputContainer>
            {/* {register && ( */}
            <Input
              type={!show ? type || "password" : "text"}
              name={name}
              padding={padding}
              placeholder={placeholder}
              // {...register(name)}
            />
            {/* )} */}
          </CheckInputContainer>
        </CheckWrap>
      )}
      {/* {error && <Error>{error}</Error>} */}
    </>
  );
};

export default PrimaryInput;
