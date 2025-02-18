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

export { getBestProducts, getAllProducts };
