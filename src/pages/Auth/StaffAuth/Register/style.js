import styled from "styled-components";
export const RegisterContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 200px;
  background: #f7f8f9;

  @media screen and (max-width: 768px) {
    padding: 0px;
  }

  @media (min-width: 769px) and (max-width: 1300px) {
    padding: 0px 100px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 120px 80px 100px 120px;
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
