import React from "react";
import { CheckWrap, Input, InputContainer, Label } from "./style";

const TextArea = ({ label, register, name, padding, placeholder }) => {
  return (
    <CheckWrap>
      <Label>{label}</Label>
      <InputContainer>
        {register && (
          <Input
            type="text"
            name={name}
            padding={padding}
            placeholder={placeholder}
            {...register(name)}
          />
        )}
      </InputContainer>
    </CheckWrap>
  );
};

export default TextArea;
