import React, { Suspense, lazy, useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useParams,
} from "react-router-dom";
import Loader from "../components/pageLoader/loader";
import StaffLayout from "../layout/staffLayout";
import AddToCart from "../pages/AddToCart/AddToCart";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import BillingDetail from "../pages/BillingDetail/BillingDetail";
import BookingConfirmation from "../pages/BookingConfirmation/BookingConfirmation";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Property from "../pages/Property/Property";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import Services from "../pages/Services/Services";
import StaffAccount from "../pages/staffDashboard/Account";
import StaffApartment from "../pages/staffDashboard/Apartment";
import StaffBookings from "../pages/staffDashboard/Bookings";
import StaffCheckIn from "../pages/staffDashboard/CheckIn";
import StaffHome from "../pages/staffDashboard/Home";
import StaffReservation from "../pages/staffDashboard/Reservation";
import StaffRoom from "../pages/staffDashboard/Rooms";
import StaffServices from "../pages/staffDashboard/Services";
import StaffSettings from "../pages/staffDashboard/Settings";
import StaffSupport from "../pages/staffDashboard/Support";
import Testing from "../pages/Testing";

const AppRouter = () => {
  let data = useParams();

  console.log("checking params", data);
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
          <Route path="confirm" element={<BookingConfirmation />} />

          <Route path="testing" element={<Testing />} />

          <Route path="staff" element={<StaffLayout />}>
            <Route index element={<StaffHome />} />
            <Route path="home" element={<StaffHome />} />
            <Route path="apartments" element={<Outlet />}>
              <Route index element={<StaffApartment />} />
              <Route path="rooms" element={<StaffRoom />} />
            </Route>
            <Route path="bookings" element={<StaffBookings />} />
            <Route path="reservation" element={<StaffReservation />} />
            <Route path="check-in" element={<StaffCheckIn />} />
            <Route path="support" element={<StaffSupport />} />
            <Route path="account" element={<StaffAccount />} />
            <Route path="services" element={<StaffServices />} />
            <Route path="settings" element={<StaffSettings />} />
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
