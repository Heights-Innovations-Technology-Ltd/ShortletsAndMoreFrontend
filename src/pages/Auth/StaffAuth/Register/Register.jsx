import AuthBottom from "../../../../components/AuthBottom";
import PrimaryInput from "../../../../components/Input";
import AuthLayout from "../../../../layout/AuthLayout";
import Navbar from "../../../../layout/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Body, FormContainer, RegisterContainer, HeaderText } from "./style";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { staffRegistrationSchema } from "../../../../utils/config";
import { useRegisterNewStaffMutation } from "../../../../store/Services/staffService";

const StaffRegister = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(staffRegistrationSchema),
  });

  const [registerNewStaff, { isLoading, isSuccess }] =
    useRegisterNewStaffMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = async (data) => {
    // const newData = { ...data, accessToken: "1234" };
    const response = await registerNewStaff(data);
    const error = response?.error;
    const responseData = response?.data;

    if (responseData) {
      toast.success(responseData?.message);
      navigate("/staff-login");
    }
    if (error) {
      toast.error(error?.data?.Message);
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
                placeholder="Username"
                type="text"
                register={register}
                error={errors.username?.message}
                name="username"
                label="Username"
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
              <PrimaryInput
                placeholder="Role"
                type="text"
                register={register}
                error={errors.role?.message}
                name="role"
                label="Role"
              />
            </Body>
            <AuthBottom
              buttonTitle={"Sign Up"}
              text="Already have an account ?"
              directionText="Sign In"
              link="/staff-login"
              loading={isLoading}
            />
          </FormContainer>
        </AuthLayout>
      </RegisterContainer>
    </>
  );
};

export default StaffRegister;
