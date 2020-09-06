import React from "react";
import PropTypes from "prop-types";

const TestimonyItem = ({ avatar, name, comment }) => (
  <div class="testimony__item">
    <img src={avatar} alt={name} class="testimony__item-profile" />
    <h1 class="testimony__item-heading heading">{name}</h1>
    <p class="testimony__item-text">{comment}</p>
  </div>
);

TestimonyItem.propTypes = {
  avatar: PropTypes.elementType,
  name: PropTypes.string,
  comment: PropTypes.string
};

export default TestimonyItem;
