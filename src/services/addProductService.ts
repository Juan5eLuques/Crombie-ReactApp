import { AddProductType } from "../types/Product";

export const addProductService = (product: AddProductType) => {
  fetch("https://express-production.up.railway.app/product/add", {
    method: "POST",
    body: JSON.stringify(product),
    headers: { "Content-type": "application/json" },
  }).then(res => res.json).then(res => console.log(res))
};
