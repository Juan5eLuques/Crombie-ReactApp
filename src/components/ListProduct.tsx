import React from 'react'
import { useData } from '../hooks/useData'
import { Product } from './Product'
import styled from 'styled-components'

export const ListProduct = () => {

const {data} = useData() 

  return (
    <GridContainer>
        {
            data.map(product => 
            <Product 
            key={product.id}
            id={product.id} 
            name={product.name} 
            marca={product.marca} 
            stock={product.stock}></Product>)
        }
    </GridContainer>
  )
}

const GridContainer = styled.div`

display: grid;
grid-template-columns: repeat(4,1fr);
gap:30px;
padding: 10px;
background-color: #f8f9fa;
border-radius: 5px;
width: 1100px;
`