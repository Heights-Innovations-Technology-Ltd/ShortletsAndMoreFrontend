import AuthBottom from "../../../components/AuthBottom";
import PrimaryInput from "../../../components/Input";
import AuthLayout from "../../../layout/AuthLayout";
import Navbar from "../../../layout/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Body, FormContainer, RegisterContainer, HeaderText } from "./style";
import { userRegistrationSchema } from "../../../utils/config";

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegistrationSchema),
  });

  const submitForm = async (data) => {
    console.log("form data", data);
  };

  return (
    <>
      <Navbar />
      <RegisterContainer>
        <AuthLayout
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
                placeholder="Username"
                type="text"
                register={register}
                error={errors.username?.message}
                name="username"
              />
              <PrimaryInput
                placeholder="Password"
                rightText
                type="password"
                register={register}
                error={errors.password?.message}
                name="password"
              />
            </Body>
            <AuthBottom
              buttonTitle={"Sign Up"}
              text="Already have an account ?"
              directionText="Sign In"
            />
          </FormContainer>
        </AuthLayout>
      </RegisterContainer>
    </>
  );
};

export default Register;
