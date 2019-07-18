class ProductsReduxService {
  //   static getProducts() {
  //     return products;
  //   }

  static getFiltredProducts({ products, category, name, manufacture, amount }) {
    let filtredProducts = products;

    // console.log("Filter service", products);

    if (category) {
      filtredProducts = filtredProducts.filter(product =>
        product.category.includes(category)
      );
    }
    if (name) {
      filtredProducts = filtredProducts.filter(product =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (manufacture && manufacture !== "All") {
      filtredProducts = filtredProducts.filter(product =>
        product.manufacture.includes(manufacture)
      );
    }

    if (amount) {
      filtredProducts = filtredProducts.slice(0, amount);
    }

    return filtredProducts;
  }

  static getUniqueManufacture(products) {
    const manufactures = products.map(elem => elem.manufacture);
    return Array.from(new Set(manufactures));
  }

  static getUniqueCategory(products) {
    const category = products.map(elem => elem.category);
    return Array.from(new Set(category));
  }

  static getProductById(products, id) {
    return products.find(product => product.id === id);
  }
}

export default ProductsReduxService;
