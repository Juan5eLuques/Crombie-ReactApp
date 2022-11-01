import { useState } from "react";
import styled from "styled-components";
import { ListProduct } from "../components/ListProduct";
import { MdOutlineEditOff, MdOutlineEdit } from "react-icons/md";
import { SearchProducts } from "../components/SearchProducts";
import { ProductContextProvider } from "../context/SearchContext";

export const Home = () => {
  const [isEdit, setIsEdit] = useState(false);

  const handleChangeEdit = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <ProductContextProvider>
      <ContentContainer>
        <Button onClick={handleChangeEdit}>
          {isEdit ? (
            <MdOutlineEdit size={28} />
          ) : (
            <MdOutlineEditOff size={28} />
          )}
        </Button>
        <SearchProducts></SearchProducts>
        <Container>
          <ListProduct isEdit={isEdit} />
        </Container>
      </ContentContainer>
    </ProductContextProvider>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  margin: 2.5rem 0;
`;

const Button = styled.button`
  margin: 12px 15px;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 50%;
  border: none;
  height: 40px;
  width: 40px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
