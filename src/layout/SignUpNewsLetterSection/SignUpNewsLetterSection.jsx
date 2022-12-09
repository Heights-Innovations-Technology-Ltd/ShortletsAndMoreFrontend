import React from "react";
import signupnewsletter from "../../assets/signupnewsletter.png";

const SignUpNewsLetterSection = () => {
  return (
    <div className="w-full mt-40" style={{ backgroundColor: "#353F47" }}>
      <div style={{ position: "relative" }}>
        <img
          src={signupnewsletter}
          alt="/"
          className="w-full  object-cover opacity-50"
        />

        <div
          className="flex justify-between items-center"
          style={{
            position: "absolute",
            top: "50px",
            left: "12%",
            // transform: "translate(-50%,118%)",
          }}
        >
          <div className="flex flex-col">
            <h1
              className="flex justify-center font-semibold lg:text-2xl md:text-xl sm:text-sm text-center mb-1 text-white"
              style={{ fontSize: "1.5rem" }}
            >
              Sign up for newsletter
            </h1>
            <span className="text-white ml-2" style={{ fontSize: "0.75rem" }}>
              and get latest news & update
            </span>
          </div>
        </div>

        <div
          className="flex justify-between items-center"
          style={{
            position: "absolute",
            top: "50px",
            left: "63%",
            // transform: "translate(-50%,118%)",
          }}
        >
          <form action="#">
            <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div class="relative w-full">
                <label
                  for="email"
                  class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email address
                </label>
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required=""
                />
              </div>
              <div>
                <button
                  type="submit"
                  class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpNewsLetterSection;
