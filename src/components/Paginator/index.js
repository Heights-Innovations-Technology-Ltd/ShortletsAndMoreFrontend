import React from "react";
import ReactPaginate from "react-paginate";
import "./style.css";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import styled from "styled-components";

const left = <HiArrowSmLeft size={20} color="#0D263B" />;
const right = <HiArrowSmRight size={20} color="#0D263B" />;
const Paginator = ({ handlePageClick, pageCount }) => {
  return (
    <PaginatorWrapper>
      <ReactPaginate
        breakLabel="..."
        nextLabel={right}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={left}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </PaginatorWrapper>
  );
};

export default Paginator;
export const PaginatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
