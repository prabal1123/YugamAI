import React from "react";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          Yugamai
        </div>

        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-copy">
          © 2026 Yugamai. All rights reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;