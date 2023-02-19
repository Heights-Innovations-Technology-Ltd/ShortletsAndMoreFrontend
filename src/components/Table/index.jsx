import React from "react";
import PrimaryButton from "../PrimaryButton";
import {
  LeftIconContainer,
  SeeAll,
  SortContainer,
  TableBody,
  TableBodyData,
  TableBodyRow,
  TableButton,
  TableCardTitle,
  TableCardTop,
  TableContainer,
  TableHeader,
  TableHeaderRow,
  TableHeaderTitle,
  TableWrapper,
} from "./style";

import { BiSortAlt2 } from "react-icons/bi";
import { NavLink } from "react-router-dom";
const sortIcon = (
  <LeftIconContainer>
    <BiSortAlt2 color="#f3f6e7" />
  </LeftIconContainer>
);

const StaffTable = ({ header, body, arrOfObject, staffHome }) => {
  return (
    <TableContainer>
      {staffHome ? (
        <TableCardTop>
          <TableCardTitle>Recent Check - Ins </TableCardTitle>
          <NavLink to="/staff/check-in">
            <SeeAll>See all</SeeAll>
          </NavLink>
        </TableCardTop>
      ) : (
        <SortContainer>
          <TableButton>{sortIcon} Sort</TableButton>
        </SortContainer>
      )}

      <TableWrapper>
        <TableHeader>
          <TableHeaderRow>
            {header?.map((title, index) => (
              <TableHeaderTitle key={index}>{title}</TableHeaderTitle>
            ))}
          </TableHeaderRow>
        </TableHeader>

        {arrOfObject ? (
          <TableBody>
            {body?.map((text, index) => (
              <TableBodyRow key={index}>
                {Object.values(text).map((value, index) => (
                  <TableBodyData key={index}>{value}</TableBodyData>
                ))}
              </TableBodyRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            {body?.map((data, index) => (
              <TableBodyRow key={index}>
                {data?.map((text, index) => (
                  <TableBodyData key={index}>{text}</TableBodyData>
                ))}
              </TableBodyRow>
            ))}
          </TableBody>
        )}
      </TableWrapper>
    </TableContainer>
  );
};

export default StaffTable;
