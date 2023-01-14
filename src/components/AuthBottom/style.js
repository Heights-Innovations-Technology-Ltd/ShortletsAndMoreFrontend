import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 32px;
  gap: clamp(14px, 2vw, 20px);
`;
export const TextContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-start;
`;
export const Text = styled.p`
  display: flex;
  gap: 24px;
  align-items: center;
  color: #ffffff;
  font-size: clamp(14px, 2vw, 16px);
`;
export const Span = styled.span`
  font-weight: 400;
  font-size: 20px;
  color: #8ba00d;
  font-size: clamp(14px, 2vw, 16px);
`;
