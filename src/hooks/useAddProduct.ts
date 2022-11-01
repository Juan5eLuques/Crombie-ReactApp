import { AddProductType } from "../types/Product"
import {useState} from 'react'
import { addProductService } from "../services/addProductService"

export const useAddProduct = () => {
const [data, setData] = useState<AddProductType>({name:'',marca:'', stock:0, precio:0})

const handleChangeName = ( name: string ) => {
    setData({...data,name:name})
}

const handleChangeMarca = ( marca: string ) => {
    setData({...data,marca:marca})
}

const handleChangeStock = ( stock: number ) => {
    setData({...data,stock:stock})
}

const handleChangeDescription = (description : string) => {
    setData({...data,description:description})
} 

const handleChangePrice = (precio : number) => {
    setData({...data, precio : precio})
}


const addProduct = async () => {
    await addProductService(data)
}

return {data, handleChangeMarca,handleChangeName, handleChangeStock, handleChangeDescription,handleChangePrice,addProduct}
}