import React from "react";
import styled from "styled-components";
import PrimaryButton from "../PrimaryButton";

const HeroSearch = ({}) => {
  return (
    <SearchWrapper>
      <InputWrapper></InputWrapper>
      <PrimaryButton title="SEARCH" />
    </SearchWrapper>
  );
};

export default HeroSearch;

const SearchWrapper = styled.div`
  border: solid red;
  background: #0d263b;
  opacity: 0.7;
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-flow: row;
  gap: 20px;
`;
const InputWrapper = styled.div`
  border: solid red;
`;
