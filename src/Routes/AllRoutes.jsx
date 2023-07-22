import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProductPage } from "../Pages/ProductPage";
import { SingleProductPage } from "../Pages/SingleProductPage";
import { Error } from "../Pages/Error";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route index element={<ProductPage></ProductPage>} />
        <Route
          path=":productId"
          element={<SingleProductPage></SingleProductPage>}
        />
        <Route path="*" element={<Error></Error>} />
      </Routes>
    </div>
  );
};
