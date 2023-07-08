import React from "react";
import styles from "../../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>Categories</div>
      <nav>
        <ul className={styles.menu}>
          {list.map(({ id, name }) => {
            return (
              <li key={id}>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.active : ""}`
                  }
                  to={`/categories/${id}`}
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
