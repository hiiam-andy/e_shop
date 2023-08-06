import React from "react";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import { useSelector } from "react-redux";
import Categories from "../Categories/Categories";

export default function Home() {
  const { products, categories } = useSelector((state) => state);

  return (
    <>
      <Hero />
      <Products products={products.list} amount={5} title="Trending" />
      <Categories
        categories={categories.list}
        amount={5}
        title="Worth seeing"
      />
    </>
  );
}
