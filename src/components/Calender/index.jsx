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
  console.log(value);
  return (
    <CalenderContainer>
      <CalenderCardTop>
        <CalenderTitle>Calender</CalenderTitle>
        <CalenderParagraph>Check Availablity of Rooms</CalenderParagraph>
      </CalenderCardTop>
      <Calendar onChange={onChange} value={value} />
    </CalenderContainer>
  );
};

export default CalenderCard;
