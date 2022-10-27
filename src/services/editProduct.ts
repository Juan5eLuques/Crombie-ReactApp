import React from "react";
import { ProductType } from "../types/Product";

export const editProduct  = (product : ProductType , setEdit : React.Dispatch<React.SetStateAction<boolean>>) => {

  try {
    fetch('https://express-production.up.railway.app/product/edit', {
        method: "PUT",
        body: JSON.stringify(product),
        headers: { "Content-type": "application/json" },
      }).then( () =>setEdit(true))
    }
    catch (err) {
      console.log(err)
    }
}