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
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Property from "../pages/Property/Property";
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
    path: "*",
    key: "NOTFOUND",
    element: <NotFound />,
  },
];

export default Routes;
