import React, { useEffect, useState } from "react";
import ListingSidebar from "../ListingSidebar/ListingSidebar";
import AddToCartCard from "../../components/Cards/AddToCartCard";
import Paginator from "../../components/Paginator";
import { useDispatch } from "react-redux";
import { getRoomType } from "../../store/Action/actions";
import imageFive from "../../assets/recent_listing.png";
import { useNavigate } from "react-router-dom";
import {
  useGetAllRoomTypeQuery,
  useGetAllStatesQuery,
} from "../../store/Services/apartmentService";
import PuffLoader from "../../components/Loader";
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

const LisitingSection = () => {
  const features = [
    { id: 2, result: true, category: "Television" },
    { id: 3, result: true, category: "Microwave" },
    { id: 4, result: true, category: "Heater" },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const states = useGetAllStatesQuery();
  const [apartmentData, setApartmentData] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  let localApartmentID = localStorage.getItem("apartmentID");
  let ApartmentId = JSON.parse(localApartmentID);

  const { data, isLoading, isSuccess, isError } =
    useGetAllRoomTypeQuery(ApartmentId);

  const [currentItems, setCurrentItems] = useState([]);
  // const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const itemsPerPage = 8;

  const handleClick = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      features.forEach((item) => {
        if (value === item.category) {
          setCheckedItems((prev) => [...prev, item]);
        }
      });
    } else {
      features.forEach((fac) => {
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
      if (checked.category === "Television") {
        let filtered = data?.data.filter(
          (item) => JSON.parse(item?.features)?.Television === checked.result
        );
        setFilteredData(filtered);
      } else if (checked.category === "Microwave") {
        let filtered = data?.data.filter(
          (item) => JSON.parse(item?.features)?.Microwave === checked.result
        );
        setFilteredData(filtered);
      } else if (checked.category === "Heater") {
        let filtered = data?.data.filter(
          (item) => JSON.parse(item?.features)?.Heater === checked.result
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

  const handleNavigateToDetails = (roomID) => {
    navigate(`/property/rooms/${roomID}`);
  };

  let allStates = states?.data?.data[0]?.states || [];
  let newStatesList = allStates?.map((state, index) => ({
    value: index,
    label: state,
  }));

  return (
    <>
      <TopContent>
        <h3>
          Avalaible Rooms
          <Result>Showing {filteredData?.length} Results</Result>
        </h3>
        <select
          name="time"
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
              <Puff stroke="#00A2D4" fill="white" width={60} />
            </Loading>
          ) : (
            <>
              <BodyLeft>
                <input
                  className="w-full bg-white placeholder:font-italitc border-0 py-1 pl-3 pr-10 outline-none border-transparent focus:border-transparent focus:ring-0"
                  placeholder=""
                  type="text"
                />
                <h3>Main Features</h3>
                <ul>
                  {features?.map((feature, index) => (
                    <li key={index}>
                      <CheckInput
                        type="checkbox"
                        value={feature.category}
                        onClick={handleClick}
                      />
                      {feature.category}
                    </li>
                  ))}
                </ul>
              </BodyLeft>
              <BodyRight>
                {currentItems?.map((apartment, index) => (
                  <>
                    <AddToCartCard
                      key={index}
                      room
                      apartmentImage={
                        apartment.coverImage &&
                        apartment.coverImage !== "string"
                          ? apartment.coverImage
                          : imageFive
                      }
                      apartmentName={apartment.name}
                      apartmentPrice={apartment.price}
                      apartmentDescription={apartment.description}
                      handleNavigateToDetails={() =>
                        handleNavigateToDetails(apartment.id)
                      }
                    />
                  </>
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

export default LisitingSection;
