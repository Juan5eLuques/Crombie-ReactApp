import styled from 'styled-components'
import { ProductType } from '../types/Product';
import { CiCircleRemove } from 'react-icons/ci'
type Props = ProductType & {isManagment : boolean}

export const Product = ({id,name, marca,stock,description, isManagment} : Props) => {

    return (
          <ProductContainer>
            <CardHeader>
              {isManagment? <DeleteButton size={28} cursor='pointer'/> : <></>}
              <Marca>
                <strong>{marca}</strong>
              </Marca>
            </CardHeader>
            <Name>{name}</Name>
            <Description>
              <p>{description}</p>
            </Description>
            <Stock>En stock: {stock}</Stock>
          </ProductContainer>
    );

}

const ProductContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  color:#000;
  height: 230px;
  width: auto;
  cursor: pointer;
  transition: transform 0.3s;
  border-radius: 10px;
  box-shadow: 1px 1px 0.5px 0px rgba(0, 0, 0, 0.1);
  :hover {
    transform: scale(1.003);
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

const Stock = styled.span`
font-size: 12px;
position: absolute;
left: 0;
bottom: 0;
margin: 10px;

`

const DeleteButton = styled(CiCircleRemove)`
box-sizing: border-box;
position: absolute;
left: 0;
top: 0;
background: none;
padding: 0;
border:none;
outline:none;
transition: color 900ms;

:hover{ 
  color: red;
}
`