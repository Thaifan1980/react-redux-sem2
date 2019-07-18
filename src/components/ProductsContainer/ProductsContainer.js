import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import ProductsReduxService from "../../services/product.redux.service";

import "./ProductsContainer.scss";

const ProductsContainer = ({
  products,
  category,
  name,
  manufacture,
  amount
}) => {
  const filtredProducts = ProductsReduxService.getFiltredProducts({
    products,
    category,
    name,
    manufacture,
    amount
  });

  return (
    <div className="products">
      {filtredProducts.map(product => (
        <div className="product" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <p>${product.amount}</p>
            <h3>{product.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

ProductsContainer.propTypes = {
  product: PropTypes.any,
  category: PropTypes.string,
  name: PropTypes.string,
  manufacture: PropTypes.string,
  amount: PropTypes.string
};

export default ProductsContainer;
