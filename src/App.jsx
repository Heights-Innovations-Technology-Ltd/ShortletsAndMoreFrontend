import React from "react";
import { useRoutes } from "react-router-dom";
import AppRouter from "./routes/appRouter";
import Routes from "./routes/Routes";

const App = () => {
  // let elements = useRoutes(Routes);

  return (
    <>
      {/* <>{elements}</> */}
      <AppRouter />
    </>
  );
};

export default App;
