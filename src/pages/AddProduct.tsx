import styled from "styled-components";
import { useAddProduct } from "../hooks/useAddProduct";
import { Button } from "../style/Button";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const {
    data,
    handleChangeDescription,
    handleChangeMarca,
    handleChangeName,
    handleChangeStock,
    addProduct,
    handleChangePrice,
  } = useAddProduct();

  const navigate = useNavigate();

  return (
    <Container>
      <h1> 📦 New product </h1>
      <FormContainer>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            addProduct().then(() => navigate("/"));
          }}
        >
          <InputContainer>
            <h4>Name</h4>
            <Input
              value={data.name}
              type="text"
              onChange={(e) => handleChangeName(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <h4>Brand</h4>
            <Input
              value={data.marca}
              type="text"
              onChange={(e) => handleChangeMarca(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <h4>Precio</h4>
            <Input
              value={data.precio}
              type="number"
              onChange={(e) => handleChangePrice(Number(e.target.value))}
            />
          </InputContainer>
          <InputContainer>
            <h4>Stock</h4>
            <Input
              value={data.stock}
              type="number"
              onChange={(e) => handleChangeStock(Number(e.target.value))}
            />
          </InputContainer>
          <InputContainer>
            <h4>Description</h4>
            <TextArea
              value={data.description}
              onChange={(e) => handleChangeDescription(e.target.value)}
            />
          </InputContainer>
          <Button color="#4ecdc4">Add</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  flex-direction: column;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
  margin: 5px;
  padding: 0 75px 0 75px;
  min-width: auto;
  border-radius: 20px;
  background-color: #f8f9fa;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #f8f9fa;
  border-radius: 10px;
  height: 90%;
  width: auto;
  object-fit: contain;
`;
const InputContainer = styled.div`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TextArea = styled.textarea`
  margin: 5px;
  border: none;
  overflow: auto;
  outline: none;
  height: 70px;
  font-family: "Courier New", Courier, monospace;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  width: 250px;
  background-color: #fff;
  border-radius: 10px;
  font-size: 18px;
  padding: 5px 5px;
  resize: none; /*remove the resize handle on the bottom right*/
  border: 1px solid #d3d3d3;
  :focus {
    border-width: 0.1px;
    border-style: solid;
    border-color: #000;
  }
`;

const Input = styled.input`
  margin: 5px;
  padding: 5px;
  height: 30px;
  font-size: 15px;
  width: 300px;
  outline: none;
  box-shadow: none;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  :focus {
    border: 1px solid #000;
  }
`;
