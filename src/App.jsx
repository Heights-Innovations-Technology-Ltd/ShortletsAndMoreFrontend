import React, { useEffect } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { useSelector } from "react-redux";
import AppRouter from "./routes/appRouter";
import { saveStaffInfo } from "./store/Slice/staffSlice";
import { store } from "./store/store";

const App = () => {
  const staffInfo = JSON.parse(localStorage.getItem("staffLoginProfile"));

  useEffect(() => {
    if (staffInfo) {
      store.dispatch(saveStaffInfo(staffInfo));
    }
  }, [staffInfo]);

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
