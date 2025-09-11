import s from "./style.module.scss";
import { Link } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navLinks = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Pricing", href: "/pricing" },
    { id: 3, title: "Contact", href: "/contact" },
  ];

  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    window.addEventListener("click", () => {
      setIsNavActive(false);
    });
  }, []);

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

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button className={s.button}>Contact</button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsNavActive(!isNavActive);
              }}
              className={s.menuBtn}
            >
              {isNavActive ? <GrClose size={30} /> : <RiMenuLine size={30} />}
            </button>
          </div>

          <div className={isNavActive ? s.mobileMenu : "hidden"}>
            {navLinks.map((link) => (
              <Link key={link.id} className={s.link} to={link.href}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
