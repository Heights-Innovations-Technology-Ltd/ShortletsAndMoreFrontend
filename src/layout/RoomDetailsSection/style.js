import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  padding: 50px 64px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 60%;
  padding-right: 40px;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 30px;
`;

export const TitlePara = styled.p`
  font-weight: 400;
  font-size: 14px;
`;
export const DesContainer = styled.div`
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  margin-top: 80px;
`;
export const FirstDes = styled.div`
  padding: 30px;
  border-bottom: 1px solid #e6e9ec;
  display: flex;
  flex-flow: column;
  gap: 18px;
`;

export const SecondDes = styled.div`
  padding: 30px;
  border-bottom: 1px solid #e6e9ec;
  display: flex;
  flex-flow: column;
  gap: 18px;
`;

export const ThirdDes = styled.div`
  padding: 30px;
  display: flex;
  flex-flow: column;
  gap: 18px;
`;

export const Description = styled.p`
  font-weight: 600;
  font-size: 18px;
`;

export const SpanText = styled.span`
  font-weight: 300;
  font-size: 14px;
  text-decoration-line: underline;
  color: #acc130;
`;

export const DescriptionText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #696969;
`;

export const RightContainer = styled.div`
  display: flex;
  width: 40%;
  padding: 60px 64px;
`;

export const Wrap = styled.div`
  border-top: 2px solid #8ba00d;
  padding-top: 5px;
  width: 100%;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #8ba00d;
`;

export const PriceText = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: white;
`;

export const Form = styled.form`
  padding: 32px;
  width: 100%;
  gap: 20px;
  display: flex;
  flex-flow: column;
`;
export const BtnWrap = styled.div`
  width: 100%;
`;

export const CountWrap = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
`;
export const Button = styled.button`
  background: rgba(217, 217, 217, 0.19);
  padding: 5px 12px;
`;
export const Label = styled.p`
  font-weight: 400;
  font-size: 14px;
`;
export const CountWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;
export const Count = styled.div`
  background: rgba(217, 217, 217, 0.19);
  text-align: center;
  justify-content: center;
  padding: 5px 12px;
  align-items: center;
  /* padding: ${(props) => (props.padding ? props.padding : "0px 10px")}; */
`;

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 40px 24px;
  flex-flow: column;
`;
export const CnotinueModalButton = styled.div`
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  display: flex;
`;

export const ModalButton = styled.div`
  width: 100%;
`;
export const Question = styled.p`
  margin-bottom: 30px;
  font-size: clamp(16px, 1.5vw, 20px);
  max-width: 300px;
  text-align: center;
`;
export const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 80%;
`;

export const CloseWrapper = styled.div`
  /* display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  padding: 10px;
  border-radius: 100%;
  background-color: #d7d7d7;
  margin-bottom: 20px; */
`;

export const FeatureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 36px;
`;
export const FeatureItems = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FeatureItem = styled.p`
  font-weight: 400;
  font-size: 14px;
`;
