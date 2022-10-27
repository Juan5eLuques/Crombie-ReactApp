import { ProductType } from "../types/Product";

export const editProduct = (product : ProductType) => {

  try {
    fetch('https://express-production.up.railway.app/product/edit', {
        method: "PUT",
        body: JSON.stringify(product),
        headers: { "Content-type": "application/json" },
      }).then(res => res.json)
    }
    catch (err) {
      console.log(err)
    }
}