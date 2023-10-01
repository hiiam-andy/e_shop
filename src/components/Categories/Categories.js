import React from "react";
import style from "./Categories.module.css";
import { Link } from "react-router-dom";
import electronics from "../../images/samsung-galaxy-s20-plus-dxomark-sonucu-cikti-iste-kamera-performansi-660x371.png";
import jewelery from "../../images/jewelery.jpg";
import mens from "../../images/mens.jpg";
import womens from "../../images/womens.jpg";

export default function Categories({ title, products = [], amount }) {
  const list = products.filter((_, i) => i < amount);

  return (
    <section className={style.section}>
      <h2>{title}</h2>
      <div className={style.list}>
        {list.map((name) => {
          let catImage;

          if (name === "electronics") {
            catImage = electronics;
          } else if (name === "jewelery") {
            catImage = jewelery;
          } else if (name === "men's clothing") {
            catImage = mens;
          } else if (name === "women's clothing") {
            catImage = womens;
          }

          return (
            <Link
              to={`/products/category/${name}`}
              key={name}
              className={style.item}
            >
              <div
                className={style.image}
                style={{ backgroundImage: `url(${catImage})` }}
              />
              <h3 className={style.title}>{name}</h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
