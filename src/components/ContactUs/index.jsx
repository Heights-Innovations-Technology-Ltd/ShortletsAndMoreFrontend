import React from "react";
import PrimaryInput from "../Input";
import TextArea from "../TextArea";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ButtonWrapper,
  Contact,
  ContactForm,
  FormText,
  LeftContact,
  RightContact,
} from "./style";
import { contactSchema } from "../../utils/config";
import PrimaryButton from "../PrimaryButton";
import toast from "react-hot-toast";
import { ReactComponent as AboutIcon } from "../../assets/svg/about.svg";
import { useAddEnquiryMutation } from "../../store/Services/apartmentService";

const ContactUs = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });
  const [addEnquiry] = useAddEnquiryMutation();

  const onSubmit = async (formData) => {
    const response = await addEnquiry(formData);
    const error = response?.error;
    const responseData = response.data;

    if (responseData) {
      toast.success(responseData?.message);
    } else {
      toast.error("Error occured");
    }
  };
  return (
    <Contact>
      <LeftContact>
        <FormText>Love to hear from you, Get in touch </FormText>
        <ContactForm onSubmit={handleSubmit(onSubmit)}>
          <PrimaryInput
            placeholder="Enter Email"
            type="text"
            label="Email"
            register={register}
            name="customerEmail"
            // error={errors.password?.message}
          />

          <PrimaryInput
            placeholder="Enter subject"
            type="text"
            label="Subject"
            register={register}
            name="subject"
            // error={errors.password?.message}
          />
          <TextArea
            placeholder="Enter Message"
            type="text"
            label="Message"
            register={register}
            name="body"
            // error={errors.password?.message}
          />
          <ButtonWrapper>
            <PrimaryButton
              title="
              Send Message"
              width="100%"
              type="submit"
              height="55px"
            />
          </ButtonWrapper>
        </ContactForm>
      </LeftContact>
      <RightContact>
        <AboutIcon />
      </RightContact>
    </Contact>
  );
};

export default ContactUs;
