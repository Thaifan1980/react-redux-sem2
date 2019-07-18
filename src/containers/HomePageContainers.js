import { connect } from "react-redux";
import { fetchProducts } from "../actions/productsActions";

import IndexPage from "../components/Index/IndexPage";

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

const mapDispatchToProps = {
  fetchProducts
};

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);

export default HomePageContainer;
