import React from "react";
import s from "./style.module.scss";

export default function Pricing() {
  return (
    <div className="container">
      <div className={s.main}>
        <div className={s.text}>
          <h1>Pricing</h1>
          <p>Get more Gitpod, pay less.</p>
        </div>
        <button className={s.btn}>Try now</button>
      </div>
      <div className={s.pricing}>
        <div className={s.card}>
          <h2>Sign up to be the first to receive matches.</h2>

          <div className={s.option}>
            <div>1 month</div>
            <div>9.99$</div>
          </div>
          <div className={s.option}>
            <div>12 month</div>
            <div>99.99$</div>
          </div>
          <div className={s.option}>
            <div>24 month</div>
            <div>199.99$</div>
          </div>

          <button className={s.btnPurchase}>Purchase now</button>
        </div>
      </div>
    </div>
  );
}
