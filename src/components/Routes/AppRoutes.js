import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import { ROUTES } from "../../utils/routes";
import Product from "../Products/Product";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<Product />} />
    </Routes>
  );
}
