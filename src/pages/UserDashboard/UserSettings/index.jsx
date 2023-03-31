import React, { useEffect, useState } from "react";
import PrimaryInput from "../../../components/Input";
import StaffHeader from "../../../components/StaffHeader";
import {
  ButtonHolder,
  Container,
  DoubleGridWrapper,
  LeftContainer,
  IconW,
} from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PrimaryButton from "../../../components/PrimaryButton";
import { useUpdateProfileMutation } from "../../../store/Services/authService";
import toast from "react-hot-toast";
import { FaPenSquare } from "react-icons/fa";
import { userSettingSchema } from "../../../utils/config";

const UserSetting = () => {
  const localProfile = localStorage.getItem("userProfile");
  const parseData = JSON.parse(localProfile);
  let guestEmail = parseData?.email;

  const [isDisabled, setIsDisabled] = useState(true);
  const [updateProfile, { isLoading }] = useUpdateProfileMutation(guestEmail);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(userSettingSchema),
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

  const handleEdit = () => {
    setIsDisabled(false);
  };

  const handleUpdate = async (formData) => {
    let newData = {
      phone: formData.phone,
      address: formData.address,
    };
    console.log("eeee", newData);
    const response = await updateProfile({
      email: guestEmail,
      values: newData,
    });

    console.log("ttt", response);
    const error = response?.error;
    const responseData = response?.data;
    console.log("rrrr", responseData);

    if (responseData) {
      toast.success(responseData?.message);
    }
    if (error) {
      toast.error(error?.data);
    }
  };
  return (
    <div>
      <StaffHeader title="Settings" />
      <Container>
        <LeftContainer>
          <div className=" align-center flex my-6 pb-4 border-b justify-between">
            <h1 className=" font-semibold">User Profile</h1>
            <IconW>
              <FaPenSquare
                size={28}
                onClick={handleEdit}
                color={"#8BA00D"}
                className="cursor"
              />
            </IconW>
          </div>

          <div style={{ display: "flex", gap: "20px", flexFlow: "column" }}>
            <DoubleGridWrapper>
              <PrimaryInput
                placeholder="First Name"
                type="text"
                label="First Name"
                register={register}
                disabled={true}
                name="firstName"
                // error={errors.username?.message}
              />
              <PrimaryInput
                placeholder="Last Name"
                type="text"
                label="Last Name"
                register={register}
                disabled={true}
                name="lastName"
                // error={errors.password?.message}
              />
            </DoubleGridWrapper>

            <PrimaryInput
              placeholder="Street Address"
              type="text"
              label="Street"
              register={register}
              disabled={isDisabled}
              name="address"
              // error={errors.password?.message}
            />

            <DoubleGridWrapper>
              <PrimaryInput
                placeholder="Enter Phone Number"
                type="text"
                label="Phone"
                register={register}
                disabled={isDisabled}
                name="phone"
                // error={errors.username?.message}
              />
              <PrimaryInput
                placeholder="Enter email address"
                type="email"
                label="Email"
                register={register}
                disabled={true}
                name="email"
                // error={errors.password?.message}
              />
            </DoubleGridWrapper>
          </div>

          <ButtonHolder>
            <PrimaryButton
              title="Save"
              width="100%"
              loading={isLoading}
              onClick={handleSubmit(handleUpdate)}
            />
          </ButtonHolder>
        </LeftContainer>
      </Container>
    </div>
  );
};

export default UserSetting;
