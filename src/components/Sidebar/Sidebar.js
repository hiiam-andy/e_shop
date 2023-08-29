import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Sidebar({ amount }) {
  const { list } = useSelector(({ categories }) => categories);
  const cat = list.filter((_, i) => i < amount);
  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>Categories</div>
      <nav>
        <ul className={styles.menu}>
          {cat.map((name) => {
            return (
              <li key={name}>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.link} ${isActive && styles.active}`
                  }
                  to={`/products/category/${name}`}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={styles.footer}>
        <a href="/help" className={styles.link}>
          help
        </a>

        <a
          href="/terms"
          className={styles.link}
          style={{ textDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  );
}
