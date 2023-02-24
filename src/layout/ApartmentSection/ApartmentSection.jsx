import React, { useEffect, useState } from "react";
// import { PaginationNav1Presentation } from "../../components/Pagination/Pagination";
import { useDispatch } from "react-redux";
import {
  Body,
  BodyLeft,
  BodyRight,
  CheckInput,
  Container,
  Footer,
  Loading,
} from "./style";
import { Puff } from "react-loading-icons";
import { useNavigate } from "react-router-dom";
import image from "../../assets/listing_img_four.png";
import ApartmentCard from "../../components/Cards/ApartmentCard";
import PuffLoader from "../../components/Loader";
import Paginator from "../../components/Paginator";
import { getApartment } from "../../store/Action/actions";
import { useGetAllApartmentQuery } from "../../store/Services/apartmentService";
import ListingSidebar from "../ListingSidebar/ListingSidebar";
import "./style.css";
// let pageSize = 1;

const ApartmentSection = () => {
  const facilities = [
    { id: 1, result: true, category: "All" },
    { id: 2, result: true, category: "security" },
    { id: 3, result: true, category: "swimming_pool" },
    { id: 4, result: true, category: "parking" },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [apartmentData, setApartmentData] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const { data, isLoading, isSuccess, isError } = useGetAllApartmentQuery();

  const [currentItems, setCurrentItems] = useState([]);
  // const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const itemsPerPage = 4;

  const handleClick = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      facilities.forEach((item) => {
        if (value === item.category) {
          setCheckedItems((prev) => [...prev, item]);
        }
      });
    } else {
      facilities.forEach((fac) => {
        if (value === fac.category) {
          setCheckedItems((prev) => {
            return [...prev.filter((item) => item.category !== fac.category)];
          });
        }
      });
    }
  };

  useEffect(() => {
    setFilteredData(data?.data);
    checkedItems.forEach((checked) => {
      if (checked.category === "security") {
        let filtered = data?.data.filter(
          (item) => JSON.parse(item?.facilities)?.security === checked.result
        );
        setFilteredData(filtered);
      } else if (checked.category === "swimming_pool") {
        let filtered = data?.data.filter(
          (item) =>
            JSON.parse(item?.facilities)?.swimming_pool === checked.result
        );
        setFilteredData(filtered);
      } else if (checked.category === "parking") {
        let filtered = data?.data.filter(
          (item) => JSON.parse(item?.facilities)?.parking === checked.result
        );
        setFilteredData(filtered);
      } else {
        setFilteredData(data?.data);
      }
    });

    // setFilteredData(data);
  }, [checkedItems, data]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredData?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredData?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredData]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % filteredData?.length;
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

      <Container>
        <Body>
          {isLoading ? (
            <Loading height="300px">
              <Puff stroke="#acc130" fill="white" width={60} />
            </Loading>
          ) : (
            <>
              <BodyLeft>
                <input
                  className="w-full bg-white placeholder:font-italitc border-0 py-1 pl-3 pr-10 outline-none border-transparent focus:border-transparent focus:ring-0"
                  placeholder=""
                  type="text"
                />
                <h3>Main Facilities</h3>
                <ul>
                  {facilities?.map((fac, index) => (
                    <li key={index}>
                      <CheckInput
                        type="checkbox"
                        value={fac.category}
                        onClick={handleClick}
                      />
                      {fac.category}
                    </li>
                  ))}
                </ul>
              </BodyLeft>
              <BodyRight>
                {currentItems?.map((apartment, index) => (
                  <div key={apartment.id}>
                    <ApartmentCard
                      key={index}
                      apartmentImage={image}
                      apartmentName={apartment.name}
                      apartmentLocation="234 Ring road, Lekki Phase 1, Lekki, Lagos"
                      apartmentDetails={apartment.description}
                      onApartmentClick={() =>
                        handleApartmentClick(apartment.id)
                      }
                    />
                  </div>
                ))}
              </BodyRight>
            </>
          )}
        </Body>
        <Paginator handlePageClick={handlePageClick} pageCount={pageCount} />
      </Container>
    </>
  );
};

export default ApartmentSection;
