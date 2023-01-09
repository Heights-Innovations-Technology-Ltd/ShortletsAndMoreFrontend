import styled from "styled-components";

export const LoginContainer = styled.form`
  display: flex;
  width: 100%;
  padding: 0 200px;
  height: 100vh;
  background: #f5f5f5;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 120px 70px 100px 70px;
`;
export const HeaderText = styled.p`
  font-weight: 500;
  font-size: 36px;
  color: #ffffff;
  margin-bottom: 50px;
`;

export const Body = styled.div`
  display: flex;
  flex-flow: column;
  gap: 24px;
`;
export const ForgotPassword = styled.div`
  float: right;
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;
