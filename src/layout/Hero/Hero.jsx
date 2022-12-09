import React from "react";
import HeroImage from "../../assets/hero_bg.png";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] bg-slate-700">
      <img
        src={HeroImage}
        alt="/"
        className="w-full h-full object-cover opacity-60"
      />
      <div className="">
        <div className="absolute top-[32%] w-full md:-[50%] flex flex-col text-white p-4">
          <h1 className="flex justify-center font-semibold lg:text-4xl md:text-2xl sm:text-sm text-center mb-4">
            Let's Find an apartment that's perfect for you
          </h1>
          <p className="flex justify-center text-sm text-center lg:ml-20">
            search confidently with your trusted source of apartment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
