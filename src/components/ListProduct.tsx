import React from "react";
import { useData } from "../hooks/useData";
import { Product } from "./Product";
import styled from "styled-components";
import { Ring } from "@uiball/loaders";
import { Link } from "react-router-dom";

type Props = {
  isManagment: boolean;
};

export const ListProduct = ({ isManagment }: Props) => {
  const { data, loading } = useData();

  return (
    <>
      {loading ? (
        <Ring size={56} color="#fff" />
      ) : (
        <div>
          {isManagment ? (
            <GridContainer>
              {data.map((product) => (
                <Link to={'/edit/id/'+ product.id}>
                  <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    marca={product.marca}
                    stock={product.stock}
                    description={product.description}
                  />
                </Link>
              ))}
            </GridContainer>
          ) : (
            <GridContainer>
              {data.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  marca={product.marca}
                  stock={product.stock}
                  description={product.description}
                />
              ))}
            </GridContainer>
          )}
        </div>
      )}
    </>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 5px;
  width: 90vw;
  margin-bottom: 20px;
`;
