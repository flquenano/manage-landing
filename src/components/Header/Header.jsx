import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./header.scss";

import Logo from "assets/svg/logo.svg";
import { ReactComponent as Burger } from "assets/svg/icon-hamburger.svg";

import MobileNav from "./MobileNav.jsx";

const Header = () => {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <header>
      <CSSTransition
        in={navVisible}
        timeout={150}
        classNames="navAnimation"
        unmountOnExit
      >
        <MobileNav toggleNav={toggleNav} />
      </CSSTransition>
      <nav className="nav">
        <img src={Logo} alt="Logo" className="nav__logo" />

        <ul className="nav__list-desktop">
          <li className="nav__item">
            <a href="#">Pricing </a>
          </li>
          <li className="nav__item">
            <a href="#">Product </a>
          </li>
          <li className="nav__item">
            <a href="#">About Us </a>
          </li>
          <li className="nav__item">
            <a href="#">Careers </a>
          </li>
          <li className="nav__item">
            <a href="#">Community</a>
          </li>
        </ul>

        <button className="nav__btn btn bg-br">Get Started</button>
        <div className="nav__mobile">
          {navVisible ? undefined : <Burger onClick={toggleNav} />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
