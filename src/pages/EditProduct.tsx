import React from 'react'
import styled from 'styled-components';
import { getProductByID } from '../services/getProductByID';
import { useParams } from 'react-router-dom';
import { Button } from '../style/Button';
import { useGetProduct } from '../hooks/useGetProduct';

export const EditProduct = () => {

const params = useParams()
const {id} = params
const {product, handleChangeMarca,handleChangeName, handleChangeStock, handleChangeDescription,handleSubmitEdit} = useGetProduct(Number(id))

  return (
    <Container>
        <h1> 📝 New product ! </h1>
        <FormContainer>
            <Form onSubmit={(e) => {e.preventDefault() ; handleSubmitEdit(product)}}>
               <InputContainer>
                 <span>Name</span><Input value={product.name} type='text' onChange={(e) => handleChangeName(e.target.value)}/>
               </InputContainer>
               <InputContainer>
               <span>Brand</span><Input value={product.marca} type='text'onChange={(e) => handleChangeMarca(e.target.value)}/>
               </InputContainer>
               <InputContainer>
               <span>Stock</span><Input value={product.stock} type='number'onChange={(e) => handleChangeStock(Number(e.target.value))}/>
               </InputContainer>
               <InputContainer>
               <span>Description</span><TextArea value={product.description} onChange={(e) => handleChangeDescription(e.target.value)}/>
               </InputContainer>
               <Button color='#4ecdc4'>Edit</Button>
            </Form>
        </FormContainer>
    </Container>
  )
}

const Container = styled.div`
font-size:20px;
display: flex;
justify-content: center;
align-items: center;
height: 90vh;
flex-direction: column;
`

const FormContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 90%;
padding: 0 75px 0 75px;
min-width: auto;
border-radius: 20px;
background-color: #f8f9fa;
`

const Form = styled.form`

display: flex;
flex-direction:column;
align-items: center;
justify-content: space-around;
gap:20px;
background-color: #f8f9fa;
border-radius: 10px;
height: 90%;
width: auto;
object-fit: contain;

`
const InputContainer = styled.div`
font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const TextArea = styled.textarea`
    margin: 5px;
    border: none;
    overflow: auto;
    outline: none;
    height: 70px;
    font-family: 'Courier New', Courier, monospace;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    width: 250px;
    background-color: #fff;
    border-radius: 10px;
    font-size: 18px;
    padding: 5px 5px;
    resize: none; /*remove the resize handle on the bottom right*/

    :focus{
        border-width: 0.1px;
        border-style: solid;
        border-color: #000;
    }
`

const Input = styled.input`
margin:5px;
padding: 5px;
height: 30px;
font-size: 15px;
width: 300px;
outline: none;
box-shadow: none;
border-radius: 5px;
border: 1px solid #d3d3d3;
:focus{
    border: 1px solid #000;
}
`