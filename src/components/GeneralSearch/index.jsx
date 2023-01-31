import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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
  const { data, isLoading, isError } = useSortPropertyQuery();

  const apartmentData = useGetAllApartmentQuery();
  const [sortApartment, setSortApartment] = useState([]);
  const [sortApartmentList, setSortApartmentList] = useState([]);

  console.log(apartmentData);
  useEffect(() => {
    setSortApartment(data?.facilities?.apartment);
  }, [data, setSortApartment]);

  useEffect(() => {
    setSortApartmentList(apartmentData?.data);
  }, [apartmentData, setSortApartmentList]);

  console.log(data);
  return (
    <SearchContainer>
      <ContentContainer>
        <InputContainer>
          <InputWhite>
            <Input>
              {sortApartment?.map((property) => (
                <option value={property}>{property}</option>
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
          <PrimaryButton height="55px" title="SEARCH" type="submit" />
        </ButtonContainer>
      </ContentContainer>
    </SearchContainer>
  );
};

export default GeneralSearch;
