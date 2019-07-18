import { connect } from "react-redux";

import NavbarCartComponent from "../components/NavBar/CartComponent/CartComponent";

const mapStateToProps = state => ({
  cart: state.cart.items,
  totalCost: state.cart.totalCost,
  quantity: state.cart.quantity
});

const NavbarCartContainer = connect(mapStateToProps)(NavbarCartComponent);

export default NavbarCartContainer;
