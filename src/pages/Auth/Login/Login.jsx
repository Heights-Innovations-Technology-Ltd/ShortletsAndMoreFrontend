import React from "react";
import { NavLink } from "react-router-dom";
import AuthBottom from "../../../components/AuthBottom";
import PrimaryInput from "../../../components/Input";
import AuthLayout from "../../../layout/AuthLayout";
import Navbar from "../../../layout/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormContainer,
  HeaderText,
  Body,
  ForgotPassword,
  LoginContainer,
} from "./style";
import { loginSchema } from "../../../utils/config";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitForm = async (data) => {
    console.log("form data", data);
  };
  return (
    <>
      <Navbar />
      <LoginContainer>
        <AuthLayout
          headerText="Login in now!"
          subText="Keep track of your favourite properties and get updates when new listings become available"
        >
          <FormContainer onSubmit={handleSubmit(submitForm)}>
            <HeaderText>SIGN IN</HeaderText>
            <Body>
              <PrimaryInput
                placeholder="Email"
                type="email"
                register={register}
                name="email"
                error={errors.email?.message}
              />
              <PrimaryInput
                placeholder="Password"
                rightText
                type="password"
                register={register}
                name="password"
                error={errors.password?.message}
              />
            </Body>
            <ForgotPassword>
              <NavLink
                to=""
                style={{
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "white",
                }}
              >
                Forgot Password
              </NavLink>
            </ForgotPassword>
            <AuthBottom
              buttonTitle={"Sign In"}
              text="Don't have an account ?"
              directionText="Sign Up"
            />
          </FormContainer>
        </AuthLayout>
      </LoginContainer>
    </>
  );
};

export default Login;
