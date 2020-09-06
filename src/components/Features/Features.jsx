import React from "react";
import "./features.scss";

import Header from "./FeaturesHeader.jsx";
import Feature from "./FeaturesItem.jsx";

const Features = () => {
  const features = [
    {
      num: "01",
      heading: "What’s different about Manage?",
      text:
        "  Manage provides all the functionality your team needs, without thecomplexity. Our software is tailor-made for modern digital productteams."
    },
    {
      num: "02",
      heading: "Advanced built-in reports",
      text:
        "Set internal delivery estimates and track progress towardcompany goals. Our customisable dashboard helps you build outthe reports you need to keep key stakeholders informed."
    },
    {
      num: "03",
      heading: "Everything you need in one place",
      text:
        "Stop jumping from one service to another to communicate, storefiles, track tasks and share documents. Manage offers anall-in-one team productivity solution."
    }
  ];
  return (
    <section className="features">
      <Header />
      <div className="features__content">
        {features.map((feature) => (
          <Feature
            num={feature.num}
            heading={feature.heading}
            text={feature.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
