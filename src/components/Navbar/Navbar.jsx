import s from "./style.module.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Pricing", href: "/pricing" },
    { id: 3, title: "Contact", href: "/contact" },
  ];
  return (
    <nav>
      <div className="container">
        <div className={s.wrapper}>
          <Link to={"/"}>
            <img src="/Logo.svg" alt="logo" />
          </Link>

          <div className={s.links}>
            {navLinks.map((link) => (
              <Link key={link.id} className={s.link} to={link.href}>
                {link.title}
              </Link>
            ))}
          </div>

          <button className={s.button}>Contact</button>
        </div>
      </div>
    </nav>
  );
}
