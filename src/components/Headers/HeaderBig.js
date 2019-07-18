import React from "react";

import PropTypes from "prop-types";

import "./HeaderBig.scss";

const HeaderBig = ({ children }) => {
  return <h1 className="header-big">{children}</h1>;
};

HeaderBig.propTypes = {
  children: PropTypes.string
};

export default HeaderBig;
