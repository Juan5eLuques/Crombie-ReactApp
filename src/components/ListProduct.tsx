import { useData } from "../hooks/useData";
import { Product } from "./Product";
import styled from "styled-components";
import { Ring } from "@uiball/loaders";
import useProduct from "../context/SearchContext";

type Props = {
  isEdit: boolean;
};

export const ListProduct = ({ isEdit }: Props) => {
  const { product } = useProduct();
  const { loading, setRefreshData } = useData();

  return (
    <>
      {loading ? (
        <Ring size={56} color="#fff" />
      ) : (
        <div>
          <GridContainer>
            {product.length !== 0 ? (
              product.map((product) => (
                <Product
                  precio={product.precio}
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  marca={product.marca}
                  stock={product.stock}
                  description={product.description}
                  isManagment={isEdit}
                  setRefresh={setRefreshData}
                />
              ))
            ) : (
              <MessageNotFoundResults>
                NO SE ENCONTRARON RESULTADOS
              </MessageNotFoundResults>
            )}
          </GridContainer>
        </div>
      )}
    </>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
  row-gap: 40px;
  column-gap: 20px;
  padding: 30px 5px;
  min-height: 75vh;
  align-items: center;
  background-color: transparent;
  border-radius: 5px;
  width: 90vw;
`;

const MessageNotFoundResults = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
`;
