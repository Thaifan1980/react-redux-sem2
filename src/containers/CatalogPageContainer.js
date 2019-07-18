import { connect } from "react-redux";
import { fetchProducts } from "../actions/productsActions";

import CatalogPage from "../components/Catalog/CatalogPage";

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

const mapDispatchToProps = {
  fetchProducts
};

const CatalogPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogPage);

export default CatalogPageContainer;
