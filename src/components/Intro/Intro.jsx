import React from "react";
import "./intro.scss";

import Illustration from "assets/svg/illustration-intro.svg";

const Intro = () => (
  <section className="intro">
    <div className="intro__content">
      <h1 className="intro__content-heading heading">
        Bring everyone together to build better products.
      </h1>
      <p className="intro__content-text">
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the larger team goals in view.
      </p>
      <button className="btn bg-br">Get Started</button>
    </div>
    <img src={Illustration} alt="Illustration Intro" className="intro__image" />
  </section>
);

export default Intro;
