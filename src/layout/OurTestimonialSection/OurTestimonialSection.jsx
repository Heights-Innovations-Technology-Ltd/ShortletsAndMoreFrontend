import React from "react";
import GuyHawkins from "../../assets/GuyHawkins.png";
import MarvinMcKinney from "../../assets/MarvinMcKinney.png";
import RobertFox from "../../assets/RobertFox.png";
import TheresaWebb from "../../assets/TheresaWebb.png";

const OurTestimonialSection = () => {
  return (
    <>
      <h1 className="text-center mt-8 mb-2 lg:text-2xl font-semibold">
        Our Testimonials
      </h1>
      <p
        className="text-center  w-6/12 mb-5 my-0 mx-auto"
        style={{ width: "53%", fontSize: "0.75rem" }}
      >
        Thank you for considering our shortlet services
      </p>

      <div class="w-full max-w-6xl mx-auto mb-10">
        <div class="mx-3 md:flex items-start">
          <div class="px-3 md:w-1/3">
            <div
              class="w-11/12 mx-auto rounded-sm bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              style={{ position: "relative" }}
            >
              <p class="text-sm leading-tight text-center mb-6 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                sunt ratione dolor exercitationem
              </p>

              <div
                class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200"
                style={{ position: "absolute", left: "40%" }}
              >
                <img src={MarvinMcKinney} alt="MarvinMcKinney" />
              </div>

              <div
                className="text-center text-xs"
                style={{ position: "absolute", left: "26%", top: "124%" }}
              >
                <p className="font-semibold text-black">Marvin McKinney</p>
                <p>Designer</p>
              </div>
            </div>
          </div>

          <div class="px-3 md:w-1/3">
            <div
              class="w-11/12 mx-auto rounded-sm bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              style={{ position: "relative" }}
            >
              <p class="text-sm leading-tight text-center mb-6 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                sunt ratione dolor exercitationem
              </p>

              <div
                class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200"
                style={{ position: "absolute", left: "40%" }}
              >
                <img src={TheresaWebb} alt="" />
              </div>

              <div
                className="text-center text-xs"
                style={{ position: "absolute", left: "30%", top: "124%" }}
              >
                <p className="font-semibold text-black">Theresa Webb</p>
                <p>Host</p>
              </div>
            </div>
          </div>

          <div class="px-3 md:w-1/3">
            <div
              class="w-11/12 mx-auto rounded-sm bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              style={{ position: "relative" }}
            >
              <p class="text-sm leading-tight text-center mb-6 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                sunt ratione dolor exercitationem
              </p>

              <div
                class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200"
                style={{ position: "absolute", left: "40%" }}
              >
                <img src={RobertFox} alt="" />
              </div>
              <div
                className="text-center text-xs"
                style={{ position: "absolute", left: "36%", top: "124%" }}
              >
                <p className="font-semibold text-black">Robert Fox</p>
                <p>Reporter</p>
              </div>
            </div>
          </div>

          <div class="px-3 md:w-1/3">
            <div
              class="w-11/12 mx-auto rounded-sm bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              style={{ position: "relative" }}
            >
              <p class="text-sm leading-tight text-center mb-6 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                sunt ratione dolor exercitationem
              </p>

              <div
                class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200"
                style={{ position: "absolute", left: "40%" }}
              >
                <img src={GuyHawkins} alt="" />
              </div>

              <div
                className="text-center text-xs"
                style={{ position: "absolute", left: "36%", top: "124%" }}
              >
                <p className="font-semibold text-black">Guy Hawkins</p>
                <p>Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTestimonialSection;
