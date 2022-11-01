import { useEffect, useState } from "react";
import { ProductType } from "../types/Product";

export const useGetProduct = (id : number) =>  {

    const [product, setProduct] = useState<ProductType>({id :id ,name:'',marca:'', stock:0, description:'', precio:0})

    useEffect(()=> {
        fetch(`https://express-production.up.railway.app/product/${id}`).
        then(res => res.json()).
        then((res : ProductType) => setProduct(res))
    },[])

    return {product}

}