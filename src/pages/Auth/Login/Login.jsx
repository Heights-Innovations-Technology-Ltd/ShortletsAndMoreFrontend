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
import { registerUser, userLogin } from "../../../store/authSlice/authActions";
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
    if (result?.payload?.status === 200) {
      toast.success("Login Successfully");
    }
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
                type="text"
                register={register}
                name="username"
                error={errors.username?.message}
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
              link="/register"
            />
          </FormContainer>
        </AuthLayout>
      </LoginContainer>
    </>
  );
};

export default Login;
