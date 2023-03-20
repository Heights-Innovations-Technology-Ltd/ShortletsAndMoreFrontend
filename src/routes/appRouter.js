import React, { Suspense, lazy } from "react";
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
import AboutUs from "../pages/About";
import AddToCart from "../pages/AddToCart/AddToCart";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
import StaffLogin from "../pages/Auth/StaffAuth/Login/Login";
import StaffRegister from "../pages/Auth/StaffAuth/Register/Register";
import UpdatePassword from "../pages/Auth/UpdatePassword/UpdatePassword";
import BillingDetail from "../pages/BillingDetail/BillingDetail";
import BookingConfirmation from "../pages/BookingConfirmation/BookingConfirmation";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Property from "../pages/Property/Property";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import Services from "../pages/Services/Services";
import StaffAccounts from "../pages/staffDashboard/Account";
import StaffApartments from "../pages/staffDashboard/Apartment";
import StaffBookings from "../pages/staffDashboard/Bookings";
import StaffCheckIns from "../pages/staffDashboard/CheckIn";
import StaffHome from "../pages/staffDashboard/Home";
import StaffReservations from "../pages/staffDashboard/Reservation";
import StaffRooms from "../pages/staffDashboard/Rooms";
import StaffServices from "../pages/staffDashboard/Services";
import StaffSettings from "../pages/staffDashboard/Settings";
import StaffSupports from "../pages/staffDashboard/Support";
import Testing from "../pages/Testing";

const StaffDashboard = lazy(() => import("../pages/staffDashboard/Home"));
const StaffBooking = lazy(() => import("../pages/staffDashboard/Bookings"));
const StaffReservation = lazy(() =>
  import("../pages/staffDashboard/Reservation")
);
const StaffCheckIn = lazy(() => import("../pages/staffDashboard/CheckIn"));
const StaffApartment = lazy(() => import("../pages/staffDashboard/Apartment"));
const StaffRoom = lazy(() => import("../pages/staffDashboard/Rooms"));
const StaffService = lazy(() => import("../pages/staffDashboard/Services"));
const StaffSupport = lazy(() => import("../pages/staffDashboard/Support"));
const StaffAccount = lazy(() => import("../pages/staffDashboard/Account"));
const StaffSetting = lazy(() => import("../pages/staffDashboard/Settings"));
const StaffSettingsCategory = lazy(() =>
  import("../pages/staffDashboard/Categories")
);

const AppRouter = () => {
  let data = useParams();

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
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="update-password/:resetID" element={<UpdatePassword />} />
          <Route path="cart" element={<Outlet />}>
            <Route index element={<AddToCart />} />
            <Route path="checkout" element={<BillingDetail />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="confirm" element={<BookingConfirmation />} />

          <Route path="testing" element={<Testing />} />

          <Route path="staff-login" element={<StaffLogin />} />
          <Route path="staff-register" element={<StaffRegister />} />
          <Route path="staff" element={<StaffLayout />}>
            <Route index element={<StaffDashboard />} />
            <Route path="home" element={<StaffDashboard />} />
            <Route path="apartments" element={<Outlet />}>
              <Route index element={<StaffApartment />} />
              <Route path="rooms" element={<StaffRoom />} />
            </Route>
            <Route path="bookings" element={<StaffBooking />} />
            <Route path="reservation" element={<StaffReservation />} />
            <Route path="check-in" element={<StaffCheckIn />} />
            <Route path="support" element={<StaffSupport />} />
            <Route path="account" element={<StaffAccount />} />
            <Route path="services" element={<StaffService />} />
            <Route path="settings" element={<Outlet />}>
              <Route index element={<StaffSetting />} />
              <Route path="categories" element={<StaffSettingsCategory />} />
            </Route>
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
