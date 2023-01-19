import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 200px;

  @media screen and (max-width: 768px) {
    padding: 0px 50px;
  }

  @media (min-width: 769px) and (max-width: 1300px) {
    padding: 0px 100px;
  }
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
  color: #171b03;
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
