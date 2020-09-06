import React from "react";
import PropTypes from "prop-types";

const FeaturesItem = ({ num, heading, text }) => (
  <section class="features__item">
    <div class="features__item-header">
      <div class="features__item-header-number bg-br">
        <h1>01</h1>
      </div>
      <div class="features__item-header-title">
        <h1 class="heading">Track company-wide progress</h1>
      </div>
    </div>
    <div class="features__item-text">
      <p>
        See how your day-to-day tasks fit into the wider vision. Go from
        tracking progress at the milestone level all the way done to the
        smallest of details. Never lose sight of the bigger picture again.
      </p>
    </div>
  </section>
);

FeaturesItem.propTypes = {
  num: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string
};

export default FeaturesItem;
