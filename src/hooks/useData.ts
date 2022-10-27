import React, {useState, useEffect} from "react";
import { ProductType } from "../types/Product";

export const useData = () =>{

    const [data, setData] = useState<Array<ProductType>>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://express-production.up.railway.app/product/all"/**usa tu url*/, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((result) =>  {
            setData(result)
            setLoading(false)
          })
          .catch((error) => console.log("error", error));
      }, []);

    return {data, loading}  
}
