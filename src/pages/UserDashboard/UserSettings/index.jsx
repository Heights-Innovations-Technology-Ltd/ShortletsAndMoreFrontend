import React, { useEffect } from "react";
import PrimaryInput from "../../../components/Input";
import StaffHeader from "../../../components/StaffHeader";
import {
  ButtonHolder,
  Container,
  DoubleGridWrapper,
  LeftContainer,
} from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PrimaryButton from "../../../components/PrimaryButton";

const UserSetting = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(),
  });

  const handleFetch = () => {
    const localProfile = localStorage.getItem("userProfile");
    const parseData = JSON.parse(localProfile);

    if (localProfile) {
      setValue("firstName", parseData?.firstName, {
        shouldValidate: true,
      });

      setValue("lastName", parseData?.lastName, {
        shouldValidate: true,
      });
      setValue("email", parseData?.email, {
        shouldValidate: true,
      });
      setValue("address", parseData?.address, {
        shouldValidate: true,
      });
      setValue("phone", parseData?.phone, {
        shouldValidate: true,
      });
    }
  };

  useEffect(() => {
    handleFetch();
  }, [setValue]);

  return (
    <div>
      <StaffHeader title="Settings" />
      <Container>
        <LeftContainer>
          <h1 className=" font-semibold my-6 border-b ">User Profile</h1>
          <div style={{ display: "flex", gap: "20px", flexFlow: "column" }}>
            <DoubleGridWrapper>
              <PrimaryInput
                placeholder="First Name"
                type="text"
                label="First Name"
                register={register}
                name="firstName"
                // error={errors.username?.message}
              />
              <PrimaryInput
                placeholder="Last Name"
                type="text"
                label="Last Name"
                register={register}
                name="lastName"
                // error={errors.password?.message}
              />
            </DoubleGridWrapper>

            <PrimaryInput
              placeholder="Street Address"
              type="text"
              label="Street"
              register={register}
              name="address"
              // error={errors.password?.message}
            />

            <DoubleGridWrapper>
              <PrimaryInput
                placeholder="Enter Phone Number"
                type="text"
                label="Phone"
                register={register}
                name="phone"
                // error={errors.username?.message}
              />
              <PrimaryInput
                placeholder="Enter email address"
                type="email"
                label="Email"
                register={register}
                name="email"
                // error={errors.password?.message}
              />
            </DoubleGridWrapper>
          </div>

          <ButtonHolder>
            <PrimaryButton
              title="Edit"
              width="100%"
              //   onClick={}
            />
          </ButtonHolder>
        </LeftContainer>
      </Container>
    </div>
  );
};

export default UserSetting;
