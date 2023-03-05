import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AppRouter from "./routes/appRouter";
import { saveStaffInfo } from "./store/Slice/staffSlice";
import { store } from "./store/store";

const App = () => {
  const staffInfo = JSON.parse(localStorage.getItem("staffLoginProfile"));
  console.log("app.js", staffInfo);

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
    </>
  );
};

export default App;
