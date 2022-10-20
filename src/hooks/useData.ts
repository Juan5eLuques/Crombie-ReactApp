import React, {useState, useEffect} from "react";
import { ProductType } from "../types/Product";

export const useData = () =>{

    const [data, setData] = useState<Array<ProductType>>([])

    useEffect(() => {
        fetch("https://express-production.up.railway.app/product"/**usa tu url*/, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((result) => setData(result))
          .catch((error) => console.log("error", error));
      }, []);

    return {data}  
}
