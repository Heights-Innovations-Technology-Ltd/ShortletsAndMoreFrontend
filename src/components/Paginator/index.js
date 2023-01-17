import React from "react";
import ReactPaginate from "react-paginate";
import "./style.css";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

const left = <HiArrowSmLeft size={20} color="#0D263B" />;
const right = <HiArrowSmRight size={20} color="#0D263B" />;
const Paginator = ({ handlePageClick, pageCount }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center my-10 ml-0 md:ml-80">
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
    </div>
  );
};

export default Paginator;
