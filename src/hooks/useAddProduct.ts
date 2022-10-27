import { AddProductType } from "../types/Product"
import {useState} from 'react'
import { addProductService } from "../services/addProductService"

export const useAddProduct = () => {
const [data, setData] = useState<AddProductType>({name:'',marca:'', stock:0})

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

const addProduct = () => {
    addProductService(data);
    setData({name:'',marca:'', stock:0, description:''})
}

return {data, handleChangeMarca,handleChangeName, handleChangeStock, handleChangeDescription,addProduct}
}