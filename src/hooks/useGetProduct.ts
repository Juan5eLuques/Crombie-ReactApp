import { useEffect, useState } from "react";
import { editProduct } from "../services/editProduct";
import { ProductType } from "../types/Product";

export const useGetProduct = (id : number) =>  {

    const [product, setProduct] = useState<ProductType>({id:id ,name:'',marca:'', stock:0, description:''})

    const handleChangeName = ( name: string ) => {
        setProduct({...product,name:name})
    }
    
    const handleChangeMarca = ( marca: string ) => {
        setProduct({...product,marca:marca})
    }
    
    const handleChangeStock = ( stock: number ) => {
        setProduct({...product,stock:stock})
    }
    
    const handleChangeDescription = (description : string) => {
        setProduct({...product,description:description})
    } 

    const handleSubmitEdit = (product : ProductType) => {
        editProduct(product)
    }

    useEffect(()=> {
        fetch(`https://express-production.up.railway.app/product/${id}`).
        then(res => res.json()).
        then((res : ProductType) => setProduct(res))
    },[])

    return {product, handleChangeMarca,handleChangeName, handleChangeStock, handleChangeDescription,handleSubmitEdit}

}