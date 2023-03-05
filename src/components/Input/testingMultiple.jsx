import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import {
  CheckInputBox,
  DropDown,
  DropDownWrapper,
  ListItem,
  ListItems,
  ShowList,
  ShowListIcon,
  options,
  Item,
} from "./style";
import "./style.css";

const MultipleDropDown = ({ options, list, handleClick }) => {
  const [open, setOpen] = useState(false);

  const handleOpenDropdown = () => {
    setOpen(!open);
  };

  return (
    <DropDownWrapper>
      <div
        style={{
          width: "100%",
          display: "flex",
          height: "45px",
        }}
      >
        <ShowList>
          {list?.map((item, index) => (
            <>
              <Item key={index}>{item}</Item>
            </>
          ))}
        </ShowList>
        <ShowListIcon onClick={handleOpenDropdown}>
          {" "}
          {open ? <HiChevronUp size={24} /> : <HiChevronDown size={24} />}
        </ShowListIcon>
      </div>
      {open && (
        <DropDown>
          <ListItems>
            {options.map((option, index) => (
              <ListItem key={index}>
                <>
                  <CheckInputBox
                    type="checkbox"
                    value={option.label}
                    onClick={handleClick}
                  />
                  {option.label}
                </>
              </ListItem>
            ))}
          </ListItems>
        </DropDown>
      )}
    </DropDownWrapper>
  );
};

export default MultipleDropDown;
