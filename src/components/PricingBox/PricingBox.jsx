import s from "./style.module.scss";
import React from "react";

export const PricingBox = () => {
  const pricing = [
    { id: 1, month: "1 month", price: "9.99$" },
    { id: 2, month: "12 month", price: "99.99$" },
    { id: 3, month: "24 month", price: "199.99$" },
  ];
  return (
    <div className={s.pricing}>
      <h2>Sign up to be the first to receive matches.</h2>

      {pricing.map((item) => (
        <div key={item.id} className={s.option}>
          <div>{item.month}</div>
          <div>{item.price}</div>
        </div>
      ))}

      <button className={s.btnPurchase}>Purchase now</button>
    </div>
  );
};
