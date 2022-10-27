import React, { useState } from "react";
import styled from "styled-components";
import { ListProduct } from "../components/ListProduct";
import { MdOutlineEditOff, MdOutlineEdit } from 'react-icons/md';

export const ViewProducts = () => {

  const [isEdit, setIsEdit] = useState(false)

  const handleChangeEdit = () =>{
    setIsEdit(prev => !prev)
  }
  

  return (
    <ContentContainer>
      <Button onClick={handleChangeEdit}>{isEdit? <MdOutlineEdit size={32}/> : <MdOutlineEditOff size={32}/>}</Button>
      <h1><strong> Products </strong></h1>
      <Container>
        <ListProduct isManagment={isEdit}/>
      </Container>
    </ContentContainer>
  );
};

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const ContentContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;
position: relative;
flex-direction: column;
`

const Button = styled.button`
margin:10px;
position: absolute;
right: 0;
top: 0;
border-radius: 50%;
border:none; 
height: 50px;
width: 50px;
background-color: ${props=> props.color};
cursor: pointer;
`