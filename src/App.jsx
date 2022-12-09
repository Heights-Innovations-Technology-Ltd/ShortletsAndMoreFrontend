import React from "react";
import { useRoutes } from "react-router-dom";
import Routes from "./routes/Routes";

const App = () => {
  let elements = useRoutes(Routes);

  return (
    <>
      <>{elements}</>
    </>
  );
};

export default App;
