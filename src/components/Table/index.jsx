import React, { useEffect, useState } from "react";
import {
  CountWrapper,
  CountText,
  LeftIconContainer,
  SeeAll,
  SelectWrapper,
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
  TablePaginatorWrapper,
  TableWrapper,
} from "./style";

import { BiSortAlt2 } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Paginator from "../Paginator";
const sortIcon = (
  <LeftIconContainer>
    <BiSortAlt2 color="#f3f6e7" />
  </LeftIconContainer>
);

const StaffTable = ({ header, body, arrOfObject, staffHome }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [count, setCount] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = count;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(body?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(body?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, body]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % body?.length;
    setItemOffset(newOffset);
  };

  const options = [
    {
      value: 10,
      name: 10,
    },
    {
      value: 15,
      name: 15,
    },
    {
      value: 20,
      name: 20,
    },
    {
      value: 50,
      name: 50,
    },
    {
      value: 100,
      name: 100,
    },
  ];

  const handleSelectValue = (e) => {
    let value = e.target.value;
    setCount(value);
  };
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
            {currentItems?.map((text, index) => (
              <TableBodyRow key={index}>
                {Object.values(text).map((value, index) => (
                  <TableBodyData key={index}>{value}</TableBodyData>
                ))}
              </TableBodyRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            {currentItems?.map((data, index) => (
              <TableBodyRow key={index}>
                {data?.map((text, index) => (
                  <TableBodyData key={index}>{text}</TableBodyData>
                ))}
              </TableBodyRow>
            ))}
          </TableBody>
        )}
      </TableWrapper>

      {body.length > 10 && (
        <TablePaginatorWrapper>
          <CountWrapper>
            <CountText>Rows per page:</CountText>
            <SelectWrapper onChange={handleSelectValue}>
              {options.map((option, index) => (
                <option value={option.value} key={index}>
                  {option.name}
                </option>
              ))}
            </SelectWrapper>
          </CountWrapper>
          <Paginator handlePageClick={handlePageClick} pageCount={pageCount} />
        </TablePaginatorWrapper>
      )}
    </TableContainer>
  );
};

export default StaffTable;
