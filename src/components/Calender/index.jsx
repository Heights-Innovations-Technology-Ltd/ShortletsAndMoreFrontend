import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "./calender.css";
import {
  CalenderCardTop,
  CalenderContainer,
  CalenderParagraph,
  CalenderTitle,
} from "./style";

const CalenderCard = () => {
  const [value, onChange] = useState(new Date());
  return (
    <CalenderContainer
      key="calender"
      // initial={{ y: 10, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // exit={{ y: 10, opacity: 0 }}
      transition={{ duration: 0.8 }}
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
    >
      <CalenderCardTop>
        <CalenderTitle>Calender</CalenderTitle>
        <CalenderParagraph>Check Availablity of Rooms</CalenderParagraph>
      </CalenderCardTop>
      <Calendar onChange={onChange} value={value} />
    </CalenderContainer>
  );
};

export default CalenderCard;
