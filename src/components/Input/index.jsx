import React, { useState } from "react";
import { Input, Show, InputContainer, Error } from "./style";

const PrimaryInput = ({
  name,
  type,
  placeholder,
  rightText,
  register,
  error,
}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <InputContainer>
        {register && (
          <Input
            type={!show ? type || "password" : "text"}
            name={name}
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
      {/* {error && <Error>{error}</Error>} */}
    </>
  );
};

export default PrimaryInput;
