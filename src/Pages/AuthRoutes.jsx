import React from "react";
import { Route, Routes } from "react-router-dom";
import Bookmark from "./Bookmark";
import HomePage from "./HomePage";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bookmark" element={<Bookmark />} />
    </Routes>
  );
};

export default AuthRoutes;
