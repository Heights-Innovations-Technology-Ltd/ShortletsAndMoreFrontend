import galleryMainImage from "../assets/gallery_main.png";
import galleryMainFive from "../assets/gallery_main_five.png";
import galleryMainFour from "../assets/gallery_main_four.png";
import galleryMainOne from "../assets/gallery_main_one.png";
import galleryMainThree from "../assets/gallery_main_three.png";
import galleryMainTwo from "../assets/gallery_main_two.png";
import imageFour from "../assets/listing_img_four.png";
import imageOne from "../assets/listing_img_one.png";
import imageTwo from "../assets/listing_img_three.png";
import imageThree from "../assets/listing_img_two.png";
import imageFive from "../assets/recent_listing.png";

import * as yup from "yup";

export const apartmentData = [
  {
    id: 1,
    apartmentImage: imageOne,
    apartmentName: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    apartmentDetails:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 2,
    apartmentImage: imageTwo,
    apartmentName: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    apartmentDetails:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 3,
    apartmentImage: imageThree,
    apartmentName: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    apartmentDetails:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 4,
    apartmentImage: imageFour,
    apartmentName: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    apartmentDetails:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  // {
  //   id: 5,
  //   apartmentImage: imageOne,
  //   apartmentName: "Apartment in ajah, Abraham",
  //   apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
  //   apartmentDetails:
  //     "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  // },
  // {
  //   id: 6,
  //   apartmentImage: imageFour,
  //   apartmentName: "Apartment in ajah, Abraham",
  //   apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
  //   apartmentDetails:
  //     "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  // },
];

export const similarListingData = [
  {
    id: 1,
    apartmentImage: imageOne,
    apartmentName: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    apartmentDetails:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 2,
    apartmentImage: imageTwo,
    apartmentName: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    apartmentDetails:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 3,
    apartmentImage: imageThree,
    apartmentName: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    apartmentDetails:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  // {
  //   id: 4,
  //   apartmentImage: imageFour,
  //   apartmentName: "Apartment in ajah, Abraham",
  //   apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
  //   apartmentDetails:
  //     "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  // },
];

export const cartData = [
  {
    id: 1,
    apartmentImage: imageFive,
    apartmentName: "Luxury duplex With Terrace",
    apartmentPrice: "34,900",
  },
  {
    id: 2,
    apartmentImage: imageFive,
    apartmentName: "Luxury duplex With Terrace",
    apartmentPrice: "34,900",
  },
  {
    id: 3,
    apartmentImage: imageFive,
    apartmentName: "Luxury duplex With Terrace",
    apartmentPrice: "34,900",
  },
  {
    id: 4,
    apartmentImage: imageFive,
    apartmentName: "Luxury duplex With Terrace",
    apartmentPrice: "34,900",
  },
  {
    id: 5,
    apartmentImage: imageFive,
    apartmentName: "Luxury duplex With Terrace",
    apartmentPrice: "34,900",
  },
  {
    id: 6,
    apartmentImage: imageFive,
    apartmentName: "Luxury duplex With Terrace",
    apartmentPrice: "34,900",
  },
];

export const apartmentHomeData = [
  {
    id: 1,
    apartmentImage: imageOne,
    apartmentName: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    apartmentDetails:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 2,
    apartmentImage: imageTwo,
    apartmentName: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    apartmentDetails:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 3,
    apartmentImage: imageThree,
    apartmentName: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    apartmentDetails:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 4,
    apartmentImage: imageFour,
    apartmentName: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    apartmentDetails:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
];

export const cartHomeData = [
  {
    id: 1,
    apartmentImage: imageFive,
    apartmentName: "Luxury duplex With Terrace",
    apartmentPrice: "34,900",
  },
  {
    id: 2,
    apartmentImage: imageFive,
    apartmentName: "Luxury duplex With Terrace",
    apartmentPrice: "34,900",
  },
  {
    id: 3,
    apartmentImage: imageFive,
    apartmentName: "Luxury duplex With Terrace",
    apartmentPrice: "34,900",
  },
  {
    id: 4,
    apartmentImage: imageFive,
    apartmentName: "Luxury duplex With Terrace",
    apartmentPrice: "34,900",
  },
];

export const filterTypeOfAccomodationData = [
  {
    id: 1,
    name: "All",
    value: "All",
  },
  {
    id: 2,
    name: "Apartment",
    value: "Apartment",
  },
  {
    id: 3,
    name: "House",
    value: "House",
  },
  {
    id: 4,
    name: "Villa",
    value: "Villa",
  },
  {
    id: 5,
    name: "Office",
    value: "Office",
  },
];

export const numberOfBathroomsData = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

export const mainFeaturesData = [
  {
    id: 1,
    name: "Television",
  },
  {
    id: 2,
    name: "Swimming Pool",
  },
  {
    id: 3,
    name: "Microwave",
  },
  {
    id: 4,
    name: "Air Conditioning",
  },
  {
    id: 5,
    name: "Parking",
  },
  {
    id: 6,
    name: "Heater",
  },
  {
    id: 7,
    name: "Washing Machine",
  },
  {
    id: 8,
    name: "Balcony",
  },
  {
    id: 9,
    name: "Wifi",
  },
  {
    id: 10,
    name: "Dishwasher",
  },
  {
    id: 11,
    name: "Garage",
  },
  {
    id: 12,
    name: "Satellite Tv",
  },
  {
    id: 13,
    name: "Terrace",
  },
];

export const budgetData = [
  {
    id: 1,
    name: "Low Budget",
    price1: "10,000",
    price2: "30,000",
  },
  {
    id: 2,
    name: "Medium Budget",
    price1: "10,000",
    price2: "30,000",
  },
  {
    id: 3,
    name: "High Budget",
    price1: "30,000 Up",
  },
];

export const roomDetailsGalleryData = [
  {
    id: 1,
    galleryMainImage: galleryMainImage,
  },
  {
    id: 2,
    gallerySubImage: galleryMainOne,
  },
  {
    id: 3,
    gallerySubImage: galleryMainTwo,
  },
  {
    id: 4,
    gallerySubImage: galleryMainThree,
  },
  {
    id: 5,
    gallerySubImage: galleryMainFour,
  },
  {
    id: 6,
    gallerySubImage: galleryMainFive,
  },
];

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is a required field"),
  password: yup.string().required("Password is a required field"),
});

export const userRegistrationSchema = yup.object().shape({
  firstName: yup.string().required("First name is a required field"),
  lastName: yup.string().required("Last name is a required field"),
  email: yup.string().email("Enter a valid email address").required(),
  phone: yup.string().required("Phone number is a required field"),
  address: yup.string().required("User name is a required field"),
  password: yup.string().min(8).max(15).required(),
  confirmPassword: yup.string().min(8).max(15).required(),
});
