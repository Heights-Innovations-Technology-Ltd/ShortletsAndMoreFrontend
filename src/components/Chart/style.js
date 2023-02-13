import styled from "styled-components";
export const ChartContainer = styled.div`
  background: #fafafa;
  border-radius: 4px;
  padding-top: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
  width: 100%;
  height: 365px;
  min-height: 271px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const TopContent = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-bottom: 22px;

  h3 {
    font-size: 20px;
    margin-left: 35px;
    color: #151717;
  }

  select {
    font-size: 12px;
    color: #4e5152;
    background-color: none;
    border: none;
    outline: none;
  }
`;
