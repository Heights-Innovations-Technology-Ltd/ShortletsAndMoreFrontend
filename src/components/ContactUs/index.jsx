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

const ContactUs = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });
  return (
    <Contact>
      <LeftContact>
        <FormText>Love to hear from you, Get in touch </FormText>
        <ContactForm>
          <PrimaryInput
            placeholder="Enter Email"
            type="text"
            label="Email"
            register={register}
            name="email"
            // error={errors.password?.message}
          />

          <PrimaryInput
            placeholder="Phone Number"
            type="text"
            label="Phone Number"
            register={register}
            name="phone"
            // error={errors.password?.message}
          />
          <TextArea
            placeholder="Enter Message"
            type="text"
            label="Message"
            register={register}
            name="addtional"
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
      <RightContact></RightContact>
    </Contact>
  );
};

export default ContactUs;
