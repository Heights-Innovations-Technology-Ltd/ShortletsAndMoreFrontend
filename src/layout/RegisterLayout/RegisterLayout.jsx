import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import login_bg from "../../assets/login_bg.png";

const RegisterLayout = () => {
  return (
    <>
      <section className="h-full md:h-screen">
        <div className="container py-14 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-white">
            <div className="xl:w-10/12">
              <div className="block shadow-lg rounded-lg">
                <div
                  className="flex items-center"
                  style={{ position: "relative" }}
                >
                  <img src={login_bg} alt="/" className={`w-full h-full`} />

                  <div className="absolute bottom-[0%] ml-10 mb-10">
                    <h1
                      className="mb-8 font-semibold"
                      style={{ fontSize: "1.5rem" }}
                    >
                      Don't have an account!
                    </h1>
                    <p className="text-sm">
                      keep track of your favorite properties and get updates
                      <br />
                      when new listings become available
                    </p>

                    <div className="flex justify-between items-center w-14 mt-5">
                      <FiInstagram
                        size={12}
                        // className="mr-4"
                        style={{ color: "#8BA00D" }}
                      />

                      <FiFacebook
                        size={12}
                        // className="mr-4"
                        style={{ color: "#8BA00D" }}
                      />
                      <FiTwitter
                        size={12}
                        // className="mr-4"
                        style={{ color: "#8BA00D" }}
                      />
                    </div>
                  </div>

                  <div
                    className="absolute bottom-[0%] right-[0%] px-4 py-4 md:w-1/2 md:h-[100%] h-screen"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(0, 0, 0, .6) 0%, rgba(0, 0, 0, .6) 22.39%, rgba(0, 0, 0,  .6) 42.6%, rgba(0, 0, 0, .6) 79.19%, rgba(0, 0, 0, .6) 104.86%)",
                      backdropFilter: "blur(5px)",
                    }}
                  >
                    <h1 className="ml-8 mb-8 mt-8 text-lg">SIGN UP</h1>
                    <form className="space-y-4 md:space-y-8 px-8">
                      <div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="w-[100%] h-10 bg-transparent placeholder:text-gray-500 text-white py-1 pl-3 pr-10 focus:ring-0"
                          placeholder="First Name"
                          required=""
                          style={{ border: "1px solid" }}
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="w-[100%] h-10 bg-transparent placeholder:text-gray-500 text-white py-1 pl-3 pr-10 focus:ring-0"
                          placeholder="First Name"
                          required=""
                          style={{ border: "1px solid" }}
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="w-[100%] h-10 bg-transparent placeholder:text-gray-500 text-white py-1 pl-3 pr-10 focus:ring-0"
                          placeholder="First Name"
                          required=""
                          style={{ border: "1px solid" }}
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="w-[100%] h-10 bg-transparent placeholder:text-gray-500 text-white py-1 pl-3 pr-10 focus:ring-0"
                          placeholder="First Name"
                          required=""
                          style={{ border: "1px solid" }}
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="w-[100%] h-10 bg-transparent placeholder:text-gray-500 text-white py-1 pl-3 pr-10 focus:ring-0"
                          placeholder="First Name"
                          required=""
                          style={{ border: "1px solid" }}
                        />
                      </div>
                      <div className="flex items-center mt-2">
                        <input
                          type="checkbox"
                          value=""
                          className="w-3 h-3 text-gray-400 bg-gray-100 border-0 focus:ring-0"
                        />
                        <label for="checked-checkbox" className="ml-2 text-xs ">
                          <span className="text-gray-400">
                            I agree with the
                          </span>{" "}
                          <span className="underline cursor-pointer">
                            Terms & Conditions
                          </span>
                        </label>
                      </div>

                      <div className="flex items-center mt-20">
                        <button
                          type="button"
                          className="inline-block px-6 py-3 border-gray-800 text-gray-800 font-medium text-xs leading-tight hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          style={{
                            border: "1px solid #8BA00D",
                            color: "#ffffff",
                            backgroundColor: "#8BA00D",
                          }}
                        >
                          <span className="flex justify-center items-center">
                            <span className="mr-2">Sign Up</span>{" "}
                            <BsArrowRight size="0.6rem" />
                          </span>
                        </button>

                        <p className="ml-4 text-xs">
                          Already have an account?
                          <span
                            style={{
                              color: "#8BA00D",
                              cursor: "pointer",
                              marginLeft: "0.5rem",
                            }}
                          >
                            Sign In
                          </span>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterLayout;
