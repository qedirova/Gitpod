import React from "react";
import s from "./style.module.scss";
import { PricingBox } from "../../components/PricingBox/PricingBox";

export default function Pricing() {
  return (
    <div>
      <div className={s.main}>
        <h1 className={s.pricingTitle}>Pricing</h1>
        <p className={s.text}>Get more Gitpod, pay less.</p>
        <button className={s.btn}>Try now</button>
      </div>
      <PricingBox />
    </div>
  );
}
