import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import AuthBottom from "../../../components/AuthBottom";
import PrimaryInput from "../../../components/Input";
import AuthLayout from "../../../layout/AuthLayout";
import Navbar from "../../../layout/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContainer, HeaderText, Body, LoginContainer } from "./style";
import { updateSchema } from "../../../utils/config";
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
  const { state } = useLocation();
  let email = state;
  const [updatePassword, { isLoading, isSuccess }] =
    useUpdatePasswordMutation(code);

  const submitForm = async (data) => {
    let newData = {
      email: email,
      password: data.password,
    };
    const response = await updatePassword({ code: code, values: newData });

    const error = response?.error;
    const responseData = response?.data;

    if (responseData) {
      toast.success(responseData?.message);
      navigate("/login");
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
          // justifyContent="flex-end"
          // borderBottomL="300px"
          headerText="Login in now!"
          subText="Keep track of your favourite properties and get updates when new listings become available"
        >
          <FormContainer onSubmit={handleSubmit(submitForm)}>
            <HeaderText>UPDATE PASSWORD</HeaderText>
            <Body>
              <PrimaryInput
                placeholder="New Password"
                rightText
                type="password"
                label="New Password"
                register={register}
                name="password"
                error={errors.password?.message}
              />

              <PrimaryInput
                placeholder="Confirm New Password"
                rightText
                type="password"
                label="Confirm New Password"
                register={register}
                name="confirmPassword"
                error={errors.confirmPassword?.message}
              />
            </Body>

            <AuthBottom
              buttonTitle={"Update Password"}
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
