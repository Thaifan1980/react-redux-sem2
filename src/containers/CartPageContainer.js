import { connect } from "react-redux";

import CartPage from "../components/Cart/CartPage";
import { removeFromCart } from "../actions/cartActions";

const mapStateToProps = state => ({
  cart: state.cart.items,
  totalCost: state.cart.totalCost,
  quantity: state.cart.quantity
});

const mapDispatchToProps = {
  removeFromCart
};

const CartPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);

export default CartPageContainer;
