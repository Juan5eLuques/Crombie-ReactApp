import { useState, useEffect } from "react";
import { filterData } from "../utils/filterData";
import useProduct from "../context/SearchContext";

export const useData = () => {
  
  const { product, setProduct , search} = useProduct()
  const [loading, setLoading] = useState(true);
  const [refreshData, setRefreshData] = useState(0);

  useEffect(() => {
    fetch(
      "https://express-production.up.railway.app/product/all" /**usa tu url*/,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        const keywordToUse = search || ''
        const {productsFilter} = filterData(keywordToUse,result)
        setProduct(productsFilter);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, [refreshData, search]);


  return { product, loading, setRefreshData};
};
