import s from "./style.module.scss";
import React from "react";

export default function Brands() {
  const brands = [
    { id: 1, src: "/gitLab.svg", title: "gitLab" },
    { id: 2, src: "/freeCodeCamp.svg", title: "freeCodeCamp" },
    { id: 3, src: "/Wave.svg", title: "Wave" },
    { id: 4, src: "/Google.svg", title: "Google" },
    { id: 5, src: "/Amazon.svg", title: "Amazon" },
    { id: 6, src: "/Facebook.svg", title: "Facebook" },
    { id: 7, src: "/Uber.svg", title: "Uber" },
    { id: 8, src: "/ChatGpt.svg", title: "ChatGpt" },
    { id: 9, src: "/Intel.svg", title: "Intel" },
    { id: 10, src: "/Theia.svg", title: "Theia" },
    { id: 11, src: "/Code.svg", title: "Code" },
    { id: 12, src: "/4Geeks.svg", title: "4Geeks" },
  ];

  return (
    <div className="container">
      <div className={s.brands}>
        {brands.map((img) => (
          <img src={img.src} alt={img.title} key={img.id} />
        ))}
      </div>
    </div>
  );
}
