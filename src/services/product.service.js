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
export { getBestProducts, getAllProducts, getProduct };
