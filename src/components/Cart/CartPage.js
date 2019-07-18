import React from "react";

import Container from "../Container/Container";

import "./CartPage.scss";
import HeaderBig from "../Headers/HeaderBig";

const CartPage = ({ cart, quantity, totalCost, removeFromCart }) => {
  if (cart.length === 0) {
    return (
      <Container>
        <HeaderBig>Your cart</HeaderBig>
        <h2>Sorry, your cart is empty</h2>
      </Container>
    );
  }

  return (
    <Container>
      <HeaderBig>Your cart</HeaderBig>
      <div className="cart">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Quantity</th>
              <th>Total cost</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(({ id, image, name, amount, quantity }) => (
              <tr className="product" key={id}>
                <td>
                  <img className="img-responsive" src={image} alt={name} />
                </td>
                <td>
                  <span>{name}</span>
                </td>
                <td>
                  <span>{(+amount).toFixed(2)} $</span>
                </td>
                <td>
                  <span>{+quantity} pices</span>
                </td>
                <td>
                  <span>{+quantity * (+amount).toFixed(2)} $</span>
                </td>
                <td>
                  <button onClick={() => removeFromCart(id)}> Usuń </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="3" />

              <td>Total cost</td>
              <td>{totalCost.toFixed(2)} $</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default CartPage;
