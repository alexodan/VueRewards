import axios from "axios";

const URL = "https://fakestoreapi.com/products";

export function getProducts() {
  return axios
    .get(URL)
    .then(res => res.data)
    .then(products =>
      products.map(p => ({ ...p, price: Math.floor(p.price) }))
    );
}
