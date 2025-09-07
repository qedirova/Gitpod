import React from "react";
import s from "./style.module.scss";
import React from "react";

export default function Contact() {
  return (
    <div>
      <div className={s.main}>
        <h1 className={s.contactTitle}>Contact</h1>
        <div className={s.text}>Get in touch with us today!</div>
      </div>
    </div>
  );
}
