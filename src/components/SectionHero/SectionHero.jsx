import React from "react";
import s from "./style.module.scss";

export default function SectionHero({ title, text, btn }) {
  return (
    <div className={s.main}>
      <h1 className={s.pricingTitle}>{title}</h1>
      <p className={s.text}>{text}</p>
      {btn && <button className={s.btn}>{btn}</button>}
    </div>
  );
}
