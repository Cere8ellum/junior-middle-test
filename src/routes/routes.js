import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants";
import Home from "../pages/Home/home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route strict path={ROUTES.HOME} element={<Home />} />
    </Routes>
  );
}
