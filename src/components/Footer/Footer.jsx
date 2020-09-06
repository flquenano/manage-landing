import React from "react";
import "./footer.scss";

import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { ReactComponent as Facebook } from "assets/svg/icon-facebook.svg";
import { ReactComponent as Youtube } from "assets/svg/icon-youtube.svg";
import { ReactComponent as Twitter } from "assets/svg/icon-twitter.svg";
import { ReactComponent as Pinterest } from "assets/svg/icon-pinterest.svg";
import { ReactComponent as Instagram } from "assets/svg/icon-instagram.svg";

import Subscribe from "./FooterSubscribe.jsx";

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="footer__icons">
        <Logo className="footer__icons-logo" />
        <div className="footer__icons-sns">
          <Facebook />
          <Youtube />
          <Twitter />
          <Pinterest />
          <Instagram />
        </div>
        <p className="mobile-copyright">Copyright 2020. All Rights Reserved</p>
      </div>

      <div className="footer__nav">
        <ul className="footer__nav-left">
          <li>Home</li>
          <li>Pricing</li>
          <li>Products</li>
          <li>About Us</li>
        </ul>
        <ul className="footer-nav__right">
          <li>Careers</li>
          <li>Community</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="footer__subscribe">
        {/* <form action="POST" className="footer__subscribe-form js-form">
          <input
            type="text"
            aria-label="subscribe-email"
            placeholder="Updates in your inbox…"
            className="footer__subscribe-form-txtbox footer__subscribe-form-txtbox-warning"
          />
          <button className="footer__subscribe-form-btn btn bg-br">Go</button>
          <p className="footer__subscribe-form-warning">
            Please insert a valid email
          </p>
        </form> */}
        <Subscribe />
        <div className="desktop-copyright">
          <p>Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
