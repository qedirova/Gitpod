import React from "react";
import s from "./style.module.scss";

export default function ContactForm() {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <form className={s.form}>
          <div className={s.inputWrapper}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" />
          </div>

          <div className={s.inputWrapper}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" />
          </div>

          <div className={s.inputWrapper}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>

          <div className={s.inputWrapper}>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" />
          </div>

          <div className={`${s.inputWrapper} ${s.messageInputWrapper}`}>
            <label htmlFor="message">Message</label>
            <input className={s.messageInput} type="text" id="message" />
          </div>

          <button className={s.btn}>Send</button>
        </form>
      </div>
    </div>
  );
}
