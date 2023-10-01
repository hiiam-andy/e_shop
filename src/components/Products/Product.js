import React from "react";
import { useGetProductQuery } from "../../features/api/apiQuery";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function Product() {
  const { id } = useParams();
  const { data } = useGetProductQuery({ id });
  const product = data ?? [];

  return (
    <ProductCard
      image={product.image}
      description={product.description}
      title={product.title}
      price={product.price}
    />
  );
}
