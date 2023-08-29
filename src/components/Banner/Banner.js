import React from "react";
import styles from "../Home/Home.module.css";

import BannerImage from "../../images/banner.png";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.left}>
        <p className={styles.content}>
          NEW YEAR<span>SALE</span>
        </p>
        <button className={styles.more}>see more</button>
      </div>
      <div className={styles.right}>
        <img
          src={BannerImage}
          alt="woomen"
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            objectPosition: "center",
          }}
        />
        <p className={styles.discount}>
          save up to <span>50%</span> off
        </p>
      </div>
    </section>
  );
}
