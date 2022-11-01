import { ProductType } from "../types/Product";
import { keywordContains } from "./keywordContains";

export const filterData = (keyword : string, products : ProductType[]) => {
    const productsFilter = products.filter(prod => keywordContains(prod.name,keyword))
    return {productsFilter}
}