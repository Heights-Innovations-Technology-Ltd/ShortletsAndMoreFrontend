import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  gap: 8px;
  background: #f3f6e7;
  padding: 24px auto;
  border-radius: 4px;
  width: 100%;
`;

export const Top = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const DocTitle = styled.p`
  font-weight: 500;
  font-size: clamp(12px, 1.5vw, 14px);
  color: #4e5152;
`;
export const ErrorWrapper = styled.p`
  color: red;
  font-size: clamp(10px, 1.5vw, 12px); ;
`;
export const Middle = styled.div`
  display: flex;
  width: 100%;
  padding: 24px auto;
  input {
    /* display: none; */
    &::-webkit-file-upload-button {
      display: none;
    }
  }
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: clamp(35px, 3vw, 48px);
    border-radius: 8px;
    font-size: clamp(12px, 1.5vw, 14px);
    font-weight: 400;
    color: #959697;
    border: 1px dashed #edf1f6;
    span {
      display: flex;
      gap: 9px;
    }
  }
`;
export const Bottom = styled.div`
  font-size: clamp(11px, 1.5vw, 12px);
  color: #959697;
`;
export const UploadedTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: clamp(35px, 3vw, 48px);
  border-radius: 8px;
  font-size: clamp(12px, 1.5vw, 14px);
  font-weight: 400;
  text-decoration-line: underline;
  color: #4e5152;
  border: 1px dashed #edf1f6;
`;
