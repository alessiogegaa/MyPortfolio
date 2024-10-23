import React from "react";
import "./Footer.css";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-social">
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
        <a href="https://github.com">
          <FaGithub />
        </a>
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
      </div>
      <p>
        © Copyrights <span id="year">{new Date().getFullYear()}</span> All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
