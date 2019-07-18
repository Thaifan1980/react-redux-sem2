import products from "../products";

class ProductsService {
  static getProducts() {
    return products;
  }

  static getFiltredProducts({ category, name, manufacture, amount }) {
    let filtredProducts = products;

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

  static getUniqueManufacture() {
    const manufactures = products.map(elem => elem.manufacture);
    return Array.from(new Set(manufactures));
  }

  static getUniqueCategory() {
    const category = products.map(elem => elem.category);
    return Array.from(new Set(category));
  }

  static getProductById(id) {
    return products.find(product => product.id === id);
  }
}

export default ProductsService;
