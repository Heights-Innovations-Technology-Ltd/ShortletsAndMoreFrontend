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
  TableContainer,
  Top,
} from "./style";

import { useState } from "react";
import { FaPen, FaPlus } from "react-icons/fa";
import PrimaryButton from "../../../components/PrimaryButton";
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
  const header = ["Name", "Apartment", "Room Type", "Date", "Time", "Action"];

  const handleCheckoutModal = (referenceNumber) => {
    setOpenModal(true);
    setReference(referenceNumber);
  };

  const handleCheckout = async () => {
    const response = await checkOut(reference);
    console.log(response);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };
  const dataBody = tableDatas.map((data) => [
    data.name,
    data.apartment,
    data.roomType,
    data.date,
    data.time,
    <PrimaryButton
      title="Check-Out"
      onClick={() => handleCheckoutModal(data.referenceNumber)}
    />,
  ]);

  return (
    <div>
      <StaffHeader title="Check - Ins" />
      <TableContainer>
        <StaffTable header={header} body={dataBody} />
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
            />
          </ModalButton>
        </ModalWrapper>
      </Dialog>
    </div>
  );
};

export default StaffCheckIn;
