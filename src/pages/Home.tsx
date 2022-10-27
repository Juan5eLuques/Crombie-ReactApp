import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ButtonMenu } from '../components/ButtonMenu'

export const Home = () => {
  return (
    <ContainerHome>
      <ContainerMenu>
          <Link to='/view-products'><ButtonMenu title='Ver Productos' color='#ffd60a'></ButtonMenu></Link>
          <Link to='/product-managment'><ButtonMenu title='Editar Productos' color='#6a994e'></ButtonMenu></Link>
          <Link to='/add-product'><ButtonMenu title='Agregar Producto' color='#0077b6'></ButtonMenu></Link>
          <Link to='/product-managment'><ButtonMenu title='Eliminar Producto' color='#d62828'></ButtonMenu></Link>
      </ContainerMenu>
    </ContainerHome>
  )
}

const ContainerMenu = styled.div`

display: grid;
align-items: center;
grid-template-columns: repeat(2,1fr);
justify-content: center;
gap: 20px;

`
const ContainerHome = styled.div`
height:90vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`