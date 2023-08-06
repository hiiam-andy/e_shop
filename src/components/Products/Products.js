import React from "react";
import { Link } from "react-router-dom";
import style from "./Products.module.css";

export default function Products({
  title,
  products = [],
  amount,
  styles = {},
}) {
  const list = products.filter((_, i) => i < amount);
  return (
    <section className={style.products} styles={styles}>
      {title && <h2>{title}</h2>}
      <div className={style.list}>
        {list.map(({ id, images, title, category: { name: cat }, price }) => (
          <Link to={`/products/${id}`} key={id} className={style.product}>
            <div
              className={style.image}
              style={{ backgroundImage: `url(${images[0]})` }}
            />
            <div className={style.wrapper}>
              <h3 className={style.title}>{title}</h3>
              <div className={style.cat}>{cat}</div>
              <div className={style.info}>
                <div className={style.prices}>
                  <div className={style.price}>{price}P</div>
                  <div className={style.oldPrice}>
                    {Math.floor(price * 0.8)}P
                  </div>
                </div>
                <div className={style.purchases}>
                  {Math.floor(Math.random() / 20 + 1)} покупок
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
