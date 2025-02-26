import axios from "axios";

const getAllProducts = () => {
  const products = axios
    .get("https://fakestoreapi.com/products")
    .then((response) => response.data)
    .catch((err) => console.log(err));

  return products;
};

const getBestProducts = async () => {
  const products = await getAllProducts();
  const minRate = 4;
  return products.filter((product) => {
    return product.rating.rate >= minRate;
  });
};

const getProduct = async (id) => {
  const products = await fetch(`https://fakestoreapi.com/products/${id}`).then((response) => response.json());
  return products;
};
const getProductByCategory = async (category) => {
  let categoryParams = "";
  if (category === "men's-clothing") {
    categoryParams = "men's%20clothing";
  } else if (category === "women's-clothing") {
    categoryParams = "women's%20clothing";
  } else {
    categoryParams = category;
  }

  const products = await fetch(`https://fakestoreapi.com/products/category/${categoryParams}`).then((response) => response.json());
  return products;
};

const searchProduct = async (query) => {
  const products = await getAllProducts();
  return products.filter((product) => {
    return product.title.toLowerCase().includes(query.toLowerCase());
  });
};
export { getBestProducts, getAllProducts, getProduct, getProductByCategory, searchProduct };
