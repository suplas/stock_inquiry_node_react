import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages";
import Information from "./pages/information";
import Interest from "./pages/information";
import Talk from "./pages/information";
import NoPage from "./pages/404";

const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={Main} />
      <Route path="/information" Component={Information} />
      <Route path="/interest" Component={Interest} />
      <Route path="/talk" Component={Talk} />
      <Route path="/*" Component={NoPage} />
    </Routes>
  );
};

export default Router;
