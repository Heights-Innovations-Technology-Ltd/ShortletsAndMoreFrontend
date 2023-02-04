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
  Container,
  LeftContainer,
  RightContainer,
  RightCardWrapper,
} from "./style";
import PrimaryInput from "../Input";
import { CnotinueModalButton } from "../../layout/RoomDetailsSection/style";
import TextArea from "../TextArea";
import { useReserveNowMutation } from "../../store/Services/apartmentService";
import { calculateTotalPrice } from "../../utils/helper";

const BillingDetails = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(userBillingSchema),
  });

  const [reserveNow] = useReserveNowMutation();
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [openContinueModal, setOpenContinueModal] = useState(false);
  const [roomContainer, setRoomContainer] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getList = () => {
    const localData = localStorage.getItem("cartItemId");
    let newItemContainer = JSON.parse(localData);
    setRoomContainer(newItemContainer);
  };
  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    const totalPrice = calculateTotalPrice(roomContainer);
    setTotalPrice(totalPrice);
  }, [roomContainer]);

  let vat = 2500;
  let paymentPrice = totalPrice + vat;

  useEffect(() => {
    const handleCheck = () => {
      const localProfile = localStorage.getItem("userProfile");
      const parseData = JSON.parse(localProfile);

      if (!localProfile) {
        toast.error("Kindly Sign In");
      }
      if (localProfile) {
        setValue("firstName", parseData?.firstName, {
          shouldValidate: true,
        });

        setValue("lastName", parseData?.lastName, {
          shouldValidate: true,
        });
        setValue("email", parseData?.email, {
          shouldValidate: true,
        });
        setValue("address", parseData?.address, {
          shouldValidate: true,
        });
        setValue("phone", parseData?.phone, {
          shouldValidate: true,
        });
      }
    };
    handleCheck();
  }, [setValue]);

  const onReserve = async (formData) => {
    console.log(formData);

    const localProfile = localStorage.getItem("userProfile");
    const parseData = JSON.parse(localProfile);

    if (!localProfile) {
      toast.error("Kindly Sign In");
    } else {
      console.log(formData);

      let requiredData = {
        guestEmail: formData ? formData.email : parseData.email,
        guestId: 14,
        isReservation: true,
        firstName: formData ? formData.firstName : parseData.firstName,
        lastName: formData ? formData.lastName : parseData.lastName,
        phone: formData ? formData.phone : parseData.phone,
        address: formData ? formData.address : parseData.address,
        reservation: [
          {
            startDate: "2023-01-24",
            endDate: "2023-01-24",
            createdAt: "2023-01-24",
            discountPercent: 0,
            totalPrice: paymentPrice,
            numberOfRooms: roomContainer.length,
            roomTypeId: 4,
          },
        ],
      };
      console.log("reeeee", requiredData);

      const reserveResponse = await reserveNow(JSON.stringify(requiredData));
      console.log("ff", reserveResponse);

      const error = reserveResponse?.error;
      if (error) {
        toast.error(error?.data?.Message);
      } else {
        setOpenModal(true);
        localStorage.removeItem("cartItemId");
      }
    }
  };

  const onPay = async (formData) => {
    console.log(formData);

    const localProfile = localStorage.getItem("userProfile");
    const parseData = JSON.parse(localProfile);

    if (!localProfile) {
      toast.error("Kindly Sign In");
    } else {
      console.log(formData);

      let requiredData = {
        guestEmail: formData ? formData.email : parseData.email,
        guestId: 14,
        isReservation: false,
        firstName: formData ? formData.firstName : parseData.firstName,
        lastName: formData ? formData.lastName : parseData.lastName,
        phone: formData ? formData.phone : parseData.phone,
        address: formData ? formData.address : parseData.address,
        reservation: [
          {
            startDate: "2023-01-24",
            endDate: "2023-01-24",
            createdAt: "2023-01-24",
            discountPercent: 0,
            totalPrice: paymentPrice,
            numberOfRooms: roomContainer.length,
            roomTypeId: 4,
          },
        ],
      };
      console.log("reeeee", requiredData);

      const response = await reserveNow(requiredData);
      console.log("gggg", response);

      const error = response?.error;

      const responseData = response?.data;

      if (error) {
        toast.error(error?.data?.Message);
      } else {
        // toast.error(response?.data.data);
        window.open(`https://${responseData.data}`, "_blank");
        localStorage.removeItem("cartItemId");
      }
    }
  };

  const handleContinue = (e) => {
    e.preventDefault();
    setOpenContinueModal(true);
  };

  const makePayment = () => {};
  const payNow = () => {};
  return (
    <Container>
      <LeftContainer>
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

          {/* <PrimaryInput
            placeholder="Enter Company Name"
            type="text"
            label="Company Name"
            register={register}
            name="companyName"
            // error={errors.password?.message}
          /> */}

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
            name="address"
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

          <TextArea
            placeholder="Other Notes (optional)"
            type="text"
            label="Additional Information"
            register={register}
            name="addtional"
            // error={errors.password?.message}
          />
        </div>
      </LeftContainer>

      <RightContainer>
        <RightCardWrapper>
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
            {}
            {roomContainer?.map((room, index) => (
              <div
                className="p-4 flex flex-row justify-between items-center mt-3"
                key={index}
              >
                <h4 className="text-xs">{room.name}</h4>
                <h5 className="text-xs">NGN{room.price}</h5>
              </div>
            ))}

            <div className="p-4 flex flex-row justify-between items-center">
              <h4 className="text-xs font-semibold">Subtotal</h4>
              <h5 className="text-xs">NGN{totalPrice}</h5>
            </div>

            <hr className="ml-4 mr-4" />

            <div className="p-4 flex flex-row justify-between items-center">
              <h4 className="text-xs">Vat</h4>
              <h5 className="text-xs">NGN{vat}</h5>
            </div>

            <hr className="ml-4 mr-4" />

            <div className="p-4 flex flex-row justify-between items-center">
              <h4 className="text-xs font-semibold">Total</h4>
              <h5 className="text-xs ">NGN{paymentPrice}</h5>
            </div>
          </div>
        </RightCardWrapper>
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
            onClick={handleSubmit(onReserve)}
          />
        </div>
      </RightContainer>

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
            {roomContainer?.map((room, index) => (
              <div
                className="p-4 flex flex-row justify-between items-center mt-3"
                key={index}
              >
                <h4 className="text-xs">{room.name}</h4>
                <h5 className="text-xs">NGN{room.price}</h5>
              </div>
            ))}

            <div className="p-4 flex flex-row justify-between items-center">
              <h4 className="text-xs font-semibold">Subtotal</h4>
              <h5 className="text-xs">NGN{totalPrice}</h5>
            </div>

            <hr className="ml-4 mr-4" />

            <div className="p-4 flex flex-row justify-between items-center">
              <h4 className="text-xs">Vat</h4>
              <h5 className="text-xs">NGN{vat}</h5>
            </div>

            <hr className="ml-4 mr-4" />

            <div className="p-4 flex flex-row justify-between items-center">
              <h4 className="text-xs font-semibold">Total</h4>
              <h5 className="text-xs ">NGN{paymentPrice}</h5>
            </div>
          </div>
          <CnotinueModalButton>
            <PrimaryButton
              title="Pay Now"
              width="100%"
              onClick={handleSubmit(onPay)}
            />
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
            Your rooms has been reserved. Kindly make payment within 48hours of
            this reservation.
          </Question>
          <ModalButton>
            <PrimaryButton
              title="Make Payment"
              width="100%"
              onClick={handleSubmit(onPay)}
            />
          </ModalButton>
        </ModalWrapper>
      </Dialog>
    </Container>
  );
};

export default BillingDetails;
