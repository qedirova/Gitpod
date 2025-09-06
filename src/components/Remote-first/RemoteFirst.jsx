import s from "./style.module.scss";
import React from "react";

export default function RemoteFirst() {
  return (
    <div className="container">
      <div className={s.wrapper}>
        <h1>Remote-first. Secure by design.</h1>
        <img className={s.img} src="/RemoteFirst.png" alt="RemoteFirst" />
        <p className={s.paragraph}>
          You no longer need an over-powered laptop to code, Gitpod works just
          as smoothly on a Chromebook or iPad. All you need is a browser. Gitpod
          centralizes all source code and never stores it on insecure machines
          and networks.
        </p>
        <div className={s.icons}>
          <img src="/Chrome.png" alt="Chrome" />
          <img src="/FireFox.png" alt="FireFox" />
        </div>
      </div>
    </div>
  );
}
