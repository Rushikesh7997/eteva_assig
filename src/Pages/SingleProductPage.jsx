import React from "react";
import { useParams } from "react-router-dom";
import { productList } from "../Data/db";

export const SingleProductPage = () => {
  const { id } = useParams();
  const product = productList.find((product) => product.id === id);
  const { image, quantity, name } = product;
  return (
    <div>
      <img src={image} alt="" />
      <p>{name}</p>
      <p>{quantity}</p>
    </div>
  );
};
