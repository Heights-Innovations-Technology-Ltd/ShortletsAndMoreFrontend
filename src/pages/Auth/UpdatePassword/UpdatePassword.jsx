import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthBottom from "../../../components/AuthBottom";
import PrimaryInput from "../../../components/Input";
import AuthLayout from "../../../layout/AuthLayout";
import Navbar from "../../../layout/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContainer, HeaderText, Body, LoginContainer } from "./style";
import {
  loginSchema,
  subscribeSchema,
  updateSchema,
} from "../../../utils/config";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useUpdatePasswordMutation } from "../../../store/Services/authService";

const UpdatePassword = () => {
  // const { loading, userDetails, error, success } = useSelector(
  //   (state) => state.authDataReducer
  // );
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateSchema),
  });
  const code = localStorage.getItem("updateCode");
  console.log("codee", code);
  const [updatePassword, { isLoading, isSuccess }] =
    useUpdatePasswordMutation(code);

  const submitForm = async (data) => {
    console.log(data);
    const response = await updatePassword(data);
    console.log("form data", response);

    const error = response?.error;
    const responseData = response?.data;

    // if (responseData) {
    //   // toast.success(responseData?.message);
    //   navigate("/home");
    // }
    // if (error) {
    //   toast.error(error?.data);
    // }
    // console.log("headers", result.headers);
    // if (result?.payload?.status === 200) {
    //   toast.success("Login Successfully");
    //   localStorage.setItem("userProfile", JSON.stringify(result.payload));
    // }
    // if (result?.payload?.status === 400) {
    //   toast.error("Invalid Credentials");
    // }
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
            <HeaderText>UPDATE PASSWORD</HeaderText>
            <Body>
              <PrimaryInput
                placeholder="Enter Email"
                type="text"
                label="Email Address"
                register={register}
                name="email"
                error={errors.email?.message}
              />

              <PrimaryInput
                placeholder="New Password"
                rightText
                type="password"
                label="New Password"
                register={register}
                name="password"
                error={errors.password?.message}
              />
            </Body>

            <AuthBottom
              buttonTitle={"Sign In"}
              text="Don't have an account ?"
              directionText="Sign Up"
              loading={isLoading}
              link="/login"
            />
          </FormContainer>
        </AuthLayout>
      </LoginContainer>
    </>
  );
};

export default UpdatePassword;
