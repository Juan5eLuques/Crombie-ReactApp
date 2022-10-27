import { useState } from "react";
import { ProductType } from "../types/Product";

export const getProductByID = (id : number) =>  {

    const [product, setProduct] = useState<ProductType>()

    fetch(`https://express-production.up.railway.app/product/${id}`).then(res => res.json()).then((res : ProductType) => setProduct(res))

    return {product}

}