import React, { useEffect } from "react";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../Categories/Categories";
import { filterByPrice } from "../../features/products/productsSlice";
import Banner from "../Banner/Banner";

export default function Home() {
  const dispatch = useDispatch();
  const {
    products: { list, filtered },
    categories,
  } = useSelector((state) => state);

  useEffect(() => {
    if (!list.length) return;

    dispatch(filterByPrice(100));
  }, [dispatch, list.length]);

  return (
    <>
      <Hero />
      <Products products={list} amount={5} title="Trending" />
      <Categories
        categories={categories.list}
        amount={5}
        title="Worth seeing"
      />
      <Banner />
      <Products products={filtered} amount={5} title="Less than 100$" />
    </>
  );
}
