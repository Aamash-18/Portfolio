import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>aamashansari446@gmail.com@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/Aamash-07" target="blank">
            <img className="imgg" src={Github} alt="" />
          </a>
          <a href="https://www.instagram.com/aamash_0007/" target="blank">
            <img className="imgg" src={Instagram} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/aamash-ansari-788a79241/"
            target="blank"
          >
            <img className="imgg" src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
