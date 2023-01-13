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

const SignUpNewsLetterSection = () => {
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

        <InputWrapper>
          <Input placeholder="Enter your email" />
          <Button>
            <FlyIcon />
          </Button>
        </InputWrapper>
      </NewsWrapper>
    </div>
  );
};

export default SignUpNewsLetterSection;
