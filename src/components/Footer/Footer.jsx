import s from "./style.module.scss";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className={s.container}>
        <div className={s.column}>
          <h4 className={s.heading}>Gitpod</h4>
          <ul className={s.list}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Changelog</a>
            </li>
            <li>
              <a href="#">Self-Hosted</a>
            </li>
            <li>
              <a href="#">Gitpod vs GitHub Codespaces</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
          </ul>
        </div>

        <div className={s.column}>
          <h4 className={s.heading}>Developer</h4>
          <ul className={s.list}>
            <li>
              <a href="#">Getting started</a>
            </li>
            <li>
              <a href="#">Screencasts</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Report a bug</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </div>

        <div className={s.column}>
          <h4 className={s.heading}>Company</h4>
          <ul className={s.list}>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Media Kit</a>
            </li>
          </ul>
        </div>

        <div className={s.column}>
          <h4 className={s.heading}>Legal</h4>
          <ul className={s.list}>
            <li>
              <a href="#">Imprint</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className={s.logos}>
          <div className={s.end}>
            <img src="FooterLogo.svg" alt="FooterLogo" />
            Copyright © 2021 Gitpod
          </div>
          <img src="Logos.png" alt="logos" />
        </div>
      </div>
    </footer>
  );
}
