import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  position: relative;
`;

export const Layout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 2;
`;

export const LayoutLeft = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 350px;
  padding: 85px 50px;
  background-color: var(--SecondaryBlue);
  width: 50%;
  height: 100vh;
  @media screen and (max-width: ${(props) => "1000px" || props.hideLeftAt}) {
    display: none;
  }
`;

export const LayoutRight = styled.div`
  display: flex;
  width: 50%;
  background: rgba(0, 0, 0, 0.58);
  /* > div {
    width: clamp(400px, 52%, 100%);
    margin: 2rem auto 63px;
    @media screen and (max-width: ${(props) => "1000px" || props.hideLeftAt}) {
      width: 90%;
    }
  } */
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
  font-size: 40px;
  color: #ffffff;
`;
export const SubText = styled.p`
  font-weight: 400;
  font-size: 20px;
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
`;
