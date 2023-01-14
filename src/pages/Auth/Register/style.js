import styled from "styled-components";
export const RegisterContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 200px;
  height: 120vh;
  background: #f5f5f5;

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
  padding: 70px 70px 100px 70px;
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
