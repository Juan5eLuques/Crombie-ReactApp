export type ProductType = {
    id: number,
    name: string,
    marca: string,
    stock: number,
    precio : number,
    description?: string,
}

export type AddProductType = Omit<ProductType, 'id'>