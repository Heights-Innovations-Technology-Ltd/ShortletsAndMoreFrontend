import React from "react";
import GeneralSearch from "../../components/GeneralSearch";

const Hero = (props) => {
  const { HeroImage, heroMainText, heroSubText, objectCover, opacity60 } =
    props;
  return (
    <div className="w-full h-[90vh] bg-slate-700">
      <img
        src={HeroImage}
        alt="/"
        className={`w-full h-full ${objectCover} ${opacity60}`}
      />
      <div className="">
        <div className="absolute top-[32%] w-full md:-[50%] flex flex-col text-white p-4">
          <h1 className="flex justify-center font-semibold overflow-hidden lg:text-4xl md:text-2xl sm:text-sm text-center mb-4">
            {/* {Let's Find an apartment that's perfect for you} */}
            {heroMainText}
          </h1>
          <p className="flex justify-center text-sm text-center lg:ml-20">
            {/* search confidently with your trusted source of apartment */}
            {heroSubText}
          </p>
          <GeneralSearch />
        </div>
      </div>
    </div>
  );
};

export default Hero;
