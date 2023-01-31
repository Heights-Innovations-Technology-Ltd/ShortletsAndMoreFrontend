import React from "react";
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
import { useGetAllApartmentQuery } from "../../store/Services/apartmentService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import ApartmentCard from "../../components/Cards/ApartmentCard";
import image from "../../assets/listing_img_four.png";
import Paginator from "../../components/Paginator";
import { testingData } from "../../utils/config";

const ItemsLayout = () => {
  const facilities = [
    { id: 1, result: true, category: "All" },
    { id: 2, result: true, category: "Security" },
    { id: 3, result: true, category: "Swimming Pool" },
    { id: 4, result: true, category: "Parking" },
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
  const itemsPerPage = 2;

  const handleClick = (e) => {
    const add = e.target;
    console.log(add);
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

  console.log("adora", checkedItems);
  useEffect(() => {
    setFilteredData(data);
    checkedItems.forEach((checked) => {
      if (checked.category === "Security") {
        let filtered = data?.filter(
          (item) => JSON.parse(item?.facilities)?.Security === checked.result
        );
        setFilteredData(filtered);
      }
      //   else if (checked.category === "Swimming Pool") {
      //     let filtered = data?.filter(
      //       (item) =>
      //         JSON.parse(item?.facilities)?.Swimming Pool === checked.result
      //     );
      //     setFilteredData(filtered);
      //   }
      else if (checked.category === "Parking") {
        let filtered = data?.filter(
          (item) => JSON.parse(item?.facilities)?.Parking === checked.result
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

  const handleApartmentClick = (apartmentId) => {
    navigate("/property/rooms");
    localStorage.setItem("apartmentID", JSON.stringify(apartmentId));
  };

  return (
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
              <h3>Main Facilities</h3>
              <ul>
                {facilities?.map((fac, index) => (
                  <li
                    key={index}
                    //   style={{
                    //     color: fac === category.get("category") ? "#00A2D4" : "",
                    //   }}
                  >
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
              {currentItems?.map((apartment) => (
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
            </BodyRight>
          </>
        )}
      </Body>
      <Paginator handlePageClick={handlePageClick} pageCount={pageCount} />
    </Container>
  );
};

export default ItemsLayout;
