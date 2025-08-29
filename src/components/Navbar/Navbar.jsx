import React from "react";
import s from "./style.module.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className={s.wrapper}>
          <Link to={"/"}>
            <img src="/Logo.svg" alt="logo" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
