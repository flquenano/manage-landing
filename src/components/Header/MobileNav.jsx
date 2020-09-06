import React from "react";
import PropTypes from "prop-types";
import "./mobileNav.scss";

import { ReactComponent as Close } from "assets/svg/icon-close.svg";
const MobileNav = ({ toggleNav }) => (
  <div className="mobile-nav">
    <Close className="mobile-nav__close" onClick={toggleNav} />
    <ul className="mobile-nav__list">
      <li className="mobile-nav__item heading">Pricing</li>
      <li className="mobile-nav__item heading">Product</li>
      <li className="mobile-nav__item heading">About Us</li>
      <li className="mobile-nav__item heading">Careers</li>
      <li className="mobile-nav__item heading">Community</li>
    </ul>
  </div>
);

MobileNav.propTypes = {
  toggleNav: PropTypes.func
};

export default MobileNav;
