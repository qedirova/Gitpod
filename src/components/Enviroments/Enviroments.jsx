import s from "./style.module.scss";
import React from "react";

export default function Enviroments() {
  return (
    <div className="container">
      <div className={s.wrapper}>
        <div className={s.content}>
          <h1>Think CI/CD for dev environments</h1>
          <p>
            We invented prebuilds so application code, configuration and
            infrastructure can all be stored as machine-executable code in your
            git repositories and applied to dev environments automatically and
            continuously.
          </p>
          <div className={s.btn}>
            <button className={s.btn1}>More on prebuilds</button>
            <button className={s.btn2}>Documentation</button>
          </div>
        </div>
        <img src="/Environment.jpg" alt="environment" className={s.img} />
      </div>
    </div>
  );
}
