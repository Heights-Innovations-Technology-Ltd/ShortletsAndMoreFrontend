import React, { useState } from "react";
import StaffHeader from "../../../components/StaffHeader";

import {
  ButtonWrapper,
  ModalWrapper,
  Status,
  TableContainer,
  CloseWrapper,
  FormContainer,
  ModalButton,
  TextContainer,
  Top,
} from "./style";
import { Dialog } from "@mui/material";
import { ReactComponent as CloseIcon } from "../../../assets/svg/close.svg";
import { FaPen, FaPlus } from "react-icons/fa";
import PrimaryButton from "../../../components/PrimaryButton";

import PuffLoader from "../../../components/Loader";
import StaffTable from "../../../components/Table";
import {
  useCheckInMutation,
  useGetAllReservationsQuery,
  useGetRoomQuery,
} from "../../../store/Services/staffService";
import TestingMultiple from "../../../components/Input/testingMultiple";
import toast from "react-hot-toast";

const addIcon = <FaPlus color="white" />;

const StaffBookings = () => {
  const getAllReservations = useGetAllReservationsQuery();
  const getRoom = useGetRoomQuery();
  const [checkIn, chehckInState] = useCheckInMutation();

  const [reference, setReference] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [roomList, setRoomList] = useState([]);
  const [lists, setList] = useState([]);

  const handleCheckIn = (roomType, referenceNumber) => {
    setReference(referenceNumber);
    setOpenModal(true);
    const check = getRoom?.data?.data?.filter(
      (reserve) => reserve.roomTypeId === roomType
    );
    let roomList = check?.map((room) => ({
      value: room.id,
      label: room.name,
    }));
    setRoomList(roomList);
  };

  const header = [
    "Name",
    "Reference Number",
    "Number of Rooms",
    "Start Date",
    "End Date",
    "Status",
    "Action",
  ];
  const dataBody = getAllReservations?.data?.data?.map((data) => [
    data.guest,
    data.referenceNumber,
    data.numberOfRooms,
    data.startDate.slice(0, 10),
    data.endDate.slice(0, 10),
    <Status
      color={
        data.status === "Checked In"
          ? "#2F8511"
          : data.status === "Pending"
          ? "#FFCA2A"
          : "#C43C20"
      }
      background={
        data.status === "Checked In"
          ? "rgba(47, 133, 17, 0.1)"
          : data.status === "Pending"
          ? "rgba(255, 233, 168, 0.5)"
          : "rgba(231, 175, 164, 0.3)"
      }
    >
      {data.status}
    </Status>,
    <PrimaryButton
      title="Check In"
      onClick={() => handleCheckIn(data.roomType, data.referenceNumber)}
    />,
  ]);

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleSubmitCheckIn = async (e) => {
    e.preventDefault();
    const requiredData = {
      roomIds: lists,
      reservationId: reference,
    };
    const response = await checkIn(requiredData);

    const error = response?.error;
    const responseData = response?.data;
    if (responseData) {
      toast.success(responseData?.message);
      setOpenModal(false);
    }
    if (error) {
      toast.error(error?.data?.Message);
    }
  };

  const handleClick = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      roomList.forEach((list) => {
        if (value === list.label) {
          setList((prev) => [...prev, list.value]);
        }
      });
    } else {
      roomList?.forEach((list) => {
        if (value === list.label) {
          setList((prev) => {
            return [...prev.filter((item) => item !== list.value)];
          });
        }
      });
    }
  };
  return (
    <div>
      <StaffHeader title="Bookings" />
      <ButtonWrapper>
        <PrimaryButton title="Third Part Booking" leftIcon iconName={addIcon} />
      </ButtonWrapper>
      <TableContainer>
        {getAllReservations?.isLoading ? (
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
          <TextContainer>
            <h1 className="ml-4 mb-4 font-semibold text-xl text-left">
              Check In
            </h1>
          </TextContainer>

          <FormContainer onSubmit={handleSubmitCheckIn}>
            <TestingMultiple
              options={roomList}
              list={lists}
              handleClick={handleClick}
            />
            <ModalButton>
              <PrimaryButton
                title={"Check In"}
                width="100%"
                type="submit"
                loading={chehckInState.isLoading}
              />
            </ModalButton>
          </FormContainer>
        </ModalWrapper>
      </Dialog>
    </div>
  );
};

export default StaffBookings;
