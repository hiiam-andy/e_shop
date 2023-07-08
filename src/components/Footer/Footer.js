import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import styles from "../../styles/Footer.module.css";

import logo from "../../images/logo.svg";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className={styles.rights}>
        Dev by <a href="https://github.com/hiiam-andy">Me</a>
      </div>

      <div className={styles.socials}>
        <a href="https://youtube.com">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>

        <a href="https://facebook.com">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>

        <a href="https://instagram.com">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>
      </div>
    </section>
  );
}
