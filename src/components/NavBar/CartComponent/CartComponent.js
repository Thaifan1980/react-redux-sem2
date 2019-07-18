import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faDonate } from "@fortawesome/free-solid-svg-icons";

import "./CartComponent.scss";

const NavbarCartComponent = ({ quantity, totalCost }) => {
  return (
    <div className="nav-cart-component">
      <div className="cart-info">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="padding-1">{quantity} items</span>
      </div>
      <div className="cart-info">
        <FontAwesomeIcon icon={faDonate} />
        <span className="padding-1">{totalCost.toFixed(2)} $</span>
      </div>
    </div>
  );
};

export default NavbarCartComponent;
