import React from "react";
import { useRoutes, useParams } from "react-router-dom";
import AppRouter from "./routes/appRouter";
import Routes from "./routes/Routes";

const App = () => {
  let data = useParams();

  console.log("checking params on app", data);

  // let elements = useRoutes(Routes);

  return (
    <>
      {/* <>{elements}</> */}
      <AppRouter />
    </>
  );
};

export default App;
