import React, { Suspense, lazy, useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Loader from "../components/pageLoader/loader";
import StaffLayout from "../layout/staffLayout";
import AddToCart from "../pages/AddToCart/AddToCart";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import BillingDetail from "../pages/BillingDetail/BillingDetail";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Property from "../pages/Property/Property";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import Services from "../pages/Services/Services";
import StaffApartment from "../pages/staffDashboard/Apartment";
import StaffRoom from "../pages/staffDashboard/Rooms";
import StaffServices from "../pages/staffDashboard/Services";
import Testing from "../pages/Testing";

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />

            <Route path="property" element={<Outlet />}>
              <Route index element={<Services />} />

              <Route path="rooms" element={<Outlet />}>
                <Route index element={<Property />} />

                <Route path=":roomID" element={<RoomDetails />} />
                <Route path="details" element={<RoomDetails />} />
              </Route>
            </Route>
          </Route>

          <Route path="register" element={<Outlet />}>
            <Route index element={<Register />} />
          </Route>
          <Route path="login" element={<Outlet />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="cart" element={<Outlet />}>
            <Route index element={<AddToCart />} />
            <Route path="checkout" element={<BillingDetail />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="testing" element={<Testing />} />

          <Route path="staff" element={<StaffLayout />}>
            {/* <Route index element={<StaffLayout />} /> */}

            <Route path="apartments" element={<Outlet />}>
              <Route index element={<StaffApartment />} />
              <Route path="rooms" element={<StaffRoom />} />
            </Route>
            <Route path="services" element={<StaffServices />} />
          </Route>
        </Routes>
        <Toaster
          position="top-right"
          toastOptions={{
            className: "",
            style: {
              margin: "10px",
              padding: "10px",
              display: "inline-flex",
              fontSize: "14px",
              zIndex: 999999,
            },
            duration: 4000,
            error: {
              style: {
                background: "#ff6363",
                color: "white",
              },
              iconTheme: {
                primary: "white",
                secondary: "red",
              },
            },
            success: {
              style: {
                background: "green",
                color: "white",
              },
              iconTheme: {
                primary: "white",
                secondary: "green",
              },
            },
          }}
        />
      </Router>
    </Suspense>
  );
};

export default AppRouter;
