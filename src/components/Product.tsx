import styled from "styled-components";
import { ProductType } from "../types/Product";
import { HiX } from "react-icons/hi";
import { deleteProduct } from "../services/deleteProduct";
import { useNavigate } from "react-router-dom";
type Props = ProductType & {
  isManagment: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<number>>;
};

export const Product = ({
  id,
  name,
  marca,
  stock,
  description,
  isManagment,
  precio,
  setRefresh,
}: Props) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    deleteProduct(id).then(() => setRefresh((prev) => prev + 1));
  };

  return (
    <ProductContainer
      onClick={() => {
        if (isManagment) navigate("/edit/id/" + id);
      }}
    >
      <CardHeader>
        {isManagment ? (
          <DeleteButton
            size={15}
            cursor="pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
          />
        ) : (
          <></>
        )}
        <Marca>{marca}</Marca>
        <Name>{name}</Name>
      </CardHeader>
      <Description>
        <Precio>
          <h3>${precio}</h3>
        </Precio>
        <p>{description}</p>
      </Description>
      {stock ? <Stock>En stock: {stock}</Stock> : <Stock>Sin stock</Stock>}
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  color: #000;
  height: 300px;
  width: 200px;
  cursor: pointer;
  transition: transform 0.3s;
  border-radius: 10px;
  box-shadow: 1px 1px 0.5px 0px rgba(0, 0, 0, 0.1);
  :hover {
    transform: scale(1.003);
  }
`;

const CardHeader = styled.div`
  position: relative;
  display: block;
  height: 50%;
  border-bottom: 1px solid gray;
  width: auto;
  text-align: center;
`;

const Marca = styled.div`
  margin: 20px 25px;
  position: absolute;
  right: 0;
  top: 0;
`;

const Name = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 26px;
  font-weight: 500;
  text-align: center;
  margin: 5px;
`;

const Description = styled.div`
  font-size: 12px;
  padding: 10px;
`;

const Stock = styled.span`
  font-size: 12px;
  position: absolute;
  padding: 4px 10px;
  left: 0;
  bottom: 0;
  margin: 5px;
  background-color: #000;
  color: #fff;
  border-radius: 20px;
`;

const DeleteButton = styled(HiX)`
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  background: none;
  margin: 5px;
  border: none;
  outline: none;
  transition: color 500ms;

  :hover {
    color: red;
  }
`;

const Precio = styled.div`
  font-size: 18px;
  margin: 5px 0;
`;
