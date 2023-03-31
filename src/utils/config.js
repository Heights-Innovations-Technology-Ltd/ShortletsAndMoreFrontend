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

import { ReactComponent as FirstSvg } from "../assets/svg/shop.svg";
import { ReactComponent as SecondSvg } from "../assets/svg/map.svg";
import { ReactComponent as ThirdSvg } from "../assets/svg/note.svg";
import { ReactComponent as LaundrySvg } from "../assets/svg/laundry.svg";
import { ReactComponent as TransportSvg } from "../assets/svg/transport.svg";
import { ReactComponent as RestaurantSvg } from "../assets/svg/restaurant.svg";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { FaCalendarAlt, FaHotel } from "react-icons/fa";
import {
  HiOutlineLogout,
  HiUser,
  HiBriefcase,
  HiChatAlt,
} from "react-icons/hi";
import { HiBanknotes } from "react-icons/hi2";
import { GiMightySpanner } from "react-icons/gi";

import * as yup from "yup";

const handleLogout = () => {
  localStorage.clear();
};

export const servicesData = [
  {
    id: 1,
    serviceImage: imageFive,
    serviceTitle: "Laundry Service",
    serviceDetails: "Our fully furnished and equipped apartments.",
  },
  {
    id: 2,
    serviceImage: imageFive,
    serviceTitle: "Dining",
    serviceDetails: "Our fully furnished and equipped apartments.",
  },
  {
    id: 3,
    serviceImage: imageFive,
    serviceTitle: "Transport",
    serviceDetails: "Our fully furnished and equipped apartments.",
  },
];
export const StaffSidebarLinks = [
  {
    id: 1,
    title: "Dashboard",
    icon: AiFillHome,
    path: "/staff/home",
  },
  {
    id: 2,
    title: "Bookings",
    icon: HiBanknotes,
    path: "/staff/bookings",
  },
  {
    id: 3,
    title: "Resrvations",
    icon: FaCalendarAlt,
    path: "/staff/reservation",
  },
  {
    id: 4,
    title: "Check-ins",
    icon: HiBriefcase,
    path: "/staff/check-in",
  },
  {
    id: 5,
    title: "Apartments",
    icon: FaHotel,
    path: "/staff/apartments",
  },
  {
    id: 6,
    title: "Services",
    icon: GiMightySpanner,
    path: "/staff/services",
  },
  {
    id: 7,
    title: "Support",
    icon: HiChatAlt,
    path: "/staff/support",
  },
  {
    id: 8,
    title: "Accounts",
    icon: HiUser,
    path: "/staff/account",
  },
  {
    id: 9,
    title: "Settings",
    icon: AiFillSetting,
    path: "/staff/settings",
  },
  {
    id: 11,
    title: "Log Out",
    icon: HiOutlineLogout,
    function: handleLogout,
    path: "/staff-login",
  },
];

export const UserSidebarLinks = [
  {
    id: 1,
    title: "Dashboard",
    icon: AiFillHome,
    path: "/dashboard/home",
  },
  {
    id: 2,
    title: "Bookings",
    icon: HiBanknotes,
    path: "/dashboard/bookings",
  },
  {
    id: 3,
    title: "Resrvations",
    icon: FaCalendarAlt,
    path: "/dashboard/reservation",
  },

  {
    id: 6,
    title: "Services",
    icon: GiMightySpanner,
    path: "/dashboard/services",
  },

  {
    id: 9,
    title: "Settings",
    icon: AiFillSetting,
    path: "/dashboard/settings",
  },
  {
    id: 11,
    title: "Log Out",
    icon: HiOutlineLogout,
    function: handleLogout,
    path: "/login",
  },
];

export const testingData = [
  {
    category: null,
    categoryId: 4,
    city: null,
    cityId: 244,
    company: null,
    companyId: 114,
    description: "New lovely building on the coast of lagos",
    facilities: { Security: true, SwimmingPool: true, Parking: true },
    id: 14,
    isActive: true,
    name: "Invest Apartments",
    roomTypes: [],
    rooms: [],
  },
  {
    category: null,
    categoryId: 4,
    city: null,
    cityId: 244,
    company: null,
    companyId: 114,
    description: "Another lovely building on the coast of lagos",
    facilities: { Security: true, SwimmingPool: true, Parking: false },
    id: 24,
    isActive: true,
    name: "Invent Apartments",
    roomTypes: [],
    rooms: [],
  },
];
export const aboutUsData = [
  {
    id: 1,
    image: FirstSvg,
    content:
      "Lorem ipsum dolor sit amet consectetur. Arcu velit nibh suspendisse nulla nulla pellentesque tristique. Placerat lorem tristique leo vitae sollicitudin.",
  },

  {
    id: 2,
    image: SecondSvg,
    content:
      "Lorem ipsum dolor sit amet consectetur. Arcu velit nibh suspendisse nulla nulla pellentesque tristique. Placerat lorem tristique leo vitae sollicitudin.",
  },

  {
    id: 3,
    image: ThirdSvg,
    content:
      "Lorem ipsum dolor sit amet consectetur. Arcu velit nibh suspendisse nulla nulla pellentesque tristique. Placerat lorem tristique leo vitae sollicitudin.",
  },
];
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
    apartmentDetails: "Our fully furnished and equipped apartments.",
  },
  {
    id: 2,
    apartmentImage: imageTwo,
    apartmentName: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    apartmentDetails: "Our fully furnished and equipped apartments.",
  },
  {
    id: 3,
    apartmentImage: imageThree,
    apartmentName: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    apartmentDetails: "Our fully furnished and equipped apartments.",
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
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 2,
    apartmentImage: imageTwo,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 3,
    apartmentImage: imageThree,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 4,
    apartmentImage: imageFour,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
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
export const testingD = [
  {
    id: 1,
    apartmentImage: imageOne,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 2,
    apartmentImage: imageTwo,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 3,
    apartmentImage: imageThree,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 4,
    apartmentImage: imageFour,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 5,
    apartmentImage: imageOne,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 6,
    apartmentImage: imageTwo,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 7,
    apartmentImage: imageThree,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 8,
    apartmentImage: imageFour,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 9,
    apartmentImage: imageOne,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 10,
    apartmentImage: imageTwo,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 11,
    apartmentImage: imageTwo,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 12,
    apartmentImage: imageFour,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },

  {
    id: 13,
    apartmentImage: imageThree,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 14,
    apartmentImage: imageFour,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 15,
    apartmentImage: imageOne,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 16,
    apartmentImage: imageTwo,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 17,
    apartmentImage: imageThree,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 18,
    apartmentImage: imageFour,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 19,
    apartmentImage: imageOne,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 20,
    apartmentImage: imageTwo,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 21,
    apartmentImage: imageTwo,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
  },
  {
    id: 22,
    apartmentImage: imageFour,
    name: "Apartment in ajah, Abraham",
    apartmentLocation: "234 Ring road, Lekki Phase 1, Lekki, Lagos",
    description:
      "Our fully furnished and equipped apartments are perfect for business or pleasure.",
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
export const updateSchema = yup.object().shape({
  password: yup
    .string()
    .min(8)
    .max(15)
    .required("Password is a required field")
    .matches(/^(?=.*[A-Z])/, " Must contain an uppercase character")
    .matches(/^(?=.*[a-z])/, " Must contain a lowercase character")

    .matches(/^(?=.*[0-9])/, "  Must contain a number")
    .matches(/^(?=.*[!@#\$%\^&\*])/, "  Must contain a special case character"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is a required field"),
  password: yup.string().required("Password is a required field"),
});

export const userSettingSchema = yup.object().shape({
  phone: yup.string(),
  address: yup.string(),
});

export const userRegistrationSchema = yup.object().shape({
  firstName: yup.string().required("First name is a required field"),
  lastName: yup.string().required("Last name is a required field"),
  email: yup.string().email("Enter a valid email address").required(),
  phone: yup.string().required("Phone number is a required field"),
  address: yup.string().required("Username is a required field"),
  password: yup
    .string()
    .min(8)
    .max(15)
    .required("Password is a required field")
    .matches(/^(?=.*[A-Z])/, " Must contain an uppercase character")
    .matches(/^(?=.*[a-z])/, " Must contain a lowercase character")

    .matches(/^(?=.*[0-9])/, "  Must contain a number")
    .matches(/^(?=.*[!@#\$%\^&\*])/, "  Must contain a special case character"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const staffLoginSchema = yup.object().shape({
  username: yup.string().required("Username is a required field"),
  password: yup.string().required("Password is a required field"),
});

export const staffRegistrationSchema = yup.object().shape({
  firstName: yup.string().required("First name is a required field"),
  lastName: yup.string().required("Last name is a required field"),
  email: yup.string().email("Enter a valid email address").required(),
  username: yup.string().required("Username is a required field"),
  password: yup
    .string()
    .min(8)
    .max(15)
    .required("Password is a required field")
    .matches(/^(?=.*[A-Z])/, " Must contain an uppercase character")
    .matches(/^(?=.*[a-z])/, " Must contain a lowercase character")

    .matches(/^(?=.*[0-9])/, "  Must contain a number")
    .matches(/^(?=.*[!@#\$%\^&\*])/, "  Must contain a special case character"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  role: yup.string().required("Role is a required field"),
});

export const userBillingSchema = yup.object().shape({
  firstName: yup.string().required("First name is a required field"),
  lastName: yup.string().required("Last name is a required field"),
  email: yup.string().email("Enter a valid email address").required(),
  phone: yup.string().required("Phone number is a required field"),
  address: yup.string().required("User name is a required field"),
  // password: yup.string().min(8).max(15).required(),
  // confirmPassword: yup.string().min(8).max(15).required(),
});

export const checkAvailabilitySchema = yup.object().shape({
  startDate: yup
    .string()
    // .matches(
    //   "^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](20)\\d\\d$", // Date regex
    //   "Not a valid date" // error message
    // )
    .required(),

  endDate: yup
    .string()
    // .matches(
    //   "^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](20)\\d\\d$", // Date regex
    //   "Not a valid date" // error message
    // )
    .required(),
});

export const contactSchema = yup.object().shape({
  customerEmail: yup.string().email("Enter a valid email address").required(),
  subject: yup.string().required("Phone number is a required field"),
  body: yup.string().required("Phone number is a required field"),
});

export const subscribeSchema = yup.object().shape({
  email: yup.string().email("Enter a valid email address").required(),
});
export const categorySchema = yup.object().shape({
  categoryName: yup.string().required(),
});

export const checkinSchema = yup.object().shape({
  roomIds: yup.string().required(),
});

export const createApartmentSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  description: yup.string().required("Description is a required field"),
  city: yup.string().required("City is a required field"),
  categoryId: yup.string().required("Category is a required field"),
});

export const createRoomSchema = yup.object().shape({
  roomType: yup.string().required("Name is a required field"),
  description: yup.string().required("Description is a required field"),
  numberOfUnits: yup.string().required("Number of Units is a required field"),
  price: yup.string().required("Price is a required field"),
});

export const unitOptions = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
  { value: 8, label: 8 },
  { value: 9, label: 9 },
  { value: 10, label: 10 },
];

export const cityOptions = [
  { value: "Lagos", label: "Lagos" },
  { value: "Ibadan", label: "Ibadan" },
];

export const tableData = [
  [
    "Akinyemi bamidle",
    "Exclusive Suite",
    " Luxury Deluxe",
    "2015-12-3",
    "02:43PM",
    "Completed",
  ],
  [
    "Akinyemi bamidle",
    "Exclusive Suite",
    " Luxury Deluxe",
    "2015-12-3",
    "02:43PM",
    "Completed",
  ],
  [
    "Akinyemi bamidle",
    "Exclusive Suite",
    " Luxury Deluxe",
    "2015-12-3",
    "02:43PM",
    "Completed",
  ],
  [
    "Akinyemi bamidle",
    "Exclusive Suite",
    " Luxury Deluxe",
    "2015-12-3",
    "02:43PM",
    "Completed",
  ],
  [
    "Akinyemi bamidle",
    "Exclusive Suite",
    " Luxury Deluxe",
    "2015-12-3",
    "02:43PM",
    "Completed",
  ],
  [
    "Akinyemi bamidle",
    "Exclusive Suite",
    " Luxury Deluxe",
    "2015-12-3",
    "02:43PM",
    "Completed",
  ],
  [
    "Akinyemi bamidle",
    "Exclusive Suite",
    " Luxury Deluxe",
    "2015-12-3",
    "02:43PM",
    "Completed",
  ],
  [
    "Akinyemi bamidle",
    "Exclusive Suite",
    " Luxury Deluxe",
    "2015-12-3",
    "02:43PM",
    "Completed",
  ],
  [
    "Akinyemi bamidle",
    "Exclusive Suite",
    " Luxury Deluxe",
    "2015-12-3",
    "02:43PM",
    "Completed",
  ],
  [
    "Akinyemi bamidle",
    "Exclusive Suite",
    " Luxury Deluxe",
    "2015-12-3",
    "02:43PM",
    "Completed",
  ],
];

export const tableDatas = [
  {
    name: "Akinyemi bamidle",
    apartment: "Exclusive Suite",
    roomType: " Luxury Deluxe",
    date: "2015-12-03",
    ticket: "#23445",
    email: "akinyemibamidele@gmail.com",
    topic: "Booking Error",
    number: "07060000000",
    active: "Active",
    time: "02:43PM",
    status: "Checked In",
  },
  {
    name: "Akinyemi bamidle",
    apartment: "Exclusive Suite",
    roomType: " Luxury Deluxe",
    date: "2015-12-03",
    ticket: "#23445",
    email: "akinyemibamidele@gmail.com",
    topic: "Booking Error",
    number: "07060000000",
    active: "Active",
    time: "02:43PM",
    status: "Pending",
  },
  {
    name: "Akinyemi bamidle",
    apartment: "Exclusive Suite",
    roomType: " Luxury Deluxe",
    date: "2015-12-03",
    time: "02:43PM",
    ticket: "#23445",
    email: "akinyemibamidele@gmail.com",
    topic: "Booking Error",
    number: "07060000000",
    active: "Inactive",
    status: "Checked Out",
  },
  {
    name: "Akinyemi bamidle",
    apartment: "Exclusive Suite",
    roomType: " Luxury Deluxe",
    ticket: "#23445",
    email: "akinyemibamidele@gmail.com",
    topic: "Booking Error",
    number: "07060000000",
    active: "Active",
    date: "2015-12-03",
    time: "02:43PM",
    status: "Pending",
  },
  {
    name: "Akinyemi bamidle",
    apartment: "Exclusive Suite",
    ticket: "#23445",
    email: "akinyemibamidele@gmail.com",
    topic: "Booking Error",
    number: "07060000000",
    active: "Active",
    date: "2015-12-03",
    time: "02:43PM",
    status: "Checked In",
  },
  {
    name: "Akinyemi bamidle",
    apartment: "Exclusive Suite",
    roomType: " Luxury Deluxe",
    date: "2015-12-03",
    ticket: "#23445",
    email: "akinyemibamidele@gmail.com",
    topic: "Booking Error",
    number: "07060000000",
    active: "Inactive",
    time: "02:43PM",
    status: "Pending",
  },
  {
    name: "Akinyemi bamidle",
    apartment: "Exclusive Suite",
    roomType: " Luxury Deluxe",
    ticket: "#23445",
    email: "akinyemibamidele@gmail.com",
    topic: "Booking Error",
    number: "07060000000",
    active: "Active",
    date: "2015-12-03",
    time: "02:43PM",
    status: "Checked Out",
  },
  {
    name: "Akinyemi bamidle",
    apartment: "Exclusive Suite",
    roomType: " Luxury Deluxe",
    date: "2015-12-03",
    ticket: "#23445",
    email: "akinyemibamidele@gmail.com",
    topic: "Booking Error",
    number: "07060000000",
    active: "Inactive",
    time: "02:43PM",
    status: "Pending",
  },
];

export const services = [
  { id: 1, name: "Laundry", image: LaundrySvg },
  { id: 2, name: "Transport", image: TransportSvg },
  { id: 3, name: "Restaurants", image: RestaurantSvg },
];
