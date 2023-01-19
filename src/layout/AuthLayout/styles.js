import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Layout = styled.div`
  display: flex;
  flex-flow: ${(props) => (props.flexFlow ? props.flexFlow : "row nowrap")};
  height: 100%;
  width: 100%;
  z-index: 2;
`;

export const LayoutLeft = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  background: linear-gradient(
    143.21deg,
    #cfd89c -27.64%,
    rgba(255, 202, 42, 0) 280.51%
  );
  flex-direction: column;
  gap: 200px;
  border-bottom-right-radius: ${(props) => props.borderBottomR};
  border-bottom-left-radius: ${(props) => props.borderBottomL};
  padding: 85px 50px 20px 50px;
  width: 50%;
  height: 100vh;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const LayoutRight = styled.div`
  display: flex;
  width: 50%;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
  > div {
    width: clamp(400px, 52%, 100%);
    margin: 1rem auto 63px;
  }
`;
export const DetailLayout = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;
export const HeaderText = styled.p`
  font-weight: 600;
  font-size: clamp(24px, 2vw, 40px);
  color: #ffffff;
`;
export const SubText = styled.p`
  font-weight: 400;
  font-size: clamp(16px, 2vw, 20px);
  color: #ffffff;
  margin-top: 36px;
  margin-bottom: 25px;
`;
export const TextContainer = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
`;
