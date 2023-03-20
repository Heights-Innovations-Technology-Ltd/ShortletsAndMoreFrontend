import React from "react";
import StaffHeader from "../../../components/StaffHeader";

import { ReactComponent as CloseIcon } from "../../../assets/svg/close.svg";
import { ReactComponent as BriefIcon } from "../../../assets/svg/briefcase.svg";

import {
  CloseWrapper,
  LeftIconContainer,
  ModalButton,
  ModalWrapper,
  Question,
  Status,
  TableContainer,
  Top,
} from "./style";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaPen, FaPlus } from "react-icons/fa";
import PrimaryButton from "../../../components/PrimaryButton";
import PuffLoader from "../../../components/Loader";
import {
  useCheckOutMutation,
  useGetAllCheckInsQuery,
} from "../../../store/Services/staffService";
import { tableDatas } from "../../../utils/config";
import { Dialog } from "@mui/material";
import StaffTable from "../../../components/Table";

const StaffCheckIn = () => {
  const getAllCheckIns = useGetAllCheckInsQuery();
  const [checkOut, checkOutState] = useCheckOutMutation();
  const [reference, setReference] = useState();
  const [openModal, setOpenModal] = useState(false);
  const header = [
    // "ID",
    "Reference Number",
    "Room Type",
    "Chcek In",
    "Check Out",
    "Status",
    "Action",
  ];

  const handleCheckoutModal = async (referenceNumber) => {
    setOpenModal(true);
    setReference(referenceNumber);
  };

  const handleCheckout = async () => {
    const response = await checkOut(reference);

    const error = response?.error;
    const responseData = response?.data;
    if (responseData) {
      toast.success(responseData?.message);
      getAllCheckIns.refetch();
      setOpenModal(false);
    }
    if (error) {
      toast.error(error?.data?.Message);
    }
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };
  const dataBody = getAllCheckIns?.data?.data[0]?.map((data) => [
    // data.reservationId,
    data.reservationReference,
    data.roomType,
    data.checkinDate.slice(0, 10),
    data.checkoutDate.slice(0, 10),
    <Status
      color={
        data.status === "checked-in"
          ? "#2F8511"
          : data.status === "Pending"
          ? "#FFCA2A"
          : "#C43C20"
      }
      background={
        data.status === "checked-in"
          ? "rgba(47, 133, 17, 0.1)"
          : data.status === "Pending"
          ? "rgba(255, 233, 168, 0.5)"
          : "rgba(231, 175, 164, 0.3)"
      }
    >
      {data.status}
    </Status>,

    <PrimaryButton
      title="Check-Out"
      onClick={() => handleCheckoutModal(data.reservationReference)}
    />,
  ]);

  return (
    <div>
      <StaffHeader title="Check - Ins" />
      <TableContainer>
        {getAllCheckIns?.isLoading ? (
          <PuffLoader />
        ) : (
          <StaffTable header={header} body={dataBody} arrOfObject />
        )}
      </TableContainer>

      <Dialog open={openModal} fullWidth maxWidth="sm">
        <ModalWrapper>
          <Top>
            <CloseWrapper onClick={handleModalClose}>
              <CloseIcon />
            </CloseWrapper>
          </Top>
          <BriefIcon />
          <Question>Are you sure you want to check-out ?</Question>
          <ModalButton>
            <PrimaryButton
              title="Yes, Checkout"
              width="100%"
              onClick={handleCheckout}
              loading={checkOutState.isLoading}
            />
          </ModalButton>
        </ModalWrapper>
      </Dialog>
    </div>
  );
};

export default StaffCheckIn;
