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
  padding,
}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      {!check ? (
        <CheckWrap>
          <Label>{label}</Label>
          <InputContainer>
            {register && (
              <Input
                type={!show ? type || "password" : "text"}
                name={name}
                padding={padding}
                placeholder={placeholder}
                {...register(name)}
              />
            )}
            {rightText ? (
              <div onClick={() => setShow(!show)}>
                <Show>{!show ? "show" : "hide"}</Show>
              </div>
            ) : null}
          </InputContainer>
        </CheckWrap>
      ) : (
        <CheckWrap>
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
