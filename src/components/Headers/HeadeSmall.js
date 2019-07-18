import React from "react";

import PropTypes from "prop-types";

import "./HeaderSmall.scss";

const HeaderSmall = ({ children }) => {
  return <h2 className="header-small">{children}</h2>;
};

HeaderSmall.propTypes = {
  children: PropTypes.string
};

export default HeaderSmall;
