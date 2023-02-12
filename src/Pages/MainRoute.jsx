import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Bookmark from "./Bookmark";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bookmark" element={<Bookmark />} />
    </Routes>
  );
};

export default MainRoute;
