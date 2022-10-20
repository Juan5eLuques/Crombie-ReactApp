import styled from 'styled-components'
import { ProductType } from '../types/Product';



export const Product = ({id, name, marca,stock} : ProductType) => {
    
    return (
      <ProductContainer>
        <CardHeader>
          <Marca>
            <strong>{marca}</strong>
          </Marca>
        </CardHeader>
        <Name>{name}</Name>
        <Description>
          <p>Descripcion...</p>
        </Description>
      </ProductContainer>
    );

}

const ProductContainer = styled.div`
  background-color: #fff;
  display: inline-block;
  color:#000;
  height: 230px;
  width: auto;
  cursor: pointer;
  transition: transform .1s;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  :hover {
    transform: scale(1.002);
  }
`

const CardHeader = styled.div`
position: relative;
display: block;
height: 30px;
width: auto;
text-align: center;
`

const Marca = styled.div`
margin: 20px 25px;
position: absolute;
right: 0;
top: 0;
object-fit: contain;
`

const Name = styled.div`
font-size: 24px;
font-weight: 500;
text-align: center;
margin: 30px;
`

const Description = styled.div`

font-size: 10px;
text-align: center;

`