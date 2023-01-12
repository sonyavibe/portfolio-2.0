import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Sofya Vibe</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>

          <li>
            <a href="#experience" className="footer__link">Experience</a>
          </li>
        </ul>

        <div className="footer__social">
        <a href="https://www.instagram.com" className="footer__social-link" target="_blank">
        <i class="uil uil-instagram"></i>
      </a>

      <a href="https://telegram.com" className="footer__social-link" target="_blank">
        <i class="uil uil-telegram-alt"></i>
      </a>

      <a href="https://github.com" className="footer__social-link" target="_blank">
        <i class="uil uil-github-alt"></i>
      </a>
        </div>

        <span className="footer__copy">&#169; Sofya Vibe. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer