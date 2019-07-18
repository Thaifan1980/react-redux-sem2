import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import Container from "../Container/Container";

import ProductsService from "../../services/product.service";

import "./ProductDetailsPage.scss";
import HeaderSmall from "../Headers/HeadeSmall";
import HeaderBig from "../Headers/HeaderBig";

const ProductDetailsPage = props => {
  const productId = props.match.params.id;
  const product = ProductsService.getProductById(productId);

  const handleAddToCart = () => {
    props.addToCart(product);
    // console.log("Add to cart");
  };

  if (!product) {
    return <Redirect to="/catalog" />;
  }

  return (
    <Container>
      <HeaderBig>Product detail</HeaderBig>

      <div className="product-details">
        <button
          type="button"
          className="btn back-button"
          onClick={props.history.goBack}
        >
          Back to products
        </button>

        <img src={product.image} alt={product.name} />
        <HeaderSmall>{product.name}</HeaderSmall>
        <p>${product.amount}</p>
        <button type="button" className="btn" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </Container>
  );
};

ProductDetailsPage.propTypes = {
  match: PropTypes.object
};

export default ProductDetailsPage;
