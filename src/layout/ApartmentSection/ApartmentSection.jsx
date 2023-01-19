import React, { useEffect, useState } from "react";
// import { PaginationNav1Presentation } from "../../components/Pagination/Pagination";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import image from "../../assets/listing_img_four.png";
import ApartmentCard from "../../components/Cards/ApartmentCard";
import Paginator from "../../components/Paginator";
import { getApartment } from "../../store/Action/actions";
import ListingSidebar from "../ListingSidebar/ListingSidebar";
import "./style.css";
// let pageSize = 1;

const ApartmentSection = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [apartmentData, setApartmentData] = useState([]);

  // const currentViewData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * pageSize;
  //   const lastPageIndex = currentPage + pageSize;
  //   return testingD.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  useEffect(() => {
    const getApart = async () => {
      const res = await dispatch(getApartment());
      setApartmentData(res?.payload?.data);
      console.log(res?.payload?.data);
    };

    getApart();
  }, [dispatch]);

  const [currentItems, setCurrentItems] = useState([]);
  // const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 1;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(apartmentData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(apartmentData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, apartmentData]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % apartmentData.length;
    setItemOffset(newOffset);
  };

  const handleApartmentClick = (apartmentId) => {
    navigate("/property/rooms");
    localStorage.setItem("apartmentID", JSON.stringify(apartmentId));
  };
  return (
    <>
      <div
        className="flex justify-between items-center flex-wrap mt-20 mb-4 md:mb-0"
        style={{ width: "93.333333%" }}
      >
        <div>
          <p className="md:ml-96 ml-10" style={{ fontSize: "0.5rem" }}>
            200 results
          </p>
        </div>

        <div className="flex items-center">
          <select
            id="underline_select"
            className="block p-2 px- w-full text-sm text-gray-700  border-0 border-b-2 border-gray-100  dark:text-gray-700 dark:border-gray-100 focus:outline-none focus:ring-0 focus:border-gray-200"
            style={{ fontSize: "0.5rem" }}
          >
            <option selected disabled>
              {/* <span>Sort by:</span> Newest Listings */}
            </option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>

      <div className="flex md:ml-20 flex-wrap md:flex-nowrap justify-center">
        <div>
          <ListingSidebar />
        </div>

        <div className="flex flex-wrap w-4/5 border">
          {currentItems.map((apartment) => (
            <div key={apartment.id}>
              <ApartmentCard
                apartmentImage={image}
                apartmentName={apartment.name}
                apartmentLocation="234 Ring road, Lekki Phase 1, Lekki, Lagos"
                apartmentDetails={apartment.description}
                onApartmentClick={() => handleApartmentClick(apartment.id)}
              />
            </div>
          ))}

          {/* <PaginationNav1Presentation /> */}
        </div>
      </div>

      <Paginator handlePageClick={handlePageClick} pageCount={pageCount} />
    </>
  );
};

export default ApartmentSection;
