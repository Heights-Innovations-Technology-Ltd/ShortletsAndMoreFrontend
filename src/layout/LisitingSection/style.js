import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
`;

export const Body = styled.div`
  display: flex;
  gap: clamp(24px, 2.4vw, 42px);
  padding: clamp(16px, 3.6vw, 24px) 24px 24px;
  border-top: none;

  @media screen and (max-width: 700px) {
    border: none;
  }
`;

export const BodyLeft = styled.div`
  position: sticky;
  top: clamp(222px, 24vw, 262px);
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  align-items: flex-start;
  background: rgba(230, 233, 236, 0.31);
  border: 1px solid rgba(0, 0, 0, 0.1);
  gap: 16px;
  padding: 16px;
  white-space: nowrap;
  font-size: clamp(14px, 1.5rem, 16px);

  h3 {
    font-style: italic;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
  }

  h4 {
    color: #00a2d4;
    font-weight: 500;
  }

  ul {
    display: flex;
    flex-flow: column;
    gap: 16px;
    font-style: italic;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    list-style-type: none;
    > li {
      cursor: pointer;
      display: flex;
      gap: 12px;
      color: ${(props) => props.color};
    }
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const BodyRight = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: clamp(16px, 1.6vw, 24px);
  width: 100%;

  @media screen and (max-width: 430px) {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 16px;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: auto;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 1550px) {
    grid-template-columns: auto auto auto auto;
  }
`;
export const CheckInput = styled.input`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.46);
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px;
  height: ${({ height }) => height && height};
`;
