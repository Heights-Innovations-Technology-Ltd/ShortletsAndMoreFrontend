import styled from "styled-components";

export const ServiceContainer = styled.div`
  max-width: 441px;
  max-height: 456px;
  border-radius: 4px;
  border-radius: solid red;
`;

export const Top = styled.div`
  max-width: 441px;
  height: 55%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Down = styled.div`
  max-width: 441px;
  height: 45%;
  background-color: white;
  padding: 32px 24px;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
`;

export const Paragraph = styled.div`
  font-weight: 400;
  font-size: 13.655px;
  margin-bottom: 30px;
`;

//status Card
export const Testing = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
`;

export const Container = styled.div`
  background: #fafafa;
  border-radius: 4px;
  padding: 20px 16px;
  width: 32%;
  display: flex;
  gap: 16px;
  flex-flow: column;
`;

export const CardTop = styled.div`
  background: #fafafa;
  display: flex;
  justify-content: space-between;
`;

export const CardTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #747668;
`;

export const ProgressContainer = styled.div`
  background: #f6f6f5;
  border-radius: 4px;
`;
export const ProgressFill = styled.div`
  background-color: ${(props) => props.background};
  height: 5px;
  width: ${(props) => props.width};
  border-radius: 4px;
`;

export const Count = styled.p`
  font-weight: 700;
  font-size: 23px;
  color: #171b03;
`;

//services card
export const ServicesContainer = styled.div`
  background: #fafafa;
  border-radius: 4px;
  width: 100%;
  padding: 24px;
`;

export const ServicesCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ServicesCardTitle = styled.p`
  font-weight: 600;
  font-size: 23px;
  color: #171b03;
`;
export const SeeAll = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #8ba00d;
  text-decoration: underline;
`;

export const ServicesList = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
`;

export const Services = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ServicesLeft = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  border: 4px;
`;
export const ServicesListTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #747668;
`;
export const ServiceImage = styled.div``;
export const ServicesRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
