import { connect } from "react-redux";

import ProductDetailsPage from "../components/ProductDetailsPage/ProductDetailsPage";
import { addToCart } from "../actions/cartActions";

const mapStateToProps = state => ({
  cart: state.cart.items
});

const mapDispatchToProps = {
  addToCart
};

const ProductDetailsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailsPage);

export default ProductDetailsPageContainer;
