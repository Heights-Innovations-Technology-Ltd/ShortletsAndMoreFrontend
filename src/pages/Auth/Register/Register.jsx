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

const Register = () => {
  const { loading, userDetails, error, success } = useSelector(
    (state) => state.authDataReducer
  );

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegistrationSchema),
  });

  const dispatch = useDispatch();

  const submitForm = async (data) => {
    console.log(data);
    let response = await dispatch(registerUser(data));
    console.log("form data", response);

    if (response.payload.status === 201) {
      toast.success(response?.payload?.data?.message);
    }
  };

  useEffect(() => {
    if (success) {
      console.log("success");
    }
  }, [success]);
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
              />
              <PrimaryInput
                placeholder="Last Name"
                type="text"
                register={register}
                error={errors.lastName?.message}
                name="lastName"
              />
              <PrimaryInput
                placeholder="Email"
                type="email"
                register={register}
                error={errors.email?.message}
                name="email"
              />
              <PrimaryInput
                placeholder="Phone Number"
                type="text"
                register={register}
                error={errors.username?.phone}
                name="phone"
              />
              <PrimaryInput
                placeholder="Address"
                type="text"
                register={register}
                error={errors.username?.address}
                name="address"
              />
              <PrimaryInput
                placeholder="Password"
                rightText
                type="password"
                register={register}
                error={errors.password?.message}
                name="password"
              />
              <PrimaryInput
                placeholder="Confirm Password"
                rightText
                type="password"
                register={register}
                error={errors.confirmPassword?.message}
                name="confirmPassword"
              />
            </Body>
            <AuthBottom
              buttonTitle={"Sign Up"}
              text="Already have an account ?"
              directionText="Sign In"
              link="/login"
            />
          </FormContainer>
        </AuthLayout>
      </RegisterContainer>
    </>
  );
};

export default Register;
