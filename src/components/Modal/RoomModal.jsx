// import React from 'react'
// import { Dialog } from "@mui/material";
// import {
//     ApartmentContainer,
//     ButtonWrapper,
//     CheckInput,
//     CloseWrapper,
//     FormContainer,
//     LeftIconContainer,
//     ModalButton,
//     ModalWrapper,
//     TextContainer,
//     TextTitle,
//     Top,
//     CheckInputContainer,
//     CheckListContainer,
//   } from "./style";
//   import { ReactComponent as CloseIcon } from "../../../assets/svg/close.svg";
// import PrimaryInput from '../Input';
// import TextArea from '../TextArea';
// import DropDown from '../Input/dropDown';
// import PrimaryButton from '../PrimaryButton';
// import { unitOptions } from '../../utils/config';
// const RoomModal = ({
//     openModal,
//     handleSubmit,
//     onSubmit,
//     register,
//     setValue,
// }) => {
//     const facilities = [
//         { category: "Television" },
//         { category: "Air Conditioner" },
//         { category: "Wifi" },
//         { category: "Microwave" },
//         { category: "Washing Machine" },
//         { category: "Dish Washer" },
//         { category: "Heater" },
//         { category: "Balcony" },
//       ];
//       const handleUnitChange = (value) => {
//         var string = Object.values(value)[0];
//         setValue("numberOfUnits", string, { shouldValidate: true });
//       };

//   return (
//     <Dialog open={openModal} fullWidth maxWidth="sm">
//     <ModalWrapper>
//       <Top>
//         <CloseWrapper onClick={handleModalClose}>
//           <CloseIcon />
//         </CloseWrapper>
//       </Top>
//       <TextContainer>
//         <h1 className="ml-4 mb-4 font-semibold text-xl text-left">
//           Create a Room
//         </h1>
//       </TextContainer>

//       <FormContainer onSubmit={handleSubmit(onSubmit)}>
//         <PrimaryInput
//           placeholder="Name"
//           type="text"
//           label="Name"
//           register={register}
//           name="roomType"
//           // error={errors.roomType?.message}
//         />

//         <TextArea
//           placeholder="Room Description"
//           type="text"
//           label="Description"
//           register={register}
//           name="description"
//           // error={errors.password?.message}
//         />
//         <DropDown
//           label="Number of Units"
//           options={unitOptions}
//           name="numberOfUnits"
//           register={register}
//           onChange={handleUnitChange}
//         //   errorMessage={errors.numberOfUnits?.message}
//         />
//         <PrimaryInput
//           placeholder="Price"
//           type="text"
//           label="Price"
//           register={register}
//           name="price"
//           // error={errors.password?.message}
//         />
//         <TextTitle>Features</TextTitle>
//         <CheckInputContainer>
//           {facilities?.map((fac, index) => (
//             <CheckListContainer key={index}>
//               <CheckInput
//                 type="checkbox"
//                 value={fac.category}
//                 onClick={handleClick}
//               />
//               {fac.category}
//             </CheckListContainer>
//           ))}
//         </CheckInputContainer>

//         <ModalButton>
//           <PrimaryButton
//             title="Create Room"
//             width="100%"
//             type="submit"
//             loading={isLoading}
//             // onClick={handleSubmit(onPay)}
//           />
//         </ModalButton>
//       </FormContainer>
//     </ModalWrapper>
//   </Dialog>
//   )
// }

// export default RoomModal
