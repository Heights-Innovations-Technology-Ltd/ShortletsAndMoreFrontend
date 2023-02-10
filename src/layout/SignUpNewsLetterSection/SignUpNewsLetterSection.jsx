import React from "react";
import signupnewsletter from "../../assets/signupnewsletter.png";
import {
  NewsItem,
  NewsText,
  NewsTitle,
  NewsWrapper,
  InputWrapper,
  Input,
  Button,
} from "./style";
import { ReactComponent as FlyIcon } from "../../assets/svg/fly.svg";
import { useSubscriberMutation } from "../../store/Services/authService";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { subscribeSchema } from "../../utils/config";
import { Oval } from "react-loading-icons";

const SignUpNewsLetterSection = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(subscribeSchema),
  });

  const [subscriber, { isLoading, isSuccess }] = useSubscriberMutation();

  const onSubmit = async(formData) => {
    const response = await subscriber(formData)
    console.log("form respnose", response)
  };
  return (
    <div
      className="w-full mt-40 relative"
      style={{
        backgroundColor: "#353F47",
        height: "300px",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={signupnewsletter}
          alt="/"
          className="w-full  object-cover opacity-50"
        />
      </div>
      <NewsWrapper>
        <NewsItem>
          <NewsTitle>Sign up for newsletter</NewsTitle>
          <NewsText>and get latest news & update</NewsText>
        </NewsItem>

        <InputWrapper onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Enter your email" {...register} type="submit" name="email"/>
          <Button>
            {isLoading ? (
              <Oval stroke="#ffffff" fill="white" width={24} height={24} />
            ) : (
              <FlyIcon />
            )}
          </Button>
        </InputWrapper>
      </NewsWrapper>
    </div>
  );
};

export default SignUpNewsLetterSection;
