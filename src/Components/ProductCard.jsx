import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, name, img, price }) => {
  return (
    <div>
      <div className="product_conatiner">
        <img className="productImage" src={img} alt="product image" />
        <h3 className="productName">{name}</h3>
        <p className="productprice">Price :- ₹ {price}</p>
        <Link to={`/product/${id}`}>
          {" "}
          <span className="button">View Product</span>{" "}
        </Link>
      </div>
    </div>
  );
};
