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
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../store/Action/actions";
import toast from "react-hot-toast";

const Login = () => {
  const { loading, userDetails, error, success } = useSelector(
    (state) => state.authDataReducer
  );
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useDispatch();

  const submitForm = async (data) => {
    console.log(data);
    const result = await dispatch(userLogin(data));
    console.log("form data", result.payload);
    console.log("headers", result.headers);
    if (result?.payload?.status === 200) {
      toast.success("Login Successfully");
      localStorage.setItem("userProfile", JSON.stringify(result.payload));
    }
    if (result?.payload?.status === 400) {
      toast.error("Invalid Credentials");
    }
  };
  return (
    <>
      <Navbar />
      <LoginContainer>
        <AuthLayout
          flexFlow="row-reverse"
          justifyContent="flex-end"
          borderBottomL="300px"
          headerText="Login in now!"
          subText="Keep track of your favourite properties and get updates when new listings become available"
        >
          <FormContainer onSubmit={handleSubmit(submitForm)}>
            <HeaderText>SIGN IN</HeaderText>
            <Body>
              <PrimaryInput
                placeholder="Enter Email"
                type="text"
                label="Email Address"
                register={register}
                name="username"
                error={errors.username?.message}
              />
              <PrimaryInput
                placeholder="Min of 8 characters"
                rightText
                type="password"
                label="Password"
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
                  color: "#171B03",
                }}
              >
                Forgot Password
              </NavLink>
            </ForgotPassword>
            <AuthBottom
              buttonTitle={"Sign In"}
              text="Don't have an account ?"
              directionText="Sign Up"
              link="/register"
            />
          </FormContainer>
        </AuthLayout>
      </LoginContainer>
    </>
  );
};

export default Login;
