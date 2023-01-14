import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userBillingSchema } from "../../utils/config";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const BillingDetails = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(userBillingSchema),
  });

  const navigate = useNavigate();

  const localProfile = localStorage.getItem("userProfile");
  const parseData = JSON.parse(localProfile);
  useEffect(() => {
    handleCheck();
  }, []);

  const handleCheck = () => {
    navigate("/cart/checkout");

    if (!localProfile) {
      toast.error("Kindly Sign In");
      navigate("/login");
    }

    if (localProfile) {
      setValue("firstName", parseData?.data.firstName, {
        shouldValidate: true,
      });

      setValue("lastName", parseData?.data.lastName, {
        shouldValidate: true,
      });
      setValue("email", parseData?.data.email, {
        shouldValidate: true,
      });
    }
  };
  return (
    <div className="flex justify-center items-start p-20 bg-gray-100">
      <div className="bg-white shadow-md m-3 p-4" style={{ width: "900px" }}>
        <h1 className="ml-4 font-semibold mb-2">Billing detail</h1>
        <div>
          <hr className="ml-4 mr-4" />
          <div className="p-4 flex flex-row justify-between items-center">
            <input
              type="text"
              name="firstName"
              {...register("firstName")}
              placeholder="First name "
              className="block p-2 w-[22.5rem] text-xs text-gray-700  border-0 border-b-2 border-gray-100  dark:text-gray-700 dark:border-gray-100 focus:outline-none focus:ring-0 focus:border-gray-200"
            />
            <input
              type="text"
              name="lastName"
              {...register("lastName")}
              placeholder="First name "
              className="block p-2 w-[22.5rem] text-xs text-gray-700  border-0 border-b-2 border-gray-100  dark:text-gray-700 dark:border-gray-100 focus:outline-none focus:ring-0 focus:border-gray-200"
            />
          </div>

          <div className="p-4 flex flex-row justify-between items-center">
            <input
              type="text"
              placeholder="Company name (optional)"
              className="block p-2 w-full text-xs text-gray-700  border-0 border-b-2 border-gray-100  dark:text-gray-700 dark:border-gray-100 focus:outline-none focus:ring-0 focus:border-gray-200"
            />
          </div>

          <div className="p-4 flex flex-row justify-between items-center text-gray-700 ">
            <select
              className="block p-2 w-full text-xs text-gray-700  border-0 border-b-2 border-gray-100  dark:text-gray-700 dark:border-gray-100 focus:outline-none focus:ring-0 focus:border-gray-200"
              style={{ color: "gray" }}
            >
              <option>Country</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>

          <div className="p-4 flex flex-col justify-between items-center">
            <input
              type="text"
              placeholder="Street address"
              className="block p-2 w-full text-xs text-gray-700  border-0 border-b-2 border-gray-100  dark:text-gray-700 dark:border-gray-100 focus:outline-none focus:ring-0 focus:border-gray-200"
            />

            <input
              type="text"
              placeholder=""
              className="block p-2 w-full mt-4 text-xs text-gray-700  border-0 border-b-2 border-gray-100  dark:text-gray-700 dark:border-gray-100 focus:outline-none focus:ring-0 focus:border-gray-200"
            />
          </div>

          <div className="p-4 flex flex-row justify-between items-center">
            <input
              type="text"
              placeholder="Postal / ZIP"
              className="block p-2 w-[22.5rem] text-xs text-gray-700  border-0 border-b-2 border-gray-100  dark:text-gray-700 dark:border-gray-100 focus:outline-none focus:ring-0 focus:border-gray-200"
            />
            <input
              type="text"
              placeholder="Town / City "
              className="block p-2 w-[22.5rem] text-xs text-gray-700  border-0 border-b-2 border-gray-100  dark:text-gray-700 dark:border-gray-100 focus:outline-none focus:ring-0 focus:border-gray-200"
            />
          </div>

          <div className="p-4 flex flex-row justify-between items-center">
            <input
              type="text"
              placeholder="State"
              className="block p-2 w-[22.5rem] text-xs text-gray-700  border-0 border-b-2 border-gray-100  dark:text-gray-700 dark:border-gray-100 focus:outline-none focus:ring-0 focus:border-gray-200"
            />
            <input
              type="text"
              placeholder="Phone"
              className="block p-2 w-[22.5rem] text-xs text-gray-700  border-0 border-b-2 border-gray-100  dark:text-gray-700 dark:border-gray-100 focus:outline-none focus:ring-0 focus:border-gray-200"
            />
          </div>

          <div className="p-4 flex flex-row justify-between items-center">
            <input
              type="text"
              placeholder="Your Email"
              name="email"
              {...register("email")}
              className="block p-2 w-full text-xs text-gray-700  border-0 border-b-2 border-gray-100  dark:text-gray-700 dark:border-gray-100 focus:outline-none focus:ring-0 focus:border-gray-200"
            />
          </div>

          <div className="p-4 flex flex-col justify-between">
            <label htmlFor="" className="ml-2 mb-20">
              Additional Information
            </label>
            <input
              type="text"
              placeholder="Order notes (optional)"
              className="block p-2 w-full text-xs text-gray-700  border-0 border-b-2 border-gray-100  dark:text-gray-700 dark:border-gray-100 focus:outline-none focus:ring-0 focus:border-gray-200"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div
            className="bg-white shadow-md m-3 p-2 w-[250px] rounded-sm"
            //   style={{ width: "250px" }}
          >
            <h1 className="ml-4 font-semibold text-xs">Cart Totals</h1>

            <div className="p-4 flex flex-row justify-between items-center">
              <h4 className="text-xs">Product</h4>
              <h5 className="text-xs">Subtotal</h5>
            </div>

            <hr className="ml-4 mr-4" />

            <div className="p-4 flex flex-row justify-between items-center">
              <h4 className="text-xs">Luxury Duplex</h4>
              <h5 className="text-xs">NGN104,700</h5>
            </div>

            <div className="p-4 flex flex-row justify-between items-center">
              <h4 className="text-xs">Luxury Duplex</h4>
              <h5 className="text-xs">NGN104,700</h5>
            </div>

            <div className="p-4 flex flex-row justify-between items-center">
              <h4 className="text-xs font-semibold">Subtotal</h4>
              <h5 className="text-xs">NGN209,700</h5>
            </div>

            <hr className="ml-4 mr-4" />

            <div className="p-4 flex flex-row justify-between items-center">
              <h4 className="text-xs">Vat</h4>
              <h5 className="text-xs">NGN4,800</h5>
            </div>

            <hr className="ml-4 mr-4" />

            <div className="p-4 flex flex-row justify-between items-center">
              <h4 className="text-xs font-semibold">Total</h4>
              <h5 className="text-xs ">NGN220,800</h5>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div
            className="bg-white shadow-md m-3 p-4 w-[250px] rounded-sm"
            //   style={{ width: "250px" }}
          >
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
            />
            <label
              for="default-radio-2"
              className="ml-2 text-xs font-medium text-gray-900 "
            >
              Direct bank transfer
            </label>

            <p className="mt-4 ml-1" style={{ fontSize: "0.5rem" }}>
              Make your payment directly into our <br /> bank account
            </p>

            <div className="flex flex-col justify-between mt-14">
              <div className="flex items-center">
                {/* <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"> */}
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
                />
                <label
                  for="default-radio-2"
                  className="ml-2 text-xs font-medium text-gray-900 "
                >
                  Check paymemts
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
                />
                <label
                  for="default-radio-2"
                  className="ml-2 text-xs font-medium text-gray-900"
                >
                  Cash on delivery
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-3 h-3 text-gray-400 bg-gray-100 border-gray-300 focus:ring-gray-200"
                />
                <label
                  for="default-radio-2"
                  className="ml-2 text-xs font-medium text-gray-900"
                >
                  Paypal
                </label>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="inline-block px-2 py-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight capitalize hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          style={{
            border: "1px solid #8BA00D",
            color: "#ffffff",
            backgroundColor: "#8BA00D",
            width: "250px",
          }}
        >
          PLACE ORDER
        </button>

        <button
          type="button"
          className="inline-block mt-2 px-2 py-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight capitalize hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          style={{
            border: "1px solid #8BA00D",
            color: "#ffffff",
            backgroundColor: "#8BA00D",
            width: "250px",
          }}
        >
          REVIEW YOUR BOOKING
        </button>
      </div>
    </div>
  );
};

export default BillingDetails;
