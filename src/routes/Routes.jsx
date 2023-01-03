// import { lazy } from "react";

// const Home = lazy(() =>
//   import(/* webpackChunkName: "Home" */ "../pages/Home/Home")
// );

// const Property = lazy(() =>
//   import(/* webpackChunkName: "Property" */ "../pages/Property/Property")
// );

// const Services = lazy(() =>
//   import(/* webpackChunkName: "Services" */ "../pages/Services/Services")
// );

// const About = lazy(() =>
//   import(/* webpackChunkName: "About" */ "../pages/About/About")
// );

// const Contact = lazy(() =>
//   import(/* webpackChunkName: "Contact" */ "../pages/Contact/Contact")
// );

import About from "../pages/About/About";
import AddToCart from "../pages/AddToCart/AddToCart";
import BillingDetail from "../pages/BillingDetail/BillingDetail";
import BookingConfirmation from "../pages/BookingConfirmation/BookingConfirmation";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Property from "../pages/Property/Property";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";

const Routes = [
  {
    path: "/",
    key: "HOME",
    element: <Home />,
  },
  {
    path: "/Property",
    key: "PROPERTY",
    element: <Property />,
  },
  {
    path: "/services",
    key: "SERVICES",
    element: <Services />,
  },
  {
    path: "/about",
    key: "ABOUT",
    element: <About />,
  },
  {
    path: "/contact",
    key: "CONTACT",
    element: <Contact />,
  },
  {
    path: "/cart",
    key: "ADDTOCART",
    element: <AddToCart />,
  },
  {
    path: "/billingdetail",
    key: "BILLINGDETAIL",
    element: <BillingDetail />,
  },
  {
    path: "/bookingconfirmation",
    key: "BOOKINGCONFIRMATION",
    element: <BookingConfirmation />,
  },
  {
    path: "/login",
    key: "LOGIN",
    element: <Login />,
  },
  {
    path: "/register",
    key: "Register",
    element: <Register />,
  },
  {
    path: "*",
    key: "NOTFOUND",
    element: <NotFound />,
  },
];

export default Routes;
