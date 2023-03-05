import React from "react";
import styled from "styled-components";
import { Puff } from "react-loading-icons";

const PuffLoader = () => {
  return (
    <Loader>
      <Puff stroke="#8BA00D" fill="white" />
    </Loader>
  );
};

export default PuffLoader;

const Loader = styled.div`
  grid-column: 1/3;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100px;
`;
