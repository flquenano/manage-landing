import React from "react";
import "./App.scss";

import Intro from "components/Intro/Intro";
import Header from "components/Header/Header";
import Features from "components/Features/Features";
import Testimony from "components/Testimonies/Testimony";
import CTA from "components/CTA/CTA";
import Footer from "components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Features />
      <Testimony />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
