import React from "react";
import { ProductType } from "../types/Product";

export const editProduct = async (product: ProductType) => {
  try {
    await fetch("https://express-production.up.railway.app/product/edit", {
      method: "PUT",
      body: JSON.stringify(product),
      headers: { "Content-type": "application/json" },
    });
    return "ok";
  } catch (err) {
    console.log(err);
    return err;
  }
};
