import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userBillingSchema } from "../../utils/config";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PrimaryButton from "../PrimaryButton";
import { Dialog } from "@mui/material";
import { ReactComponent as CloseIcon } from "../../assets/svg/close.svg";
import availableImage from "../../assets/available.png";
import {
  DoubleGridWrapper,
  ModalWrapper,
  Top,
  CloseWrapper,
  Question,
  ModalButton,
} from "./style";
import PrimaryInput from "../Input";
import { CnotinueModalButton } from "../../layout/RoomDetailsSection/style";

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

  const [openModal, setOpenModal] = useState(false);
  const [openContinueModal, setOpenContinueModal] = useState(false);
  const localProfile = localStorage.getItem("userProfile");
  const parseData = JSON.parse(localProfile);
  useEffect(() => {
    handleCheck();
  }, []);

  const reserveNow = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    setOpenContinueModal(true);
  };

  const handleCheck = () => {
    navigate("/cart/checkout");

    if (!localProfile) {
      toast.error("Kindly Sign In");
      // navigate("/login");
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
      setValue("address", parseData?.data.address, {
        shouldValidate: true,
      });
    }
  };

  const makePayment = () => {};
  const payNow = () => {};
  return (
    <div
      className="flex items-start bg-gray-100"
      style={{ padding: "150px 80px", display: "flex" }}
    >
      <div className="bg-white shadow-md m-3 p-6" style={{ width: "60%" }}>
        <h1 className=" font-semibold my-6 border-b ">Billing detail</h1>
        <div style={{ display: "flex", gap: "20px", flexFlow: "column" }}>
          <DoubleGridWrapper>
            <PrimaryInput
              placeholder="First Name"
              type="text"
              label="First Name"
              register={register}
              name="firstName"
              // error={errors.username?.message}
            />
            <PrimaryInput
              placeholder="Last Name"
              type="text"
              label="Last Name"
              register={register}
              name="lastName"
              // error={errors.password?.message}
            />
          </DoubleGridWrapper>

          <PrimaryInput
            placeholder="Enter Company Name"
            type="text"
            label="Company Name"
            register={register}
            name="companyName"
            // error={errors.password?.message}
          />

          <PrimaryInput
            placeholder="Select Country"
            type="text"
            label="Country"
            register={register}
            name="country"
            // error={errors.password?.message}
          />
          <DoubleGridWrapper>
            <PrimaryInput
              placeholder="Select State"
              type="text"
              label="State"
              register={register}
              name="state"
              // error={errors.username?.message}
            />
            <PrimaryInput
              placeholder="Last Name"
              type="text"
              label="Town/City"
              register={register}
              name="town"
              // error={errors.password?.message}
            />
          </DoubleGridWrapper>

          <PrimaryInput
            placeholder="Street Address"
            type="text"
            label="Street"
            register={register}
            name="street"
            // error={errors.password?.message}
          />

          <DoubleGridWrapper>
            <PrimaryInput
              placeholder="Enter Phone Number"
              type="text"
              label="Phone"
              register={register}
              name="phone"
              // error={errors.username?.message}
            />
            <PrimaryInput
              placeholder="Enter email address"
              type="email"
              label="Email"
              register={register}
              name="email"
              // error={errors.password?.message}
            />
          </DoubleGridWrapper>

          <PrimaryInput
            placeholder="Other Notes (optional)"
            type="text"
            label="Additional Information"
            register={register}
            name="addtional"
            // error={errors.password?.message}
          />
        </div>
      </div>

      <div
        className=" flex-col justify-center items-center"
        style={{
          width: "40%",
          display: "flex",
          padding: "0px 80px",
        }}
      >
        <div
          className="flex flex-col justify-center items-center"
          style={{ width: "100%" }}
        >
          <div
            className="bg-white shadow-md m-3 p-2  rounded-sm"
            style={{ width: "100%" }}
          >
            <h1
              className="ml-4 mb-4 font-semibold text-xl pl-2"
              style={{ borderLeft: "2px solid #8BA00D" }}
            >
              Cart Totals
            </h1>

            <div className="p-4 flex flex-row justify-between items-center">
              <h4 className="text-xs font-semibold">Product</h4>
              <h5 className="text-xs font-semibold">Subtotal</h5>
            </div>

            <hr className="ml-4 mr-4" />

            <div className="p-4 flex flex-row justify-between items-center mt-3">
              <h4 className="text-xs">Luxury Duplex</h4>
              <h5 className="text-xs">NGN104,700</h5>
            </div>

            <div className="p-4 flex flex-row justify-between items-center mb-3">
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
        <div className="w-full gap-3 flex flex-col">
          <PrimaryButton
            title="Continue"
            width="100%"
            onClick={handleContinue}
          />
          <PrimaryButton
            title="Reserve Now"
            width="100%"
            lightBtn
            onClick={reserveNow}
          />
        </div>
      </div>

      <Dialog open={openContinueModal} fullWidth maxWidth="sm">
        <ModalWrapper>
          <Top>
            <CloseWrapper onClick={() => setOpenContinueModal(false)}>
              <CloseIcon />
            </CloseWrapper>
          </Top>
          <div style={{ width: "100%" }}>
            <h1 className="ml-4 mb-4 font-semibold text-xl pl-2">
              Booking Preview
            </h1>

            <div className="p-4 flex flex-row justify-between items-center">
              <h4 className="text-xs font-semibold">Product</h4>
              <h5 className="text-xs font-semibold">Subtotal</h5>
            </div>

            <hr className="ml-4 mr-4" />

            <div className="p-4 flex flex-row justify-between items-center mt-3">
              <h4 className="text-xs">Luxury Duplex</h4>
              <h5 className="text-xs">NGN104,700</h5>
            </div>

            <div className="p-4 flex flex-row justify-between items-center mb-3">
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
          <CnotinueModalButton>
            <PrimaryButton title="Pay Now" width="100%" onClick={payNow} />
          </CnotinueModalButton>
        </ModalWrapper>
      </Dialog>

      <Dialog open={openModal} fullWidth maxWidth="sm">
        <ModalWrapper>
          <Top>
            <CloseWrapper onClick={() => setOpenModal(false)}>
              <CloseIcon />
            </CloseWrapper>
          </Top>
          <img src={availableImage} alt="available" />
          <Question>
            Luxury terrance is available. Proceed to add to cart{" "}
          </Question>
          <ModalButton>
            <PrimaryButton
              title="Make Payment"
              width="100%"
              onClick={makePayment}
            />
          </ModalButton>
        </ModalWrapper>
      </Dialog>
    </div>
  );
};

export default BillingDetails;
