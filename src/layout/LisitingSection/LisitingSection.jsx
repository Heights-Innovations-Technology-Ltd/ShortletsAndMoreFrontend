import React, { useEffect, useState } from "react";
import ListingSidebar from "../ListingSidebar/ListingSidebar";
import AddToCartCard from "../../components/Cards/AddToCartCard";
import Paginator from "../../components/Paginator";
import { useDispatch } from "react-redux";
import { getRoomType } from "../../store/Action/actions";
import imageFive from "../../assets/recent_listing.png";
import { useNavigate } from "react-router-dom";
import { useGetAllRoomTypeQuery } from "../../store/Services/apartmentService";
import PuffLoader from "../../components/Loader";
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

const LisitingSection = () => {
  const features = [
    { id: 1, result: true, category: "All" },
    { id: 2, result: true, category: "Television" },
    { id: 3, result: true, category: "Microwave" },
    { id: 4, result: true, category: "Heater" },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [apartmentData, setApartmentData] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  let localApartmentID = localStorage.getItem("apartmentID");
  let ApartmentId = JSON.parse(localApartmentID);
  console.log("ApartmentId: ", ApartmentId);

  const { data, isLoading, isSuccess, isError } =
    useGetAllRoomTypeQuery(ApartmentId);

  const [currentItems, setCurrentItems] = useState([]);
  // const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const itemsPerPage = 2;

  const handleClick = (e) => {
    const add = e.target;
    console.log(add);
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

  console.log("adora", checkedItems);
  useEffect(() => {
    setFilteredData(data);
    checkedItems.forEach((checked) => {
      if (checked.category === "Television") {
        let filtered = data?.filter(
          (item) => JSON.parse(item?.features)?.Television === checked.result
        );
        setFilteredData(filtered);
      }
      //   else if (checked.category === "Microwave") {
      //     let filtered = data?.filter(
      //       (item) =>
      //         JSON.parse(item?.features)?.Microwave === checked.result
      //     );
      //     setFilteredData(filtered);
      //   }
      else if (checked.category === "Heater") {
        let filtered = data?.filter(
          (item) => JSON.parse(item?.features)?.Heater === checked.result
        );
        setFilteredData(filtered);
      } else {
        setFilteredData(data);
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
    const newOffset = (e.selected * itemsPerPage) % data?.length;
    setItemOffset(newOffset);
  };

  const handleNavigateToDetails = (roomID) => {
    console.log("id", roomID);
    navigate(`/property/rooms/${roomID}`);
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
                {currentItems?.map((apartment) => (
                  <>
                    <AddToCartCard
                      apartmentImage={imageFive}
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
