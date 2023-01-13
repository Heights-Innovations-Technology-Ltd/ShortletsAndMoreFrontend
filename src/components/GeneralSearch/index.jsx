import React from "react";
import PrimaryButton from "../PrimaryButton";
import {
  SearchContainer,
  InputContainer,
  ButtonContainer,
  ContentContainer,
  InputWhite,
  Input,
} from "./styles";

const GeneralSearch = () => {
  return (
    <SearchContainer>
      <ContentContainer>
        <InputContainer>
          <InputWhite>
            <Input>
              <option value="Property Type">Property Type</option>
              <option value="Property Type">Property Type</option>
            </Input>
          </InputWhite>
          <InputWhite>
            <Input>
              <option value="Property Type">Max-Price</option>
              <option value="Property Type">Property Type</option>
            </Input>
          </InputWhite>
        </InputContainer>
        <ButtonContainer>
          <PrimaryButton height="55px" title="SEARCH" />
        </ButtonContainer>
      </ContentContainer>
    </SearchContainer>
  );
};

export default GeneralSearch;
