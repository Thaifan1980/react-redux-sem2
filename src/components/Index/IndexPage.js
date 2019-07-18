import React, { useEffect } from "react";

import ProductsServiceRedux from "../../services/product.redux.service";

import Container from "../Container/Container";
import ProductsContainer from "../ProductsContainer/ProductsContainer";
import HeaderBig from "../Headers/HeaderBig";
import HeaderSmall from "../Headers/HeadeSmall";

const IndexPage = ({ fetchProducts, products, loading, error }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const categories = ProductsServiceRedux.getUniqueCategory(products);

  if (error)
    return (
      <Container>
        <HeaderBig>Welcome to our store</HeaderBig>
        <div>Error! {error.message}</div>
      </Container>
    );

  if (loading)
    return (
      <Container>
        <HeaderBig>Welcome to our store</HeaderBig>
        <div>Loading, some spinner...</div>
      </Container>
    );

  return (
    <Container>
      <HeaderBig>Welcome to our store</HeaderBig>
      {categories.map(category => (
        <div key={category}>
          <HeaderSmall>{category}</HeaderSmall>
          <ProductsContainer
            products={products}
            category={category}
            amount={"4"}
          />
        </div>
      ))}
    </Container>
  );
};

export default IndexPage;
