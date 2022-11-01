import React, { useState } from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { HiX } from "react-icons/hi";
import useProduct from "../context/SearchContext";

export const SearchProducts = () => {
  const [keyword, setKeyword] = useState("");
  const { setSearch } = useProduct();

  const handleChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch(keyword);
  };

  const handleClearInput = () => {
    setKeyword("");
    setSearch("");
  };

  return (
    <SearchsContainer>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <div style={{ position: "relative", width: "70%" }}>
          <InputSearch
            value={keyword}
            placeholder="Search product"
            onChange={(e) => handleChangeKeyword(e)}
          ></InputSearch>
          <Button>
            <LogoSearch />
          </Button>
          {keyword ? (
            <ButtonDeleteKeyword onClick={handleClearInput}>
              <HiX size={18} />
            </ButtonDeleteKeyword>
          ) : null}
        </div>
      </Form>
    </SearchsContainer>
  );
};

const SearchsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  margin: 0 100px;
`;

const InputSearch = styled.input`
  width: 100%;
  height: 35px;
  outline: none;
  border-radius: 20px;
  border: none;
  padding-left: 35px;
  font-size: 15px;
`;

const Button = styled.button`
  height: 37px;
  width: 34px;
  position: absolute;
  left: 0;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  :hover {
    color: black;
    caret-color: black;
  }
`;

const LogoSearch = styled(CiSearch)`
  color: #636363;
  font-size: 20px;
  transition: color 500ms;
  :hover {
    color: #000;
  }
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ButtonDeleteKeyword = styled.button`
  height: 37px;
  width: 37px;
  position: absolute;
  right: 0;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;
