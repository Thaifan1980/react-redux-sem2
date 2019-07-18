import React from "react";

import PropTypes from "prop-types";

import "./Container.scss";

const Container = props => {
  // console.log(props.children);
  return <div className="container">{props.children}</div>;
};

Container.propTypes = {
  children: PropTypes.any
};

export default Container;
