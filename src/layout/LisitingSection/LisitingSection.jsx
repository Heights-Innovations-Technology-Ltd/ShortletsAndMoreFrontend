import React, { useEffect, useState } from "react";
import ListingSidebar from "../ListingSidebar/ListingSidebar";
import AddToCartCard from "../../components/Cards/AddToCartCard";
import Paginator from "../../components/Paginator";
import { useDispatch } from "react-redux";
import { getRoomType } from "../../store/Action/actions";
import imageFive from "../../assets/recent_listing.png";
import { useNavigate } from "react-router-dom";

const LisitingSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [getRoomTypeContainer, setGetRoomTypeContainer] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 1;
  useEffect(() => {
    let localApartmentID = localStorage.getItem("apartmentID");
    let ApartmentId = JSON.parse(localApartmentID);
    console.log("ApartmentId: ", ApartmentId);

    const getApart = async () => {
      const res = await dispatch(getRoomType(ApartmentId));
      setGetRoomTypeContainer(res?.payload?.data);
      console.log(res?.payload?.data);
    };

    getApart();
  }, [dispatch]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(getRoomTypeContainer.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(getRoomTypeContainer.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, getRoomTypeContainer]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % getRoomTypeContainer.length;
    setItemOffset(newOffset);
  };

  const handleNavigateToDetails = (roomID) => {
    console.log("id", roomID);
    navigate(`/home/property/rooms/${roomID}`);
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
              <span>Sort by:</span> Newest Listings
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
        <div className="flex flex-wrap w-4/5">
          {currentItems.map((apartment) => (
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

          {/* <PaginationNav1Presentation /> */}
        </div>
      </div>

      <Paginator handlePageClick={handlePageClick} pageCount={pageCount} />
    </>
  );
};

export default LisitingSection;
