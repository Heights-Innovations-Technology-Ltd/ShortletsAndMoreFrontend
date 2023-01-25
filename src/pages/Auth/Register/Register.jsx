import AuthBottom from "../../../components/AuthBottom";
import PrimaryInput from "../../../components/Input";
import AuthLayout from "../../../layout/AuthLayout";
import Navbar from "../../../layout/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Body, FormContainer, RegisterContainer, HeaderText } from "./style";
import { userRegistrationSchema } from "../../../utils/config";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../store/Action/actions";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useRegisterNewUserMutation } from "../../../store/Services/authService";

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegistrationSchema),
  });

  const [registerNewUser, { isLoading, isSuccess }] =
    useRegisterNewUserMutation();

  const dispatch = useDispatch();

  const submitForm = async (data) => {
    const newData = { ...data, accessToken: "1234" };
    console.log(data);
    const response = await registerNewUser(newData);
    console.log("form data", response);
    const error = response?.error;
    const responseData = response?.data;

    if (responseData) {
      toast.success(responseData?.message);
    }
    if (error) {
      toast.error(error?.data);
    }
  };

  return (
    <>
      <Navbar />
      <RegisterContainer>
        <AuthLayout
          borderBottomR="300px"
          headerText="Don’t have an account!"
          subText="Keep track of your favorite properties and get updates when new listings become available"
        >
          <FormContainer onSubmit={handleSubmit(submitForm)}>
            <HeaderText>SIGN UP</HeaderText>
            <Body>
              <PrimaryInput
                placeholder="First Name"
                type="text"
                register={register}
                error={errors.firstName?.message}
                name="firstName"
                label="First Name"
              />
              <PrimaryInput
                placeholder="Last Name"
                type="text"
                register={register}
                error={errors.lastName?.message}
                name="lastName"
                label="Last Name"
              />
              <PrimaryInput
                placeholder="Email"
                type="email"
                register={register}
                error={errors.email?.message}
                name="email"
                label="Email Address"
              />
              <PrimaryInput
                placeholder="Phone Number"
                type="text"
                register={register}
                error={errors.phone?.message}
                name="phone"
                label="Phone Number"
              />
              <PrimaryInput
                placeholder="Address"
                type="text"
                register={register}
                error={errors.address?.message}
                name="address"
                label="Address"
              />
              <PrimaryInput
                placeholder="Password"
                rightText
                type="password"
                register={register}
                error={errors.password?.message}
                name="password"
                label="Password"
              />
              <PrimaryInput
                placeholder="Confirm Password"
                rightText
                type="password"
                register={register}
                error={errors.confirmPassword?.message}
                name="confirmPassword"
                label="Confirm Password"
              />
            </Body>
            <AuthBottom
              buttonTitle={"Sign Up"}
              text="Already have an account ?"
              directionText="Sign In"
              link="/login"
              loading={isLoading}
            />
          </FormContainer>
        </AuthLayout>
      </RegisterContainer>
    </>
  );
};

export default Register;
