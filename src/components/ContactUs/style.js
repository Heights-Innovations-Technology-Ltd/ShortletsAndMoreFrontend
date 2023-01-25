import styled from "styled-components";
export const Contact = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: wrap;
  flex-wrap: wrap;
  width: 100%;
  padding: 200px 80px 100px 80px;
  background-color: #f7f8f9;

  @media screen and (max-width: 900px) {
    flex-flow: column;
    gap: 40px;
  }
`;

export const LeftContact = styled.div`
  display: flex;
  width: 50%;
  flex-flow: column;
  gap: 48px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const RightContact = styled.div`
  display: flex;
  width: 50%;
  background-color: azure;
  height: 500px;
  padding-left: 20px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-flow: column;
  width: 70%;
  gap: 24px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
export const ButtonWrapper = styled.div`
  width: 100%;
`;
export const FormText = styled.h3`
  font-weight: 600;
  font-size: 40px;
  color: #171b03;
  line-height: 120%;
  @media screen and (max-width: 900px) {
    font-size: 24px;
  }
`;
