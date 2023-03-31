import styled from "styled-components";

export const Dashboard = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const Body = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background-color: #f3f6e7;
  height: 100%;
`;

export const BodyLeft = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
`;

export const BodyRight = styled.div`
  display: flex;
  flex-flow: column;
  flex: 4;
  width: 100%;
  height: 100%;
  padding: 45px;
  overflow-x: hidden;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
