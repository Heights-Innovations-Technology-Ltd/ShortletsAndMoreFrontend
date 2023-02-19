import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthBottom from "../../../../components/AuthBottom";
import PrimaryInput from "../../../../components/Input";
import AuthLayout from "../../../../layout/AuthLayout";
import Navbar from "../../../../layout/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormContainer,
  HeaderText,
  Body,
  ForgotPassword,
  LoginContainer,
} from "./style";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { store } from "../../../../store/store";
import { staffLoginSchema } from "../../../../utils/config";
import { useLoginNewStaffMutation } from "../../../../store/Services/staffService";
import { saveStaffInfo } from "../../../../store/Slice/staffSlice";

const StaffLogin = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(staffLoginSchema),
  });
  const [loginNewStaff, { isLoading, isSuccess, response }] =
    useLoginNewStaffMutation();

  const dispatch = useDispatch();

  const submitForm = async (data) => {
    console.log(data);
    const response = await loginNewStaff(data).unwrap();
    console.log("form data", response);

    const error = response?.error;
    const responseData = response?.data;
    console.log(responseData);

    if (responseData) {
      store.dispatch(saveStaffInfo(responseData));
      localStorage.setItem(
        "staffLoginProfile",
        JSON.stringify(responseData?.data)
      );
      navigate("/staff");
      toast.success(response?.message);
    }
    if (error) {
      toast.error("Invalid credentials");
    }
  };

  console.log("headdd", response);
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
                placeholder="Enter Username"
                type="text"
                label="Username"
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
              loading={isLoading}
              link="/staff-register"
            />
          </FormContainer>
        </AuthLayout>
      </LoginContainer>
    </>
  );
};

export default StaffLogin;
