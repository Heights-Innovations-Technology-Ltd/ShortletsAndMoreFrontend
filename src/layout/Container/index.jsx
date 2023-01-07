import React from "react";
import styled from "styled-components";
import AddToCartCard from "../../components/Cards/AddToCartCard";
import { cartData } from "../../utils/config";

const RowContainer = () => {
  return (
    <>
      <ContainerWrapper>
        {cartData.map((apartment) => (
          <>
            <AddToCartCard
              key={apartment.id}
              apartmentImage={apartment.apartmentImage}
              apartmentName={apartment.apartmentName}
              apartmentPrice={apartment.apartmentPrice}
            />
          </>
        ))}
      </ContainerWrapper>
    </>
  );
};

export default RowContainer;

const ContainerWrapper = styled.div`
  border: solid red;
  padding: 75px 200px;
  grid-template-columns: auto auto auto auto;
  gap: clamp(16px, 1.6vw, 24px);
  width: 100%;
  display: grid;
  justify-content: center;
`;

// 	@media screen and (max-width: 430px) {
// 		display: flex;
// 		flex-flow: column;
// 		align-items: center;
// 		gap: 16px;
// 	}

// 	@media screen and (max-width: 1000px) {
// 		grid-template-columns: auto auto;
// 	}

// 	@media screen and (min-width: 1550px) {
// 		grid-template-columns: auto auto auto auto;
// 	} */
// `;
