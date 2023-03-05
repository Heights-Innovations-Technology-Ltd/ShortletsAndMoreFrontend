import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetAllApartmentQuery,
  useSortPropertyQuery,
} from "../../store/Services/apartmentService";
import PrimaryButton from "../PrimaryButton";
import {
  SearchContainer,
  InputContainer,
  ButtonContainer,
  ContentContainer,
  InputWhite,
  Input,
} from "./styles";

const GeneralSearch = () => {
  const facilities = [
    { id: 1, result: true, category: "All" },
    { id: 2, result: true, category: "Security" },
    { id: 3, result: true, category: "Swimming Pool" },
    { id: 4, result: true, category: "Parking" },
  ];

  const navigate = useNavigate();

  // const { data, isLoading, isError } = useSortPropertyQuery();

  // const apartmentData = useGetAllApartmentQuery();
  // const [sortApartment, setSortApartment] = useState([]);
  // const [sortApartmentList, setSortApartmentList] = useState([]);

  // console.log(apartmentData);
  // useEffect(() => {
  //   setSortApartment(data?.facilities?.apartment);
  // }, [data, setSortApartment]);

  // useEffect(() => {
  //   setSortApartmentList(apartmentData?.data);
  // }, [apartmentData, setSortApartmentList]);

  // console.log(data);

  const handleSearch = () => {
    navigate("/property");
  };
  return (
    <SearchContainer>
      <ContentContainer>
        <InputContainer>
          <InputWhite>
            <Input>
              {facilities.map((property) => (
                <option value={property.category}>{property.category}</option>
              ))}
            </Input>
          </InputWhite>
          <InputWhite>
            <Input>
              <option value="Property Type">Max-Price</option>
              <option value="Property Type">Property Type</option>
            </Input>
          </InputWhite>
        </InputContainer>
        <ButtonContainer>
          <PrimaryButton
            height="55px"
            title="SEARCH"
            type="submit"
            onClick={handleSearch}
          />
        </ButtonContainer>
      </ContentContainer>
    </SearchContainer>
  );
};

export default GeneralSearch;
