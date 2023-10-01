import React, { useState } from "react";

import styles from "./ProductCard.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

export default function ProductCard({ image, description, title, price }) {
  const sizes = ["big", "normal", "small"];
  const [currentSize, setCurrentSize] = useState();

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>{price} $</div>
        <div className={styles.color}>
          <span>Color: </span>Green
        </div>
        <div className={styles.sizes}>
          <span>Sizes: </span>
          <ul className={styles.list}>
            {sizes.map((size) => {
              return (
                <li
                  onClick={() => {
                    setCurrentSize(size);
                  }}
                  key={size}
                  className={`${styles.size} ${
                    currentSize === size && styles.active
                  }`}
                >
                  {size}
                </li>
              );
            })}
          </ul>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <button className={styles.add} disabled={!currentSize}>
            Add to cart
          </button>
          <button className={styles.favourite}>Add to favorites</button>
        </div>
        <div className={styles.bottom}>
          <div className={styles.purchase}>20 people purchases</div>
          <NavLink to={ROUTES.HOME}>Return to store</NavLink>
        </div>
      </div>
    </section>
  );
}
