import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 100px 80px;
`;

export const AboutTitleContainer = styled.h3`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const AboutTitle = styled.h3`
  font-weight: 600;
  font-size: 33px;
`;

export const AboutTitleParagraph = styled.p`
  font-weight: 400;
  font-size: 16px;
`;

export const AboutUsContent = styled.p`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  gap: 70px;
  margin-top: 68px;

  @media screen and (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 26px;
`;
