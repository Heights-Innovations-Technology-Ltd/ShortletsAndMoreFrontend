import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthBottom from "../../../components/AuthBottom";
import PrimaryInput from "../../../components/Input";
import AuthLayout from "../../../layout/AuthLayout";
import Navbar from "../../../layout/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContainer, HeaderText, Body, LoginContainer } from "./style";
import { subscribeSchema } from "../../../utils/config";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {
  useLoginNewUserMutation,
  useResetPasswordMutation,
} from "../../../store/Services/authService";

const ResetPassword = () => {
  // const { loading, userDetails, error, success } = useSelector(
  //   (state) => state.authDataReducer
  // );
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(subscribeSchema),
  });
  const [resetPassword, { isLoading, isSuccess }] = useResetPasswordMutation();

  const submitForm = async (data) => {
    console.log(data);
    const response = await resetPassword(data);
    console.log("form data", response);

    const error = response?.error;
    const responseData = response?.data;

    if (responseData) {
      console.log(responseData?.data);
      toast.success(responseData?.message);
      let resetCode = responseData?.data.slice(17);
      localStorage.setItem("updateCode", resetCode);
      navigate(`/update-password/${resetCode}`);
    }
    if (error) {
      toast.error(error?.data);
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
            <HeaderText>RESET PASSWORD</HeaderText>
            <Body>
              <PrimaryInput
                placeholder="Enter Email"
                type="text"
                label="Email Address"
                register={register}
                name="email"
                error={errors.email?.message}
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

export default ResetPassword;
