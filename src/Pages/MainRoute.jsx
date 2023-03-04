import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Bookmark from "./Bookmark";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default MainRoute;
