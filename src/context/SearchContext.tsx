import React, { useState } from "react";
import { useContext } from "react";
import { ProductType } from "../types/Product";

export type ProductContextType = {
  product: ProductType[];
  search?: string;
  setSearch: React.Dispatch<string>;
  setProduct: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

const useProduct = () => {
  return useContext(ProductContext);
};

export const ProductContext = React.createContext<ProductContextType>({
  product: [],
  setProduct: (product) => product,
  setSearch: (search) => search,
});

export type ProsContextProvider = {
  children: React.ReactNode;
};

export const ProductContextProvider = ({ children }: ProsContextProvider) => {
  const [product, setProduct] = useState<ProductType[]>([]);
  const [search, setSearch] = useState("");

  return (
    <ProductContext.Provider value={{ product, setProduct, setSearch, search }}>
      {children}
    </ProductContext.Provider>
  );
};

export default useProduct;
