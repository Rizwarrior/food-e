import React from "react";
import styles from "./footer.css";

import { NikeCard } from "../nikeCard";
const data2 = [
  {
    smalltext: "plan -1",
    mediumtext: "wasd",
    price: "Rs 5000",
  },
  {
    smalltext: "plan -2",
    mediumtext: "defg",
    price: "Rs 5000",
  },
  {
    smalltext: "plan -2",
    mediumtext: "defg",
    price: "Rs 5000",
  },
  {
    smalltext: "plan -2",
    mediumtext: "defg",
    price: "Rs 5000",
  },
];
const Footer = () => {
  return (
    <div>
      <body>
        <section>
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </section>
      </body>
    </div>
  );
};

export default Footer;
