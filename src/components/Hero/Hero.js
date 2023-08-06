import React from "react";
import style from "./Hero.module.css";

import BG from "../../images/computer.png";

export default function Hero() {
  return (
    <section className={style.home}>
      <div className={style.title}>BIG SALE 20%</div>
      <div className={style.product}>
        <div className={style.text}>
          <div className={style.subtitle}>лучшее в 2023</div>
          <h1 className={style.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
          <button className={style.button}>Shop Now</button>
        </div>
        <div className={style.image}>
          <img src={BG} alt="bg" />
        </div>
      </div>
    </section>
  );
}
