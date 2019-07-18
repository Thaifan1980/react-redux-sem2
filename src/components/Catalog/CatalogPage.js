import React, { useEffect, useState } from "react";

import Container from "../Container/Container";

import FilterComponent from "../FilterComponent/FilterComponent";
import ProductsContainer from "../ProductsContainer/ProductsContainer";

import "./CatalogPage.scss";
import HeaderBig from "../Headers/HeaderBig";

const CatalogPage = ({ fetchProducts, products, loading, error }) => {
  const [productName, setProductName] = useState("");
  const [productManufacture, setProductManufacture] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log(products);

  if (error) {
    return (
      <Container>
        <HeaderBig>Catalog</HeaderBig>
        <div>Error! {error.message}</div>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container>
        <HeaderBig>Catalog</HeaderBig>
        <div>Loading, some spinner...</div>
      </Container>
    );
  }

  return (
    <Container>
      <HeaderBig>Catalog</HeaderBig>
      <div className="catalog">
        <div className="column-left">
          <FilterComponent
            onTextInputChange={name => {
              setProductName(name);
            }}
            onRadioButtuonsChange={manufacture => {
              setProductManufacture(manufacture);
            }}
          />
        </div>

        <div className="column-right">
          <ProductsContainer
            products={products}
            name={productName}
            manufacture={productManufacture}
          />
        </div>
      </div>
    </Container>
  );
};

export default CatalogPage;
