import React from "react";
import { productList } from "../Data/db";
import { ProductCard } from "../Components/ProductCard";
import { Header } from "../Components/Header";

export const ProductPage = () => {
  return (
    <div>
      <Header></Header>
      <div className="container_product">
        {productList.map((data, key) => {
          return (
            <div key={key}>
              <ProductCard
                key={key}
                id={data.id}
                name={data.name}
                img={data.image}
                price={data.price}
                quantity={data.quantity}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
