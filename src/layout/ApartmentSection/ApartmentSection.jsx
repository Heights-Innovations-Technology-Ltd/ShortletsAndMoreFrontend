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
  Result,
  TopContent,
} from "./style";
import { Puff } from "react-loading-icons";
import { useNavigate } from "react-router-dom";
import image from "../../assets/listing_img_four.png";
import ApartmentCard from "../../components/Cards/ApartmentCard";
import PuffLoader from "../../components/Loader";
import Paginator from "../../components/Paginator";
import { getApartment } from "../../store/Action/actions";
import {
  useGetAllApartmentQuery,
  useGetAllStatesQuery,
} from "../../store/Services/apartmentService";
import ListingSidebar from "../ListingSidebar/ListingSidebar";
import "./style.css";
// let pageSize = 1;

const ApartmentSection = () => {
  const facilities = [
    { id: 2, result: true, category: "security" },
    { id: 3, result: true, category: "swimming_pool" },
    { id: 4, result: true, category: "parking" },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const states = useGetAllStatesQuery();
  const [stateData, setStateData] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  const { data, isLoading, isSuccess, isError } = useGetAllApartmentQuery();

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const itemsPerPage = 8;

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
      } else if (checked.category === "All") {
        setFilteredData(data?.data);
      } else {
        setFilteredData(data?.data);
      }
    });

    // setFilteredData(data);
  }, [checkedItems, data, selectedState]);

  const handleStateClick = (e) => {
    let selectedValue = e.target.value;
    setSelectedState(selectedValue);
  };
  const handleInputChange = (e) => {
    let selectedValue = e.target.value;
    setSelectedState(selectedValue);
  };

  useEffect(() => {
    let dataSet = [];
    data?.data?.forEach((data) => {
      if (selectedState.toLowerCase() === data.city.name.toLowerCase()) {
        dataSet.push(data);
        setFilteredData(dataSet);
      } else {
      }
    });
  }, [selectedState, data]);

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

  let allStates = states?.data?.data[0]?.states || [];
  let newStatesList = allStates?.map((state) => ({
    value: state,
    label: state,
  }));

  return (
    <>
      <TopContent>
        <h3>
          Avalaible Apartments
          <Result>Showing {filteredData?.length} Results</Result>
        </h3>
        <select
          name="time"
          onChange={handleStateClick}
          // onChange={(event) => setFilter(event.target.value)}
          // value={filterBy}
        >
          {newStatesList.map((option, index) => (
            <option value={option.value} key={index}>
              {option.label}
            </option>
          ))}
        </select>
      </TopContent>

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
                  className="w-full bg-white placeholder:font-italitc border-0 py-1 text-sm pl-3 pr-10 outline-none border-transparent focus:border-transparent focus:ring-0"
                  placeholder="Enter State"
                  type="text"
                  onChange={handleInputChange}
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
                      property
                      apartmentImage={
                        apartment.coverImage &&
                        apartment.coverImage !== "string"
                          ? apartment.coverImage
                          : image
                      }
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
