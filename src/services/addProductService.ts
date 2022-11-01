import { AddProductType } from "../types/Product";

export const addProductService = async (product: AddProductType) => {

  await fetch("https://express-production.up.railway.app/product/add", {
    method: "POST",
    body: JSON.stringify(product),
    headers: { "Content-type": "application/json" },
  })
};
