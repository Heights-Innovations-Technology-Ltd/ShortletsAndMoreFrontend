import React, { useEffect } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { useSelector } from "react-redux";
import AppRouter from "./routes/appRouter";
import { saveUserInfo } from "./store/Slice/authSlice";
import { saveStaffInfo } from "./store/Slice/staffSlice";
import { store } from "./store/store";

const App = () => {
  const staffInfo = JSON.parse(localStorage.getItem("staffLoginProfile"));

  useEffect(() => {
    if (staffInfo) {
      store.dispatch(saveStaffInfo(staffInfo));
    }
  }, [staffInfo]);

  const userInfo = JSON.parse(localStorage.getItem("userProfile"));

  useEffect(() => {
    if (userInfo) {
      store.dispatch(saveUserInfo(userInfo));
    }
  }, [userInfo]);

  // let elements = useRoutes(Routes);

  return (
    <>
      {/* <>{elements}</> */}
      <AppRouter />
      <MessengerCustomerChat
        pageId="395912157230416"
        appId="1942620669434527"
      />
    </>
  );
};

export default App;
