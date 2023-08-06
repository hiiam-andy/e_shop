import React from "react";
import style from "./Categories.module.css";
import { Link } from "react-router-dom";

export default function Categories({
  title,
  categories = [],
  amount,
  styles = {},
}) {
  const list = categories.filter((_, i) => i < amount);
  return (
    <section className={style.section}>
      <h2>{title}</h2>
      <div className={style.list}>
        {list.map(({ id, name, image }) => (
          <Link to={`/categories/${id}`} key={id} className={style.item}>
            <div
              className={style.image}
              style={{ backgroundImage: `url(${image})` }}
            />
            <h3 className={style.title}>{name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
