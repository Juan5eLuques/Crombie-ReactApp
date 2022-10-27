export type ProductType = {
    id: number,
    name: string,
    marca: string,
    stock: number,
    description?: string,
}

export type AddProductType = Omit<ProductType, 'id'>